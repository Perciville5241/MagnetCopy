const statusEl = document.getElementById("status");
const picker = document.getElementById("picker");
const list = document.getElementById("list");
const selectAll = document.getElementById("selectAll");
const countEl = document.getElementById("count");
const copyBtn = document.getElementById("copySelected");

function setStatus(text, kind) {
  statusEl.textContent = text;
  statusEl.className = kind || "";
}

function formatBytes(n) {
  if (!Number.isFinite(n) || n <= 0) return "";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let i = 0;
  while (n >= 1024 && i < units.length - 1) { n /= 1024; i++; }
  return `${n.toFixed(i ? 1 : 0)} ${units[i]}`;
}

// Work out a human-readable name, info hash and size for a magnet link.
function describe(link) {
  let params;
  try {
    params = new URLSearchParams(link.href.slice(link.href.indexOf("?") + 1));
  } catch (e) {
    params = new URLSearchParams();
  }

  const xt = params.getAll("xt").find(v => /^urn:bt(ih|mh):/i.test(v)) || params.get("xt") || "";
  const hash = xt.replace(/^urn:[^:]+:/i, "");
  const size = formatBytes(Number(params.get("xl")));

  const name = params.get("dn") || link.title || link.text || (hash ? `Hash ${hash}` : link.href);
  const meta = [size, hash ? hash.slice(0, 12) + (hash.length > 12 ? "..." : "") : ""].filter(Boolean).join("  |  ");

  return { name, meta };
}

async function copyLinks(hrefs) {
  await navigator.clipboard.writeText(hrefs.join("\n"));
}

function selectedHrefs() {
  return Array.from(list.querySelectorAll("input:checked"), cb => cb.value);
}

function refreshSelection() {
  const boxes = list.querySelectorAll("input");
  const n = selectedHrefs().length;
  selectAll.checked = n === boxes.length;
  selectAll.indeterminate = n > 0 && n < boxes.length;
  copyBtn.disabled = n === 0;
  copyBtn.textContent = n === 1 ? "Copy 1 link" : `Copy ${n} links`;
}

function showPicker(links) {
  countEl.textContent = links.length;

  for (const link of links) {
    const { name, meta } = describe(link);

    const li = document.createElement("li");
    const label = document.createElement("label");
    label.title = link.href;

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.value = link.href;
    cb.checked = true;
    cb.addEventListener("change", refreshSelection);

    const text = document.createElement("div");
    const nameEl = document.createElement("div");
    nameEl.className = "name";
    nameEl.textContent = name;
    text.appendChild(nameEl);
    if (meta) {
      const metaEl = document.createElement("div");
      metaEl.className = "meta";
      metaEl.textContent = meta;
      text.appendChild(metaEl);
    }

    label.append(cb, text);
    li.appendChild(label);
    list.appendChild(li);
  }

  selectAll.addEventListener("change", () => {
    for (const cb of list.querySelectorAll("input")) cb.checked = selectAll.checked;
    refreshSelection();
  });

  copyBtn.addEventListener("click", async () => {
    const hrefs = selectedHrefs();
    try {
      await copyLinks(hrefs);
      setStatus(`Copied ${hrefs.length} magnet link${hrefs.length === 1 ? "" : "s"} to the clipboard.`, "ok");
    } catch (err) {
      console.error("Failed to copy:", err);
      setStatus("Failed to copy to the clipboard.", "error");
    }
  });

  setStatus(`Found ${links.length} magnet links. Choose which to copy:`);
  picker.hidden = false;
  refreshSelection();
}

async function init() {
  let links;
  try {
    const [result] = await browser.tabs.executeScript({ file: "/scrape.js" });
    links = result || [];
  } catch (err) {
    console.error("Scan failed:", err);
    setStatus("Can't scan this page (browser pages and the add-on store are off limits).", "error");
    return;
  }

  if (links.length === 0) {
    setStatus("No magnet links found on this page.", "error");
    return;
  }

  if (links.length === 1) {
    const { name } = describe(links[0]);
    try {
      await copyLinks([links[0].href]);
      setStatus(`Copied: ${name}`, "ok");
    } catch (err) {
      console.error("Failed to copy:", err);
      setStatus("Failed to copy to the clipboard.", "error");
    }
    return;
  }

  showPicker(links);
}

init();

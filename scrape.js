// Injected into the active tab. The value of the final expression is
// returned to the popup by browser.tabs.executeScript.
(() => {
  const seen = new Set();
  const links = [];

  for (const a of document.querySelectorAll('a[href^="magnet:" i]')) {
    const href = a.href;
    if (seen.has(href)) continue;
    seen.add(href);
    links.push({
      href,
      text: (a.textContent || "").trim().replace(/\s+/g, " ").slice(0, 200),
      title: (a.title || "").trim()
    });
  }

  return links;
})();

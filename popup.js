document.getElementById("copyMagnet").addEventListener("click", function () {
  chrome.tabs.executeScript({
    code: `
      let magnetLinks = Array.from(document.querySelectorAll('a[href^="magnet:"]'));
      if (magnetLinks.length === 0) {
        alert('No magnet links found on this page.');
      } else {
        navigator.clipboard.writeText(magnetLinks[0].href).then(() => {
          alert(\`Magnet link copied to clipboard: \${magnetLinks[0].href}\`);
        }).catch(err => {
          console.error('Failed to copy:', err);
          alert('Failed to copy magnet link.');
        });
      }
    `
  });
});


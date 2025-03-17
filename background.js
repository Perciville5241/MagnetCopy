chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(tab.id, {
    code: `
      let magnetLinks = Array.from(document.querySelectorAll('a[href^="magnet:"]'));
      if (magnetLinks.length === 0) {
        alert('No magnet links found on this page.');
      } else if (magnetLinks.length === 1) {
        navigator.clipboard.writeText(magnetLinks[0].href).then(() => {
          alert(\`Magnet link copied to clipboard: \${magnetLinks[0].href}\`);
        }).catch(err => {
          console.error('Failed to copy:', err);
          alert('Failed to copy magnet link.');
        });
      } else {
        let selectedLink = prompt(
          'Multiple magnet links found. Select one to copy:',
          magnetLinks.map((link, index) => \`\${index + 1}: \${link.href}\`).join('\\n')
        );
        if (selectedLink) {
          let selectedIndex = parseInt(selectedLink) - 1;
          if (selectedIndex >= 0 && selectedIndex < magnetLinks.length) {
            navigator.clipboard.writeText(magnetLinks[selectedIndex].href).then(() => {
              alert(\`Selected magnet link copied to clipboard: \${magnetLinks[selectedIndex].href}\`);
            }).catch(err => {
              console.error('Failed to copy:', err);
              alert('Failed to copy magnet link.');
            });
          } else {
            alert('Invalid selection. No magnet link copied.');
          }
        }
      }
    `
  });
});


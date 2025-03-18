# MagnetCopy

Available at https://addons.mozilla.org/en-GB/firefox/addon/tor-magnet-link-copier/

I have uploaded my source code here for the sake of your Privacy and my full disclosure as this addon's intended use is in TOR Browser.

# Tor Magnet Link Copier

## Overview
Tor Magnet Link Copier is a simple Firefox extension that allows users to quickly copy `magnet:` links found on a webpage. The extension provide a method to copy magnet links without Clickjacking popups:

- **Manual Copy via Popup**: Clicking the extension icon opens a popup with a button to manually scrape and copy the first magnet link.

## Features
- Detects and copies magnet links from webpages.
- Handles multiple magnet links by prompting the user to select the correct one.
- Works in **Tor Browser** and **Firefox**.
- Lightweight and easy to use.
- Includes a GitHub reference for project updates.

## Auto Installation
1. https://addons.mozilla.org/en-GB/firefox/addon/tor-magnet-link-copier/
2. Add to Firefox.

## Manual Installation
1. Download the extension files.
2. Open **Firefox/Tor Browser** and navigate to `about:debugging`.
3. Click **"This Firefox" > "Load Temporary Add-on"**.
4. Select the `manifest.json` file.
5. The extension is now active and ready to use.

## Usage
Click the extension icon to open the popup, then click "Click Here to Scrape Magnet Links" to manually copy the first `magnet:` link found.
- If multiple links are detected, the extension will prompt you to choose the correct one.

## Permissions
The extension requires the following permissions:
- `activeTab`: Allows the extension to access the currently active tab to scan for magnet links.
- `clipboardWrite`: Enables copying the detected magnet link to the clipboard.

## GitHub Repository
For source code, updates, and contributions, visit the project on GitHub:  
🔗 [GitHub Repository](https://github.com/Perciville5241)

## License
This project is licensed under the MIT License.

---

### Author
Developed by [Perciville5241](https://github.com/Perciville5241) 🚀

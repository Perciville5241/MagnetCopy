# MagnetCopy

Available at https://addons.mozilla.org/en-GB/firefox/addon/tor-magnet-link-copier/

I have uploaded my source code here for the sake of your Privacy and my full disclosure as this addon's intended use is in TOR Browser.

# Tor Magnet Link Copier

## Overview
Tor Magnet Link Copier is a simple Firefox extension that allows users to quickly copy `magnet:` links found on a webpage. The extension provide a method to copy magnet links without Clickjacking popups:

- **One link**: clicking the extension icon copies it straight to the clipboard.
- **Several links**: the popup lists every magnet link on the page, identified by name, size and info hash. Tick the ones you want (or "Select all") and click Copy; the links are copied one per line.

## Features
- Detects and copies magnet links from webpages.
- Copies all, or any selection, of the magnet links on a page, one per line.
- Duplicate links on the same page are listed once.
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

### Tor Browser
Tor Browser windows are always private, so the add-on must be allowed to run in private windows or its toolbar button will not appear. Tick "Allow" when asked at install time, or later go to `about:addons`, open Tor Magnet Link Copier and set "Run in Private Windows" to Allow.

## Usage
Click the extension icon. The current page is scanned for `magnet:` links:
- **None found**: the popup says so.
- **One found**: it is copied immediately and its name is shown.
- **More than one**: pick from the list (all are ticked by default) and click **Copy N links**. Hover over an entry to see the full magnet URI.

## Changelog
- **2.0**: copy all or a selection of magnet links from a page (issue #1). Links are identified by display name, size and info hash. Removed the unused background script.
- **1.2**: initial public release.

## Permissions
The extension requires the following permissions:
- `activeTab`: Allows the extension to access the currently active tab to scan for magnet links.
- `clipboardWrite`: Enables copying the detected magnet link to the clipboard.

## GitHub Repository
For source code, updates, and contributions, visit the project on GitHub:  
🔗 [GitHub Repository](https://github.com/Perciville5241/MagnetCopy)

## License
This project is licensed under the MIT License.

---

### Author
Developed by [Perciville5241](https://github.com/Perciville5241) 🚀

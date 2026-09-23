# wifi.ctrl

A static, installable PWA dashboard for local router and access-point access. Designed for GitHub Pages.

## GitHub Pages

In the repository settings, open **Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. The app will be available at `https://dirzzr.github.io/wifi-ctrl/`.

## Security note

Credentials are intentionally **not embedded in the public source code**. Open **Preferences** in the app and save them to the browser's localStorage. The dashboard never sends them to a server. GitHub Pages also cannot proxy private `192.168.x.x` addresses, so interface buttons open the router directly in a device connected to your home network.

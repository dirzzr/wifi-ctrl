<!doctype html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#090b10">
  <meta name="description" content="Private control center untuk router dan access point lokal.">
  <link rel="manifest" href="manifest.webmanifest">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='24' fill='%23090b10'/%3E%3Cpath d='M22 40c16-16 40-16 56 0M31 51c11-11 27-11 38 0M42 63c5-5 11-5 16 0M50 76h.01' fill='none' stroke='%23a8e063' stroke-width='7' stroke-linecap='round'/%3E%3C/svg%3E">
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="effects.css">
  <title>wifi.ctrl — local network cockpit</title>
</head>
<body>
  <div class="aurora aurora-a"></div>
  <div class="aurora aurora-b"></div>
  <div class="grid-glow"></div>
  <div class="noise"></div>

  <main class="shell">
    <header class="topbar" data-reveal>
      <a class="brand" href="./" aria-label="wifi.ctrl home"><span class="brand-mark"><i></i><i></i><i></i></span><span>wifi<span class="muted">.</span>ctrl</span></a>
      <div class="top-actions">
        <span class="secure-pill"><span class="pulse"></span> local only</span>
        <button class="icon-button" id="installBtn" hidden aria-label="Install aplikasi">↥</button>
        <button class="icon-button" id="settingsBtn" aria-label="Buka pengaturan">⌘</button>
      </div>
    </header>

    <section class="hero" data-reveal>
      <div class="eyebrow">NETWORK COCKPIT <span>—</span> 01</div>
      <h1>Everything connected.<br><em>Nothing complicated.</em></h1>
      <p class="hero-copy">Satu tempat yang tenang untuk mengakses, memantau, dan mengelola perangkat jaringan di rumah.</p>
      <div class="hero-meta"><span class="live-dot"></span><span id="clock">LOCAL TIME</span><span class="divider"></span><span>2 DEVICES</span></div>
    </section>

    <section class="device-grid" aria-label="Perangkat jaringan">
      <article class="device-card primary" data-reveal data-tilt>
        <div class="card-head"><div class="device-icon cellular"><span></span></div><span class="status"><i></i> reachable</span></div>
        <div class="device-content"><div class="device-number">01 / LTE GATEWAY</div><h2>Rabit CPE XR</h2><p class="role">Penangkap sinyal 4G LTE · Indosat HiFi Air</p><div class="address"><span>192.168.100.1</span><button class="copy-icon" data-copy="192.168.100.1" aria-label="Salin alamat IP">⧉</button></div></div>
        <div class="card-footer"><span class="connection"><b></b> primary uplink</span><a class="open-link" href="http://192.168.100.1" target="_blank" rel="noopener">Open interface <span>↗</span></a></div>
      </article>

      <article class="device-card" data-reveal data-tilt>
        <div class="card-head"><div class="device-icon wifi"><span></span></div><span class="status"><i></i> reachable</span></div>
        <div class="device-content"><div class="device-number">02 / ACCESS POINT</div><h2>FiberHome HG6145D2</h2><p class="role">Penerus internet · dual-band 2.4 / 5 GHz</p><div class="address"><span>192.168.100.2</span><button class="copy-icon" data-copy="192.168.100.2" aria-label="Salin alamat IP">⧉</button></div></div>
        <div class="card-footer"><span class="connection"><b></b> wireless bridge</span><a class="open-link" href="http://192.168.100.2" target="_blank" rel="noopener">Open interface <span>↗</span></a></div>
      </article>
    </section>

    <section class="access-panel" data-reveal>
      <div>
        <div class="eyebrow">QUICK ACCESS</div>
        <h3>Credentials vault</h3>
        <p>Username dan password perangkat siap disalin dari dashboard ini.</p>
      </div>
      <button class="outline-button" id="vaultBtn">View credentials <span>→</span></button>
    </section>

    <footer><span>WIFI.CTRL / 2026</span><span>BUILT FOR YOUR LOCAL NETWORK <b>✦</b></span></footer>
  </main>

  <dialog id="vaultDialog">
    <div class="dialog-head">
      <div><div class="eyebrow">PRIVATE VAULT</div><h2>Access details</h2></div>
      <button class="close" data-close>×</button>
    </div>
    <p class="dialog-note">Kredensial ini tersedia di dashboard untuk akses cepat. Jangan bagikan URL aplikasi atau repository ke publik.</p>
    <div id="credentialList"></div>
    <button class="outline-button full" id="editCredentials">Edit local credentials <span>→</span></button>
  </dialog>

  <dialog id="settingsDialog">
    <div class="dialog-head">
      <div><div class="eyebrow">PREFERENCES</div><h2>Local setup</h2></div>
      <button class="close" data-close>×</button>
    </div>
    <form id="credentialForm">
      <div id="formFields"></div>
      <button class="save-button" type="submit">Save to this browser <span>↗</span></button>
    </form>
  </dialog>

  <div class="toast" id="toast">Copied to clipboard</div>
  <script src="app.js"></script>
</body>
</html>

const devices = {
  router1: { name: 'Rabit CPE XR', ip: '192.168.100.1', user: 'admin', pass: 'admin' },
  router2: { name: 'FiberHome HG6145D2', ip: '192.168.100.2', user: 'admin', pass: '%0|F?H@f!berhO3e' }
};

const $ = (selector) => document.querySelector(selector);
const toast = $('#toast');
let deferredPrompt;

function defaultCredentials() {
  return Object.fromEntries(Object.entries(devices).map(([key, device]) => [key, { user: device.user, pass: device.pass }]));
}

function credentials() {
  try {
    const saved = JSON.parse(localStorage.getItem('wifiCtrlCredentials'));
    return saved || defaultCredentials();
  } catch {
    return defaultCredentials();
  }
}

function notify(message = 'Copied to clipboard') {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}

async function copy(value) {
  if (!value) return notify('Belum diisi');
  try {
    await navigator.clipboard.writeText(value);
    notify();
  } catch {
    notify('Copy tidak tersedia');
  }
}

function renderVault() {
  const data = credentials();
  $('#credentialList').innerHTML = Object.entries(devices).map(([key, device]) => `
    <div class="credential">
      <div class="credential-name">${device.name}</div>
      <label>Username</label>
      <div class="credential-value"><span>${data[key]?.user || 'Not configured'}</span><button type="button" data-value="${data[key]?.user || ''}">copy</button></div>
      <label style="margin-top:13px">Password</label>
      <div class="credential-value"><span>${data[key]?.pass || 'Not configured'}</span><button type="button" data-value="${data[key]?.pass || ''}">copy</button></div>
    </div>`).join('');
  $('#credentialList').querySelectorAll('button').forEach((button) => button.addEventListener('click', () => copy(button.dataset.value)));
}

function renderForm() {
  const data = credentials();
  $('#formFields').innerHTML = Object.entries(devices).map(([key, device]) => `
    <div class="credential">
      <div class="credential-name">${device.name} <small>${device.ip}</small></div>
      <div class="field"><label>Username</label><input name="${key}-user" value="${data[key]?.user || ''}" autocomplete="off"></div>
      <div class="field"><label>Password</label><input name="${key}-pass" type="text" value="${data[key]?.pass || ''}" autocomplete="off"></div>
    </div>`).join('');
}

function setupTiltCards() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 10}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

function clock() {
  const time = new Date();
  $('#clock').textContent = `${time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} LOCAL TIME`;
}

$('#vaultBtn').addEventListener('click', () => { $('#vaultDialog').showModal(); renderVault(); });
$('#settingsBtn').addEventListener('click', () => { $('#settingsDialog').showModal(); renderForm(); });
$('#editCredentials').addEventListener('click', () => { $('#vaultDialog').close(); $('#settingsDialog').showModal(); renderForm(); });
document.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()));
document.querySelectorAll('[data-copy]').forEach((button) => button.addEventListener('click', () => copy(button.dataset.copy)));

$('#credentialForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const output = {};
  Object.keys(devices).forEach((key) => { output[key] = { user: formData.get(`${key}-user`), pass: formData.get(`${key}-pass`) }; });
  localStorage.setItem('wifiCtrlCredentials', JSON.stringify(output));
  $('#settingsDialog').close();
  notify('Saved locally');
});

clock();
setInterval(clock, 1000);
setupTiltCards();
window.addEventListener('beforeinstallprompt', (event) => { event.preventDefault(); deferredPrompt = event; $('#installBtn').hidden = false; });
$('#installBtn').addEventListener('click', async () => { if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt = null; } });
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');

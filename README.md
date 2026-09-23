# wifi.ctrl

Static PWA dashboard untuk akses cepat ke Rabit CPE XR dan **FiberHome HG6145D2** melalui GitHub Pages.

## GitHub Pages

Workflow `.github/workflows/deploy-pages.yml` otomatis deploy ke GitHub Pages setiap push ke `main`. Aktifkan sekali melalui **Settings → Pages → Source: GitHub Actions**. URL: `https://dirzzr.github.io/wifi-ctrl/`.

## Tentang tombol Open interface

Dashboard tetap berjalan sebagai PWA. Tombol interface membuka panel admin router di tab baru melalui `target="_blank"`. Panel admin router bukan bagian dari PWA karena router menyediakan halaman HTTP-nya sendiri. Iframe tidak dipakai karena router dapat menolak iframe melalui `X-Frame-Options`/CSP, sementara HTTPS GitHub Pages dapat memblokir HTTP sebagai mixed content.

## Kredensial

Kredensial default tampil di dashboard sesuai konfigurasi jaringan pribadi. Karena repository ini public, siapa pun yang dapat membaca source GitHub juga dapat melihatnya. Ganti password router jika repository dibagikan atau dijadikan privat.

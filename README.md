# wifi.ctrl

Static PWA dashboard untuk akses cepat ke router dan access point lokal melalui GitHub Pages.

## Embed atau halaman baru?

Dashboard menampilkan perangkat dalam satu halaman, tetapi tombol interface membuka panel admin router secara langsung. Embed memakai iframe tidak selalu dapat bekerja karena router dapat menolak iframe melalui `X-Frame-Options`/CSP, dan HTTPS GitHub Pages dapat memblokir konten HTTP sebagai mixed content. Karena itu direct open adalah fallback paling stabil.

## GitHub Pages

Buka **Settings → Pages**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`. URL: `https://dirzzr.github.io/wifi-ctrl/`.

## Kredensial

Kredensial default ditampilkan di dashboard sesuai konfigurasi jaringan pribadi. Karena repository ini publik, siapa pun yang dapat melihat source GitHub juga dapat membacanya. Ganti password router jika project akan dibagikan atau dibuat benar-benar privat.

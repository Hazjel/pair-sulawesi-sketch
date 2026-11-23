# Sumber batas wilayah untuk peta sketsa

Disusun 23 Nov 2026 (UI/UX Designer, fase v2). Semua isi peta di sketsa adalah **data contoh**, kecuali garis batas kecamatan dan kabupaten di bawah ini.

## Teks atribusi untuk peta

> Batas kecamatan: geoBoundaries (gbHumanitarian IDN ADM3) dari COD-AB Indonesia, OCHA ROAP/HDX, sumber BPS. Batas kabupaten sekitar: geoBoundaries (gbOpen IDN ADM2). Lisensi CC BY 3.0 IGO.

Versi pendek untuk HP:

> Batas: geoBoundaries / OCHA-HDX (BPS), CC BY 3.0 IGO

## Dataset yang dipakai

| Lapisan | Dataset | Versi / tanggal | URL | Lisensi |
|---|---|---|---|---|
| Kecamatan (ADM3) Barru dan Sinjai | geoBoundaries **gbHumanitarian IDN ADM3**, ID `IDN-ADM3-43725864`, berkas *simplified* | Tahun representasi 2019; pembaruan data sumber 19 Jan 2023; build 12 Des 2023; rilis commit `9469f09` | API: https://www.geoboundaries.org/api/current/gbHumanitarian/IDN/ADM3/ · berkas: https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbHumanitarian/IDN/ADM3/geoBoundaries-IDN-ADM3_simplified.geojson | CC BY 3.0 IGO (sumber lisensi: data.humdata.org/dataset/cod-ab-idn) |
| Kabupaten sekitar (ADM2), untuk konteks dan untuk memilih kecamatan | geoBoundaries **gbOpen IDN ADM2**, berkas *simplified* | Tahun representasi 2020; 519 unit; commit `9469f09` | API: https://www.geoboundaries.org/api/current/gbOpen/IDN/ADM2/ · berkas: https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/IDN/ADM2/geoBoundaries-IDN-ADM2_simplified.geojson | CC BY 3.0 IGO (sumber: BPS, WFP, OCHA ROAP) |
| Pemeriksa silang nama dan jumlah kecamatan | HDX **COD-AB Indonesia** (`cod-ab-idn`), `idn_admin_boundaries.xlsx`, lembar `idn_admin3` | Dataset versi 01; batas dibuat 8 Apr 2020; ditinjau 30 Okt 2025; berkas diperbarui 23 Jun 2026 | https://data.humdata.org/dataset/cod-ab-idn | CC BY-IGO (sumber: BPS) |

SHA-256 berkas unduhan (disimpan di scratchpad, tidak masuk repo):
- `geoBoundaries-IDN-ADM3_simplified.geojson`: `e60e88b56c43016b0ad5dd33fe9b5d098a1072d7930eed40a4a1a633dd9b53f6`
- `geoBoundaries-IDN-ADM2_simplified.geojson`: `146653d488331086ddc43d159a261b01ea6dd08c7ed422e34a9886c3c690430c`
- `idn_admin_boundaries.xlsx`: `feeab40d43e3c2541e6e484ecd6f003a28d712d07a0bc720d421301258934ad9`

## Cara membuat berkas di folder ini

1. ADM3 dipilih bila titik representatifnya jatuh di dalam poligon ADM2 Barru atau Sinjai (penyangga 0,01°). geoBoundaries ADM3 hanya memuat nama kecamatan, jadi nama kabupaten diambil dari pemilihan spasial ini.
2. Geometri memakai versi *simplified* dari geoBoundaries tanpa penyederhanaan tambahan (52–155 titik per kecamatan; bentuk pantai tetap dikenali). Koordinat dibulatkan 5 desimal.
3. Keluaran:
   - `batas-kecamatan.geojson` (32 KB): 16 fitur, properti hanya `kecamatan` dan `kabupaten`, WGS84.
   - `peta-kecamatan-barru-sinjai.svg` (62 KB): proyeksi UTM zona 50S (EPSG:32750), kotak 119,40–120,62°BT, 3,95–5,45°LS, lebar 600 px. Kabupaten sekitar digambar abu-abu sebagai konteks.
   - `peta-meta.json`: titik label kecamatan dan **pusat desa generik** (B-01…B-08, S-01…S-08) dalam koordinat SVG. Titik dipilih acak (seed 2027) di dalam kecamatan yang ditentukan; bukan lokasi desa asli.
4. Skrip (`build.py`, `preview.py`) disimpan di luar repo, di scratchpad sesi; dijalankan dengan `python -I`.

## Pemeriksaan jumlah kecamatan

| Kabupaten | Dari geoBoundaries ADM3 (pemilihan spasial) | Dari HDX COD-AB `idn_admin3` (`adm2_name`) | Daftar |
|---|---:|---:|---|
| Barru | **7** | **7** (pcode `ID7310…`) | Balusu, Barru, Mallusetasi, Pujananting, Soppeng Riaja, Tanete Riaja, Tanete Rilau |
| Sinjai | **9** | **9** (pcode `ID7307…`) | Bulupoddo, Pulau Sembilan, Sinjai Barat, Sinjai Borong, Sinjai Selatan, Sinjai Tengah, Sinjai Timur, Sinjai Utara, Tellu Limpoe |

- Cocok dengan angka di tugas (Barru 7, Sinjai 9). Namun kedua sumber berasal dari data batas BPS 2020 yang sama, jadi bukan dua bukti independen.
- **Pemeriksaan ke publikasi BPS terbaru: [perlu cek].** Situs BPS Kabupaten Barru (barrukab.bps.go.id) terbuka, tetapi daftar publikasi dan pencarian tabel per kecamatan tidak memuat isi (2 percobaan, 23 Nov 2026). API `sig.bps.go.id/rest-bridging/getwilayah` mengembalikan 404.
- Kode kabupaten Barru di COD-AB adalah `7310`. Ini cocok dengan kode yang dipakai BPS Barru sendiri (alamat surel `bps7310@bps.go.id` dan tautan `SKD26_7310` di beranda situs BPS Barru).
- **Pulau Sembilan** tersimpan sebagai `MultiPolygon` dengan **8 bagian** (pulau-pulau di Teluk Bone, timur Sinjai Utara); diperiksa dengan skrip.

## Batasan

- Tidak ada poligon atau nama desa asli di sketsa (keputusan pemilik). Tingkat desa (ADM4) memang ada di COD-AB, tetapi sengaja tidak dipakai.
- Batas tahun 2019/2020; pemekaran setelahnya tidak tercermin [perlu cek].
- Versi *simplified* memangkas detail pantai dan pulau kecil; untuk HTML akhir, versi penuh bisa dipakai dengan penyederhanaan sendiri (mis. mapshaper) bila perlu.

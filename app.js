'use strict';
/* Sketsa dasbor PAIR Sulawesi (DATA CONTOH). Satu berkas, tanpa build; jalan dari file://.
   Urutan: ikon → util dan privasi → data → rute/URL → komponen → grafik (ECharts) → peta (Leaflet)
   → kalimat temuan → halaman → kerangka dan event.
   Ikon: @carbon/icons 11.92.0 (Apache-2.0), disalin ke sini supaya tetap tampil tanpa internet. */
const IKON = {
  "add": "<path d=\"M17 15 17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z\"/>",
  "arrow--right": "<path d=\"M18 6 16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6z\"/>",
  "checkmark": "<path d=\"M13 24 4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z\"/>",
  "chevron--down": "<path d=\"M16 22 6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z\"/>",
  "chevron--left": "<path d=\"M10 16 20 6 21.4 7.4 12.8 16 21.4 24.6 20 26z\"/>",
  "chevron--right": "<path d=\"M22 16 12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z\"/>",
  "close": "<path d=\"M17.4141 16 24 9.4141 22.5859 8 16 14.5859 9.4143 8 8 9.4141 14.5859 16 8 22.5859 9.4143 24 16 17.4141 22.5859 24 24 22.5859 17.4141 16z\"/>",
  "cloud": "<path d=\"M16,7h0a7.66,7.66,0,0,1,1.51.15,8,8,0,0,1,6.35,6.34l.26,1.35,1.35.24a5.5,5.5,0,0,1-1,10.92H7.5a5.5,5.5,0,0,1-1-10.92l1.34-.24.26-1.35A8,8,0,0,1,16,7m0-2a10,10,0,0,0-9.83,8.12A7.5,7.5,0,0,0,7.49,28h17a7.5,7.5,0,0,0,1.32-14.88,10,10,0,0,0-7.94-7.94A10.27,10.27,0,0,0,16,5Z\"/>",
  "compare": "<path d=\"M28,6H18V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V24a2,2,0,0,0,2,2H14v2a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,15h6.17L7.59,17.59,9,19l5-5L9,9,7.59,10.41,10.17,13H4V4H16V24H4ZM16,28V26a2,2,0,0,0,2-2V8H28v9H21.83l2.58-2.59L23,13l-5,5,5,5,1.41-1.41L21.83,19H28v9Z\"/>",
  "data-table": "<path d=\"M8 18H12V20H8z\"/><path d=\"M14 18H18V20H14z\"/><path d=\"M8 14H12V16H8z\"/><path d=\"M14 22H18V24H14z\"/><path d=\"M20 14H24V16H20z\"/><path d=\"M20 22H24V24H20z\"/><path d=\"M27,3H5A2.0025,2.0025,0,0,0,3,5V27a2.0025,2.0025,0,0,0,2,2H27a2.0025,2.0025,0,0,0,2-2V5A2.0025,2.0025,0,0,0,27,3Zm0,2,0,4H5V5ZM5,27V11H27l0,16Z\"/>",
  "download": "<path d=\"M26,24v4H6V24H4v4H4a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2h0V24Z\"/><path d=\"M26 14 24.59 12.59 17 20.17 17 2 15 2 15 20.17 7.41 12.59 6 14 16 24 26 14z\"/>",
  "filter": "<path d=\"M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z\"/>",
  "information": "<path d=\"M17 22 17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22z\"/><path d=\"M16,8a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,16,8Z\"/><path d=\"M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z\"/>",
  "launch": "<path d=\"M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z\"/><path d=\"M20 2 20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2z\"/>",
  "link": "<path d=\"M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z\"/><path d=\"M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z\"/>",
  "map": "<path d=\"M16,24l-6.09-8.6A8.14,8.14,0,0,1,16,2a8.08,8.08,0,0,1,8,8.13,8.2,8.2,0,0,1-1.8,5.13ZM16,4a6.07,6.07,0,0,0-6,6.13,6.19,6.19,0,0,0,1.49,4L16,20.52,20.63,14A6.24,6.24,0,0,0,22,10.13,6.07,6.07,0,0,0,16,4Z\"/><circle cx=\"16\" cy=\"9\" r=\"2\"/><path d=\"M28,12H26v2h2V28H4V14H6V12H4a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V14A2,2,0,0,0,28,12Z\"/>",
  "menu": "<path d=\"M4 6H28V8H4z\"/><path d=\"M4 24H28V26H4z\"/><path d=\"M4 12H28V14H4z\"/><path d=\"M4 18H28V20H4z\"/>",
  "search": "<path d=\"M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z\"/>",
  "star": "<path d=\"M16,6.52l2.76,5.58.46,1,1,.15,6.16.89L22,18.44l-.75.73.18,1,1.05,6.13-5.51-2.89L16,23l-.93.49L9.56,26.34l1-6.13.18-1L10,18.44,5.58,14.09l6.16-.89,1-.15.46-1L16,6.52M16,2l-4.55,9.22L1.28,12.69l7.36,7.18L6.9,30,16,25.22,25.1,30,23.36,19.87l7.36-7.17L20.55,11.22Z\"/>",
  "subtract": "<path d=\"M8 15H24V17H8z\"/>",
  "task--complete": "<path d=\"M22 27.18 19.41 24.59 18 26 22 30 30 22 28.59 20.59 22 27.18z\"/><path d=\"M25,5H22V4a2.0058,2.0058,0,0,0-2-2H12a2.0058,2.0058,0,0,0-2,2V5H7A2.0058,2.0058,0,0,0,5,7V28a2.0058,2.0058,0,0,0,2,2h9V28H7V7h3v3H22V7h3V18h2V7A2.0058,2.0058,0,0,0,25,5ZM20,8H12V4h8Z\"/>",
  "time": "<path d=\"M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z\"/><path d=\"M20.59 22 15 16.41 15 7 17 7 17 15.58 22 20.59 20.59 22z\"/>",
  "user--multiple": "<path d=\"M30,30H28V25a5.0057,5.0057,0,0,0-5-5V18a7.0078,7.0078,0,0,1,7,7Z\"/><path d=\"M22,30H20V25a5.0059,5.0059,0,0,0-5-5H9a5.0059,5.0059,0,0,0-5,5v5H2V25a7.0082,7.0082,0,0,1,7-7h6a7.0082,7.0082,0,0,1,7,7Z\"/><path d=\"M20,2V4a5,5,0,0,1,0,10v2A7,7,0,0,0,20,2Z\"/><path d=\"M12,4A5,5,0,1,1,7,9a5,5,0,0,1,5-5m0-2a7,7,0,1,0,7,7A7,7,0,0,0,12,2Z\"/>",
  "wallet": "<path d=\"M22 17H24V19H22z\"/><path d=\"M28,8H4V5H26V3H4A2,2,0,0,0,2,5V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM4,26V10H28v3H20a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h8v3ZM28,15v6H20V15Z\"/>",
  "warning--alt--filled": "<path fill=\"none\" d=\"M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z\" data-icon-path=\"inner-path\"/><path d=\"M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z\"/><path d=\"M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z\"/>",
  "warning--filled": "<path d=\"M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25\tc-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z\"/><path fill=\"none\" d=\"M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22\tC16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z\" data-icon-path=\"inner-path\" opacity=\"0\"/>",
};

const D = window.DATA;
const KODE = D.kode;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const ikon = (n, kelas = '') => `<svg class="ikon ${kelas}" viewBox="0 0 32 32" width="16" height="16" aria-hidden="true" focusable="false">${IKON[n]}</svg>`;
const nf = (x, d = 0) => Number(x).toLocaleString('id-ID', { minimumFractionDigits: d, maximumFractionDigits: d });
const kapital = s => s.charAt(0).toUpperCase() + s.slice(1);
const BULAN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
const bulan = ym => `${BULAN[+ym.slice(5, 7) - 1]} ${ym.slice(0, 4)}`;
const jumlah = (a, f) => a.reduce((s, x) => s + f(x), 0);
const arah = (v, a) => (v > a ? 'di atas' : v < a ? 'di bawah' : 'sama dengan');

/* ---------- privasi: sel kecil ---------- */
/* cek:sel-kecil — fungsi ini dijalankan cek_sketch.py (acceptance 2e). */
function selKecil(n) { return n < 5 ? '<5' : n; }

const median = a => { if (!a.length) return null; const s = [...a].sort((x, y) => x - y), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
// % responden; disembunyikan bila penyebut atau pembilang di bawah 5 orang
function persen(rows, ya, d = 0) {
  const n = rows.length, k = rows.filter(ya).length, tutup = selKecil(n) === '<5' || selKecil(k) === '<5';
  return { n, k, tutup, v: tutup ? null : 100 * k / n, teks: tutup ? '<5' : nf(100 * k / n, d) + '%' };
}
// Dua hitungan orang yang saling melengkapi (mis. perempuan/laki-laki): yang di bawah 5 tampil "<5", dan
// pasangannya ikut disembunyikan ("–") supaya tidak bisa dihitung balik dari jumlahnya
const pasangKecil = (a, b) => (a >= 5 && b >= 5 ? [a, b] : [a < 5 ? '<5' : '–', b < 5 ? '<5' : '–']);
function tengah(rows, f, satuan = '') {
  const n = rows.length, tutup = selKecil(n) === '<5', v = tutup ? null : median(rows.map(f));
  return { n, tutup, v, teks: tutup ? '<5' : nf(v, v % 1 ? 1 : 0) + satuan };
}

/* ---------- data ---------- */
const DESA = Object.fromEntries(D.desa.map(d => [d.id, d]));
const KLP = Object.fromEntries(D.kelompok.map(k => [k.id, k]));
for (const k of D.kelompok) {
  k.kab = DESA[k.desa].kab; k.kec = DESA[k.desa].kec;
  k.belum = k.prioritas && !k.program.length;                       // prioritas belum terlayani (M8-05)
  k.tumpang = Object.keys(KODE.bantuan).filter(j => new Set(k.program.filter(p => p.jenis === j).map(p => p.pemberi)).size > 1);
  k.tindakan = k.prioritas || k.kebutuhan >= D.meta.batas_tindakan;  // "perlu tindakan" [usulan]
}
for (const r of D.responden) { r.tipe = DESA[r.desa].tipe; r.kec = DESA[r.desa].kec; }
// Kepengurusan dan disabilitas anggota hanya ada sebagai agregat (gabungan, kabupaten, kecamatan) dari gen_dummy.py,
// sudah melewati penyembunyian sel kecil primer dan sekunder: null = tersembunyi. Tidak ada angka per kelompok.
const AGR = D.kepengurusan;
const agrWil = kab => (kab ? AGR.kab.find(x => x.kab === kab) : AGR.semua);
const tampilSel = v => (v == null ? '<5' : v);
const kursi = a => { const p = a.pengurus_p, t = a.pengurus, tutup = p == null; return { p, t, tutup, v: tutup ? null : 100 * p / t, teks: tutup ? '<5' : nf(100 * p / t, 1) + '%' }; };

// indikator tingkat responden (dipakai halaman pertanyaan dan penjelajah)
const IND = {
  biaya: { label: 'Akses pembiayaan formal', buruk: 'rendah', kelas: { batas: [25, 35], label: ['&lt; 25%', '25–34%', '≥ 35%'] }, hitung: (rows, d = 0) => persen(rows, r => r.biaya, d),
    kalimat: s => `${s.teks} responden punya akses pembiayaan formal (${s.k} dari ${s.n})` },
  hari: { label: 'Hari usaha hilang karena cuaca (median)', buruk: 'tinggi', kelas: { batas: [15, 21], label: ['≤ 14 hari', '15–20 hari', '≥ 21 hari'] }, hitung: rows => tengah(rows, r => r.hari, ' hari'),
    kalimat: s => `median ${s.teks} usaha hilang karena cuaca dalam setahun (${s.n} responden)` },
  rapat: { label: 'Berpendapat dalam rapat kelompok', buruk: 'rendah', kelas: { batas: [40, 55], label: ['&lt; 40%', '40–54%', '≥ 55%'] }, hitung: (rows, d = 0) => persen(rows.filter(r => r.rapat !== '97'), r => r.rapat >= '2', d),
    kalimat: s => `${s.teks} anggota kelompok hadir dan menyampaikan pendapat dalam rapat (${s.k} dari ${s.n})` },
};
// pembanding sementara = gabungan Barru + Sinjai, tidak ikut saringan
const ACUAN = Object.fromEntries(Object.keys(IND).map(i => [i, IND[i].hitung(D.responden, 1)]));
const MED_SKOR = median(D.kelompok.map(k => k.skor)), TEKS_MED_SKOR = nf(MED_SKOR, MED_SKOR % 1 ? 1 : 0);

// dimensi saringan (klik grafik): unit 'k' = kelompok, 'r' = responden
const DIM = {
  kapasitas: { unit: 'k', label: 'Kapasitas', f: k => k.kategori, opsi: { rendah: 'rendah', sedang: 'sedang', tinggi: 'tinggi' } },
  status: { unit: 'k', label: 'Kelompok', f: k => (k.prioritas ? 'prioritas' : 'bukan'), opsi: { prioritas: 'prioritas', bukan: 'bukan prioritas' } },
  layanan: { unit: 'k', label: 'Status', f: k => (k.belum ? 'belum' : k.prioritas ? 'terlayani' : k.tumpang.length ? 'tumpang' : 'lain'),
    opsi: { belum: 'belum terlayani', terlayani: 'sudah terlayani', tumpang: 'tumpang tindih program' } },
  rencana: { unit: 'k', label: 'Status', f: k => (k.rencana ? k.rencana.status : 'TANPA'), opsi: { BELUM: 'belum mulai', BERJALAN: 'berjalan', SELESAI: 'selesai' } },
  // agregat: kelas ini hanya memilih kolom agregat (AGR.kelas); tidak ada nilai per kelompok, jadi tidak bisa menyorot kelompok
  porsi: { unit: 'k', agregat: true, label: 'Porsi pengurus perempuan', f: () => null, opsi: { nol: '0%', sedikit: '1–39%', cukup: '≥ 40%' } },
  jk: { unit: 'r', label: 'Jenis kelamin', f: r => r.jk, opsi: { P: 'perempuan', L: 'laki-laki' } },
  tipe: { unit: 'r', label: 'Wilayah', f: r => r.tipe, opsi: { DARATAN: 'daratan', PULAU: 'pulau kecil' } },
};

/* ---------- rute dan URL ---------- */
// Sebelas halaman di spec, urut nomor 1–11 (dipakai peta-indikator.csv dan cek_sketch.py)
const RUTE = ['#/beranda', '#/pertanyaan/prioritas', '#/pertanyaan/akses', '#/pertanyaan/iklim', '#/pertanyaan/gedsi',
  '#/pertanyaan/program', '#/pertanyaan/rencana', '#/peta', '#/kelompok', '#/kelompok/KLP-S-014', '#/tentang'];
const KAB = { barru: 'Barru', sinjai: 'Sinjai' };
let S = { path: '/beranda', q: {}, kab: null };
function baca() {
  const [path, qs = ''] = (location.hash.startsWith('#/') ? location.hash.slice(1) : '/beranda').split('?');   // hash jangkar (mis. #app) bukan route
  const q = Object.fromEntries(new URLSearchParams(qs));
  S = { path: path || '/beranda', q, kab: KAB[q.kab] || null };
}
// Tautan ke halaman lain; saringan kabupaten ikut terbawa di URL
function url(path, q = {}) {
  const p = new URLSearchParams();
  for (const [k, v] of Object.entries({ kab: S.q.kab, ...q })) if (v) p.set(k, v);
  const s = p.toString().replace(/%3A/g, ':').replace(/%2C/g, ',');
  return '#' + path + (s ? '?' + s : '');
}
const ubah = patch => { location.hash = url(S.path, { ...S.q, ...patch }); };
const diKab = x => !S.kab || x.kab === S.kab;
const di = () => (S.kab ? ` di ${S.kab}` : '');
const kabAktif = () => (S.kab ? [S.kab] : ['Barru', 'Sinjai']);
function saringan() {
  const [dim, val] = (S.q.f || '').split(':'), d = DIM[dim];
  return d && d.opsi[val] ? { dim, val, d, label: `${d.label}: ${d.opsi[val]}`, cocok: x => d.f(x) === val } : null;
}

/* ---------- komponen ---------- */
const W = { barru: '#6929c4', sinjai: '#009d9a', P: '#1192e8', L: '#005d5d', satu: '#002d9c', prio: '#9f1853', lain: '#6f6f6f', redup: '#c6c6c6',
  prioRedup: '#ffafd2', bahaya: '#da1e28', b40: '#78a9ff', b50: '#4589ff', b60: '#0f62fe', b70: '#0043ce', b90: '#001d6c', sorot: '#d0e2ff' };
const TERANG = new Set([W.P, W.b40, W.b50, W.sinjai, W.sorot, '#e0e0e0']);   // di atas warna ini label memakai teks gelap
const tag = (warna, teks, ik) => `<span class="tag tag--${warna}">${ik ? ikon(ik) : ''}${teks}</span>`;
const tagStatus = k => (k.prioritas ? tag('magenta', 'Prioritas', 'star') : tag('gray', 'Bukan prioritas', 'subtract')) + (k.belum ? ' ' + tag('red', 'Belum terlayani', 'warning--alt--filled') : '');
function tagRencana(k, pendek) {
  const r = k.rencana, awal = pendek ? '' : 'Rencana aksi ';
  if (!r) return tag('gray', 'Belum ada rencana aksi', 'subtract');
  return r.status === 'BELUM' ? tag(pendek ? 'gray' : 'warm-gray', kapital(awal + 'belum mulai'), pendek ? 'subtract' : 'time')
    : r.status === 'SELESAI' ? tag('green', kapital(awal + 'selesai'), 'checkmark')
      : tag('gray', `Berjalan · langkah ${r.aktif} dari ${r.langkah.length}`, 'subtract');
}
function berikutnya(k) {
  const r = k.rencana;
  if (!r) return k.tindakan ? 'Usulkan dinilai ulang di lokakarya berikutnya' : 'Perbarui data kelompok (jadwal triwulanan)';
  if (r.status === 'SELESAI') return 'Perbarui data kelompok (jadwal triwulanan)';
  return r.status === 'BELUM' ? `Mulai langkah 1: ${r.langkah[0].toLowerCase()}` : `Lanjutkan langkah ${r.aktif}: ${r.langkah[r.aktif - 1].toLowerCase()}`;
}
const tombol = (href, teks, ik, jenis = 'primer') => `<a class="tombol tombol--${jenis}" href="${href}">${teks}${ik ? ikon(ik) : ''}</a>`;
const catatan = teks => `<p class="catatan">${ikon('information')}<span>${teks}</span></p>`;
const callout = (judul, teks) => `<div class="callout">${ikon('information', 'ikon--20')}<div><strong>${judul}</strong><p>${teks}</p></div></div>`;
const legenda = butir => `<ul class="legenda">${butir.map(([gaya, teks]) => `<li><i style="${gaya}"></i>${teks}</li>`).join('')}</ul>`;
const kartuGrafik = g => `<section class="kartu"><h2 class="judul-kartu">${g.judul}</h2><p class="sub">${g.sub || ''}</p>${g.isi || `<div class="grafik" id="${g.id}"></div>`}${g.ekstra || ''}</section>`;
function umpan(teks) {
  const el = $('#umpan');
  el.textContent = teks; el.classList.add('tampil');
  clearTimeout(umpan.t); umpan.t = setTimeout(() => el.classList.remove('tampil'), 3500);
}

// Tabel data. kolom: [{judul, sel(baris, i) → html | '<5', csv?, angka?, panjang? (teks boleh turun baris)}]
let unduhan = {};
const KOL = {
  no: { judul: '#', sel: (b, i) => i + 1 },
  id: { judul: 'ID kelompok', sel: b => `<a href="${url('/kelompok/' + b.id)}">${b.id}</a>`, csv: b => b.id },
  desa: { judul: 'Desa', sel: b => DESA[b.desa].label }, kec: { judul: 'Kecamatan', sel: b => b.kec }, kab: { judul: 'Kabupaten', sel: b => b.kab },
};
const polos = h => String(h).replace(/<[^>]+>/g, ' ').replace(/&lt;/g, '<').replace(/\s+/g, ' ').trim();
function tabel(id, kolom, baris, semua) {
  unduhan[id] = { kolom, baris: semua || baris };
  return `<div class="tabel-gulir" tabindex="0" role="region" aria-label="Tabel (bisa digulir ke samping)"><table class="tabel"><thead><tr>${
    kolom.map(k => `<th scope="col"${k.angka ? ' class="angka"' : ''}>${k.judul}</th>`).join('')}</tr></thead><tbody>${
    baris.map((b, i) => `<tr>${kolom.map(k => {
      const isi = k.sel(b, i), kelas = [k.angka ? 'angka' : '', k.panjang ? 'panjang' : ''].join(' ').trim();
      return isi === '<5' ? '<td class="angka sel-tutup" title="Disembunyikan untuk melindungi responden (n < 5)">&lt;5</td>' : `<td${kelas ? ` class="${kelas}"` : ''}>${isi}</td>`;
    }).join('')}</tr>`).join('') || `<tr><td colspan="${kolom.length}">Tidak ada baris yang cocok dengan saringan.</td></tr>`}</tbody></table></div>`;
}
function unduhCsv(id) {
  const u = unduhan[id], q = v => `"${polos(v).replace(/"/g, '""')}"`;
  const baris = [q('DATA CONTOH — bukan hasil survei'), u.kolom.map(k => q(k.judul)).join(';'),
    ...u.baris.map((b, i) => u.kolom.map(k => q(k.csv ? k.csv(b, i) : k.sel(b, i))).join(';'))];
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['﻿' + baris.join('\r\n')], { type: 'text/csv;charset=utf-8' }));
  a.download = `pair-sketsa-${id}-DATA-CONTOH.csv`;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(a.href);
}
// Kartu tabel dengan batas 8 baris dan tombol unduh
function kartuTabel(t) {
  const tampil = S.q.semua ? t.baris : t.baris.slice(0, 8);
  return `<section class="kartu" style="margin-top:24px"><div class="tabel-kepala"><div><h2 class="judul-kartu">${t.judul}</h2><p class="sub">${t.sub}</p></div>
    <button class="tombol tombol--tersier" type="button" data-unduh="${t.id}">Unduh CSV${ikon('download')}</button></div>
    ${tabel(t.id, t.kolom, tampil, t.baris)}
    <p class="tabel-kaki"><span>Menampilkan ${tampil.length} dari ${t.baris.length} ${t.satuan}${t.kaki ? ' · ' + t.kaki : ''}</span>
    ${t.baris.length > 8 ? `<a href="${url(S.path, { ...S.q, semua: S.q.semua ? null : '1' })}">${S.q.semua ? 'Tampilkan 8 teratas' : `Tampilkan semua (${t.baris.length})`}</a>` : ''}</p></section>`;
}

/* ---------- grafik (ECharts 5.6.0, palet Carbon) ---------- */
const FONT = "'IBM Plex Sans', system-ui, -apple-system, 'Segoe UI', sans-serif";
let grafik = [];
const TIP = { trigger: 'item', confine: true, backgroundColor: '#393939', borderWidth: 0, padding: [12, 16],
  textStyle: { color: '#fff', fontSize: 14, lineHeight: 20, fontFamily: FONT },
  extraCssText: 'max-width:288px;white-space:normal;border-radius:2px;box-shadow:none;', formatter: p => (p.data && p.data.kalimat) || '' };
// Tanpa ECharts (offline): angka tetap terbaca sebagai tabel kecil
function cadangan(el, baris) {
  el.style.height = 'auto';
  el.innerHTML = `<table class="tabel tabel--cadangan"><tbody>${baris.map(b => `<tr><th scope="row">${b.label}</th><td class="angka">${b.teks}</td></tr>`).join('')}</tbody></table>`;
}
/* Batang mendatar berlabel langsung, sumbu dari nol.
   o: {baris: [{label, v|null, teks, warna, kalimat, kunci, tanda, kanan}], garis: {v, label}, maks, onKlik, lebarLabel,
       pilih: kunci baris terpilih (diberi bingkai), redup: baris lain dipudarkan, rapat: baris berpasangan} */
function batang(sel, o) {
  const el = typeof sel === 'string' ? $(sel) : sel;
  if (!el) return;
  const B = o.baris, lebarLabel = Math.min(o.lebarLabel || 150, el.clientWidth * 0.48), kanan = B.some(b => b.kanan) ? 96 : 0, ruang = Math.max(58, ...B.map(b => String(b.teks).length * 7 + 14));
  const jarak = o.rapat ? 21 : 30;
  el.style.height = B.length * jarak + (o.garis ? 24 : 2) + 'px';
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', B.map(b => `${b.aria || b.label}: ${b.teks}`).join('; ') + (o.garis ? `; ${o.garis.label}` : ''));
  if (!window.echarts) return cadangan(el, B.map(b => ({ ...b, label: b.aria || b.label })));
  const maks = o.maks || Math.max(...B.map(b => Math.max(b.v || 0, b.tanda || 0)), o.garis ? o.garis.v : 0) || 1;
  const lebar = Math.max(40, el.clientWidth - lebarLabel - kanan - ruang);
  const sumbu = { type: 'category', inverse: true, axisLine: { show: false }, axisTick: { show: false } };
  const c = echarts.init(el, null, { renderer: 'svg' });
  c.setOption({
    animation: false, textStyle: { fontFamily: FONT }, tooltip: TIP,
    grid: { left: lebarLabel, right: kanan + ruang, top: 0, bottom: o.garis ? 24 : 2 },
    xAxis: { type: 'value', min: 0, max: maks, show: false },
    yAxis: [{ ...sumbu, data: B.map(b => b.label), axisLabel: { align: 'left', margin: lebarLabel - (o.pilih === undefined ? 0 : 8), color: '#161616', fontSize: 14, width: lebarLabel - 14, overflow: 'truncate' } },
      { ...sumbu, position: 'right', data: B.map(b => b.kanan || ''), axisLabel: { margin: ruang, color: '#6f6f6f', fontSize: 12 } }],
    series: [{
      type: 'bar', barWidth: o.rapat ? 11 : 14, z: 2, cursor: o.onKlik ? 'pointer' : 'default',
      label: { show: true, fontSize: 12, fontWeight: 600, fontFamily: FONT, formatter: p => B[p.dataIndex].teks },
      data: B.map(b => {
        const tutup = b.v == null, warna = o.redup && o.pilih && b.kunci !== o.pilih ? W.sorot : b.warna || W.satu;
        // label nilai tidak boleh menimpa garis pembanding: pindah ke dalam ujung batang
        const dalam = !tutup && o.garis && b.v < o.garis.v && (o.garis.v - b.v) / maks * lebar < 56 && b.v / maks * lebar > 56;
        return { value: tutup ? 0 : b.v, kunci: b.kunci, itemStyle: { color: warna },
          kalimat: b.kalimat || (tutup ? 'Disembunyikan untuk melindungi responden (kurang dari 5 orang).' : `${b.label}: ${b.teks}`),
          // tanda "gabungan" tepat di kanan ujung batang: label nilai digeser ke sebelah kanan tanda
          label: { position: dalam ? 'insideRight' : 'right', distance: b.tanda != null && b.tanda >= (b.v || 0) && (b.tanda - (b.v || 0)) / maks * lebar < 40 ? (b.tanda - (b.v || 0)) / maks * lebar + 8 : 5,
            color: dalam ? (TERANG.has(warna) ? '#161616' : '#fff') : tutup ? '#525252' : '#161616' } };
      }),
      markLine: o.garis ? { silent: true, symbol: 'none', z: 1, lineStyle: { type: [4, 3], color: '#161616', width: 1.5 },
        label: { position: 'end', formatter: o.garis.label, color: '#161616', fontSize: 12, fontFamily: FONT, distance: 5 }, data: [{ xAxis: o.garis.v }] } : undefined,
    }, { type: 'scatter', yAxisIndex: 0, symbol: 'rect', symbolSize: [3, 20], silent: true, z: 3, itemStyle: { color: '#8d8d8d' },
      data: B.map((b, i) => (b.tanda != null ? [b.tanda, i] : null)).filter(Boolean) }],
  });
  if (o.pilih) c.setOption({ graphic: B.map((b, i) => (b.kunci === o.pilih ? i : -1)).filter(i => i >= 0).map(i => ({ type: 'rect', silent: true, z: -1,   // bingkai baris terpilih
    shape: { x: 1, y: c.convertToPixel({ yAxisIndex: 0 }, i) - jarak / 2 + 2, width: el.clientWidth - 2, height: jarak - 4 }, style: { fill: '#edf5ff', stroke: '#0f62fe', lineWidth: 2 } })) });
  if (o.onKlik) c.getZr().on('click', e => {   // seluruh baris bisa diklik, bukan hanya batangnya
    const b = B[Math.round(c.convertFromPixel({ gridIndex: 0 }, [e.offsetX, e.offsetY])[1])];
    if (b && b.kunci != null) o.onKlik(b.kunci);
  });
  grafik.push(c);
}
/* Batang bertumpuk 100% dengan jumlah di dalam segmen.
   o: {baris: [label], seri: [{nama, warna, tepi, teks, v: [..], kunci}], kalimat(seri, i), onKlik, lebarLabel,
       pilih: kunci segmen terpilih (bingkai biru), persen: label segmen berupa %} */
function tumpuk(sel, o) {
  const el = typeof sel === 'string' ? $(sel) : sel;
  if (!el) return;
  const lebarLabel = o.lebarLabel || 76;
  el.style.height = o.baris.length * 36 + 'px';
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', o.baris.map((b, i) => `${b}: ` + o.seri.map(s => `${s.nama} ${s.v[i]}`).join(', ')).join('; '));
  if (!window.echarts) return cadangan(el, o.baris.map((b, i) => ({ label: b, teks: o.seri.map(s => `${s.nama} ${s.v[i]}`).join(' · ') })));
  const total = o.baris.map((_, i) => jumlah(o.seri, s => s.v[i]) || 1);
  const c = echarts.init(el, null, { renderer: 'svg' });
  c.setOption({
    animation: false, textStyle: { fontFamily: FONT }, tooltip: TIP,
    grid: { left: lebarLabel, right: 2, top: 4, bottom: 4 },
    xAxis: { type: 'value', min: 0, max: 100, show: false },
    yAxis: { type: 'category', inverse: true, data: o.baris, axisLine: { show: false }, axisTick: { show: false },
      axisLabel: { align: 'left', margin: lebarLabel, color: '#161616', fontSize: 14, width: lebarLabel - 6, overflow: 'truncate' } },
    series: o.seri.map(s => ({
      type: 'bar', stack: 'a', barWidth: 24, name: s.nama, cursor: o.onKlik ? 'pointer' : 'default',
      itemStyle: { color: s.warna, borderColor: o.pilih && s.kunci === o.pilih ? '#0f62fe' : s.tepi || '#fff', borderWidth: o.pilih && s.kunci === o.pilih ? 2.5 : 1 },
      label: { show: true, position: 'inside', fontSize: 12, fontWeight: 600, fontFamily: FONT, color: s.teks || '#fff', formatter: p => (!p.data.n ? '' : o.persen ? (p.value >= 7 ? nf(p.value) + '%' : '') : p.data.n) },
      data: s.v.map((v, i) => ({ value: 100 * v / total[i], n: v, kunci: s.kunci, kalimat: o.kalimat(s, i) })),
    })),
  });
  if (o.onKlik) c.on('click', p => o.onKlik(p.data.kunci, p.dataIndex));
  grafik.push(c);
}
// Strip posisi: titik nilai + garis pembanding
function strip(v, acuan, maks, label) {
  const p = x => Math.max(0, Math.min(100, 100 * x / maks));
  return `<div class="strip" aria-hidden="true"><i class="strip__titik" style="left:${p(v)}%"></i><i class="strip__acuan" style="left:${p(acuan)}%"></i><span class="${p(acuan) > 60 ? 'kiri' : ''}" style="left:${p(acuan)}%">${label}</span></div>`;
}
// Indikator dengan posisi terhadap pembanding sementara
function blok(label, s, sub, acuan, maks, labelAcuan, buruk) {
  if (s.v == null) return `<div class="blok"><p class="blok__label">${label}</p><p class="blok__nilai"><b>&lt;5</b><small>terlalu sedikit responden; nilai disembunyikan</small></p></div>`;
  const beda = s.v - acuan, dekat = Math.abs(beda) <= acuan * 0.1, jelek = buruk === 'rendah' ? beda < 0 : beda > 0;
  const teks = beda === 0 ? 'Sama dengan pembanding sementara' : `${dekat ? 'Sedikit di' : 'Di'} ${beda > 0 ? 'atas' : 'bawah'} pembanding sementara`;
  return `<div class="blok"><p class="blok__label">${label}</p><p class="blok__nilai"><b>${s.teks}</b><small>${sub}</small></p>${strip(s.v, acuan, maks, labelAcuan)}
    <p class="blok__status">${ikon(jelek && !dekat ? 'warning--alt--filled' : 'information')}${teks}</p></div>`;
}

/* ---------- peta (Leaflet 1.9.4, tanpa ubin daring; latar polos) ---------- */
let petaAktif = [], petaUtama = null;
const pandangan = {};
const ll = p => [p[1], p[0]];
const batasCache = {};
function batasKab(kab) {
  if (!batasCache[kab]) batasCache[kab] = L.geoJSON(D.batas, { filter: f => !kab || f.properties.kabupaten === kab }).getBounds();
  return batasCache[kab];
}
function buatPeta(el, o = {}) {
  if (!el) return null;
  if (!window.L) { el.innerHTML = '<p class="kosong">Peta tidak bisa dimuat tanpa internet (Leaflet diambil dari CDN). Angka dan daftar di halaman ini tetap terbaca.</p>'; return null; }
  const kasar = matchMedia('(pointer: coarse)').matches;
  const m = L.map(el, { zoomControl: false, attributionControl: false, zoomSnap: 0.25, zoomDelta: 0.5, minZoom: 8, maxZoom: 14,
    scrollWheelZoom: !!o.gulir, dragging: !!o.gulir || !kasar, keyboard: !o.diam, doubleClickZoom: !o.diam, boxZoom: !o.diam, touchZoom: !o.diam,
    maxBounds: L.latLngBounds([D.meta.kotak[1], D.meta.kotak[0]], [D.meta.kotak[3], D.meta.kotak[2]]).pad(0.5) });
  if (o.diam) m.dragging.disable();
  else {
    L.control.attribution({ prefix: false, position: 'bottomleft' }).addAttribution(`${D.meta.atribusi_pendek} · titik = data contoh, dikaburkan`).addTo(m);
    L.control.zoom({ position: 'topright', zoomInTitle: 'Perbesar', zoomOutTitle: 'Perkecil' }).addTo(m);
  }
  L.geoJSON(D.konteks, { interactive: false, style: { fillColor: '#f4f4f4', fillOpacity: 1, color: '#c6c6c6', weight: 1 } }).addTo(m);
  // garis tebal di bawah isi putih kecamatan: yang tersisa terlihat hanya batas luar kabupaten
  L.geoJSON(D.batas, { interactive: false, style: { fill: false, color: '#393939', weight: 3.5 } }).addTo(m);
  L.geoJSON(D.batas, { interactive: !!o.kalimatKec, style: f => ({ fillColor: '#fff', fillOpacity: 1, color: '#8d8d8d', weight: 1, ...(o.gayaKec ? o.gayaKec(f.properties.kecamatan) : {}) }),
    onEachFeature: (f, l) => { if (o.kalimatKec) l.bindTooltip(() => o.kalimatKec(f.properties.kecamatan, f.properties.kabupaten), { sticky: true, className: 'tip' }); } }).addTo(m);
  if (!o.diam) {
    D.label_peta.forEach(x => teksPeta(m, x.ll, x.teks, x.laut ? 'label-peta--laut' : 'label-peta--tetangga'));
    teksPeta(m, [119.6, -4.87], 'KAB. BARRU', 'label-peta--kab'); teksPeta(m, [120.13, -5.41], 'KAB. SINJAI', 'label-peta--kab');
    D.kecamatan.forEach(k => teksPeta(m, k.ll, k.kec, 'label-peta--kec'));
  }
  const kelasZoom = () => { el.classList.toggle('peta--dekat', m.getZoom() >= 10.25); el.classList.toggle('peta--rapat', m.getZoom() >= 11.5); };
  m.on('zoomend', kelasZoom);
  // pandangan dipulihkan setelah render ulang selama kuncinya sama; kalau tidak, paskan ke wilayah
  const kunci = `${S.path}|${el.id}|${S.kab}|${o.kunci || ''}`, lama = pandangan[kunci];
  if (lama) m.setView(lama.c, lama.z, { animate: false });
  else if (o.pusat) m.setView(ll(o.pusat), o.zoomPusat || 12, { animate: false });
  else m.fitBounds(o.batas || batasKab(S.kab), { paddingTopLeft: (o.bantalan || [12, 12]).slice(0, 2), paddingBottomRight: [12, (o.bantalan || [12, 12, 12])[2]], animate: false });
  m.on('moveend', () => { pandangan[kunci] = { c: m.getCenter(), z: m.getZoom() }; });
  kelasZoom();
  petaAktif.push(m);
  return m;
}
const teksPeta = (m, p, t, kelas) => L.marker(ll(p), { interactive: false, keyboard: false, icon: L.divIcon({ className: 'label-peta ' + kelas, html: `<span>${t}</span>`, iconSize: [0, 0] }) }).addTo(m);
const kalimatKelompok = k => `${k.id} (${DESA[k.desa].label}, Kec. ${k.kec}): ${k.prioritas ? 'kelompok prioritas' : 'bukan prioritas'}${k.belum ? ', belum menerima program apa pun' : ''}. Kapasitas ${k.kategori} (skor ${k.skor}).`;
const SVG_TITIK = {
  prio: w => `<rect x="5.8" y="5.8" width="8.4" height="8.4" transform="rotate(45 10 10)" fill="${w}" stroke="#fff"/>`,
  lain: (w, r = 4) => `<circle cx="10" cy="10" r="${r}" fill="${w}" stroke="#fff"/>`,
  kotak: w => `<rect x="6" y="6" width="8" height="8" fill="${w}" stroke="#fff"/>`,
  cincin: () => `<circle cx="10" cy="10" r="8.5" fill="#fff" fill-opacity=".7" stroke="${W.bahaya}" stroke-width="1.5" stroke-dasharray="3 2"/>`,
  lubang: () => '<circle cx="10" cy="10" r="4.5" fill="#fff" stroke="#161616" stroke-width="2.5"/>',
};
const svgTitik = isi => `<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">${isi}</svg>`;
const statusRencana = k => (k.rencana ? k.rencana.status : 'TANPA');
// Gaya titik kelompok per topik: k → {isi: svg, z} atau null (tidak digambar). `sar` = saringan aktif (boleh null).
const GAYA = {
  // ◆ prioritas, ● lainnya, cincin putus-putus = belum terlayani; yang tidak cocok saringan dipudarkan
  prioritas: (o = {}) => k => {
    const cocok = !o.cocok || o.cocok(k), prio = k.prioritas && !o.polos;
    const w = prio ? (cocok ? W.prio : W.prioRedup) : cocok ? (o.gelap ? '#161616' : W.lain) : W.redup;
    return { z: cocok ? (k.prioritas ? 300 : 200) : 100, isi: (k.belum && cocok && !o.polos ? SVG_TITIK.cincin() : '') + (prio ? SVG_TITIK.prio(w) : SVG_TITIK.lain(w, cocok ? 4 : 3)) };
  },
  layanan: sar => k => {
    const l = DIM.layanan.f(k), pilih = !sar || sar.cocok(k);
    if (l === 'belum') return { z: 300, isi: (pilih ? SVG_TITIK.cincin() : '') + SVG_TITIK.prio(pilih ? W.prio : W.prioRedup) };
    if (l === 'terlayani') return { z: 200, isi: SVG_TITIK.prio(sar && !pilih ? W.prioRedup : sar ? W.prio : W.prioRedup) };
    if (l === 'tumpang') return { z: 250, isi: SVG_TITIK.kotak(pilih || !sar ? W.satu : '#8d8d8d') };
    return { z: 100, isi: SVG_TITIK.lain(W.redup, 3) };
  },
  rencana: sar => k => {
    const s = statusRencana(k);
    if (s === 'TANPA') return null;
    if (sar && !sar.cocok(k)) return { z: 100, isi: SVG_TITIK.lain(W.redup, 3) };
    return { z: 300, isi: s === 'BELUM' ? SVG_TITIK.lubang() : SVG_TITIK.lain(s === 'BERJALAN' ? W.b60 : W.b90, 4) };
  },
  // titik netral: dipakai bila rincian per kelompok tidak boleh tampil (kepengurusan)
  netral: () => () => ({ z: 100, isi: SVG_TITIK.lain(W.lain, 3) }),
};
/* Titik kelompok di pusat desa generik (lokasi dikaburkan). Titik satu desa disusun melingkar dalam piksel
   supaya tidak bertumpuk. o: {gaya(k), jari, klik(k)} */
function titikKelompok(m, daftar, o = {}) {
  const perDesa = {}, gaya = o.gaya || GAYA.prioritas();
  daftar.forEach(k => (perDesa[k.desa] = perDesa[k.desa] || []).push(k));
  for (const [id, isi] of Object.entries(perDesa)) isi.forEach((k, i) => {
    const g = gaya(k);
    if (!g) return;
    const r = isi.length > 1 || o.jari ? (o.jari || 11) : 0, a = 2 * Math.PI * i / isi.length - Math.PI / 2, dx = r * Math.cos(a), dy = r * Math.sin(a);
    L.marker(ll(DESA[id].ll), { keyboard: false, zIndexOffset: g.z, icon: L.divIcon({ className: 'titik', html: svgTitik(g.isi), iconSize: [20, 20], iconAnchor: [10 - dx, 10 - dy] }) })
      .bindTooltip((o.kalimat || kalimatKelompok)(k), { className: 'tip', direction: 'top', offset: [dx, dy - 8] })
      .on('click', () => o.klik && o.klik(k)).addTo(m);
  });
}
/* Nilai indikator per desa: lingkaran tiga kelas (Blue 40/60/90) di pusat desa generik.
   nilai: {idDesa: {v, tutup, kalimat, luar, pilih}}; luar = di luar pilihan (abu), pilih = bercincin biru */
const KELAS = [W.b40, W.b60, W.b90];
function titikDesa(m, nilai, batas, klik, r = 7) {
  for (const [id, x] of Object.entries(nilai)) {
    const w = x.luar || x.tutup ? W.redup : KELAS[(x.v >= batas[0]) + (x.v >= batas[1])];
    L.circleMarker(ll(DESA[id].ll), { radius: x.luar ? r - 2 : r, color: x.pilih ? '#0f62fe' : '#fff', weight: x.pilih ? 3 : 1, fillColor: w, fillOpacity: 1 })
      .bindTooltip(x.kalimat, { className: 'tip', direction: 'top', offset: [0, -r] }).on('click', () => klik(id)).addTo(m);
  }
}
const keterangan = (m, p, html, arahTip = 'right', dy = 0) => L.tooltip({ permanent: true, className: 'keterangan', direction: arahTip, offset: arahTip === 'right' ? [16, dy] : arahTip === 'left' ? [-16, dy] : [0, -14] })
  .setLatLng(ll(p)).setContent(html).addTo(m);
const bulat = (w, r = 4) => svgTitik(SVG_TITIK.lain(w, r));
const petak = w => svgTitik(`<rect x="3" y="5" width="14" height="10" fill="${w}" stroke="#8d8d8d"/>`);   // contoh warna isi kecamatan
const LEGENDA_TITIK = {
  prio: [svgTitik(SVG_TITIK.prio(W.prio)), 'Kelompok prioritas'], lain: [bulat(W.lain), 'Kelompok lain'],
  gelap: [bulat('#161616'), 'Bukan prioritas'], belum: [svgTitik(SVG_TITIK.cincin()), 'Belum terlayani'],
  redup: [bulat(W.redup, 3), 'Tidak cocok saringan'], luar: [bulat(W.redup, 3), 'Di luar pilihan'],
  pilih: ['<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="6" fill="#fff" stroke="#0f62fe" stroke-width="2.5"/></svg>', 'Desa dipilih'],
};
const legendaPeta = butir => `<ul class="legenda-peta">${butir.map(b => (typeof b === 'string' ? LEGENDA_TITIK[b] : b)).map(([s, t]) => `<li>${s}<span>${t}</span></li>`).join('')}</ul>`;
const LEGENDA_TOPIK = {
  layanan: [[svgTitik(SVG_TITIK.cincin() + SVG_TITIK.prio(W.prio)), 'Prioritas, belum terlayani'], [svgTitik(SVG_TITIK.prio(W.prioRedup)), 'Prioritas, sudah terlayani'], [svgTitik(SVG_TITIK.kotak(W.satu)), 'Tumpang tindih program'], [bulat(W.redup, 3), 'Kelompok lain']],
  rencana: [[svgTitik(SVG_TITIK.lubang()), 'Belum mulai'], [bulat(W.b60), 'Berjalan'], [bulat(W.b90), 'Selesai']],
};
const legendaKelas = ind => IND[ind].kelas.label.map((l, i) => [bulat(KELAS[i], 5), l]);

/* ---------- kalimat temuan (templat + data; ikut saringan kabupaten) ---------- */
const TEMUAN = {
  prioritas() {
    const k = D.kelompok.filter(diKab), p = k.filter(x => x.prioritas);
    return `${p.length} dari ${k.length} kelompok${di()} perlu dibantu dulu — ${p.filter(x => x.belum).length} di antaranya belum menerima program apa pun.`;
  },
  akses() {
    const r = D.responden.filter(diKab), s = IND.biaya.hitung(r);
    const beda = kabAktif().map(kb => { const f = j => IND.biaya.hitung(r.filter(x => x.kab === kb && x.jk === j)).v; return Math.round(f('L') - f('P')); });
    const lo = Math.min(...beda), hi = Math.max(...beda);
    return `Hanya ${Math.round(s.v)} dari 100 pelaku usaha${di()} punya akses pembiayaan formal — perempuan ${lo === hi ? lo : `${lo}–${hi}`} poin lebih rendah dari laki-laki.`;
  },
  iklim() {
    const r = D.responden.filter(diKab), pulau = r.filter(x => x.tipe === 'PULAU');
    if (!pulau.length) {
      const m = median(r.map(x => x.hari));
      return `Di ${S.kab}, pelaku usaha kehilangan ${nf(m)} hari usaha setahun karena cuaca (median) — ${arah(m, ACUAN.hari.v)} median gabungan ${ACUAN.hari.v} hari.`;
    }
    const mp = median(pulau.map(x => x.hari)), n = mp / median(r.filter(x => x.kab === 'Sinjai' && x.tipe === 'DARATAN').map(x => x.hari));
    return `Di pulau kecil, pelaku usaha kehilangan ${nf(mp)} hari melaut setahun karena cuaca — ${n >= 1.75 && n < 2 ? 'hampir 2×' : nf(n, 1) + '×'} desa daratan di Sinjai.`;
  },
  gedsi() {
    const s = kursi(agrWil(S.kab));
    return `Perempuan mengisi ${s.teks} kursi pengurus kelompok${di()} (${tampilSel(s.p)} dari ${s.t} kursi)${S.kab ? '' : ` — Barru ${kursi(agrWil('Barru')).teks}, Sinjai ${kursi(agrWil('Sinjai')).teks}`}.`;
  },
  program() {
    const k = D.kelompok.filter(diKab);
    return `${k.filter(x => x.belum).length} kelompok prioritas${di()} belum dijangkau program; ${k.filter(x => x.tumpang.length).length} kelompok lain menerima bantuan sejenis dari lebih dari satu dinas.`;
  },
  rencana() {
    const p = D.kelompok.filter(x => diKab(x) && x.rencana), n = s => p.filter(x => x.rencana.status === s).length;
    return `${n('BERJALAN')} dari ${p.length} rencana aksi${di()} sedang berjalan, ${n('SELESAI')} selesai, dan ${n('BELUM')} belum dimulai.`;
  },
};
const butuhTeratas = (a, n = 5) => Object.keys(KODE.kebutuhan).map(kd => ({ kd, label: KODE.kebutuhan[kd], n: a.filter(x => x.butuh.includes(kd)).length }))
  .sort((x, y) => y.n - x.n).slice(0, n);

/* Enam pertanyaan pengguna = menu utama. dim = dimensi yang disaring lewat klik grafik di halaman itu
   (halaman "akses" menyaring lewat kabupaten). */
const TANYA = {
  prioritas: { judul: 'Kelompok mana yang perlu dibantu dulu?', pendek: 'Perlu dibantu dulu', ikon: 'star', dim: 'kapasitas', kata: 'Sedang disaring', kePeta: 'status:prioritas',
    definisi: 'Skor kapasitas (0–100) menggabungkan tata kelola, legalitas, pencatatan, jejaring, akses program, dan keaktifan [usulan]. Indeks kebutuhan (0–100) = seberapa besar dukungan yang dibutuhkan. Prioritas ditetapkan di lokakarya bersama Dinas Perikanan.',
    catatan: [['Belum diputuskan: bobot skor dan batas kelas', 'Bobot skor kapasitas dan batas rendah/sedang/tinggi masih [usulan]; ditetapkan bersama Dinas Perikanan. (Pertanyaan 8 di laporan)'],
      ['Belum diputuskan: unit analisis', 'Halaman ini dihitung per kelompok; pemilah jenis kelamin dan umur tidak berlaku di sini. (Pertanyaan 4 di laporan)']] },
  akses: { judul: 'Siapa yang sulit mendapat modal dan pasar?', pendek: 'Modal dan pasar', ikon: 'wallet', dim: null, ind: 'biaya', kata: 'Sedang dipilih', kePeta: null,
    definisi: `Pembiayaan formal = kredit atau pembiayaan dari bank, BPR, penyalur KUR, koperasi, LKM, atau pegadaian dalam 12 bulan terakhir. Pembanding sementara: rata-rata gabungan Barru + Sinjai ${ACUAN.biaya.teks} (${ACUAN.biaya.k} dari ${ACUAN.biaya.n} responden).`,
    catatan: [['Data sensitif: ikatan modal dengan punggawa', 'Pinjaman atau panjar yang mewajibkan menjual hasil ke pemberi modal hanya ditampilkan agregat per kecamatan, tidak per kelompok atau orang.'],
      ['Belum diputuskan: pemantauan harga pasar', 'Harga di TPI/pasar yang dicatat berkala butuh enumerator tetap dan bersifat opsional. Bergantung anggaran (Pertanyaan 3 di laporan).']] },
  iklim: { judul: 'Seberapa terdampak cuaca dan iklim?', pendek: 'Cuaca dan iklim', ikon: 'cloud', dim: 'tipe', ind: 'hari', kata: 'Sedang dipilih', kePeta: 'tipe:PULAU',
    definisi: `Hari hilang = jumlah hari tidak bisa melaut, panen, atau berjualan karena cuaca buruk dalam 12 bulan terakhir; angka per wilayah adalah median responden. Pembanding sementara: median gabungan Barru + Sinjai ${ACUAN.hari.teks}.`,
    catatan: [['Belum diputuskan: definisi dampak iklim', 'Apakah daftar kejadian sudah cukup, atau perlu indikator lain seperti suhu permukaan laut dan penyakit rumput laut (Pertanyaan 10 di laporan).'],
      ['Opsional: data gelombang BMKG', 'Ringkasan bulanan tinggi gelombang dan angin dari stasiun BMKG terdekat bisa ditambahkan sebagai pembanding kalender musim, bila tim memutuskan mengambilnya.']] },
  gedsi: { judul: 'Apakah perempuan dan kelompok rentan ikut serta?', pendek: 'Perempuan dan kelompok rentan', ikon: 'user--multiple', dim: 'porsi', ind: 'rapat', kata: 'Sedang dipilih', kePeta: null,
    definisi: 'Porsi pengurus perempuan = jumlah pengurus perempuan ÷ jumlah seluruh pengurus, dihitung per kelompok; kelompok dengan jumlah pengurus 0 atau tidak diketahui dikeluarkan dari rata-rata. Pembanding sementara: gabungan Barru + Sinjai. GEDSI = kesetaraan gender, disabilitas, dan inklusi sosial.',
    catatan: [['Belum diputuskan: kuota kelompok rentan', 'Angka kuota per kelompok rentan belum tercantum di sumber dan perlu ditetapkan tim. Angka di grafik kuota hanya contoh.'],
      ['Belum diputuskan: rumah tangga miskin', 'Indikator operasional belum disepakati, jadi dasbor menulis "penerimaan bantuan sosial", bukan "rumah tangga miskin" (Pertanyaan 11 di laporan).'],
      ['Belum diputuskan: kuesioner pengurus', 'Angka kepengurusan butuh kuesioner singkat untuk pengurus tiap kelompok (Pertanyaan 4 di laporan).']] },
  program: { judul: 'Siapa yang sudah dan belum dibantu program?', pendek: 'Sudah/belum dibantu', ikon: 'link', dim: 'layanan', kata: 'Sedang dipilih', kePeta: 'layanan:belum',
    definisi: 'Terlayani = kelompok menerima minimal satu program atau bantuan dalam 3 tahun terakhir. Tumpang tindih = menerima program sejenis dari lebih dari satu pihak. Pembanding sementara: rata-rata gabungan kelompok prioritas yang sudah terlayani.',
    catatan: [['Belum diputuskan: akses data dinas', 'Data KUSUKA dan daftar kelompok dari penyuluh: agregat per desa atau daftar per kelompok, dan apakah perlu perjanjian berbagi data (Pertanyaan 5 di laporan).'],
      ['Ketersediaan data OPD', 'Format dan frekuensi pemutakhiran dataset tiap OPD berbeda. Daftar program di halaman ini diperbarui tahunan.']] },
  rencana: { judul: 'Apakah rencana aksi berjalan?', pendek: 'Rencana aksi', ikon: 'task--complete', dim: 'rencana', kata: 'Sedang dipilih', kePeta: 'rencana:BELUM',
    definisi: 'Rencana aksi = hasil diskusi kelompok (PRA) untuk tiap kelompok prioritas, dipantau triwulanan: belum mulai, berjalan, selesai. Semua target paling lambat Sep 2027 (akhir proyek). Pembanding sementara: rata-rata gabungan rencana yang selesai.',
    catatan: [['Belum diputuskan: pembaruan data', 'Proyek berakhir Sep 2027. Survei ulang belum dijadwalkan, jadi perubahan skor kapasitas dan perbandingan baseline hanya tampil bila ada pembaruan (Pertanyaan 7 di laporan).'],
      ['Realisasi program terhadap target', 'Capaian output program OPD dibanding target tahunan bisa ditambahkan bila OPD berbagi data realisasi.']] },
};

/* ---------- halaman 1: beranda ---------- */
function halBeranda() {
  const k = D.kelompok.filter(diKab), r = D.responden.filter(diKab), prio = k.filter(x => x.prioritas), belum = prio.filter(x => x.belum);
  const semuaPrio = D.kelompok.filter(x => x.prioritas);
  const kartu = (no, q, isi, peta = '') => `<section class="kartu temuan ${peta ? 'temuan--lebar' : ''}" aria-labelledby="t${no}">${peta ? '<div>' : ''}
    <p class="temuan__tanya"><span class="temuan__no">${no}</span>${ikon(TANYA[q].ikon)}<a href="${url('/pertanyaan/' + q)}">${TANYA[q].judul}</a></p>
    <h2 class="temuan__kalimat" id="t${no}">${TEMUAN[q]()}</h2>${isi}
    <p class="temuan__aksi">${tombol(url('/peta', { q, f: q === 'iklim' && S.kab === 'Barru' ? null : q === 'akses' ? 'jk:P' : TANYA[q].kePeta }), 'Lihat di peta', 'map')}${tombol(url('/pertanyaan/' + q), 'Jelajahi', 'chevron--right', 'tersier')}</p>
    ${peta ? '</div>' + peta : ''}</section>`;

  // 1 — prioritas
  const perKec = {};
  prio.forEach(x => { const o = perKec[x.kec] = perKec[x.kec] || { kec: x.kec, kab: x.kab, n: 0, b: 0 }; o.n++; o.b += x.belum; });
  const kecAtas = Object.values(perKec).sort((a, b) => b.n - a.n || b.b - a.b).slice(0, 3);
  const porsi = kb => { const a = D.kelompok.filter(x => x.kab === kb), p = a.filter(x => x.prioritas).length; return `${kb} ${p} dari ${a.length} kelompok (${nf(100 * p / a.length)}%)`; };
  const isi1 = `<dl class="kpi">
      <div><dt>kelompok prioritas</dt><dd class="kpi--prio">${prio.length}</dd></div>
      <div><dt>belum menerima program</dt><dd class="kpi--galat">${belum.length}</dd></div>
      <div><dt>berkapasitas rendah (${k.filter(x => x.kategori === 'rendah' && x.prioritas).length} prioritas)</dt><dd>${k.filter(x => x.kategori === 'rendah').length}</dd></div></dl>
    <div class="kec-atas"><h3>Kecamatan dengan kelompok prioritas terbanyak</h3><ul>${kecAtas.map(o => `<li><span>Kec. ${o.kec} (${o.kab})</span><span>${o.n} prioritas · ${o.b ? `${o.b} belum terlayani` : 'semua terlayani'}</span></li>`).join('')}</ul></div>
    ${catatan(`${kabAktif().map(porsi).join(' · ')} · pembanding sementara: rata-rata gabungan ${nf(100 * semuaPrio.length / D.kelompok.length)}%.`)}`;
  const peta1 = `<div><div class="peta" id="peta-beranda" role="img" aria-label="Peta kecamatan Barru dan Sinjai dengan titik kelompok prioritas"></div>
    ${legenda([[`background:${W.prio};transform:rotate(45deg) scale(.8)`, 'Kelompok prioritas'], [`border:1.5px dashed ${W.bahaya};border-radius:50%`, 'Belum menerima program'], ['border:1px solid #161616;border-radius:50%', 'Desa (titik pusat dikaburkan)']])}</div>`;

  // 2 — akses pembiayaan menurut jenis kelamin
  const b2 = kabAktif().flatMap(kb => ['P', 'L'].map(j => {
    const s = IND.biaya.hitung(r.filter(x => x.kab === kb && x.jk === j), 1);
    return { label: `${kb} · ${DIM.jk.opsi[j]}`, v: s.v, teks: s.teks, warna: W[j], kunci: kb.toLowerCase(), kalimat: `${kb}, ${DIM.jk.opsi[j]}: ${IND.biaya.kalimat(s)} — ${arah(s.v, ACUAN.biaya.v)} rata-rata gabungan ${ACUAN.biaya.teks}.` };
  }));
  const isi2 = `${legenda([[`background:${W.P}`, 'Perempuan'], [`background:${W.L}`, 'Laki-laki']])}<div class="grafik" id="g-biaya"></div>
    ${catatan(`Pembanding sementara: rata-rata gabungan ${ACUAN.biaya.teks} (${ACUAN.biaya.k} dari ${ACUAN.biaya.n} responden). Pembiayaan formal = bank, KUR, koperasi, atau lembaga keuangan resmi.`)}`;

  // 3 — hari usaha hilang
  const b3 = kabAktif().flatMap(kb => ['DARATAN', 'PULAU'].map(t => {
    const s = IND.hari.hitung(r.filter(x => x.kab === kb && x.tipe === t));
    return s.n ? { label: `${kb} · ${t === 'PULAU' ? 'pulau kecil' : 'daratan'}`, v: s.v, teks: s.teks, warna: t === 'PULAU' ? W.bahaya : W.satu, kunci: t,
      kalimat: `${kb}, ${KODE.tipe_wilayah[t]}: ${IND.hari.kalimat(s)} — ${arah(s.v, ACUAN.hari.v)} median gabungan ${ACUAN.hari.teks}.` } : null;
  })).filter(Boolean);
  const kg = kursi(agrWil(S.kab));   // ikut sakelar kabupaten, sama dengan halaman GEDSI
  const isi3 = `<div class="grafik" id="g-hari"></div>
    ${b3.some(b => b.kunci === 'PULAU') ? `<p class="peringatan peringatan--merah">${ikon('warning--alt--filled')}Kec. Pulau Sembilan: penyeberangan dan gelombang tinggi ${bulanBuruk()}</p>` : ''}
    ${catatan(`Pembanding sementara: median gabungan ${ACUAN.hari.teks}. Juga: <a href="${url('/pertanyaan/gedsi')}">perempuan mengisi ${kg.teks} kursi pengurus kelompok${di()}</a> (GEDSI = kesetaraan gender, disabilitas, dan inklusi sosial).`)}`;

  // 4 — sudah/belum terlayani
  const tumpang = k.filter(x => x.tumpang.length), hitungJenis = {};
  tumpang.forEach(x => { const j = x.tumpang[0], p = [...new Set(x.program.filter(e => e.jenis === j).map(e => e.pemberi))].sort(); const kc = j + '|' + p.join('+'); hitungJenis[kc] = (hitungJenis[kc] || 0) + 1; });
  const [atasJenis] = Object.entries(hitungJenis).sort((a, b) => b[1] - a[1]);
  const isi4 = `${legenda([[`background:${W.b60}`, 'Sudah terlayani'], [`background:#fff1f1;border:1px solid ${W.bahaya}`, 'Belum terlayani']])}<div class="grafik" id="g-layanan"></div>
    ${atasJenis ? `<p class="peringatan">${ikon('link')}Tumpang tindih: ${tumpang.length} kelompok · terbanyak ${KODE.bantuan[atasJenis[0].split('|')[0]].toLowerCase()} (${atasJenis[0].split('|')[1].split('+').map(p => KODE.penyelenggara[p]).join(' + ')})</p>` : ''}
    ${catatan(`Pembanding sementara: rata-rata gabungan ${nf(100 * semuaPrio.filter(x => !x.belum).length / semuaPrio.length)}% kelompok prioritas sudah terlayani (${semuaPrio.filter(x => !x.belum).length} dari ${semuaPrio.length}).`)}`;

  // 5 — rencana aksi
  const ber = D.kelompok.filter(x => x.rencana), selesai = a => a.filter(x => x.rencana.status === 'SELESAI').length;
  const isi5 = `${legenda([['background:#f4f4f4;border:1px solid #8d8d8d', 'Belum mulai'], [`background:${W.b60}`, 'Berjalan'], [`background:${W.b90}`, 'Selesai']])}<div class="grafik" id="g-rencana"></div>
    ${catatan(`Pembanding sementara: rata-rata gabungan ${nf(100 * selesai(ber) / ber.length)}% selesai. ${kabAktif().map(kb => { const a = ber.filter(x => x.kab === kb); return `${kb} ${selesai(a)} dari ${a.length} (${nf(100 * selesai(a) / a.length)}%)`; }).join(', ')}.`)}`;

  return {
    judul: 'Apa yang perlu diketahui',
    html: `<div class="halaman">
      <div class="beranda-atas"><div><h1 class="judul">Apa yang perlu diketahui</h1>
        <p class="subjudul">Lima temuan utama tentang kelompok usaha pesisir di ${S.kab || 'Barru dan Sinjai'} — satu per fungsi dasbor. Klik "Lihat di peta" untuk menelusuri tempatnya.</p>
        <p class="meta">Data contoh · mewakili survei ${D.meta.periode} · ${nf(r.length)} responden, ${k.length} kelompok · dibangkitkan 23 Nov 2026</p></div>
        ${callout('', 'Pembanding sementara = rata-rata gabungan Barru + Sinjai. Target resmi menunggu kesepakatan tim dan dinas.')}</div>
      <nav class="pintas" aria-label="Langsung ke pertanyaan"><strong>Langsung ke pertanyaan:</strong>${Object.entries(TANYA).map(([id, t]) => `<a class="tag tag--lg tag--gray" href="${url('/pertanyaan/' + id)}">${t.judul}${ikon('chevron--right')}</a>`).join('')}</nav>
      ${kartu(1, 'prioritas', isi1, peta1)}
      <div class="kisi-2">${kartu(2, 'akses', isi2)}${kartu(3, 'iklim', isi3)}${kartu(4, 'program', isi4)}${kartu(5, 'rencana', isi5)}</div>
      <div class="kisi-3">${callout('Belum diputuskan: unit analisis', 'Temuan dihitung per kelompok dan sebagai agregat responden. Tidak ada tampilan per orang. (Pertanyaan 4 di laporan)')}
        ${callout('Belum diputuskan: platform', 'Sketsa ini netral platform. Alat, hosting, dan pemelihara belum diputuskan. (Pertanyaan 2 di laporan)')}
        ${callout('Pemilihan temuan', 'Lima temuan ini contoh; pilihan akhir oleh tim riset bersama Dinas Perikanan.')}</div></div>`,
    pasang() {
      const m = buatPeta($('#peta-beranda'), { kalimatKec: (kec, kab) => { const o = perKec[kec]; return `Kec. ${kec} (${kab}): ${o ? `${o.n} kelompok prioritas, ${o.b ? `${o.b} belum terlayani` : 'semua sudah terlayani'}` : 'tidak ada kelompok prioritas'}.`; } });
      if (m) {
        D.desa.filter(diKab).forEach(d => L.circleMarker(ll(d.ll), { radius: 3, color: '#161616', weight: 1, fillColor: '#fff', fillOpacity: 1, interactive: false }).addTo(m));
        titikKelompok(m, prio, { klik: x => { location.hash = url('/peta', { q: 'prioritas', desa: x.desa }); } });
        const o = Object.values(perKec).sort((a, b) => b.b - a.b)[0];
        if (o && o.b) L.tooltip({ permanent: true, direction: 'right', className: 'keterangan', offset: [16, 0] }).setLatLng(ll(DESA[belum.find(x => x.kec === o.kec).desa].ll))
          .setContent(`<b>${o.kec}: ${o.b} kelompok</b><span class="merah">prioritas belum terlayani</span>`).addTo(m);
      }
      batang('#g-biaya', { baris: b2, garis: { v: ACUAN.biaya.v, label: `rata-rata gabungan ${ACUAN.biaya.teks}` }, onKlik: v => { location.hash = url('/pertanyaan/akses', { kab: v }); } });
      batang('#g-hari', { baris: b3, garis: { v: ACUAN.hari.v, label: `median gabungan ${ACUAN.hari.teks}` }, onKlik: t => { location.hash = url('/pertanyaan/iklim', { f: 'tipe:' + t }); } });
      const kb = kabAktif(), n = (f) => kb.map(nama => prio.filter(x => x.kab === nama && f(x)).length);
      tumpuk('#g-layanan', { baris: kb, onKlik: v => { location.hash = url('/pertanyaan/program', { f: v }); },
        seri: [{ nama: 'Sudah terlayani', warna: W.b60, v: n(x => !x.belum), kunci: 'layanan:terlayani' }, { nama: 'Belum terlayani', warna: '#fff1f1', tepi: W.bahaya, teks: W.bahaya, v: n(x => x.belum), kunci: 'layanan:belum' }],
        kalimat: (s, i) => `${kb[i]}: ${s.v[i]} dari ${prio.filter(x => x.kab === kb[i]).length} kelompok prioritas ${s.nama.toLowerCase()} program.` });
      const st = s => kb.map(nama => ber.filter(x => x.kab === nama && x.rencana.status === s).length);
      tumpuk('#g-rencana', { baris: kb, onKlik: v => { location.hash = url('/pertanyaan/rencana', { f: v }); },
        seri: [{ nama: 'belum mulai', warna: '#f4f4f4', tepi: '#8d8d8d', teks: '#161616', v: st('BELUM'), kunci: 'rencana:BELUM' }, { nama: 'berjalan', warna: W.b60, v: st('BERJALAN'), kunci: 'rencana:BERJALAN' }, { nama: 'selesai', warna: W.b90, v: st('SELESAI'), kunci: 'rencana:SELESAI' }],
        kalimat: (s, i) => `${kb[i]}: ${s.v[i]} dari ${ber.filter(x => x.kab === kb[i]).length} rencana aksi ${s.nama}.` });
    },
  };
}

/* ---------- halaman 2–7: pertanyaan (kalimat temuan → peta + grafik yang saling menyaring → tabel) ---------- */
function kerangkaTanya(c, x) {
  const { t } = c;
  return `<div class="halaman">
    <nav class="remah" aria-label="Remah roti"><a href="${url('/beranda')}">Beranda</a><span aria-hidden="true">›</span><span>Pertanyaan</span><span aria-hidden="true">›</span><span aria-current="page">${t.judul}</span></nav>
    <h1 class="judul judul--ikon">${ikon(t.ikon, 'ikon--24')}${t.judul}</h1>
    <p class="temuan__kalimat" style="max-width:1100px">${x.temuan}</p>
    <p class="definisi">${ikon('information')}<span>${t.definisi}</span></p>
    <div class="bilah-saring">${ikon('filter')}<strong>${x.pilihan ? t.kata + ':' : 'Belum ada pilihan'}</strong>
      ${x.pilihan ? `<a class="tag tag--blue" href="${x.hapus}" aria-label="Hapus pilihan ${x.pilihan}">${x.pilihan}${ikon('close')}</a>` : ''}
      <span>${x.ringkas}</span>${x.pilihan ? `<a class="bilah-saring__ulang" href="${x.hapus}">Atur ulang</a>` : ''}</div>
    <div class="tanya-atas">
      <section class="kartu tanya-peta"><div class="peta" id="peta-tanya" role="img" aria-label="${x.peta.judul}: peta kecamatan Barru dan Sinjai"></div>
        <div class="tanya-peta__sisi"><h2 class="judul-kartu">${x.peta.judul}</h2><p>${x.peta.teks}</p>${legendaPeta(x.peta.legenda)}${x.peta.daftar || ''}
          <button class="tombol tombol--tersier" type="button" data-zoom="Barru">Perbesar Barru${ikon('search')}</button><button class="tombol tombol--tersier" type="button" data-zoom="Sinjai">Perbesar Sinjai${ikon('search')}</button>
          ${tombol(url('/peta', { q: c.id, f: c.sar && c.sar.d.agregat ? null : S.q.f }), 'Buka penjelajah', 'map')}</div></section>
      <div class="tanya-kanan">${x.atas.map(kartuGrafik).join('')}</div></div>
    ${x.bawah}
    <div class="kisi-${t.catatan.length > 2 ? 3 : 2}">${t.catatan.map(([a, b]) => callout(a, b)).join('')}</div></div>`;
}
function halTanya(id) {
  const t = TANYA[id], s = saringan();
  const c = { id, t, sar: s && s.dim === t.dim ? s : null, k: D.kelompok.filter(diKab), r: D.responden.filter(diKab), pasang: [] };
  const x = HAL[id](c);
  return { judul: t.judul, pendek: t.pendek, html: kerangkaTanya(c, x),
    pasang() { c.pasang.forEach(f => f()); const m = petaUtama = buatPeta($('#peta-tanya'), { kunci: id, batas: window.L && batasKab(null), ...x.peta.opsi }); if (m) x.peta.pasang(m); } };
}
// Kartu grafik halaman pertanyaan: mendaftarkan pemasangnya di c.pasang
const grafikTanya = (c, id, judul, sub, pasang, ekstra = '') => { c.pasang.push(pasang); return { id, judul, sub, ekstra }; };
const sumber = teks => `<p class="sumber">${teks ? teks + ' · ' : ''}Sumber: data contoh (dibangkitkan, seed tetap)</p>`;
const dipilih = (teks, opsi, dim, sar) => `<p class="pilihan"><span>${sar ? ikon('checkmark') + ` Dipilih: "${teks}" — klik lagi untuk membatalkan.` : 'Pilih juga lewat tombol:'}</span>${
  opsi.map(([v, l]) => `<button type="button" data-f="${dim}:${v}" aria-pressed="${!!sar && sar.val === v}">${l}</button>`).join('')}</p>`;
const gantiSaring = f => ubah({ f: S.q.f === f ? null : f, semua: null });
const perKab = (a, f = () => true) => kabAktif().map(kb => `${kb} ${a.filter(x => x.kab === kb && f(x)).length}`).join(', ');
const modus = (rows, f, kamus) => { const n = {}; rows.forEach(r => [].concat(f(r)).forEach(v => { n[v] = (n[v] || 0) + 1; })); const [a] = Object.entries(n).sort((x, y) => y[1] - x[1]); return a ? kapital(kamus[a[0]]) : '–'; };
/* Baris "% responden" per kategori untuk himpunan terpilih `rs`. Bila rs bukan seluruh responden, tiap baris
   diberi tanda dan teks "gabungan" (Barru + Sinjai). f(r) → kode atau daftar kode. Di bawah 5 orang tampil "<5". */
function barisSebaran(rs, kamus, f, frasa, warna) {
  const semua = D.responden, bagian = rs.length !== semua.length, punya = (r, kd) => [].concat(f(r)).includes(kd);
  return Object.entries(kamus).map(([kd, l]) => {
    const s = persen(rs, r => punya(r, kd)), g = persen(semua, r => punya(r, kd));
    return { label: kapital(l), kd, k: s.tutup ? 0 : s.k, v: s.v, teks: s.teks, warna, tanda: bagian ? g.v : null, kanan: bagian ? `gabungan ${g.teks}` : '',
      kalimat: s.tutup ? null : `${s.teks} responden ${frasa(l)} (${s.k} dari ${s.n})${bagian ? `; gabungan Barru + Sinjai ${g.teks}` : ''}.` };
  }).sort((a, b) => (a.kd === 'LAIN') - (b.kd === 'LAIN') || b.k - a.k);
}
const ket = (c, rs, teks) => `${teks} · n = ${selKecil(rs.length)}${rs.length !== D.responden.length ? ' · garis abu = gabungan' : ''}`;

const HAL = {
  prioritas(c) {
    const { k, sar } = c, d = DIM.kapasitas, cocok = sar ? k.filter(sar.cocok) : k;
    const prio = cocok.filter(x => x.prioritas).length, belum = cocok.filter(x => x.belum).length, a2 = butuhTeratas(k, 2);
    const atas = butuhTeratas(k).map(a => ({ ...a, s: 100 * a.n / (k.length || 1), v: 100 * cocok.filter(x => x.butuh.includes(a.kd)).length / (cocok.length || 1) }));
    const baris = [...cocok].sort((a, b) => a.skor - b.skor || a.id.localeCompare(b.id));
    // tiga kecamatan dengan kelompok cocok terbanyak (hanya saat ada saringan)
    const per = {};
    cocok.forEach(x => { const o = per[x.kec] = per[x.kec] || { kec: x.kec, kab: x.kab, desa: x.desa, n: 0, b: 0, p: 0 }; o.n++; o.b += x.belum; o.p += x.prioritas; });
    const kecAtas = sar ? Object.values(per).sort((a, z) => z.n - a.n || z.b - a.b).slice(0, 3) : [];
    const rincianKec = o => `${o.n} ${d.opsi[sar.val]} · ${o.b ? `${o.b} belum terlayani` : o.p === o.n ? 'semuanya prioritas' : `${o.p} prioritas`}`;
    return {
      temuan: `${k.filter(x => x.prioritas).length} kelompok${di()} perlu dibantu dulu. Yang paling sering kurang: ${a2.map(x => `${x.label.toLowerCase()} (${nf(100 * x.n / k.length)}%)`).join(' dan ')}.`,
      pilihan: sar && sar.label, hapus: url(S.path, { ...S.q, f: null, semua: null }),
      ringkas: sar ? `${cocok.length} dari ${k.length} kelompok · ${prio} di antaranya prioritas · ${belum} belum terlayani` : `${k.length} kelompok · ${prio} prioritas · ${belum} belum terlayani. Klik batang grafik untuk menyaring peta dan daftar.`,
      peta: { judul: 'Peta kelompok', teks: `Titik di pusat desa generik (dikaburkan), di dalam kecamatan aslinya.${sar ? ' Yang tidak cocok dengan saringan dipudarkan.' : ''}`,
        legenda: sar ? [[LEGENDA_TITIK.prio[0], 'Prioritas (cocok saringan)'], [LEGENDA_TITIK.gelap[0], 'Bukan prioritas (cocok)'], 'belum', 'redup'] : ['prio', 'gelap', 'belum'],
        daftar: kecAtas.length ? `<p><strong>Kecamatan terbanyak</strong></p><ul class="kec-daftar">${kecAtas.map(o => `<li><strong>Kec. ${o.kec}</strong> (${o.kab}): ${rincianKec(o)}</li>`).join('')}</ul>` : '',
        pasang(m) {
          titikKelompok(m, k, { gaya: GAYA.prioritas({ cocok: sar && sar.cocok, gelap: true }), klik: x => { location.hash = url('/peta', { q: 'prioritas', desa: x.desa, f: S.q.f }); } });
          if (!sar) return;
          // satu keterangan per kabupaten (kecamatan teratasnya) supaya kotak tidak bertumpuk; sisanya ada di daftar samping peta
          ['Barru', 'Sinjai'].map(kb => kecAtas.find(o => o.kab === kb)).filter(Boolean).forEach(o => keterangan(m, DESA[o.desa].ll, `<b>Kec. ${o.kec}</b>${rincianKec(o)}`, o.kab === 'Barru' ? 'right' : 'left'));
        } },
      atas: [
        grafikTanya(c, 'g-utama', 'Kategori kapasitas kelompok', 'Jumlah kelompok · klik batang untuk menyaring peta dan daftar', () => batang('#g-utama', { lebarLabel: 90, pilih: sar && sar.val, redup: true, onKlik: v => gantiSaring('kapasitas:' + v),
          baris: Object.keys(d.opsi).map(v => { const n = k.filter(x => x.kategori === v).length; return { label: kapital(v), v: n, teks: String(n), kunci: v, warna: W.b60, kalimat: `${n} dari ${k.length} kelompok${di()} berkapasitas ${v}. Klik untuk menyaring peta dan daftar.` }; }) }),
        dipilih(sar && kapital(sar.val), Object.keys(d.opsi).map(v => [v, kapital(v)]), 'kapasitas', sar) + '<p class="sumber">Batas kelas [usulan]: rendah di bawah 45, sedang 45–64, tinggi 65 ke atas.</p>'),
        grafikTanya(c, 'g-butuh', 'Kebutuhan penguatan teratas', sar ? `% kelompok yang menyebut · ${cocok.length} kelompok terpilih vs semua ${k.length} (garis abu)` : `% kelompok yang menyebut · ${k.length} kelompok`,
          () => batang('#g-butuh', { maks: 100, lebarLabel: 160, baris: atas.map(a => ({ label: a.label, v: a.v, teks: nf(a.v) + '%', tanda: sar ? a.s : null, kanan: sar ? `semua ${nf(a.s)}%` : '',
            kalimat: `${nf(a.v)}% dari ${cocok.length} kelompok${sar ? ' terpilih' : ''} menyebut ${a.label.toLowerCase()} sebagai kebutuhan utama${sar ? ` (semua kelompok: ${nf(a.s)}%)` : ''}.` })) }))],
      bawah: kartuTabel({ id: 'peringkat', satuan: `kelompok${sar ? ' terpilih' : ''}`, judul: `Daftar peringkat — ${cocok.length} kelompok${sar ? ' berkapasitas ' + sar.val : ''}`,
        sub: 'Urut dari skor kapasitas terendah · ID pseudonim, tanpa nama orang · desa generik di kecamatan asli', kaki: 'Status prioritas ditetapkan di lokakarya validasi, tidak otomatis dari skor.', baris,
        kolom: [KOL.no, KOL.id, KOL.desa, KOL.kec, KOL.kab, { judul: 'Skor kapasitas', angka: true, sel: b => `<i class="batang-mini" style="width:${b.skor * 0.8}px"></i>${b.skor}`, csv: b => b.skor },
          { judul: 'Indeks kebutuhan', angka: true, sel: b => b.kebutuhan }, { judul: 'Status', sel: tagStatus }] }),
    };
  },

  akses(c) {
    const { r } = c, s = IND.biaya.hitung(r, 1), semua = D.responden, bagian = !!S.kab, wil = S.kab || 'Barru + Sinjai';
    const lain = (kode, grup) => x => (grup.includes(x[kode]) ? 'LAIN' : x[kode]);
    const kamus = (nama, pakai) => ({ ...Object.fromEntries(pakai.map(kd => [kd, KODE[nama][kd]])), LAIN: 'lainnya' });
    const rinci = (nama, kode, grup) => 'Lainnya = ' + grup.map(kd => `${KODE[nama][kd]} ${persen(r, x => x[kode] === kd).teks}`).join(', ');
    const modal = barisSebaran(r, kamus('sumber_modal', ['1', '2', '4', '3', '5']), lain('modal', '678'), l => `menyebut ${l} sebagai sumber modal kerja terbesar`);
    const ya = [['Ikut pelatihan (12 bulan)', x => x.latih.length > 0], ['Program pemerintah (2 th)', x => x.program.length > 0], ['Punya kartu KUSUKA', x => x.kusuka],
      ['Usaha formal (teregistrasi)', x => x.formal.length > 0], ['Punya pencatatan usaha', x => x.catat !== '0']];
    const nelayan = r.filter(x => x.usaha === '01'), dilatih = r.filter(x => x.latih.length);
    const desa = D.desa.map(d => { const rd = semua.filter(x => x.desa === d.id); return { d, rd, s: IND.biaya.hitung(rd, 1), luar: bagian && d.kab !== S.kab }; });
    const urut = desa.filter(x => !x.luar).sort((a, b) => a.s.v - b.s.v), [rendah] = urut;
    const tambahan = [
      grafikTanya(c, 'g-ya', 'Pelatihan, program, dan formalitas', ket(c, r, `% responden ${wil} yang menjawab ya`), () => batang('#g-ya', { maks: 100, lebarLabel: 190, baris: ya.map(([l, f]) => { const p = persen(r, f), g = persen(semua, f);
        return { label: l, v: p.v, teks: p.teks, tanda: bagian ? g.v : null, kanan: bagian ? `gabungan ${g.teks}` : '', kalimat: p.tutup ? null : `${p.teks} responden: ${l.toLowerCase()} (${p.k} dari ${p.n}).` }; }) })),
      grafikTanya(c, 'g-usaha', 'Jenis usaha utama', ket(c, r, `% responden ${wil}`), () => batang('#g-usaha', { lebarLabel: 190, baris: barisSebaran(r, KODE.jenis_usaha, x => x.usaha, l => `berusaha sebagai ${l}`) })),
      grafikTanya(c, 'g-status', 'Status dalam usaha', ket(c, r, `% responden ${wil}`), () => batang('#g-status', { lebarLabel: 190, baris: barisSebaran(r, KODE.status_usaha, x => x.status, l => `berstatus ${l}`) })),
      grafikTanya(c, 'g-komoditas', 'Komoditas utama', ket(c, r, `% responden ${wil}`), () => batang('#g-komoditas', { lebarLabel: 170, baris: barisSebaran(r, KODE.komoditas, x => x.komoditas, l => `mengusahakan ${l} sebagai komoditas utama`) })),
      grafikTanya(c, 'g-alat', 'Alat tangkap utama', `% nelayan tangkap ${wil} · n = ${selKecil(nelayan.length)}`, () => batang('#g-alat', { lebarLabel: 130, baris: Object.entries(KODE.alat_tangkap).map(([kd, l]) => { const p = persen(nelayan, x => x.alat === kd);
        return { label: kapital(l), v: p.v, k: p.k, teks: p.teks, kalimat: p.tutup ? null : `${p.teks} nelayan tangkap paling sering memakai ${l} (${p.k} dari ${p.n}).` }; }).sort((a, b) => b.k - a.k) })),
      grafikTanya(c, 'g-latih', 'Penyelenggara pelatihan', `% responden yang pernah dilatih · n = ${selKecil(dilatih.length)}`, () => batang('#g-latih', { lebarLabel: 190, baris: Object.entries(KODE.penyelenggara).map(([kd, l]) => { const p = persen(dilatih, x => x.latih.includes(kd));
        return { label: l, v: p.v, k: p.k, teks: p.teks, kalimat: p.tutup ? null : `${p.teks} responden yang pernah dilatih menyebut ${l} sebagai penyelenggara (${p.k} dari ${p.n}).` }; }).sort((a, b) => b.k - a.k) }))];
    return {
      temuan: `${TEMUAN.akses()} Modal kerja terbesar masih dari ${modal.slice(0, 2).map(b => `${b.label.toLowerCase()} (${b.teks})`).join(' dan ')}.`,
      pilihan: S.kab && `Kabupaten: ${S.kab}`, hapus: url(S.path, { kab: null }),
      ringkas: `${r.length} responden · ${s.k} punya pembiayaan formal (${s.teks})${bagian ? ' · peta, grafik, dan tabel mengikuti pilihan ini' : '. Klik batang kabupaten untuk memilih.'}`,
      peta: { judul: 'Pembiayaan formal per desa', teks: `Lingkaran di pusat desa generik (dikaburkan), di dalam kecamatan aslinya. Warna = % responden dengan pembiayaan formal.${bagian ? ` Desa di luar ${S.kab} diredupkan karena pilihan "${S.kab}".` : ''}`,
        legenda: [...legendaKelas('biaya'), ...(bagian ? ['luar'] : [])],
        pasang(m) {
          titikDesa(m, Object.fromEntries(desa.map(x => [x.d.id, { ...x.s, luar: x.luar, kalimat: `${x.d.label} (Kec. ${x.d.kec}): ${x.s.tutup ? 'nilai disembunyikan (kurang dari 5 responden)' : IND.biaya.kalimat(x.s) + ` — ${arah(x.s.v, ACUAN.biaya.v)} pembanding ${ACUAN.biaya.teks}`}.` }])),
            IND.biaya.kelas.batas, id => { location.hash = url('/peta', { q: 'akses', desa: id, kab: DESA[id].kab.toLowerCase() }); });
          if (rendah && !rendah.s.tutup) keterangan(m, rendah.d.ll, `<b>${rendah.d.label}: ${nf(rendah.s.v)}% (${rendah.s.k} dari ${rendah.s.n})</b><span class="merah">terendah di ${S.kab || 'kedua kabupaten'}</span>`, rendah.d.kab === 'Barru' ? 'right' : 'left');
        } },
      atas: [
        grafikTanya(c, 'g-utama', 'Pembiayaan formal menurut jenis kelamin', `% responden · per kabupaten · n = ${semua.length} · klik batang kabupaten untuk memilih`, () => batang('#g-utama', { lebarLabel: 150, pilih: S.kab && S.kab.toLowerCase(),
          garis: { v: ACUAN.biaya.v, label: `rata-rata gabungan ${ACUAN.biaya.teks}` }, onKlik: v => ubah({ kab: S.q.kab === v ? null : v, semua: null }),
          baris: ['Barru', 'Sinjai'].flatMap(kb => ['P', 'L'].map(j => { const p = IND.biaya.hitung(semua.filter(x => x.kab === kb && x.jk === j), 1);
            return { label: `${kb} · ${DIM.jk.opsi[j]}`, v: p.v, teks: p.teks, warna: W[j], kunci: kb.toLowerCase(), kalimat: `${kb}, ${DIM.jk.opsi[j]}: ${IND.biaya.kalimat(p)} — ${arah(p.v, ACUAN.biaya.v)} rata-rata gabungan ${ACUAN.biaya.teks}.` }; })) }),
        `<p class="pilihan"><span>${S.kab ? ikon('checkmark') + ` Dipilih: "${S.kab}" — klik lagi untuk membatalkan.` : 'Pilih juga lewat sakelar Semua/Barru/Sinjai di kepala halaman.'}</span></p>` +
        sumber(['Barru', 'Sinjai'].map(kb => `${kb} ${['P', 'L'].map(j => { const p = IND.biaya.hitung(semua.filter(x => x.kab === kb && x.jk === j)); return `${p.k}/${p.n}`; }).join(' dan ')}`).join(' · '))),
        grafikTanya(c, 'g-modal', 'Sumber modal kerja terbesar', ket(c, r, `% responden ${wil}`), () => batang('#g-modal', { lebarLabel: 160, baris: modal }), sumber(rinci('sumber_modal', 'modal', ['6', '7', '8'])))],
      bawah: `<div class="kisi-2">${[
        grafikTanya(c, 'g-pasar', 'Saluran pemasaran utama', ket(c, r, `% responden ${wil} · pembeli utama hasil usaha`), () => batang('#g-pasar', { lebarLabel: 190,
          baris: barisSebaran(r, kamus('saluran_pemasaran', ['1', '2', '4', '5', '3', '6']), lain('pasar', '789'), l => `menjual terutama lewat ${l}`) }), sumber(rinci('saluran_pemasaran', 'pasar', ['7', '8', '9']))),
        grafikTanya(c, 'g-digital', 'Pemanfaatan teknologi digital untuk usaha', ket(c, r, `% responden ${wil} · boleh lebih dari satu jawaban`), () => batang('#g-digital', { maks: 100, lebarLabel: 170,
          baris: barisSebaran(r, KODE.digital, x => x.digital, l => `memakai ${l}`) }), sumber())].map(kartuGrafik).join('')}</div>
        <h2 class="judul-bagian">Profil usaha responden</h2><div class="kisi-3" style="margin-top:12px">${tambahan.map(kartuGrafik).join('')}</div>
        ${kartuTabel({ id: 'desa-akses', satuan: `desa${bagian ? ` ${S.kab} (pilihan aktif)` : ''}`, judul: `Desa${di()} — modal dan pasar`, sub: 'Urut dari pembiayaan formal terendah · nama desa generik di kecamatan asli · tanpa data per orang',
          kaki: `total ${r.length} responden, ${s.k} dengan pembiayaan formal`, baris: urut,
          kolom: [{ judul: 'Desa', sel: x => `<a href="${url('/peta', { q: 'akses', desa: x.d.id })}">${x.d.label}</a>`, csv: x => x.d.label }, { judul: 'Kecamatan', sel: x => x.d.kec }, { judul: 'Tipe wilayah', sel: x => kapital(DIM.tipe.opsi[x.d.tipe]) },
            { judul: 'Responden', angka: true, sel: x => selKecil(x.rd.length) }, { judul: 'Pembiayaan formal', angka: true, sel: x => selKecil(x.s.k) }, { judul: '%', angka: true, sel: x => (x.s.tutup ? '<5' : nf(x.s.v, 1)) },
            { judul: 'Sumber modal terbesar', sel: x => modus(x.rd, y => y.modal, KODE.sumber_modal) }, { judul: 'Saluran utama', sel: x => modus(x.rd, y => y.pasar, KODE.saluran_pemasaran) }] })}`,
    };
  },

  iklim(c) {
    const { r, sar } = c, rs = sar ? r.filter(sar.cocok) : r, med = IND.hari.hitung(rs), semua = D.responden;
    const g1 = barisSebaran(r, KODE.gangguan, x => x.gangguan, l => l)[0], bmkg = persen(r, x => x.info.includes('1'));
    const desa = D.desa.filter(diKab).map(d => { const rd = semua.filter(x => x.desa === d.id); return { d, rd, s: IND.hari.hitung(rd), luar: !!sar && d.tipe !== sar.val }; });
    const strata = kabAktif().flatMap(kb => ['DARATAN', 'PULAU'].map(t => ({ kb, t, rows: semua.filter(x => x.kab === kb && x.tipe === t) }))).filter(x => x.rows.length);
    const pulau = desa.filter(x => x.d.tipe === 'PULAU' && !x.luar), musim = D.kalender.filter(diKab);
    const cocokDesa = desa.filter(x => !x.luar), kosong = !!sar && !cocokDesa.length;   // mis. pulau kecil di Barru: tidak ada
    const pesanKosong = sar ? `Tidak ada desa ${sar.d.opsi[sar.val]}${di()}. Hapus pilihan atau ganti kabupaten untuk melihat desa lain.` : '';
    const atauKosong = g => (kosong ? { ...g, isi: `<p class="kosong">${pesanKosong}</p>`, ekstra: '' } : g);
    const WARNA_MUSIM = { B: `background:${W.bahaya};color:#fff`, P: 'background:#f1c21b;color:#161616', H: `background:${W.b60};color:#fff`, '-': 'background:#f4f4f4' };
    const bahaya = d => d.bahaya.map(([kd, tingkat]) => tag(tingkat === 'tinggi' ? 'red' : 'gray', kapital(KODE.gangguan[kd]), tingkat === 'tinggi' ? 'warning--alt--filled' : 'information')).join(' ') || tag('gray', 'Rendah', 'subtract');
    return {
      temuan: `${TEMUAN.iklim()} ${g1.label} paling sering mengganggu (${g1.teks}), dan baru ${bmkg.teks} menerima info cuaca dari BMKG.`,
      pilihan: sar && sar.label, hapus: url(S.path, { ...S.q, f: null, semua: null }),
      ringkas: kosong ? pesanKosong : sar ? `${cocokDesa.length} desa · ${selKecil(rs.length)} responden · median ${med.teks} · grafik gangguan, adaptasi, info cuaca, dan tabel desa mengikuti pilihan ini` : `${desa.length} desa · ${r.length} responden · median ${med.teks}. Klik batang tipe wilayah untuk memilih.`,
      peta: { judul: 'Hari melaut hilang per desa', teks: `Lingkaran di pusat desa generik (dikaburkan). Warna = median hari hilang karena cuaca.${sar ? ` Desa ${sar.d.opsi[sar.val]} dipilih (cincin biru); desa lain diredupkan.` : ''}`,
        legenda: [...legendaKelas('hari'), ...(sar ? [[LEGENDA_TITIK.pilih[0], 'Dipilih'], 'luar'] : [])],
        pasang(m) {
          titikDesa(m, Object.fromEntries(desa.map(x => [x.d.id, { ...x.s, luar: x.luar, pilih: !!sar && !x.luar, kalimat: `${x.d.label} (Kec. ${x.d.kec}, ${KODE.tipe_wilayah[x.d.tipe]}): ${x.s.tutup ? 'nilai disembunyikan (kurang dari 5 responden)' : IND.hari.kalimat(x.s) + ` — ${arah(x.s.v, ACUAN.hari.v)} median gabungan ${ACUAN.hari.teks}`}.` }])),
            IND.hari.kelas.batas, id => { location.hash = url('/peta', { q: 'iklim', desa: id }); });
          if (pulau.length) keterangan(m, pulau[0].d.ll, `<b>Kec. Pulau Sembilan: ${IND.hari.hitung(semua.filter(x => x.tipe === 'PULAU')).teks}</b><span class="merah">gelombang tinggi ${bulanBuruk()}</span>`, 'left');
        } },
      atas: [
        grafikTanya(c, 'g-utama', 'Hari melaut hilang karena cuaca', `median hari per tahun · menurut tipe wilayah · n = ${r.length} · klik batang untuk memilih`, () => batang('#g-utama', { lebarLabel: 150, pilih: sar && sar.val,
          garis: { v: ACUAN.hari.v, label: `median gabungan ${ACUAN.hari.teks}` }, onKlik: v => gantiSaring('tipe:' + v),
          baris: strata.map(x => { const p = IND.hari.hitung(x.rows); return { label: `${x.kb} · ${DIM.tipe.opsi[x.t]}`, v: p.v, teks: p.teks, kunci: x.t, warna: x.t === 'PULAU' ? W.bahaya : W.satu,
            kalimat: `${x.kb}, ${KODE.tipe_wilayah[x.t]}: ${IND.hari.kalimat(p)} — ${arah(p.v, ACUAN.hari.v)} median gabungan ${ACUAN.hari.teks}.` }; }) }),
        dipilih(sar && sar.d.opsi[sar.val], Object.entries(DIM.tipe.opsi).filter(([v]) => strata.some(x => x.t === v)), 'tipe', sar) + sumber(strata.map(x => `${x.kb} ${DIM.tipe.opsi[x.t]} ${x.rows.length} responden`).join(' · '))),
        atauKosong(grafikTanya(c, 'g-ganggu', 'Gangguan cuaca dan iklim yang dialami', ket(c, rs, `% responden${sar ? ' ' + sar.d.opsi[sar.val] : di()} · 12 bulan terakhir · boleh lebih dari satu`), () => batang('#g-ganggu', { maks: 100, lebarLabel: 150,
          baris: barisSebaran(rs, KODE.gangguan, x => x.gangguan, l => `mengalami ${l} dalam 12 bulan terakhir`) }), sumber()))],
      bawah: `<div class="kisi-2">${[
        grafikTanya(c, 'g-adaptasi', 'Respons adaptasi terhadap gangguan', ket(c, rs, `% responden${sar ? ' ' + sar.d.opsi[sar.val] : di()} · boleh lebih dari satu`), () => batang('#g-adaptasi', { lebarLabel: 150,
          baris: barisSebaran(rs, KODE.adaptasi, x => x.adaptasi, l => `menjawab: ${l}`) }), sumber('"<5": kurang dari 5 responden, disembunyikan untuk melindungi responden')),
        grafikTanya(c, 'g-info', 'Sumber informasi cuaca dan gelombang', ket(c, rs, `% responden${sar ? ' ' + sar.d.opsi[sar.val] : di()} · boleh lebih dari satu`), () => batang('#g-info', { lebarLabel: 190,
          baris: barisSebaran(rs, KODE.info_cuaca, x => x.info, l => `menyebut ${l}`) }), sumber('"<5": kurang dari 5 responden'))].map(atauKosong).map(kartuGrafik).join('')}</div>
        <section class="kartu" style="margin-top:24px"><h2 class="judul-kartu">Kalender musim per komunitas</h2><p class="sub">Hasil diskusi kelompok (PRA) · bulan cuaca buruk, paceklik, dan puncak hasil · satu baris per tipe komunitas</p>
          ${legenda(['B', 'P', 'H', '-'].map(kd => [WARNA_MUSIM[kd].split(';')[0], kd === 'B' ? 'Cuaca buruk' : kd === 'H' ? 'Puncak hasil' : KODE.musim[kd]]))}
          <div class="tabel-gulir"><div class="kalender" role="table" aria-label="Kalender musim per komunitas"><span></span>${BULAN.map(b => `<b>${b}</b>`).join('')}
            ${musim.map(x => `<span>${x.label}</span>${[...x.bulan].map(kd => `<i style="${WARNA_MUSIM[kd]}">${kd === '-' ? '' : KODE.musim[kd]}</i>`).join('')}`).join('')}</div></div>
          <p class="sumber">Tiap sel juga berlabel teks, jadi warna bukan satu-satunya pembeda · Sumber: data contoh (PRA dibangkitkan)</p></section>
        ${kartuTabel({ id: 'desa-iklim', satuan: `desa${sar ? ' ' + sar.d.opsi[sar.val] + ' (pilihan aktif)' : ''}`, judul: `Desa${sar ? ' ' + sar.d.opsi[sar.val] : ''} menurut hari melaut hilang (${cocokDesa.length})`,
          sub: `${sar ? 'Sesuai pilihan aktif · ' : ''}urut dari hari hilang terbanyak · nama desa generik di kecamatan asli · tanpa data per orang`,
          kaki: 'paparan bahaya dari kajian risiko bencana dan observasi (contoh)', baris: [...cocokDesa].sort((a, b) => b.s.v - a.s.v),
          kolom: [{ judul: 'Desa', sel: x => `<a href="${url('/peta', { q: 'iklim', desa: x.d.id })}">${x.d.label}</a>`, csv: x => x.d.label }, { judul: 'Kecamatan', sel: x => x.d.kec }, { judul: 'Kabupaten', sel: x => x.d.kab },
            { judul: 'Tipe wilayah', sel: x => kapital(DIM.tipe.opsi[x.d.tipe]) }, { judul: 'Responden', angka: true, sel: x => selKecil(x.rd.length) }, { judul: 'Median hari hilang', angka: true, sel: x => (x.s.tutup ? '<5' : nf(x.s.v, x.s.v % 1 ? 1 : 0)) },
            { judul: 'Gangguan utama', sel: x => modus(x.rd, y => y.gangguan, KODE.gangguan) }, { judul: 'Paparan bahaya pesisir', sel: x => bahaya(x.d) }] })}`,
    };
  },

  gedsi(c) {
    const { k, r, sar } = c, d = DIM.porsi, wil = agrWil(S.kab), s = kursi(wil);
    // Kelas porsi hanya dibaca dari agregat (AGR): jumlah kelompok per kelas di tingkat gabungan, kabupaten, dan
    // kecamatan, sudah dengan penyembunyian primer dan sekunder. Sel null ditulis "<5".
    const kelas = sar ? sar.val : 'nol', iK = AGR.kelas.indexOf(kelas);
    const frasaKelas = kelas === 'nol' ? 'tanpa pengurus perempuan' : `dengan porsi pengurus perempuan ${d.opsi[kelas]}`;
    const banyak = v => (v == null ? 'kurang dari 5' : v), perKabKelas = i => kabAktif().map(kb => `${kb} ${tampilSel(agrWil(kb).kelas[i])}`).join(', ');
    const q = D.meta.kuota, bagi = S.kab ? 2 : 1;
    const kuota = [['Perempuan', q.perempuan, x => x.jk === 'P'], ['Usaha informal', q.informal, x => !x.formal.length], ['Pemuda', q.pemuda, x => x.umur <= 30], ['Bantuan sosial', q.bansos, x => x.bansos === '1'], ['Disabilitas', q.disabilitas, x => x.disab]]
      .map(([l, n, f]) => { const ada = r.filter(f).length, target = n / bagi; return { l, ada, target, v: 100 * ada / target, tutup: selKecil(ada) === '<5' }; });
    const dis = kuota[4];
    const barisKec = AGR.kec.filter(diKab).map(o => ({ ...o, s: kursi(o), desa: D.desa.find(x => x.kec === o.kec).id, rp: r.filter(x => x.kec === o.kec && x.jk === 'P').length, rd: r.filter(x => x.kec === o.kec && x.disab).length }))
      .sort((a, b) => a.s.tutup - b.s.tutup || a.s.v - b.s.v);   // kecamatan yang porsinya disembunyikan ditaruh terakhir
    const sorot = barisKec.filter(o => o.kelas[iK] != null).sort((a, b) => b.kelas[iK] - a.kelas[iK]);   // kecamatan yang sel kelas terpilihnya boleh tampil
    const WARNA_KEC = [W.b40, W.b60, W.b90], kelasKec = o => (o.s.v >= 30) + (o.s.v >= 40);
    const anggota = j => r.filter(x => x.jk === j && x.rapat !== '97'), jk = [['P', 'Perempuan'], ['L', 'Laki-laki']];
    return {
      temuan: `Perempuan mengisi ${s.teks} kursi pengurus kelompok${di()} (${tampilSel(s.p)} dari ${s.t}), tetapi ${banyak(wil.kelas[0])} dari ${k.length} kelompok tidak punya pengurus perempuan sama sekali. Responden penyandang disabilitas baru ${dis.tutup ? 'kurang dari 5 orang' : nf(dis.v) + '% dari kuota usulan'}.`,
      pilihan: sar && sar.label, hapus: url(S.path, { ...S.q, f: null, semua: null }),
      ringkas: sar ? `${tampilSel(wil.kelas[iK])} kelompok ${frasaKelas} (${perKabKelas(iK)}) · rincian per kelompok disembunyikan (n<5); peta dan tabel menampilkan agregat kecamatan`
        : `${k.length} kelompok · ${tampilSel(wil.kelas[0])} tanpa pengurus perempuan (${perKabKelas(0)}). Klik batang untuk melihat sebarannya per kecamatan.`,
      peta: { judul: 'Porsi pengurus perempuan per kecamatan',
        teks: `Warna kecamatan = % kursi pengurus yang diisi perempuan, dihitung dari semua kelompok di kecamatan itu. Titik = kelompok di pusat desa generik; rincian kepengurusan per kelompok disembunyikan (n<5).${sar ? ` Kecamatan berbingkai biru: jumlah kelompok ${frasaKelas} di sana boleh ditampilkan (minimal 5 dan tidak membuka sel lain).` : ''}`,
        legenda: [[petak(W.b40), '&lt; 30%'], [petak(W.b60), '30–39%'], [petak(W.b90), '≥ 40%'], [petak('#e0e0e0'), '"&lt;5" (disembunyikan)'], [bulat(W.lain, 3), 'Kelompok (rincian disembunyikan)']],
        opsi: {
          gayaKec: nama => { const o = barisKec.find(x => x.kec === nama); if (!o) return {};
            return { fillColor: o.s.tutup ? '#e0e0e0' : WARNA_KEC[kelasKec(o)], ...(sar && o.kelas[iK] != null ? { color: '#0f62fe', weight: 3 } : {}) }; },
          kalimatKec: (nama, kab) => { const o = barisKec.find(x => x.kec === nama);
            return `Kec. ${nama} (${kab}): ${!o ? 'tidak ada kelompok contoh' : o.s.tutup ? `porsi pengurus perempuan disembunyikan (kurang dari 5 orang), ${o.kelompok} kelompok` : `perempuan mengisi ${o.s.p} dari ${o.s.t} kursi pengurus (${nf(o.s.v, 1)}%) di ${o.kelompok} kelompok`}.`; } },
        pasang(m) {
          const teks = x => `${x.id} (${DESA[x.desa].label}, Kec. ${x.kec}): rincian kepengurusan disembunyikan (n<5).`;
          titikKelompok(m, k, { gaya: GAYA.netral(), kalimat: teks, klik: x => { location.hash = url('/kelompok/' + x.id); } });
          if (sorot.length) keterangan(m, DESA[sorot[0].desa].ll, `<b>Kec. ${sorot[0].kec}: ${sorot[0].kelas[iK]} dari ${sorot[0].kelompok} kelompok</b><span class="merah">${frasaKelas}</span>`, sorot[0].kab === 'Barru' ? 'right' : 'left');
        } },
      atas: [
        grafikTanya(c, 'g-utama', 'Kelompok menurut porsi pengurus perempuan', `jumlah kelompok · ${k.length} kelompok · klik batang untuk melihat sebarannya per kecamatan`, () => batang('#g-utama', { lebarLabel: 120, pilih: sar && sar.val, onKlik: v => gantiSaring('porsi:' + v),
          baris: [['nol', '0% (tidak ada)', W.lain], ['sedikit', '1–39%', W.b40], ['cukup', '≥ 40%', W.b90]].map(([v, l, w], i) => { const n = wil.kelas[i];
            return { label: l, v: n, teks: n == null ? '<5' : `${n} kelompok`, kunci: v, warna: w, kalimat: n == null ? null : `${n} dari ${k.length} kelompok${di()} punya porsi pengurus perempuan ${d.opsi[v]}. Kelompoknya tidak ditunjukkan satu per satu; klik untuk melihat kecamatannya.` }; }) }),
        dipilih(sar && sar.d.opsi[sar.val], Object.entries(d.opsi), 'porsi', sar) + sumber('kuesioner pengurus kelompok')),
        grafikTanya(c, 'g-kursi', 'Perempuan dalam kepengurusan, per kabupaten', '% kursi pengurus yang diisi perempuan · pembilang/penyebut ditulis di label', () => batang('#g-kursi', { maks: 100, lebarLabel: 170,
          garis: { v: kursi(AGR.semua).v, label: `gabungan ${kursi(AGR.semua).teks} (${tampilSel(AGR.semua.pengurus_p)}/${AGR.semua.pengurus})` },
          baris: kabAktif().map(kb => { const p = kursi(agrWil(kb)); return { label: `${kb} (${tampilSel(p.p)} dari ${p.t})`, v: p.v, teks: p.teks, warna: W.P, kalimat: p.tutup ? null : `Di ${kb}, perempuan mengisi ${p.p} dari ${p.t} kursi pengurus kelompok (${p.teks}).` }; }) }),
        sumber('Satu warna (perempuan) karena kabupaten tidak diberi warna di grafik ini'))],
      bawah: `<div class="kisi-2">${[
        { ...grafikTanya(c, 'g-rapat', 'Partisipasi dalam rapat kelompok', `% anggota · 6 bulan terakhir · ${jk.map(([j, l]) => `${l.toLowerCase()} n = ${selKecil(anggota(j).length)}`).join(', ')} (bukan anggota tidak dihitung)`, () => tumpuk('#g-rapat', { baris: jk.map(x => x[1]), lebarLabel: 86, persen: true,
          seri: Object.entries(KODE.partisipasi_rapat).map(([kd, l], i) => ({ nama: l, warna: ['#c6c6c6', W.b40, W.b60, W.b90][i], teks: i < 2 ? '#161616' : '#fff', v: jk.map(([j]) => anggota(j).filter(x => x.rapat === kd).length) })),
          kalimat: (sr, i) => `${jk[i][1]}: ${selKecil(sr.v[i])} dari ${selKecil(anggota(jk[i][0]).length)} anggota kelompok — ${sr.nama} dalam rapat 6 bulan terakhir.` }), sumber(jk.map(([j, l]) => `${l} ${Object.keys(KODE.partisipasi_rapat).map(kd => selKecil(anggota(j).filter(x => x.rapat === kd).length)).join('/')} orang`).join(' · '))),
          isi: `${legenda(Object.values(KODE.partisipasi_rapat).map((l, i) => [`background:${['#c6c6c6', W.b40, W.b60, W.b90][i]}`, kapital(l)]))}<div class="grafik" id="g-rapat"></div>
            <h3 class="judul-kartu" style="font-size:14px;margin-top:24px">Peran responden dalam kelompok</h3>
            <p class="sub">% responden menurut peran · ${jk.map(([j, l]) => `${l.toLowerCase()} n = ${selKecil(r.filter(x => x.jk === j).length)}`).join(', ')} · atas = perempuan, bawah = laki-laki</p><div class="grafik" id="g-peran"></div>` },
        (c.pasang.push(() => batang('#g-peran', { maks: 100, lebarLabel: 200, rapat: true,   // M1-13: ketua / pengurus lain / anggota / bukan anggota
          baris: Object.entries(KODE.peran_kelompok).flatMap(([kd, l]) => jk.map(([j, nama]) => { const p = persen(r.filter(x => x.jk === j), x => x.peran === kd);
            return { label: j === 'P' ? kapital(l) : '', aria: `${kapital(l)}, ${nama.toLowerCase()}`, v: p.v, teks: p.teks, warna: W[j], kalimat: p.tutup ? null : `${p.teks} responden ${nama.toLowerCase()} berperan sebagai ${l} (${p.k} dari ${p.n}).` }; })) })),
        { ...grafikTanya(c, 'g-rantai', 'Peran dalam rantai usaha', `% responden yang mengerjakan tahap ini · boleh lebih dari satu · ${jk.map(([j, l]) => `${l.toLowerCase()} n = ${r.filter(x => x.jk === j).length}`).join(', ')}`, () => batang('#g-rantai', { maks: 100, lebarLabel: 110, rapat: true,
          baris: Object.entries(KODE.rantai).flatMap(([kd, l]) => jk.map(([j, nama]) => { const p = persen(r.filter(x => x.jk === j), x => x.rantai.includes(kd));
            return { label: j === 'P' ? kapital(l) : '', aria: `${kapital(l)}, ${nama.toLowerCase()}`, v: p.v, teks: p.teks, warna: W[j], kalimat: p.tutup ? null : `${p.teks} responden ${nama.toLowerCase()} mengerjakan ${l} (${p.k} dari ${p.n}).` }; })) }),
        sumber('Label tahap di baris pertama tiap pasangan; atas = perempuan, bawah = laki-laki')),
          isi: `${legenda([[`background:${W.P}`, 'Perempuan'], [`background:${W.L}`, 'Laki-laki']])}<div class="grafik" id="g-rantai"></div>` })].map(kartuGrafik).join('')}</div>
        <div class="kisi-2">${kartuGrafik({ ...grafikTanya(c, 'g-kuota', `Ketercakupan kuota kelompok rentan ${tag('cool-gray', 'kuota usulan', 'information')}`, `% realisasi responden terhadap kuota sampel · ${r.length} responden${S.kab ? ` (${S.kab})` : ' (250 Barru, 250 Sinjai)'}`,
          () => batang('#g-kuota', { lebarLabel: 190, maks: Math.max(115, ...kuota.map(x => x.v)), garis: { v: 100, label: '100% = kuota terpenuhi' },
            baris: kuota.map(x => ({ label: `${x.l} (${selKecil(x.ada)}/${nf(x.target, x.target % 1 ? 1 : 0)})`, v: x.tutup ? null : x.v, teks: x.tutup ? '<5' : nf(x.v) + '%', warna: x.v < 50 ? W.bahaya : W.satu,
              kalimat: x.tutup ? null : `${x.l}: ${x.ada} responden dari kuota usulan ${nf(x.target, x.target % 1 ? 1 : 0)} (${nf(x.v)}%).` })) }),
          sumber('"Penerimaan bantuan sosial" adalah proksi, bukan "rumah tangga miskin". Angka kuota belum ditetapkan tim')) })}
          <section class="kartu"><h2 class="judul-kartu">Penyandang disabilitas dalam keanggotaan</h2><p class="sub">menurut pengurus, dicek silang dengan survei (Washington Group Short Set) · hanya agregat</p>
            <dl class="kpi" style="margin-top:12px"><div><dt>anggota penyandang disabilitas</dt><dd>${tampilSel(wil.anggota_disabilitas)}</dd></div>
              <div><dt>dari ${k.length} kelompok punya anggota disabilitas</dt><dd>${tampilSel(wil.kelompok_disabilitas)}</dd></div><div><dt>responden survei penyandang disabilitas</dt><dd>${selKecil(dis.ada)}</dd></div></dl>
            <p style="margin-top:12px;color:var(--text-secondary)">"&lt;5" = disembunyikan: di bawah 5, atau disembunyikan agar angka kabupaten lain tidak bisa dihitung balik dari angka gabungan. Tidak ada rincian per kelompok, desa, atau kecamatan.</p>${sumber()}</section></div>
        ${kartuTabel({ id: 'kecamatan-gedsi', satuan: 'kecamatan', judul: 'Kecamatan — kepengurusan dan inklusi',
          sub: 'Urut dari porsi pengurus perempuan terendah · "<5" = disembunyikan: di bawah 5, atau disembunyikan agar sel lain tidak bisa dihitung balik dari jumlah kelompok (penyembunyian sekunder)',
          kaki: `total ${k.length} kelompok, ${tampilSel(s.p)} dari ${s.t} pengurus perempuan (${s.teks}), ${banyak(wil.kelas[0])} kelompok tanpa pengurus perempuan`, baris: barisKec,
          kolom: [{ judul: 'Kecamatan', sel: o => o.kec }, { judul: 'Kabupaten', sel: o => o.kab }, { judul: 'Kelompok', angka: true, sel: o => o.kelompok }, { judul: 'Pengurus perempuan', angka: true, sel: o => tampilSel(o.s.p) },
            { judul: 'Seluruh pengurus', angka: true, sel: o => selKecil(o.s.t) }, { judul: '%', angka: true, sel: o => (o.s.tutup ? '<5' : nf(o.s.v, 1)) }, { judul: `Kelompok ${kelas === 'nol' ? 'tanpa pengurus perempuan' : 'porsi ' + d.opsi[kelas]}`, angka: true, sel: o => tampilSel(o.kelas[iK]) },
            { judul: 'Responden perempuan', angka: true, sel: o => selKecil(o.rp) }, { judul: 'Responden disabilitas', angka: true, sel: o => selKecil(o.rd) }] })}`,
    };
  },

  program(c) {
    const { k, sar } = c, cocok = sar ? k.filter(sar.cocok) : k, prio = k.filter(x => x.prioritas), semuaPrio = D.kelompok.filter(x => x.prioritas), tumpang = k.filter(x => x.tumpang.length), kb = kabAktif();
    const opd = D.program_opd.filter(diKab).map(p => { const a = D.kelompok.filter(x => x.program.some(e => e.prg === p.id)); return { ...p, a, np: a.filter(x => x.prioritas).length }; });
    const perOpd = {};
    opd.forEach(p => { const kc = `${PEMBERI[p.opd] === 'DKP' ? 'DKP' : KODE.penyelenggara[p.opd]} ${p.kab}`; perOpd[kc] = (perOpd[kc] || 0) + p.a.length; });
    const kunj = [['Prioritas, belum terlayani', x => x.belum, W.bahaya], ['Prioritas, sudah terlayani', x => x.prioritas && !x.belum, W.satu], ['Kelompok lain', x => !x.prioritas, W.satu]]
      .map(([l, f, w]) => { const a = k.filter(f); return { label: `${l} (${a.length})`, v: median(a.map(x => x.kunjungan)), a, warna: w }; }).filter(x => x.a.length);
    const perKec = {};
    k.filter(x => x.belum).forEach(x => { const o = perKec[x.kec] = perKec[x.kec] || { kec: x.kec, kab: x.kab, desa: x.desa, n: 0 }; o.n++; });
    const [kecAtas] = Object.values(perKec).sort((a, b) => b.n - a.n);
    const pemberi = x => [...new Set(x.program.filter(e => x.tumpang.includes(e.jenis)).map(e => PEMBERI[e.pemberi]))].join(' + ');
    const terima = x => x.program.map(e => `${e.prg ? D.program_opd.find(p => p.id === e.prg).judul : KODE.bantuan[e.jenis]} (${PEMBERI[e.pemberi]})`).join('; ') || '–';
    const sudah = a => a.filter(x => !x.belum).length;
    return {
      temuan: TEMUAN.program().replace(/\.$/, '') + (tumpang.length && tumpang.every(x => x.kategori === 'tinggi') ? ' — semuanya berkapasitas tinggi.' : '.'),
      pilihan: sar && sar.label, hapus: url(S.path, { ...S.q, f: null, semua: null }),
      ringkas: sar ? `${cocok.length} kelompok (${perKab(cocok)})${cocok.length && cocok.every(x => x.kategori === 'rendah') ? ' · semuanya berkapasitas rendah' : ''} · peta dan tabel mengikuti pilihan ini`
        : `${k.length} kelompok · ${prio.length} prioritas, ${prio.length - sudah(prio)} belum terlayani · ${tumpang.length} tumpang tindih. Klik segmen grafik untuk memilih.`,
      peta: { judul: 'Layanan program per kelompok', teks: `Titik = kelompok, di pusat desa generik (dikaburkan).${sar ? ` Kelompok ${sar.d.opsi[sar.val]} dipilih; yang lain diredupkan.` : ''}`,
        legenda: LEGENDA_TOPIK.layanan,
        pasang(m) {
          titikKelompok(m, k, { gaya: GAYA.layanan(sar), klik: x => { location.hash = url('/peta', { q: 'program', desa: x.desa, f: S.q.f }); },
            kalimat: x => `${kalimatKelompok(x)} ${x.program.length ? `Menerima: ${terima(x)}.` : ''}${x.tumpang.length ? ' Bantuan sejenis dari lebih dari satu pihak.' : ''}` });
          if (kecAtas && (!sar || sar.val === 'belum')) keterangan(m, DESA[kecAtas.desa].ll, `<b>Kec. ${kecAtas.kec}: ${kecAtas.n} kelompok</b><span class="merah">prioritas belum terlayani</span>`, kecAtas.kab === 'Barru' ? 'right' : 'left');
        } },
      atas: [
        { ...grafikTanya(c, 'g-utama', 'Kelompok prioritas: sudah dan belum terlayani', `jumlah kelompok prioritas · ${prio.length} kelompok · klik segmen untuk memilih`, () => tumpuk('#g-utama', { baris: kb, pilih: sar && sar.val, onKlik: v => gantiSaring('layanan:' + v),
          seri: [{ nama: 'sudah terlayani', kunci: 'terlayani', warna: W.b60, v: kb.map(n => sudah(prio.filter(x => x.kab === n))) }, { nama: 'belum terlayani', kunci: 'belum', warna: '#fff1f1', tepi: W.bahaya, teks: W.bahaya, v: kb.map(n => prio.filter(x => x.kab === n && x.belum).length) }],
          kalimat: (sr, i) => `${kb[i]}: ${sr.v[i]} dari ${prio.filter(x => x.kab === kb[i]).length} kelompok prioritas ${sr.nama}. Klik untuk memilih.` }),
        dipilih(sar && kapital(sar.d.opsi[sar.val]), Object.entries(DIM.layanan.opsi).map(([v, l]) => [v, kapital(l)]), 'layanan', sar) +
        sumber([...kb.map(n => { const a = prio.filter(x => x.kab === n); return `${n} ${sudah(a)} dari ${a.length} terlayani (${nf(100 * sudah(a) / a.length)}%)`; }),
          `gabungan ${sudah(semuaPrio)} dari ${semuaPrio.length} (${nf(100 * sudah(semuaPrio) / semuaPrio.length)}%)`].join(' · '))),
          isi: `${legenda([[`background:${W.b60}`, 'Sudah terlayani'], [`background:#fff1f1;border:1px solid ${W.bahaya}`, 'Belum terlayani']])}<div class="grafik" id="g-utama"></div>` },
        grafikTanya(c, 'g-opd', 'Program OPD tahun berjalan, menurut OPD', `jumlah kelompok sasaran · ${opd.length} program dari ${Object.keys(perOpd).length} OPD · rincian lokasi di tabel bawah`, () => batang('#g-opd', { lebarLabel: 220,
          baris: Object.entries(perOpd).map(([l, n]) => ({ label: l, v: n, teks: `${n} kelompok`, kalimat: `${l}: program tahun berjalan menyasar ${n} kelompok.` })).sort((a, b) => b.v - a.v) }), sumber('DKP = Dinas Kelautan dan Perikanan'))],
      bawah: `<div class="kisi-2"><section class="kartu"><h2 class="judul-kartu">Tumpang tindih program: ${tumpang.length} kelompok</h2><p class="sub">menerima bantuan sejenis dari lebih dari satu pihak pada tahun yang sama</p>
          ${tabel('tumpang', [{ ...KOL.id, judul: 'Kelompok' }, KOL.kec, { judul: 'Skor kapasitas', angka: true, sel: x => x.skor }, { judul: 'Pemberi bantuan', sel: pemberi }], tumpang)}
          ${sumber(tumpang.length ? `${tumpang.length} kelompok ini ${tumpang.every(x => x.kategori === 'tinggi') ? 'berkapasitas tinggi' : 'menerima bantuan ganda'}, sementara ${k.filter(x => x.belum).length} kelompok prioritas belum terjangkau` : '')}</section>
        ${kartuGrafik(grafikTanya(c, 'g-kunjungan', 'Kunjungan penyuluh dalam 6 bulan terakhir', 'median kunjungan per kelompok · menurut status', () => batang('#g-kunjungan', { lebarLabel: 230,
          baris: kunj.map(x => ({ label: x.label, v: x.v, teks: `${nf(x.v, x.v % 1 ? 1 : 0)} kali`, warna: x.warna, kalimat: `${x.label.replace(/ \(\d+\)/, '')}: median ${nf(x.v, x.v % 1 ? 1 : 0)} kunjungan penyuluh per kelompok dalam 6 bulan (${x.a.length} kelompok).` })) }),
        `<p style="margin-top:12px">Pendamping kelompok: ${Object.entries(KODE.pendamping).map(([kd, l]) => `${l} ${k.filter(x => x.pendamping === kd).length}${kd === 'PENYULUH' ? ' kelompok' : ''}`).join(', ')}.</p>` + sumber()))}</div>
        ${kartuTabel({ id: 'kelompok-program', satuan: 'kelompok', judul: sar ? `Kelompok ${sar.val === 'tumpang' ? 'dengan ' : ''}${sar.val === 'tumpang' ? sar.d.opsi[sar.val] : 'prioritas ' + sar.d.opsi[sar.val]} (${cocok.length})` : `Semua kelompok (${cocok.length})`,
          sub: 'Urut dari skor kapasitas terendah · ID pseudonim, tanpa nama orang · program yang cocok masih [usulan]', kaki: 'status prioritas ditetapkan di lokakarya validasi · PT = perguruan tinggi',
          baris: [...cocok].sort((a, b) => (b.belum - a.belum) || a.skor - b.skor || a.id.localeCompare(b.id)),
          kolom: [KOL.id, KOL.desa, KOL.kec, KOL.kab, { judul: 'Skor kapasitas', angka: true, sel: x => x.skor }, { judul: 'Kebutuhan utama', sel: x => KODE.kebutuhan[x.butuh[0]] }, { panjang: true, judul: 'Program diterima', sel: terima },
            { panjang: true, judul: 'Program yang cocok [usulan]', sel: x => (x.program.length ? '–' : programCocok(x).join('; ')) }, { judul: 'Status', sel: x => tagStatus(x) + (x.tumpang.length ? ' ' + tag('warm-gray', 'Tumpang tindih', 'link') : '') }] })}
        <section class="kartu" style="margin-top:24px"><h2 class="judul-kartu">Program OPD tahun berjalan untuk usaha pesisir</h2><p class="sub">Nama program, OPD, lokasi, dan sasaran · anggaran hanya contoh</p>
          ${tabel('program-opd', [{ judul: 'OPD', sel: p => KODE.penyelenggara[p.opd] }, { judul: 'Kabupaten', sel: p => p.kab }, { panjang: true, judul: 'Program', sel: p => p.judul }, { panjang: true, judul: 'Lokasi (kecamatan)', sel: p => p.lokasi },
            { judul: 'Sasaran (kelompok)', angka: true, sel: p => p.a.length }, { judul: 'Prioritas tercakup', angka: true, sel: p => p.np }, { judul: 'Anggaran (contoh)', angka: true, sel: p => p.anggaran }], opd)}
          ${sumber(`Prioritas tercakup: ${kb.map(n => `${n} ${new Set(opd.filter(p => p.kab === n).flatMap(p => p.a.filter(x => x.prioritas).map(x => x.id))).size}`).join(', ')}`)}</section>`,
    };
  },

  rencana(c) {
    const { k, sar } = c, ber = k.filter(x => x.rencana), cocok = sar ? ber.filter(sar.cocok) : ber, kb = kabAktif(), semuaBer = D.kelompok.filter(x => x.rencana);
    const st = (a, s) => a.filter(x => x.rencana.status === s).length, belum = ber.filter(x => x.rencana.status === 'BELUM');
    const utama = butuhTeratas(cocok.map(x => ({ butuh: [x.butuh[0]] })), 6).filter(x => x.n);
    const [sorot] = [...cocok].sort((a, b) => b.kebutuhan - a.kebutuhan);
    const w = { g: () => true, b: x => x.kab === 'Barru', s: x => x.kab === 'Sinjai' };
    const pct = (a, f) => (a.length ? nf(100 * a.filter(f).length / a.length) + '%' : '–');
    const dasar = [
      ['Pembiayaan formal (% responden)', f => IND.biaya.hitung(D.responden.filter(f), 1).teks], ['Hari melaut hilang (median/tahun)', f => IND.hari.hitung(D.responden.filter(f)).teks.replace(' hari', '')],
      ['Skor kapasitas kelompok (median)', f => nf(median(D.kelompok.filter(f).map(x => x.skor)), 1).replace(',0', '')], ['Perempuan dalam kepengurusan', (f, kab) => kursi(agrWil(kab)).teks],
      ['Prioritas terlayani program', f => pct(D.kelompok.filter(x => f(x) && x.prioritas), x => !x.belum)], ['Rencana aksi selesai', f => pct(semuaBer.filter(f), x => x.rencana.status === 'SELESAI')]];
    const tagInt = s => tag(s === 'masuk' ? 'green' : 'gray', kapital(s), s === 'masuk' ? 'checkmark' : s === 'dibahas' ? 'subtract' : 'information');
    const int = D.integrasi.filter(diKab);
    return {
      temuan: TEMUAN.rencana().replace(/\.$/, '') + (belum.length && belum.every(x => x.belum) ? ` — semua rencana yang belum dimulai (${belum.length}) milik kelompok yang juga belum terlayani program.` : '.'),
      pilihan: sar && sar.label, hapus: url(S.path, { ...S.q, f: null, semua: null }),
      ringkas: sar ? `${cocok.length} rencana aksi (${perKab(cocok)}) · peta dan tabel mengikuti pilihan ini` : `${ber.length} rencana aksi (${perKab(ber)}), satu per kelompok prioritas. Klik segmen grafik untuk memilih.`,
      peta: { judul: 'Status rencana aksi per kelompok prioritas', teks: `Titik = kelompok prioritas, di pusat desa generik (dikaburkan).${sar ? ` Rencana yang ${sar.d.opsi[sar.val]} dipilih; yang lain diredupkan.` : ''}`,
        legenda: [...LEGENDA_TOPIK.rencana, ...(sar ? ['luar'] : [])],
        pasang(m) {
          titikKelompok(m, k, { gaya: GAYA.rencana(sar), klik: x => { location.hash = url('/kelompok/' + x.id); },
            kalimat: x => `${x.id} (${DESA[x.desa].label}, Kec. ${x.kec}): rencana aksi ${DIM.rencana.opsi[x.rencana.status]} — ${x.rencana.isi.toLowerCase()}, target ${bulan(x.rencana.target)}.` });
          if (sar && sorot) keterangan(m, DESA[sorot.desa].ll, `<b>${sorot.id} (${DESA[sorot.desa].label})</b><span class="merah">${DIM.rencana.opsi[sorot.rencana.status]} · target ${bulan(sorot.rencana.target)}</span>`, 'left');
        } },
      atas: [
        { ...grafikTanya(c, 'g-utama', 'Status rencana aksi', `jumlah rencana aksi · ${ber.length} kelompok prioritas · klik segmen untuk memilih`, () => tumpuk('#g-utama', { baris: kb, pilih: sar && sar.val, onKlik: v => gantiSaring('rencana:' + v),
          seri: [['BELUM', '#f4f4f4', '#161616', '#8d8d8d'], ['BERJALAN', W.b60, '#fff'], ['SELESAI', W.b90, '#fff']].map(([s, warna, teks, tepi]) => ({ nama: DIM.rencana.opsi[s], kunci: s, warna, teks, tepi, v: kb.map(n => st(ber.filter(x => x.kab === n), s)) })),
          kalimat: (sr, i) => `${kb[i]}: ${sr.v[i]} dari ${ber.filter(x => x.kab === kb[i]).length} rencana aksi ${sr.nama}. Klik untuk memilih.` }),
        dipilih(sar && kapital(sar.d.opsi[sar.val]), Object.entries(DIM.rencana.opsi).map(([v, l]) => [v, kapital(l)]), 'rencana', sar) +
        sumber('Selesai: ' + [...kb.map(n => { const a = ber.filter(x => x.kab === n); return `${n} ${st(a, 'SELESAI')} dari ${a.length} (${nf(100 * st(a, 'SELESAI') / a.length)}%)`; }),
          `gabungan ${st(semuaBer, 'SELESAI')} dari ${semuaBer.length} (${nf(100 * st(semuaBer, 'SELESAI') / semuaBer.length)}%)`].join(' · '))),
          isi: `${legenda([['background:#f4f4f4;border:1px solid #8d8d8d', 'Belum mulai'], [`background:${W.b60}`, 'Berjalan'], [`background:${W.b90}`, 'Selesai']])}<div class="grafik" id="g-utama"></div>` },
        grafikTanya(c, 'g-jenis', 'Rencana aksi menurut jenis kegiatan utama', `jumlah rencana aksi · ${cocok.length} rencana${sar ? ' terpilih' : ''}`, () => batang('#g-jenis', { lebarLabel: 170,
          baris: utama.map(x => ({ label: x.label, v: x.n, teks: String(x.n), kalimat: `${x.n} dari ${cocok.length} rencana aksi berfokus pada ${x.label.toLowerCase()}.` })) }), sumber())],
      bawah: `${kartuTabel({ id: 'rencana-aksi', satuan: 'rencana aksi', judul: sar ? `Rencana aksi ${sar.d.opsi[sar.val]} (${cocok.length})` : `Rencana aksi kelompok prioritas (${cocok.length})`,
          sub: `${sar ? 'Sesuai pilihan aktif · ' : ''}urut dari target terdekat · semua target paling lambat Sep 2027`, kaki: 'disepakati dalam diskusi kelompok (contoh) · dipantau triwulanan',
          baris: [...cocok].sort((a, b) => a.rencana.target.localeCompare(b.rencana.target) || a.id.localeCompare(b.id)),
          kolom: [KOL.id, KOL.desa, KOL.kec, KOL.kab, { panjang: true, judul: 'Isi rencana aksi', sel: x => x.rencana.isi }, { judul: 'Target selesai', sel: x => bulan(x.rencana.target) }, { judul: 'Penanggung jawab', sel: x => x.rencana.pj },
            { judul: 'Status', sel: x => tagRencana(x, true) + (x.belum ? ' ' + tag('red', 'Belum terlayani', 'warning--alt--filled') : '') }] })}
        <div class="kisi-2"><section class="kartu"><h2 class="judul-kartu">Baseline indikator kunci</h2><p class="sub">Nilai awal dari survei ${D.meta.periode} · titik banding untuk pembaruan berikutnya</p>
          ${tabel('baseline', [{ panjang: true, judul: 'Indikator', sel: b => b[0] }, { judul: 'Gabungan', angka: true, sel: b => b[1](w.g, null) }, { judul: 'Barru', angka: true, sel: b => b[1](w.b, 'Barru') }, { judul: 'Sinjai', angka: true, sel: b => b[1](w.s, 'Sinjai') }, { judul: 'Pembaruan berikutnya', angka: true, sel: () => '–' }], dasar)}
          ${sumber('"–" = belum ada pembaruan; kolom terisi bila ada pembaruan')}</section>
        <section class="kartu"><h2 class="judul-kartu">Masuk ke dokumen perencanaan</h2><p class="sub">Indikator, kegiatan, atau rekomendasi proyek yang masuk dokumen perencanaan daerah atau mitra</p>
          ${tabel('integrasi', [{ panjang: true, judul: 'Dokumen', sel: x => x.dokumen }, { panjang: true, judul: 'Isi yang masuk', sel: x => x.butir }, { judul: 'Status', sel: x => tagInt(x.status), csv: x => x.status }], int)}
          ${sumber(['masuk', 'diusulkan', 'dibahas'].map(s => `${int.filter(x => x.status === s).length} ${s}`).join(', '))}</section></div>`,
    };
  },
};
const PEMBERI = { 1: 'DKP', 2: 'Koperasi-UMKM', 3: 'OPD lain', 4: 'Desa', 5: 'PT', 6: 'LSM', 7: 'Swasta' };
const URUT_RENCANA = { BELUM: 0, BERJALAN: 1, TANPA: 2, SELESAI: 3 };
const COCOK = { PENCATATAN: 'Pelatihan pencatatan (PT)', LEGALITAS: 'Pengukuhan kelompok (DKP)', PEMASARAN: 'Kemitraan pembeli (Koperasi)', MODAL: 'KUR klaster (bank mitra)', TEKNOLOGI: 'Pelatihan pengolahan (DKP)' };
const programCocok = k => [COCOK[k.butuh[0]] || 'Pendampingan penyuluh', ...(k.komoditas === 'RL' ? ['Bantuan bibit (DKP)'] : [])];
function bulanBuruk() {   // rentang bulan cuaca buruk di pulau kecil, mis. "Des–Mar"
  const b = D.kalender.find(x => x.tipe === 'PULAU').bulan, buruk = [...b].map((kd, i) => (kd === 'B' ? i : -1)).filter(i => i >= 0);
  return `${BULAN[buruk.find(i => !buruk.includes((i + 11) % 12))]}–${BULAN[buruk.find(i => !buruk.includes((i + 1) % 12))]}`;
}

/* ---------- halaman 8: penjelajah peta ---------- */
const lapis = { titik: true, status: true, tempuh: false, gps: false };   // lapisan GPS opsional: mati secara default
function halPeta() {
  const q = TANYA[S.q.q] ? S.q.q : 'prioritas', t = TANYA[q], indId = t.ind || 'biaya', ind = IND[indId], acuan = ACUAN[indId];
  const sar0 = saringan(), sar = sar0 && !sar0.d.agregat ? sar0 : null;   // kelas agregat (porsi pengurus) tidak boleh menyorot kelompok
  const sarK = sar && sar.d.unit === 'k' ? sar : null, sarR = sar && sar.d.unit === 'r' ? sar : null;
  const perDesa = q === 'akses' || q === 'iklim';   // pertanyaan berbasis responden: nilai per desa
  const topik = { program: 'layanan', rencana: 'rencana' }[q], gayaTopik = lapis.status && topik && (!sarK || sarK.dim === topik);
  const desa = DESA[S.q.desa] && diKab(DESA[S.q.desa]) ? DESA[S.q.desa] : null;
  const k = D.kelompok.filter(diKab), r = D.responden.filter(diKab), rs = sarR ? r.filter(sarR.cocok) : r, desaKab = D.desa.filter(diKab);
  const banding = (S.q.banding || '').split(',').filter(x => DESA[x]).slice(0, 3);
  const ganti = patch => url('/peta', { ...S.q, ...patch });
  // desktop: legenda terbuka; panel lapisan terbuka hanya saat satu desa dipilih (di tampilan ikhtisar ia menutupi Sinjai). HP: keduanya terlipat
  const lebar = matchMedia('(min-width: 1056px)').matches;
  // lingkup angka responden: bila ada saringan responden, semua angka responden memakai `rs` dan diberi label lingkupnya
  const opsiR = sarR ? sarR.d.opsi[sarR.val] : '', lingkupR = sarR ? ` · ${opsiR}` : '', gab = sarR ? 'gabungan semua responden' : 'gabungan';
  const nilaiDesa = id => ind.hitung(rs.filter(x => x.desa === id));
  const ringkasDesa = d => { const kd = k.filter(x => x.desa === d.id), p = kd.filter(x => x.prioritas), b = p.filter(x => x.belum); return { kd, p, b }; };
  const kalimatDesa = d => { const { kd, p, b } = ringkasDesa(d), s = nilaiDesa(d.id);
    return `${d.label} (Kec. ${d.kec}): ${kd.length} kelompok, ${p.length ? `${p.length} prioritas${b.length ? `, ${b.length} belum terlayani` : ''}` : 'belum ada yang prioritas'}. ${
      s.tutup ? `${ind.label}: disembunyikan (kurang dari 5 responden).` : `${ind.label} ${s.teks} — ${arah(s.v, acuan.v)} pembanding ${acuan.teks}.`}`; };

  // panel kiri
  let panel;
  if (desa) {
    const kd = k.filter(x => x.desa === desa.id), rdSemua = D.responden.filter(x => x.desa === desa.id), rd = sarR ? rdSemua.filter(sarR.cocok) : rdSemua;   // rd ikut saringan responden
    const med = Object.fromEntries(D.desa.map(d => [d.id, median(D.kelompok.filter(x => x.desa === d.id).map(x => x.skor))]));
    const peringkat = Object.values(med).filter(v => v < med[desa.id]).length + 1, a = IND.biaya.hitung(rd), h = IND.hari.hitung(rd);
    panel = `<div class="panel__kepala"><h2>${desa.label}</h2><a class="tombol-ikon" href="${ganti({ desa: null })}" aria-label="Tutup detail desa">${ikon('close')}</a></div>
      <p class="sub">Kec. ${desa.kec} · Kab. ${desa.kab} · ${KODE.tipe_wilayah[desa.tipe]}</p><p class="sub">${kd.length} kelompok · ${selKecil(rdSemua.length)} responden${sarR ? `, ${selKecil(rd.length)} di antaranya ${opsiR}` : ''} · nama desa generik</p>
      ${sarR ? catatan(`Angka responden di panel ini hanya untuk <strong>${opsiR}</strong> (saringan aktif), sama dengan grafik di kanan. Pembandingnya tetap gabungan semua responden Barru + Sinjai.`) : ''}
      ${blok('Akses pembiayaan formal' + lingkupR, a, a.tutup ? '' : `${a.k} dari ${a.n} responden${sarR ? ' ' + opsiR : ''}`, ACUAN.biaya.v, 100, `${gab} ${nf(ACUAN.biaya.v)}%`, 'rendah')}
      ${blok('Median skor kapasitas kelompok', { v: med[desa.id], teks: nf(med[desa.id], med[desa.id] % 1 ? 1 : 0) }, `dari 100 · peringkat ${peringkat} terendah dari ${D.desa.length} desa`, MED_SKOR, 100, `gabungan ${TEKS_MED_SKOR}`, 'rendah')}
      ${blok('Hari usaha hilang karena cuaca (median)' + lingkupR, h, 'per tahun', ACUAN.hari.v, 60, `${gab} ${ACUAN.hari.v}`, 'tinggi')}
      <h3>Kelompok di desa ini</h3><ul class="daftar-klp">${kd.map(x => `<li><a href="${url('/kelompok/' + x.id)}"><span><strong>${x.id}</strong>${tagStatus(x)}</span><small>kapasitas ${x.kategori} · ${x.skor}</small>${ikon('chevron--right')}</a></li>`).join('')}</ul>
      <p class="banding-aksi"><button class="tombol tombol--tersier" type="button" data-banding="${desa.id}"${banding.includes(desa.id) || banding.length >= 3 ? ' disabled' : ''}>Bandingkan +${ikon('compare')}</button>
        <span>${banding.includes(desa.id) ? 'sudah di daftar banding' : banding.length >= 3 ? 'daftar banding penuh (3 desa)' : 'hingga 3 desa'}</span></p>`;
  } else {
    panel = `<div class="panel__kepala"><h2>Pilih desa</h2></div><p class="sub">Klik titik atau desa di peta, atau pilih dari daftar ini.</p>
      <ul class="daftar-desa">${desaKab.map(d => { const { kd, p, b } = ringkasDesa(d);
        return `<li><a href="${ganti({ desa: d.id })}"><strong>${d.label}</strong><small>Kec. ${d.kec} · ${kd.length} kelompok · ${p.length} prioritas${b.length ? ` · ${b.length} belum terlayani` : ''}</small>${ikon('chevron--right')}</a></li>`; }).join('')}</ul>`;
  }

  // panel kanan: grafik terhubung
  const lingkup = desa ? k.filter(x => x.desa === desa.id) : k, barisKap = desa ? [desa.label, S.kab || 'Gabungan'] : [S.kab || 'Gabungan'];
  const kap = a => ['rendah', 'sedang', 'tinggi'].map(c => a.filter(x => x.kategori === c).length), sarKap = sarK && sarK.dim === 'kapasitas' ? sarK : null;
  const dataKap = desa ? [kap(lingkup), kap(k)] : [kap(k)];
  const butuh = butuhTeratas(lingkup, desa ? 4 : 5).filter(x => x.n);
  const sekec = desa ? desaKab.filter(d => d.kec === desa.kec) : desaKab;
  const nilaiSekec = sekec.map(d => ({ d, s: ind.hitung(rs.filter(x => x.desa === d.id)) }));
  const maks = Math.max(indId === 'hari' ? 40 : 60, acuan.v, ...nilaiSekec.map(x => x.s.v || 0)) * 1.1;
  const kanan = `<h2 class="judul-kartu">Grafik terhubung</h2><p class="sub">Diperbarui mengikuti desa yang dipilih. Klik batang untuk menyaring peta.</p>
    <h3>Kapasitas kelompok</h3><div class="grafik" id="j-kap"></div>${legenda([[`background:${W.b40}`, 'Rendah'], [`background:${W.b60}`, 'Sedang'], [`background:${W.b90}`, 'Tinggi']])}
    ${dipilih(sarKap && kapital(sarKap.val), Object.keys(DIM.kapasitas.opsi).map(v => [v, kapital(v)]), 'kapasitas', sarKap)}
    <h3>Kebutuhan teratas ${desa ? `di ${desa.label}` : di().trim() || 'gabungan'}</h3><p class="sub">jumlah kelompok yang menyebut (dari ${lingkup.length})</p><div class="grafik" id="j-butuh"></div>
    <h3>${ind.label}: ${desa ? `desa di Kec. ${desa.kec}` : 'semua desa' + di()}</h3>${sarR ? `<p class="sub">${sarR.label.toLowerCase()}</p>` : ''}
    <div style="margin-top:12px">${nilaiSekec.map(({ d, s }) => `<a class="titik-baris${desa && d.id === desa.id ? ' terpilih' : ''}" href="${ganti({ desa: d.id })}" title="${kalimatDesa(d)}"><span>${d.label}</span>
      <span class="rel">${s.tutup ? '' : `<i style="left:${100 * s.v / maks}%"></i>`}<u style="left:${100 * acuan.v / maks}%"></u></span><span>${s.teks.replace(' hari', ' hr')}</span></a>`).join('')}</div>
    <p class="sub" style="text-align:center">garis putus-putus = ${gab} ${acuan.teks}</p>
    <div style="margin-top:20px">${catatan('Nilai dari &lt; 5 responden tampil "&lt;5". Tidak ada data per orang.')}</div>`;

  // tabel banding (≤ 3 desa)
  const barisBanding = [
    ['Kecamatan', d => d.kec, '–'], ['Tipe wilayah', d => KODE.tipe_wilayah[d.tipe], '–'], ['Kelompok', d => ringkasDesa(d).kd.length, D.kelompok.length],
    ['Kelompok prioritas', d => ringkasDesa(d).p.length, D.kelompok.filter(x => x.prioritas).length], ['Prioritas belum terlayani', d => ringkasDesa(d).b.length, D.kelompok.filter(x => x.belum).length],
    ['Median skor kapasitas', d => nf(median(D.kelompok.filter(x => x.desa === d.id).map(x => x.skor)), 1).replace(',0', ''), TEKS_MED_SKOR],
    ...Object.entries(IND).map(([i, x]) => [x.label + lingkupR, d => x.hitung(rs.filter(z => z.desa === d.id)).teks, ACUAN[i].teks]),
    ['Waktu tempuh ke ibu kota kabupaten', d => `${d.tempuh_kab} mnt`, '–']];
  const tabelBanding = banding.length ? `<section class="kartu banding"><div class="banding__kepala"><h2 class="judul-kartu">Bandingkan desa (${banding.length} dari 3)</h2><a href="${ganti({ banding: null })}">Kosongkan</a></div>
    ${tabel('banding', [{ judul: 'Indikator', sel: b => b[0] }, ...banding.map(id => ({ judul: `${DESA[id].label} <a href="${ganti({ banding: banding.filter(x => x !== id).join(',') || null })}" aria-label="Keluarkan ${DESA[id].label} dari banding">${ikon('close')}</a>`, angka: true, sel: b => b[1](DESA[id]) })),
      { judul: sarR ? 'Gabungan semua responden (pembanding)' : 'Gabungan (pembanding)', angka: true, sel: b => b[2] }], barisBanding)}</section>` : '';

  const chip = (teks, patch) => `<a class="tag tag--blue" href="${ganti(patch)}" aria-label="Hapus saringan ${teks}">${teks}${ikon('close')}</a>`;
  return {
    judul: 'Penjelajah peta', pendek: 'Peta',
    html: `<div class="jelajah__bilah"><label for="pilih-tanya">Pertanyaan:</label>
        <select id="pilih-tanya" data-ubah="q">${Object.entries(TANYA).map(([id, x]) => `<option value="${id}"${id === q ? ' selected' : ''}>${x.judul}</option>`).join('')}</select>
        ${S.kab ? chip(`Kabupaten: ${S.kab}`, { kab: null }) : ''}${desa ? chip(`Desa: ${desa.id}`, { desa: null }) : ''}${sar ? chip(sar.label, { f: null }) : ''}
        <p class="meta">Data contoh · mewakili survei ${D.meta.periode} · dibangkitkan 23 Nov 2026</p></div>
      <div class="jelajah">
        <div class="jelajah__panel"><div class="kotak-temuan"><p class="kotak-temuan__label">TEMUAN UNTUK ${(S.kab || 'Barru & Sinjai').toUpperCase()}</p><p>${TEMUAN[q]()}</p></div>${panel}</div>
        <div class="jelajah__peta"><div class="jelajah__lekat"><div class="peta" id="peta-jelajah" role="application" aria-label="Peta kecamatan Barru dan Sinjai; daftar desa di panel sebelah adalah padanannya"></div>
          <details class="lapis lapis--legenda"${lebar ? ' open' : ''}><summary>Legenda</summary>${legendaPeta([...(gayaTopik ? LEGENDA_TOPIK[topik] : ['prio', 'lain', 'belum']), ...(sarK ? [gayaTopik ? 'luar' : 'redup'] : []), 'pilih'])}${perDesa ? `<p style="margin:8px 0 4px">${ind.label}, per desa</p>${legendaPeta(legendaKelas(indId))}` : ''}</details>
          <div class="lapis lapis--mini"><div class="peta" id="peta-mini" aria-hidden="true"></div></div>
          <details class="lapis lapis--lapisan"${lebar && desa ? ' open' : ''}><summary>Lapisan peta</summary>
            ${[['titik', 'Titik kelompok'], ['status', 'Status prioritas &amp; layanan'], ['tempuh', 'Waktu tempuh ke pusat layanan'], ['gps', `Jejak GPS perjalanan tangkap ${tag('cool-gray', 'opsional', 'information')}`]]
              .map(([id, l]) => `<label><input type="checkbox" data-lapis="${id}"${lapis[id] ? ' checked' : ''}><span>${l}</span></label>`).join('')}
            <p>Jejak GPS hanya jika tim menganggarkan pelacak (Pertanyaan 3 di laporan). Garisnya rekaan.</p></details></div></div>
        <div class="jelajah__grafik">${kanan}</div></div>
      ${tabelBanding}
      <section class="garis-waktu" aria-label="Garis waktu"><div><strong>Garis waktu</strong><small>Menampilkan: baseline</small></div>
        <ol>${D.meta.garis_waktu.map(g => `<li class="${g.ada ? 'aktif' : ''}"${g.ada ? ' aria-current="step"' : ' title="Belum ada data untuk titik waktu ini"'}><i></i>${g.label}</li>`).join('')}</ol></section>`,
    pasang() {
      tumpuk('#j-kap', { baris: barisKap, lebarLabel: 84, pilih: sarKap && sarKap.val, onKlik: v => gantiSaring('kapasitas:' + v),
        seri: ['rendah', 'sedang', 'tinggi'].map((c, i) => ({ nama: c, kunci: c, warna: [W.b40, W.b60, W.b90][i], teks: i ? '#fff' : '#161616', v: dataKap.map(a => a[i]) })),
        kalimat: (s, i) => `${barisKap[i]}: ${s.v[i]} dari ${jumlah(dataKap[i], x => x)} kelompok berkapasitas ${s.nama}. Klik untuk menyaring peta.` });
      batang('#j-butuh', { lebarLabel: 140, baris: butuh.map(x => ({ label: x.label, v: x.n, teks: String(x.n), kalimat: `${x.n} dari ${lingkup.length} kelompok ${desa ? `di ${desa.label}` : ''} menyebut ${x.label.toLowerCase()} sebagai kebutuhan utama.` })) });
      // bantalan [kiri, atas, bawah]: desktop menyisakan ruang legenda di kiri; HP menyisakan ruang dua tombol lipat
      const m = buatPeta($('#peta-jelajah'), { gulir: true, kunci: desa ? desa.id : '', pusat: desa && desa.ll, zoomPusat: 12, bantalan: lebar ? [190, 12, 64] : [12, 60, 76] });
      if (!m) return;
      desaKab.forEach(d => {
        const dipilih = desa && d.id === desa.id;
        L.circleMarker(ll(d.ll), dipilih ? { radius: 32, color: '#0f62fe', weight: 2, fillColor: '#0f62fe', fillOpacity: 0.1 } : { radius: 26, stroke: false, fillColor: '#0f62fe', fillOpacity: 0 })
          .bindTooltip(kalimatDesa(d), { className: 'tip', direction: 'top', offset: [0, -26] }).on('click', () => ubah({ desa: d.id })).addTo(m);
        teksPeta(m, d.ll, d.label, 'label-peta--desa' + (dipilih ? ' terpilih' : ''));
        if (lapis.tempuh) teksPeta(m, d.ll, `${d.tempuh_kab} mnt ke ibu kota kab.`, 'label-peta--tempuh');
      });
      if (perDesa) titikDesa(m, Object.fromEntries(desaKab.map(d => [d.id, { ...nilaiDesa(d.id), kalimat: kalimatDesa(d) }])), ind.kelas.batas, id => ubah({ desa: id }), 9);
      if (lapis.titik) titikKelompok(m, k, { gaya: gayaTopik ? GAYA[topik](sarK) : GAYA.prioritas({ cocok: sarK && sarK.cocok, polos: !lapis.status }), jari: perDesa ? 22 : 0, klik: x => ubah({ desa: x.desa }) });
      if (lapis.gps) D.jejak_gps.forEach(j => L.polyline(j.map(ll), { color: '#0043ce', weight: 2, dashArray: '6 5' })
        .bindTooltip('Jejak GPS perjalanan tangkap (rekaan, opsional): ditampilkan per komunitas, bukan per orang.', { className: 'tip', sticky: true }).addTo(m));
      const mini = buatPeta($('#peta-mini'), { diam: true, batas: batasKab(null) });
      if (mini) { const kotak = L.rectangle(m.getBounds(), { color: '#da1e28', weight: 1.5, fill: false, interactive: false }).addTo(mini); m.on('move', () => kotak.setBounds(m.getBounds())); }
    },
  };
}

/* ---------- halaman 9: kelompok saya ---------- */
function halKelompok() {
  const pilihan = D.meta.wilayah_penyuluh.filter(diKab);
  const w = pilihan.find(x => x.id === S.q.wil) || pilihan.find(x => x.id === 'W-S1') || pilihan[0];
  const k = D.kelompok.filter(x => w.kec.includes(x.kec));
  const perlu = k.filter(x => x.tindakan).sort((a, b) => (b.belum - a.belum) || (URUT_RENCANA[statusRencana(a)] - URUT_RENCANA[statusRencana(b)]) || (b.kebutuhan - a.kebutuhan));
  const tab = ['semua', 'peta'].includes(S.q.tab) ? S.q.tab : 'perlu';
  const namaW = x => x.kec.map(n => 'Kec. ' + n).join(' & ');
  const kartu = x => `<li class="kartu kartu-klp"><a href="${url('/kelompok/' + x.id)}"><h3>${x.id}</h3><p class="sub">${DESA[x.desa].label} · Kec. ${x.kec}</p>
    <p class="tags">${x.prioritas ? tagStatus(x) : x.kategori === 'rendah' ? tag('gray', 'Kapasitas rendah', 'subtract') : tag('gray', 'Bukan prioritas', 'subtract')}${x.prioritas || x.tindakan ? tagRencana(x) : ''}</p>
    <p class="berikut">${ikon('chevron--right')}<span>Berikutnya: ${berikutnya(x)}</span></p>${ikon('chevron--right')}</a></li>`;
  const tabTaut = (id, teks) => `<a href="${url('/kelompok', { wil: S.q.wil, tab: id === 'perlu' ? null : id })}"${tab === id ? ' aria-current="page"' : ''}>${teks}</a>`;
  return {
    judul: 'Kelompok saya', aksi: { teks: 'Wilayah', ikon: 'filter', jalan: () => { const el = $('#pilih-wil'); el.scrollIntoView({ block: 'center' }); el.focus(); } },
    html: `<div class="halaman"><h1 class="judul">Kelompok saya</h1>
      <section class="kartu" style="margin-top:16px"><p class="sub" style="margin:0 0 8px">Penyuluh · ${namaW(w)}</p>
        <dl class="kpi kpi--kecil"><div><dt>kelompok</dt><dd>${k.length}</dd></div><div><dt>prioritas</dt><dd class="kpi--prio">${k.filter(x => x.prioritas).length}</dd></div>
          <div><dt>belum terlayani</dt><dd class="kpi--galat">${k.filter(x => x.belum).length}</dd></div><div><dt>rencana aksi belum mulai</dt><dd>${k.filter(x => statusRencana(x) === 'BELUM').length}</dd></div></dl>
        <p style="margin-top:12px"><label>Wilayah kerja (contoh peran penyuluh) <select id="pilih-wil" data-ubah="wil">${pilihan.map(x => `<option value="${x.id}"${x.id === w.id ? ' selected' : ''}>${x.kab}: ${namaW(x)}</option>`).join('')}</select></label></p></section>
      <nav class="tab" aria-label="Tampilan daftar">${tabTaut('perlu', `Perlu tindakan (${perlu.length})`)}${tabTaut('semua', `Semua (${k.length})`)}${tabTaut('peta', 'Peta')}</nav>
      ${tab === 'peta' ? `<section class="kartu"><div class="peta" id="peta-wilayah" role="img" aria-label="Peta kelompok di ${namaW(w)}"></div>${legendaPeta(['prio', 'lain', 'belum'])}</section>`
        : `<ul class="kartu-klp-kisi">${(tab === 'semua' ? k : perlu).map(kartu).join('')}</ul>`}
      <div style="margin-top:16px">${callout('Hanya wilayah kerja Anda', 'Daftar berisi kelompok binaan di kecamatan Anda. Tidak ada data per orang; ID kelompok pseudonim. "Perlu tindakan" = kelompok prioritas atau indeks kebutuhan ≥ 70 [usulan].')}</div></div>`,
    pasang() {
      if (tab !== 'peta' || !window.L) { if (tab === 'peta') buatPeta($('#peta-wilayah')); return; }
      const titik = [...new Set(k.map(x => x.desa))].map(id => ll(DESA[id].ll));
      const m = buatPeta($('#peta-wilayah'), { kunci: w.id, batas: L.latLngBounds(titik).pad(0.6) });
      titikKelompok(m, k, { klik: x => { location.hash = url('/kelompok/' + x.id); } });
      [...new Set(k.map(x => x.desa))].forEach(id => teksPeta(m, DESA[id].ll, DESA[id].label, 'label-peta--desa'));
    },
  };
}

/* ---------- halaman 10: profil kelompok ---------- */
function halProfil(id) {
  const k = KLP[id], d = DESA[k.desa], r = k.rencana, [anggotaP, anggotaL] = pasangKecil(k.anggota_p, k.anggota_l), peringkat = [...D.kelompok].sort((a, b) => a.skor - b.skor || a.id.localeCompare(b.id)).indexOf(k) + 1;
  const cocokProgram = D.program_opd.filter(p => p.kab === k.kab && (p.lokasi.includes(k.kec) || p.lokasi.startsWith('Semua')));
  const tahun = D.kelompok.flatMap(x => x.program.map(p => p.tahun));
  return {
    judul: `Profil ${k.id}`, pendek: 'Profil kelompok',
    aksi: { teks: 'Bagikan', ikon: 'launch', jalan: () => { (navigator.clipboard ? navigator.clipboard.writeText(location.href) : Promise.reject()).then(() => umpan('Tautan profil disalin.'), () => umpan('Salin alamat halaman ini dari bilah alamat browser.')); } },
    html: `<div class="halaman profil"><a href="${url('/kelompok')}">‹ Kelompok saya</a>
      <h1 class="judul">${k.id}</h1>
      <p class="subjudul">${KODE.jenis_kelompok[k.jenis]} (${KODE.komoditas[k.komoditas]}) · ${d.label} · Kec. ${k.kec}, Kab. ${k.kab}</p>
      <p class="tags" style="margin-top:8px">${tagStatus(k)}</p>
      <div class="profil-kisi">
        <section class="kartu"><div class="peta" id="peta-profil" role="img" aria-label="Lokasi ${k.id} di ${d.label}, Kec. ${k.kec} (dikaburkan ke pusat desa generik)"></div>
          <p class="sub" style="margin-top:12px">Titik digeser ke pusat desa generik (dikaburkan). ${D.meta.atribusi_pendek}.</p></section>
        <section class="kartu"><h2 class="judul-kartu">Rencana aksi ${r ? tagRencana(k, true) : tag('gray', 'Belum ada', 'subtract')}</h2>
          ${r ? `<p class="sub">Disepakati dalam diskusi kelompok (contoh) ${bulan(r.disepakati)} · target selesai ${bulan(r.target)}</p>
            <ol class="langkah">${r.langkah.map((l, i) => { const st = r.status === 'SELESAI' || (r.status === 'BERJALAN' && i < r.aktif - 1) ? 'selesai' : r.status === 'BERJALAN' && i === r.aktif - 1 ? 'aktif' : '';
              return `<li class="${st}"><b>${st === 'selesai' ? '✓' : i + 1}</b><span>${l}${st === 'aktif' ? ' <small>(sedang berjalan)</small>' : st === 'selesai' ? ' <small>(selesai)</small>' : ''}</span></li>`; }).join('')}</ol>`
            : `<p class="sub">Rencana aksi disusun untuk kelompok prioritas. ${berikutnya(k)}.</p>`}</section>
        <section class="kartu"><h2 class="judul-kartu">Kapasitas &amp; kebutuhan</h2>
          <p class="blok__nilai"><b>${k.skor}</b><small>dari 100 · kapasitas ${k.kategori} [usulan batas]</small></p>${strip(k.skor, MED_SKOR, 100, `gabungan ${TEKS_MED_SKOR}`)}
          <p>Peringkat ${peringkat} terendah dari ${D.kelompok.length} kelompok. Indeks kebutuhan ${k.kebutuhan} dari 100.</p>
          <h3 class="judul-kartu" style="font-size:14px;margin:12px 0 8px">Kebutuhan utama</h3><p class="tags">${k.butuh.map(b => `<span class="chip">${KODE.kebutuhan[b]}</span>`).join('')}</p>
          <dl class="rincian"><dt>Status legal</dt><dd>${KODE.status_legal[k.legal]}</dd><dt>Keaktifan</dt><dd>${KODE.keaktifan[k.aktif]} [usulan ambang]</dd>
            <dt>Tata kelola</dt><dd>skor ${k.tata_kelola} dari 4 (pengurus, aturan tertulis, rapat berkala, laporan)</dd><dt>Pencatatan usaha</dt><dd>${KODE.pencatatan[k.catat]}</dd></dl></section>
        <section class="kartu"><h2 class="judul-kartu">Program diterima ${Math.min(...tahun)}–${Math.max(...tahun)}</h2>
          ${k.program.length ? `<ul class="daftar-status">${k.program.map(p => `<li><span>${p.prg ? D.program_opd.find(o => o.id === p.prg).judul : KODE.bantuan[p.jenis]}<small>${KODE.bantuan[p.jenis]} · ${KODE.penyelenggara[p.pemberi]} · ${p.tahun}</small></span>${k.tumpang.includes(p.jenis) ? tag('warm-gray', 'Sejenis dari >1 pihak', 'link') : ''}</li>`).join('')}</ul>`
            : `<div class="galat">${ikon('warning--alt--filled', 'ikon--20')}<span>${k.prioritas ? 'Belum ada program yang menjangkau kelompok ini.' : 'Belum ada program yang tercatat untuk kelompok ini.'}</span></div>`}
          ${k.program.length ? '' : `<p class="sub" style="margin-top:12px">Program yang cocok [usulan]: ${[...programCocok(k), ...cocokProgram.map(p => `${p.judul} (${PEMBERI[p.opd]})`)].join('; ')}.</p>`}</section>
        <section class="kartu"><h2 class="judul-kartu">Anggota</h2>
          <dl class="kpi kpi--kecil"><div><dt>anggota</dt><dd>${selKecil(k.anggota_p + k.anggota_l)}</dd></div><div><dt>perempuan</dt><dd>${anggotaP}</dd></div><div><dt>laki-laki</dt><dd>${anggotaL}</dd></div></dl>
          <dl class="rincian"><dt>Pengurus</dt><dd>${selKecil(k.pengurus)} orang; jumlah pengurus perempuan disembunyikan (n&lt;5)</dd><dt>Anggota penyandang disabilitas</dt><dd>tidak ditampilkan per kelompok; hanya agregat di halaman GEDSI</dd>
            <dt>Pendamping</dt><dd>${KODE.pendamping[k.pendamping]}${k.pendamping === 'PENYULUH' ? ` Kec. ${k.kec} (jabatan)` : ''} · ${k.kunjungan} kunjungan penyuluh dalam 6 bulan</dd></dl>
          <p class="sub" style="margin-top:8px">Hitungan orang di bawah 5 tampil "&lt;5"; pasangannya ditulis "–" supaya tidak bisa dihitung balik dari jumlah anggota. Tanpa nama orang; ID pseudonim.</p></section>
      </div>
      <p class="profil-aksi"><button class="tombol tombol--primer" type="button" data-kunjungan>Catat kunjungan${ikon('checkmark')}</button>${tombol(url('/peta', { desa: d.id, kab: d.kab.toLowerCase() }), 'Lihat di peta', 'map', 'tersier')}</p></div>`,
    pasang() {
      const m = buatPeta($('#peta-profil'), { kunci: id, pusat: d.ll, zoomPusat: 10.5 });
      if (m) L.marker(ll(d.ll), { keyboard: false, icon: L.divIcon({ className: 'titik', iconSize: [36, 36], iconAnchor: [18, 18],
        html: `<svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="16" fill="${k.prioritas ? W.prio : W.lain}" stroke="#fff" stroke-width="2"/><rect x="12" y="12" width="12" height="12" transform="rotate(45 18 18)" fill="none" stroke="#fff" stroke-width="1.5"/></svg>` }) })
        .bindTooltip(kalimatKelompok(k), { className: 'tip', direction: 'top', offset: [0, -16] }).addTo(m);
    },
  };
}

/* ---------- halaman 11: tentang data ---------- */
function halTentang() {
  const r = D.responden, tgl = r.map(x => x.tgl).sort(), enumr = new Set(r.map(x => x.enum));
  const qa = Object.entries(KODE.status_qa).map(([kd, l]) => [l, r.filter(x => x.qa === kd).length]);
  const baris = (kolom, isi) => tabel(kolom.join('-').toLowerCase().replace(/[^a-z-]/g, ''), kolom.map((j, i) => ({ judul: j, panjang: i > 0, sel: b => b[i] })), isi);
  const istilah = [
    ['Kelompok prioritas', 'Kelompok yang perlu dibantu dulu. Ditetapkan di lokakarya bersama Dinas Perikanan, tidak otomatis dari skor.'],
    ['Skor kapasitas (0–100)', 'Gabungan tata kelola, legalitas, pencatatan, jejaring, akses program, dan keaktifan kelompok. Bobotnya masih usulan; kelas sementara: rendah di bawah 45, sedang 45–64, tinggi 65 ke atas.'],
    ['Indeks kebutuhan (0–100)', 'Seberapa besar dukungan yang dibutuhkan kelompok.'],
    ['Pembiayaan formal', 'Kredit atau pembiayaan dari bank, BPR, penyalur KUR, koperasi, LKM, atau pegadaian dalam 12 bulan terakhir.'],
    ['Hari melaut hilang', 'Hari tidak bisa melaut, panen, atau berjualan karena cuaca buruk dalam 12 bulan terakhir (median).'],
    ['Terlayani program', 'Kelompok menerima minimal satu program atau bantuan dalam 3 tahun terakhir.'],
    ['Tumpang tindih', 'Kelompok menerima program sejenis dari lebih dari satu pihak.'],
    ['Rencana aksi', 'Langkah yang disepakati kelompok dalam diskusi (PRA). Statusnya belum mulai, berjalan, atau selesai.'],
    ['Pembanding sementara', 'Rata-rata atau median gabungan Barru + Sinjai. Dipakai sampai target resmi disepakati tim dan dinas.'],
    ['"&lt;5"', 'Angka dari kurang dari 5 orang disembunyikan untuk melindungi responden.'],
    ['GEDSI', 'Kesetaraan gender, disabilitas, dan inklusi sosial.'],
    ['Penerimaan bantuan sosial', 'Penanda kerentanan (proksi). Bukan ukuran "rumah tangga miskin".']];
  const keputusan = [
    ['Platform, hosting, dan pemelihara dasbor', 'Seluruh dasbor', 'Pertanyaan 2'], ['Pelacakan GPS dan pencatatan tangkapan', 'Lapisan "Jejak GPS" di peta; harga pasar berkala', 'Pertanyaan 3'],
    ['Unit analisis dan kuesioner pengurus kelompok', 'Kepengurusan, program per kelompok', 'Pertanyaan 4'], ['Akses data dinas (KUSUKA, daftar kelompok)', 'Program dan daftar kelompok', 'Pertanyaan 5'],
    ['Jadwal dasbor dan masa proyek (kontrak sampai Sep 2027)', 'Pembaruan data dan uji pengguna', 'Pertanyaan 7'], ['Bobot skor, batas kelas, ambang keaktifan, ambang sel kecil', 'Prioritas, kapasitas, aturan "&lt;5"', 'Pertanyaan 8'],
    ['Definisi dampak iklim', 'Halaman cuaca dan iklim', 'Pertanyaan 10'], ['Definisi rumah tangga miskin dan kuota kelompok rentan', 'Halaman perempuan dan kelompok rentan', 'Pertanyaan 11'],
    ['Penyembunyian sekunder sel kecil (agar sel "&lt;5" tidak bisa dihitung balik dari total)', 'Semua tabel dengan "&lt;5"', 'Design brief, pertanyaan terbuka 3']];
  const pembaruan = [
    ['Survei responden dan kelompok (baseline)', 'Per putaran survei', D.meta.periode, 'Pembaruan berikutnya (bila ada)'], ['Rencana aksi kelompok', 'Triwulanan', 'Q2 2027', 'Q3 2027'],
    ['Kunjungan penyuluh', 'Semesteran', 'Jun 2027', 'Pembaruan berikutnya (bila ada)'], ['Program OPD', 'Tahunan', '2027', 'Pembaruan berikutnya (bila ada)'],
    ['Realisasi kuota sampel', 'Mingguan selama survei', 'Jun 2027 (akhir survei)', '–'], ['Kalender musim', 'Sekali (diskusi kelompok)', '2027', '–'], ['Batas wilayah', 'Bila BPS memperbarui', 'Data batas 2019/2020', '–']];
  const cek = t => `<li>${ikon('checkmark')}<span>${t}</span></li>`;
  return {
    judul: 'Tentang data',
    html: `<div class="halaman tentang">
      <nav class="remah" aria-label="Remah roti"><a href="${url('/beranda')}">Beranda</a><span aria-hidden="true">›</span><span aria-current="page">Tentang data</span></nav>
      <h1 class="judul judul--ikon">${ikon('information', 'ikon--24')}Tentang data</h1>
      <p class="temuan__kalimat" style="max-width:940px">Semua angka di dasbor ini adalah data contoh untuk sketsa. Halaman ini menjelaskan istilah, asal data, batas wilayah, keputusan yang belum diambil, dan seberapa sering data diperbarui.</p>
      <p class="meta">Data contoh · mewakili survei ${D.meta.periode} · ${r.length} responden, ${D.kelompok.length} kelompok · dibangkitkan 23 Nov 2026</p>
      <div class="kisi-2" style="align-items:start"><section class="kartu"><h2 class="judul-kartu">Apa itu DATA CONTOH?</h2>
          <div class="pita-contoh" style="position:static;margin:12px 0">${ikon('warning--alt--filled', 'ikon--20 ikon--kuning')}<p><strong>DATA CONTOH</strong> — bukan hasil survei</p></div>
          <ul class="ceklis">${cek(`Angka dibangkitkan komputer dengan seed tetap (<code>gen_dummy.py</code>, seed ${D.meta.seed}) pada 23 Nov 2026. Bentuknya meniru survei yang direncanakan Feb–Jun 2027: ${r.length} responden (250 Barru, 250 Sinjai) dan ${D.kelompok.length} kelompok usaha pesisir (Barru 31, Sinjai 29).`)}
            ${cek('Nama desa generik (Desa B-01 … Desa S-08) dan ID kelompok pseudonim (KLP-B-001). Tidak ada nama orang, NIK, atau nomor HP.')}
            ${cek('Titik kelompok diletakkan di pusat desa generik, di dalam kecamatan aslinya. Itu bukan lokasi sebenarnya.')}
            ${cek('Setelah survei dan pemeriksaan mutu, data asli menggantikan data contoh, dan label ini dihapus.')}</ul></section>
        <section class="kartu"><h2 class="judul-kartu">Sumber batas wilayah</h2><p>${D.meta.atribusi}</p>
          <p class="sub">Barru 7 kecamatan dan Sinjai 9 kecamatan, dicek silang dengan daftar kecamatan COD-AB. Batas mewakili tahun 2019/2020; pemekaran setelahnya belum tercermin. Peta tidak memakai ubin atau peta latar dari layanan daring.</p>
          <p class="sub">Versi pendek di peta: "${D.meta.atribusi_pendek}"</p>
          <p><a href="https://data.humdata.org/dataset/cod-ab-idn" rel="noopener">data.humdata.org/dataset/cod-ab-idn</a></p><p><a href="https://www.geoboundaries.org" rel="noopener">geoboundaries.org</a></p>
          <p><a href="data/SUMBER-BATAS.md">Rincian sumber, versi, dan cara pembuatan berkas batas (SUMBER-BATAS.md)</a></p></section></div>
      <section class="kartu" style="margin-top:24px"><h2 class="judul-kartu">Istilah dalam bahasa sederhana</h2><p class="sub">Istilah yang muncul di halaman pertanyaan, peta, dan tabel</p>${baris(['Istilah', 'Artinya'], istilah)}</section>
      <section class="kartu" style="margin-top:24px"><h2 class="judul-kartu">Keputusan yang belum diambil</h2><p class="sub">Ditampilkan sebagai catatan "Belum diputuskan" di halaman yang terdampak · nomor merujuk daftar pertanyaan di laporan kebutuhan data</p>
        ${baris(['Keputusan', 'Berpengaruh pada', 'Rujukan'], keputusan)}</section>
      <section class="kartu" style="margin-top:24px"><h2 class="judul-kartu">Seberapa sering data diperbarui</h2><p class="sub">Proyek berakhir Sep 2027; pembaruan setelah itu hanya bila ada</p>
        ${baris(['Data', 'Frekuensi', 'Terakhir', 'Berikutnya'], pembaruan)}
        <p class="sumber">Penanggung jawab (jabatan, bukan nama): ${D.pengelola.map(p => `${p.jabatan} — ${p.sop.toLowerCase()}, pembaruan berikutnya ${bulan(p.berikut)}`).join('; ')}.</p></section>
      <div class="kisi-2" style="align-items:start">
        <section class="kartu"><h2 class="judul-kartu">Pendataan dan mutu data</h2><p class="sub">ID pseudonim, tanggal dan kode enumerator, persetujuan, dan status QA · contoh</p>
          <dl class="kpi kpi--kecil" style="margin-top:12px"><div><dt>orang didatangi</dt><dd>${D.meta.didatangi}</dd></div><div><dt>setuju dan diolah</dt><dd>${r.filter(x => x.setuju).length}</dd></div><div><dt>menolak (tidak diolah)</dt><dd>${D.meta.menolak}</dd></div><div><dt>enumerator (kode, bukan nama)</dt><dd>${enumr.size}</dd></div></dl>
          <p class="sub">Tanggal wawancara ${tgl[0]} s.d. ${tgl[tgl.length - 1]}. Rekaman tanpa persetujuan (informed consent) tidak diolah. ID responden berpola <code>RSP-B-0001</code>, kelompok <code>KLP-S-014</code>, enumerator <code>E07</code>.</p>
          <h3 class="judul-kartu" style="font-size:14px;margin-top:16px">Status mutu data (QA) responden</h3><div class="grafik" id="g-qa"></div></section>
        <section class="kartu"><h2 class="judul-kartu">Penggunaan dan pelatihan</h2><p class="sub">Uji pengguna dan contoh keputusan yang merujuk dasbor · contoh</p>
          <h3 class="judul-kartu" style="font-size:14px;margin-top:12px">Keberhasilan tugas uji pengguna</h3><div class="grafik" id="g-uji"></div>
          <h3 class="judul-kartu" style="font-size:14px;margin-top:16px">Contoh keputusan yang merujuk dasbor</h3>
          <ul class="daftar-status">${D.keputusan.map(x => `<li><span>${x.isi}<small>${x.instansi} · ${bulan(x.tanggal)}</small></span></li>`).join('')}</ul></section></div>
      <section class="kartu" style="margin-top:24px"><h2 class="judul-kartu">Peserta pelatihan dasbor, terpilah</h2><p class="sub">Menurut jenis kelamin, umur, disabilitas, dan peran/instansi · contoh · sel kurang dari 5 orang disembunyikan</p>
        ${tabel('pelatihan', [{ judul: 'Kabupaten', sel: b => b.kab }, { judul: 'Bulan', sel: b => bulan(b.bulan) }, { panjang: true, judul: 'Topik', sel: b => b.topik }, { judul: 'Laki-laki', angka: true, sel: b => selKecil(b.l) }, { judul: 'Perempuan', angka: true, sel: b => selKecil(b.p) },
          { judul: 'Pemuda', angka: true, sel: b => selKecil(b.pemuda) }, { judul: 'Disabilitas', angka: true, sel: b => selKecil(b.disabilitas) }, { panjang: true, judul: 'Peran/instansi', sel: b => Object.entries(b.instansi).map(([i, n]) => `${i} ${selKecil(n)}`).join(' · ') }], D.pelatihan)}</section>
      <div class="kisi-2">${callout('Privasi', 'Tanpa NIK, nama, atau nomor HP. Lokasi dikaburkan ke pusat desa. Data sensitif (ikatan modal, pendapatan, kerugian) hanya ditampilkan agregat atau dalam kelas rentang. Sel dari kurang dari 5 orang disembunyikan.')}
        ${callout('Pertanyaan tentang data?', 'Hubungi tim riset PAIR Sulawesi atau penyuluh setempat. Kontak menyusul setelah platform diputuskan.')}</div>
      <p class="sumber" style="margin-top:24px">Halaman sketsa: ${RUTE.map((h, i) => `<a href="${h}">${i + 1}. ${h.slice(2)}</a>`).join(' · ')}. Tampilan memakai token IBM Carbon v11 (tema g10), font IBM Plex Sans, dan ikon Carbon; peta Leaflet 1.9.4; grafik Apache ECharts 5.6.0. Pemetaan 58 data wajib ke halaman ada di <code>peta-indikator.csv</code>.</p></div>`,
    pasang() {
      batang('#g-qa', { lebarLabel: 110, baris: qa.map(([l, n]) => ({ label: kapital(l), v: n, teks: String(n), kalimat: `${n} dari ${r.length} responden berstatus QA "${l}".` })) });
      batang('#g-uji', { maks: 100, lebarLabel: 300, baris: D.uji_pengguna.map(u => ({ label: u.tugas, v: 100 * u.berhasil / u.peserta, teks: nf(100 * u.berhasil / u.peserta) + '%', kalimat: `${u.berhasil} dari ${u.peserta} pengguna uji menyelesaikan tugas "${u.tugas.toLowerCase()}" dengan benar.` })) });
    },
  };
}

/* ---------- kerangka: rute, navigasi, event ---------- */
function halaman() {
  const p = S.path, t = p.match(/^\/pertanyaan\/(\w+)$/), g = p.match(/^\/kelompok\/(KLP-[BS]-\d{3})$/);
  if (p === '/beranda') return halBeranda();
  if (t && TANYA[t[1]]) return halTanya(t[1]);
  if (p === '/peta') return halPeta();
  if (p === '/kelompok') return halKelompok();
  if (g && KLP[g[1]]) return halProfil(g[1]);
  if (p === '/tentang') return halTentang();
  return { judul: 'Halaman tidak ditemukan', html: `<div class="halaman"><h1 class="judul">Halaman tidak ditemukan</h1><p class="subjudul">Alamat ini tidak ada di sketsa. <a href="${url('/beranda')}">Kembali ke Beranda</a>.</p></div>` };
}
let pathLama = null, aksiHp = null;
function navigasi(h) {
  const kini = p => (S.path === p || S.path.startsWith(p + '/') ? ' aria-current="page"' : '');
  $('#nav-utama').innerHTML = `<a href="${url('/beranda')}"${kini('/beranda')}>Beranda</a>
    <div class="menu"><button type="button" aria-haspopup="true" class="${S.path.startsWith('/pertanyaan') ? 'aktif' : ''}">Pertanyaan${ikon('chevron--down')}</button>
      <ul>${Object.entries(TANYA).map(([id, t]) => `<li><a href="${url('/pertanyaan/' + id)}"${kini('/pertanyaan/' + id)}>${t.judul}</a></li>`).join('')}</ul></div>
    <a href="${url('/peta')}"${kini('/peta')}>Peta</a><a href="${url('/kelompok')}"${kini('/kelompok')}>Kelompok</a><a href="${url('/tentang')}"${kini('/tentang')}>Tentang data</a>`;
  const desaTetap = v => (v && DESA[S.q.desa] && DESA[S.q.desa].kab !== KAB[v] ? null : S.q.desa);
  $$('[data-pilih-kab]').forEach(el => { el.innerHTML = [['', 'Semua'], ['barru', 'Barru'], ['sinjai', 'Sinjai']].map(([v, l]) =>
    `<a href="${url(S.path, { ...S.q, kab: v || null, desa: desaTetap(v), wil: null, semua: null })}" class="${(S.q.kab || '') === v ? 'terpilih' : ''}"${(S.q.kab || '') === v ? ' aria-current="true"' : ''}>${l}</a>`).join(''); });
  $('#judul-hp').textContent = h.pendek || h.judul;
  aksiHp = h.aksi || { teks: 'Cari', ikon: 'search', jalan: () => { bukaMenu(true); $('#cari').focus(); } };
  $('#aksi-hp').innerHTML = ikon(aksiHp.ikon) + aksiHp.teks;
}
function bukaMenu(buka) {
  document.body.classList.toggle('menu-buka', buka);
  $('#tombol-menu').setAttribute('aria-expanded', String(buka));
  $('#tombol-menu').setAttribute('aria-label', buka ? 'Tutup menu' : 'Buka menu');
  $('#tombol-menu').innerHTML = ikon(buka ? 'close' : 'menu');
}
function render() {
  baca();
  grafik.forEach(c => c.dispose()); grafik = [];
  petaAktif.forEach(m => m.remove()); petaAktif = []; petaUtama = null;
  unduhan = {};
  const h = halaman();
  document.title = `${h.judul} · PAIR Sulawesi (DATA CONTOH)`;
  $('#app').innerHTML = h.html;
  navigasi(h);
  bukaMenu(false);
  if (h.pasang) h.pasang();
  if (S.path !== pathLama) { scrollTo(0, 0); pathLama = S.path; if (document.activeElement && document.activeElement.blur) document.activeElement.blur(); }
}
function cari(teks) {
  const t = teks.trim().toLowerCase();
  if (!t) return;
  const k = D.kelompok.find(x => x.id.toLowerCase() === t), d = D.desa.find(x => x.label.toLowerCase() === t || x.id.toLowerCase() === t);
  const kc = D.kecamatan.find(x => 'kec. ' + x.kec.toLowerCase() === t || x.kec.toLowerCase() === t);
  $('#cari').value = '';
  if (k) location.hash = url('/kelompok/' + k.id);
  else if (d) location.hash = url('/peta', { kab: d.kab.toLowerCase(), desa: d.id });
  else if (kc) { const dd = D.desa.find(x => x.kec === kc.kec); location.hash = url('/peta', { kab: kc.kab.toLowerCase(), desa: dd && dd.id }); }
  else umpan(`Tidak ada desa, kecamatan, atau kelompok bernama "${teks.trim()}".`);
}
document.addEventListener('click', e => {
  const el = e.target.closest('[data-unduh],[data-banding],[data-zoom],[data-f],[data-kunjungan]');
  if (!el) return;
  const s = el.dataset;
  if (s.unduh) unduhCsv(s.unduh);
  else if (s.banding) ubah({ banding: [...new Set([...(S.q.banding || '').split(',').filter(x => DESA[x]), s.banding])].slice(0, 3).join(',') });
  else if (s.zoom && petaUtama) petaUtama.fitBounds(batasKab(s.zoom), { padding: [12, 12] });
  else if (s.f) gantiSaring(s.f);
  else if ('kunjungan' in s) umpan('Kunjungan dicatat (contoh; sketsa tidak menyimpan data).');
});
document.addEventListener('change', e => {
  const s = e.target.dataset;
  if (s.ubah) ubah({ [s.ubah]: e.target.value, f: null, semua: null });
  if (s.lapis) { lapis[s.lapis] = e.target.checked; render(); }
});
$('#tombol-menu').addEventListener('click', () => bukaMenu(!document.body.classList.contains('menu-buka')));
$('#aksi-hp').addEventListener('click', () => aksiHp.jalan());
$('#form-cari').addEventListener('submit', e => { e.preventDefault(); cari($('#cari').value); });
$('#cari').addEventListener('change', e => cari(e.target.value));
$('#ikon-cari').innerHTML = ikon('search');
$('#daftar-cari').innerHTML = [...D.desa.map(d => d.label), ...D.kecamatan.map(k => 'Kec. ' + k.kec), ...D.kelompok.map(k => k.id)].map(v => `<option value="${v}">`).join('');
addEventListener('hashchange', () => { if (!location.hash || location.hash.startsWith('#/')) render(); });
// "Langsung ke isi": pindahkan fokus ke <main> tanpa mengganti hash route
$('.lompat').addEventListener('click', e => { e.preventDefault(); $('#app').focus(); $('#app').scrollIntoView(); });
let lebarLama = innerWidth, tunda;
// lebar jendela berubah: lupakan pandangan peta yang tersimpan supaya peta dipaskan ulang ke wilayahnya
addEventListener('resize', () => { clearTimeout(tunda); tunda = setTimeout(() => { if (innerWidth !== lebarLama) { lebarLama = innerWidth; Object.keys(pandangan).forEach(k => delete pandangan[k]); render(); } }, 200); });
render();

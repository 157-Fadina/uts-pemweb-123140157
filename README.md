# 🎵 VoxFinder - Aplikasi Eksplorasi Musik

Ini adalah proyek Ujian Tengah Semester (UTS) untuk mata kuliah Pemrograman Web.

## 👤 Profil

* **Nama:** Fadina Mustika Ratnanaingsih
* **NIM:** 123140157
* **Kelas:** RB

---

## 📄 Deskripsi Proyek

**VoxFinder** adalah aplikasi web front-end yang dibuat menggunakan **React** dan **Vite**. Aplikasi ini berfungsi sebagai *dashboard* sederhana untuk mencari dan mengeksplorasi musik. Pengguna dapat melihat *highlight* musik melalui *carousel*, melakukan pencarian menggunakan formulir, dan melihat hasilnya dalam format tabel yang rapi.

Desain aplikasi ini dibuat responsif menggunakan framework **Bootstrap** untuk memastikan pengalaman pengguna yang baik di berbagai perangkat.

### ✨ Fitur Utama

* **Header & Footer:** Komponen navigasi dan footer yang konsisten di seluruh aplikasi.
* **Hero Carousel:** Menampilkan *highlight* atau item unggulan (dibuat dari `HeroCarousel.jsx`).
* **Formulir Pencarian:** Memungkinkan pengguna memasukkan kriteria pencarian (dibuat dari `SearchForm.jsx`).
* **Tabel Hasil:** Menampilkan data hasil pencarian secara terstruktur (dibuat dari `ResultsTable.jsx`).
* **Loading State:** Menampilkan *placeholder* pemuatan saat data sedang diambil (dibuat dari `LoadingGrid.jsx`).

---

## 🔧 Teknologi yang Digunakan

* **[React](https://reactjs.org/)** - Library JavaScript untuk membangun antarmuka pengguna.
* **[Vite](https://vitejs.dev/)** - Build tool modern untuk pengembangan front-end.
* **[Bootstrap](https://getbootstrap.com/)** - Framework CSS untuk desain yang responsif.
* **JavaScript (ES6+)**
* **HTML5 & CSS3**

---

## 🚀 Cara Instalasi dan Menjalankan

Ikuti langkah-langkah ini untuk menjalankan proyek secara lokal:

1.  **Clone repositori ini:**
    ```bash
    git clone [LINK_REPOSITORI_GITHUB_ANDA]
    ```

2.  **Masuk ke direktori proyek:**
    ```bash
    cd uts-pemweb-123140157/my-app
    ```

3.  **Install semua dependencies (paket) yang dibutuhkan:**
    ```bash
    npm install
    ```

4.  **Jalankan aplikasi dalam mode development:**
    ```bash
    npm run dev
    ```
    Buka [http://localhost:5173](http://localhost:5173) (atau port lain yang muncul di terminal) di browser Anda.

---

## 🌐 Link Deployment

Aplikasi ini telah di-deploy menggunakan Vercel dan dapat diakses secara publik melalui link di bawah ini:

 (https://voxfinder.vercel.app/)

---

## 📸 Screenshot Aplikasi

Berikut adalah tampilan dari aplikasi VoxFinder (Desktop):
<img width="1900" height="867" alt="image" src="https://github.com/user-attachments/assets/bc4af647-3caa-4792-8507-be954e294fc2" />
<img width="1892" height="860" alt="image" src="https://github.com/user-attachments/assets/e41b0dc2-82a9-4967-a021-300469689b99" />
<img width="1918" height="858" alt="image" src="https://github.com/user-attachments/assets/f292312e-0bb6-42eb-847c-926417786707" />

Berikut adalah tampilan dari aplikasi VoxFinder (Mobile):
<img width="828" height="1792" alt="IMG_1141" src="https://github.com/user-attachments/assets/960b6297-3fc5-4afe-a760-ef91b34e1bcf" />
<img width="828" height="1792" alt="IMG_1142" src="https://github.com/user-attachments/assets/6ff39dcc-39a7-4732-94de-2b3e9ff0b34f" />
<img width="828" height="1792" alt="IMG_1143" src="https://github.com/user-attachments/assets/6f864f2a-0328-4ef9-bc00-b49ebb17f6eb" />

---

## 📂 Struktur Proyek

my-app/ ├── public/ │ └── (Aset statis) ├── src/ │ ├── assets/ │ │ └── (Gambar, ikon, dll.) │ ├── components/ │ │ ├── Header.jsx │ │ ├── HeroCarousel.jsx │ │ ├── SearchForm.jsx │ │ ├── ResultsTable.jsx │ │ ├── LoadingGrid.jsx │ │ └── Footer.jsx │ ├── App.css │ ├── App.jsx (Komponen utama) │ ├── index.css │ └── main.jsx (Entry point aplikasi) ├── .gitignore ├── index.html ├── package.json ├── README.md └── vite.config.js

---

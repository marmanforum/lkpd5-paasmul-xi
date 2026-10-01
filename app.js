const pageContent = document.querySelector("#page-content");
const routeLinks = [...document.querySelectorAll(".primary-nav [data-route]")];
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

const members = [
  { name: "M. Arman", role: "Project Manager", initials: "MA", manager: true },
  { name: "Faiz", role: "Anggota", initials: "F" },
  { name: "Ahmad", role: "Anggota", initials: "A" },
  { name: "Choralyan", role: "Anggota", initials: "C" },
];

const memberCard = (member, compact = false) => `
  <article class="member-card${member.manager ? " member-card-manager" : ""}${compact ? " member-card-compact" : ""}">
    <div class="member-photo" aria-label="Foto belum tersedia"><span>${member.initials}</span><small>Foto belum tersedia</small></div>
    <div class="member-details">
      <span class="eyebrow">${member.role}</span>
      <h3>${member.name}</h3>
      <p>Biodata belum diisi</p>
      ${compact ? "" : '<p class="member-description">Deskripsi belum diisi</p>'}
    </div>
  </article>`;

const pages = {
  home: `
    <section class="hero page-wrap">
      <div class="hero-copy">
        <span class="eyebrow"><span class="status-dot"></span> KELAS / KELOMPOK [ISI NANTI]</span>
        <h1>Kenalan dengan<br /><em>kelompok kami.</em></h1>
        <p class="hero-lead">[Deskripsi singkat tentang kelompok akan ditambahkan di sini.]</p>
        <div class="button-row">
          <a class="button button-primary" href="#/anggota">Lihat Anggota <span aria-hidden="true">↗</span></a>
          <a class="button button-text" href="#/profile">Tentang Kami <span aria-hidden="true">→</span></a>
        </div>
        <div class="hero-note"><span class="note-rule"></span><span>Belajar bersama, tumbuh bersama.</span></div>
      </div>
      <div class="hero-art" aria-label="Tempat foto kelompok">
        <div class="photo-placeholder">
          <span class="photo-frame-icon" aria-hidden="true"><span></span></span>
          <strong>Foto kelompok</strong>
          <span>Tambahkan foto nanti</span>
          <span class="photo-corner photo-corner-one"></span>
          <span class="photo-corner photo-corner-two"></span>
        </div>
        <span class="hero-stamp">BERSAMA<br />LEBIH BAIK</span>
        <span class="hero-art-caption">[Nama kelompok] · [Tahun]</span>
      </div>
    </section>

    <section class="intro-band">
      <div class="page-wrap intro-grid">
        <span class="section-index">01 / TENTANG</span>
        <h2>Satu tim,<br /><em>banyak ide.</em></h2>
        <div class="intro-copy"><p>[Ceritakan sedikit tentang kelompok, hal yang sedang dipelajari, atau tujuan bersama.]</p><a class="inline-link" href="#/profile">Lebih banyak tentang kami <span aria-hidden="true">→</span></a></div>
      </div>
    </section>

    <section class="page-wrap home-section">
      <div class="section-heading"><div><span class="section-index">02 / SEKILAS</span><h2>Angka kami</h2></div><span class="quiet-label">Akan diperbarui bersama</span></div>
      <div class="stats-grid">
        <article class="stat-item"><span class="stat-number">04</span><span class="stat-label">Anggota kelompok</span></article>
        <article class="stat-item"><span class="stat-number">[—]</span><span class="stat-label">Proyek bersama</span></article>
        <article class="stat-item"><span class="stat-number">[—]</span><span class="stat-label">Sejak tahun</span></article>
      </div>
    </section>

    <section class="members-band">
      <div class="page-wrap home-section">
        <div class="section-heading"><div><span class="section-index">03 / TIM KAMI</span><h2>Orang di balik kelompok.</h2></div><a class="inline-link" href="#/anggota">Lihat semua <span aria-hidden="true">→</span></a></div>
        <div class="member-grid member-grid-preview">${members.slice(0, 3).map(member => memberCard(member, true)).join("")}</div>
      </div>
    </section>

    <section class="page-wrap quote-section"><span class="quote-mark" aria-hidden="true">“</span><blockquote>Datang bersama adalah awal. Tetap bersama adalah kemajuan. Bekerja bersama adalah keberhasilan.</blockquote><span class="quote-credit">— [Sumber / nama kelompok]</span></section>

    <section class="page-wrap activity-section"><div><span class="section-index">04 / KEGIATAN</span><h2>Proyek & kegiatan</h2><p>Belum ada proyek atau kegiatan yang ditambahkan.</p></div><span class="activity-mark" aria-hidden="true">+</span></section>`,

  profile: `
    <section class="page-hero page-wrap"><span class="section-index">RUANG KENAL / 01</span><h1>Tentang <em>kelompok.</em></h1><p>Informasi kelompok akan dilengkapi bersama.</p></section>
    <section class="page-wrap profile-layout">
      <div class="profile-photo-placeholder"><span class="photo-frame-icon" aria-hidden="true"><span></span></span><strong>Foto kelompok</strong><span>Tambahkan foto nanti</span></div>
      <div class="profile-info"><span class="eyebrow">IDENTITAS</span><h2>Data kelompok</h2><dl class="info-list">
        <div><dt>Nama kelompok</dt><dd>[Isi nanti]</dd></div><div><dt>Kelas</dt><dd>[Isi nanti]</dd></div><div><dt>Jurusan</dt><dd>[Isi nanti]</dd></div><div><dt>Sekolah</dt><dd>[Isi nanti]</dd></div><div><dt>Deskripsi kelompok</dt><dd>[Isi nanti]</dd></div>
      </dl></div>
    </section>
    <section class="values-band"><div class="page-wrap values-grid"><article><span class="eyebrow">ARAH KAMI / 01</span><h2>Visi</h2><p>[Isi nanti]</p></article><article><span class="eyebrow">LANGKAH KAMI / 02</span><h2>Misi</h2><p>[Isi nanti]</p></article></div></section>`,

  anggota: `
    <section class="page-hero page-wrap"><span class="section-index">RUANG KENAL / 02</span><h1>Orang-orang <em>kami.</em></h1><p>Empat anggota, satu kelompok. Biodata dapat dilengkapi nanti.</p></section>
    <section class="page-wrap members-page"><div class="section-heading"><div><span class="eyebrow">PROJECT MANAGER</span><h2>Koordinator</h2></div></div>${memberCard(members[0])}
      <div class="section-heading member-heading"><div><span class="eyebrow">ANGGOTA KELOMPOK</span><h2>Tim anggota</h2></div><span class="quiet-label">03 anggota</span></div>
      <div class="member-grid">${members.slice(1).map(member => memberCard(member)).join("")}</div>
    </section>`,

  kontak: `
    <section class="page-hero page-wrap"><span class="section-index">RUANG KENAL / 03</span><h1>Mari <em>terhubung.</em></h1><p>Informasi kontak akan dilengkapi setelah tersedia.</p></section>
    <section class="page-wrap contact-layout">
      <div class="contact-details"><span class="eyebrow">KONTAK KELOMPOK</span><h2>Temukan kami.</h2><dl class="info-list contact-list">
        <div><dt>Email</dt><dd>[Isi nanti]</dd></div><div><dt>Instagram</dt><dd>[Isi nanti]</dd></div><div><dt>WhatsApp</dt><dd>[Isi nanti]</dd></div><div><dt>Alamat</dt><dd>[Isi nanti]</dd></div><div><dt>Media sosial lainnya</dt><dd>[Isi nanti]</dd></div>
      </dl></div>
      <form class="contact-form"><span class="eyebrow">KIRIM PESAN</span><h2>Ada yang ingin disampaikan?</h2><label for="contact-name">Nama</label><input id="contact-name" name="name" autocomplete="name" placeholder="Nama Anda" required /><label for="contact-email">Email</label><input id="contact-email" name="email" type="email" autocomplete="email" placeholder="nama@email.com" required /><label for="contact-message">Pesan</label><textarea id="contact-message" name="message" rows="4" placeholder="Tulis pesan di sini" required></textarea><button class="button button-primary" type="submit">Kirim pesan <span aria-hidden="true">↗</span></button><p class="form-notice" role="status" aria-live="polite">Form ini belum terhubung ke layanan pengiriman pesan. Data tidak akan dikirim.</p></form>
    </section>`,
};

function currentRoute() {
  const route = window.location.hash.replace(/^#\/?/, "").split("/")[0];
  return Object.hasOwn(pages, route) ? route : "home";
}

function renderPage() {
  const route = currentRoute();
  pageContent.innerHTML = pages[route];
  document.title = `${route === "home" ? "Home" : route.charAt(0).toUpperCase() + route.slice(1)} | Profil Kelompok`;
  routeLinks.forEach(link => {
    const active = link.dataset.route === route;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Buka navigasi");
  primaryNav.classList.remove("is-open");

  const contactForm = pageContent.querySelector(".contact-form");
  contactForm?.addEventListener("submit", event => {
    event.preventDefault();
    contactForm.querySelector(".form-notice").textContent = "Form belum terhubung ke layanan pengiriman pesan. Data tidak dikirim.";
  });
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Tutup navigasi" : "Buka navigasi");
  primaryNav.classList.toggle("is-open", isOpen);
});

window.addEventListener("hashchange", renderPage);
document.querySelector("#current-year").textContent = new Date().getFullYear();
if (!window.location.hash) window.history.replaceState(null, "", "#/home");
renderPage();

# Product Requirements Document (PRD)
## Personal Portfolio Website — Faqih Abdul Rachman
**Version:** 1.0.0  
**Tanggal:** Juni 2026  
**Author:** Faqih Abdul Rachman  
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

---

## 1. Overview & Tujuan

### 1.1 Ringkasan Produk
Website portfolio profesional satu halaman (_single-page application_) yang menampilkan profil, keahlian teknis, pengalaman proyek, dan latar belakang pendidikan Faqih Abdul Rachman — seorang **Backend Developer** berspesialisasi di Java Spring Boot, integrasi sistem keuangan, dan payment backend.

### 1.2 Tujuan Bisnis
- Menarik perhatian recruiter dan klien potensial secara digital
- Menampilkan track record proyek enterprise (Kimia Farma, MAP, BPI) secara visual
- Memberikan kesan profesional, modern, dan _fluid_ yang mencerminkan kompetensi teknis

### 1.3 Target Pengguna
| Segmen | Kebutuhan Utama |
|---|---|
| HRD / Rekruter Teknologi | Melihat stack, durasi proyek, klien |
| Tech Lead / CTO | Detail arsitektur dan tanggung jawab teknis |
| Klien Freelance | Portofolio proyek, kontak langsung |

---

## 2. Arsitektur & Tech Stack

### 2.1 Core Framework
```
Framework   : Next.js 14 (App Router)
Language    : TypeScript 5.x
Styling     : Tailwind CSS 3.x
Animation   : Framer Motion 11.x
Icons       : Lucide React / React Icons
Font        : Inter (body) + JetBrains Mono (code elements)
Deployment  : Vercel (recommended)
```

### 2.2 Struktur Direktori
```
/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main single-page entry
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── AnimatedText.tsx
│       ├── ProjectCard.tsx
│       ├── SkillBadge.tsx
│       └── TimelineItem.tsx
├── data/
│   └── portfolio.ts        # Semua konten CV sebagai data TS
├── lib/
│   └── utils.ts
└── public/
    └── assets/
```

---

## 3. Fitur & Spesifikasi Halaman

### 3.1 Navbar (Sticky + Transparent → Solid on Scroll)

**Behavior:**
- Default: transparan dengan blur backdrop
- On scroll > 80px: background solid `bg-slate-950/90` + `backdrop-blur-md`
- Smooth scroll ke setiap section saat link diklik
- Active link highlight berdasarkan section yang sedang di-viewport (_Intersection Observer_)
- Hamburger menu (mobile): slide-in drawer dari kanan

**Konten:**
```
Logo: "FAR" (monogram) | Links: About · Skills · Experience · Education · Contact
CTA Button: "Download CV" → trigger download file PDF
```

---

### 3.2 Section: Hero

**Layout:** Full-viewport height, centered, dengan animated background

**Konten:**
```
Tagline kecil  : "Backend Developer"
Nama utama     : "Faqih Abdul Rachman"
Sub-deskripsi  : "Membangun sistem backend yang andal untuk fintech, 
                  e-commerce, dan layanan kesehatan digital."
CTA Buttons    : [Lihat Portofolio →]  [Hubungi Saya]
```

**Animasi:**
- Nama muncul dengan efek _typewriter_ atau _staggered letter reveal_
- Background: partikel abstrak atau grid animasi subtle (CSS/Canvas)
- Floating badge kecil menampilkan: `Java` · `Spring Boot` · `Mulesoft` berputar/melayang

---

### 3.3 Section: About

**Layout:** 2-kolom (desktop) — kiri teks, kanan stats card

**Konten Teks:**
```
Seorang backend developer dengan pengalaman di industri fintech, 
e-commerce, dan healthcare digital. Berpengalaman membangun RESTful API, 
integrasi third-party, dan sistem transaksi bervolume tinggi menggunakan 
Java Spring Boot dan Mulesoft.
```

**Stats Cards (animasi counter):**
| Stat | Nilai |
|---|---|
| Tahun Pengalaman | 4+ |
| Proyek Selesai | 5 |
| Klien Enterprise | 4 |
| Teknologi | 15+ |

**Animasi:** Counter angka dari 0 → target saat section masuk viewport

---

### 3.4 Section: Skills

**Layout:** Grid cards dengan kategorisasi

**Kategori & Konten:**

```typescript
const skillCategories = [
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["Java", "Spring Boot", "Spring Framework", "RESTful API", "Mulesoft Anypoint", "JUnit"]
  },
  {
    category: "Database",
    icon: "Database",
    skills: ["MySQL", "PostgreSQL", "Oracle", "Redis", "Vector DB"]
  },
  {
    category: "Cloud & Infrastructure",
    icon: "Cloud",
    skills: ["AWS", "Apache Tomcat", "Linux (Ubuntu)", "Windows Server"]
  },
  {
    category: "Tools & Others",
    icon: "Wrench",
    skills: ["IntelliJ IDEA", "Anypoint Studio", "XML", "HTML", "JSP", "Servlet", "Locust", "Termius"]
  },
  {
    category: "Domain Expertise",
    icon: "Briefcase",
    skills: ["Payment Gateway", "Wallet Integration", "Healthcare API", "E-commerce Backend", "Transaction Locking"]
  }
]
```

**UI:** Skill badge dengan warna per kategori + hover glow effect. Animasi masuk: _staggered fade-up_ per badge.

---

### 3.5 Section: Experience (Timeline)

**Layout:** Vertical timeline dengan kartu proyek interaktif

**Data Proyek:**

```typescript
const experiences = [
  {
    id: 1,
    project: "Biller Rintis (PDAM & KAI)",
    company: "Indivara Teknology Quantum",
    client: "Rintis",
    role: "Technical Developer",
    duration: "Oktober 2025 – Februari 2026",
    stack: ["Mulesoft", "Anypoints", "Java"],
    highlights: [
      "Develop dan integrasi WOI Wallet dengan third-party via Mulesoft",
      "Implementasi transaksi untuk PDAM dan KAI"
    ]
  },
  {
    id: 2,
    project: "Vybe BPI",
    company: "Indivara Teknology Quantum",
    client: "Bank of Philippine Islands",
    role: "Technical Developer",
    duration: "April 2025 – Oktober 2025",
    stack: ["Java", "Spring Boot"],
    highlights: [
      "Desain dan implementasi RESTful API untuk enhancement feature",
      "Membangun sistem locking untuk mencegah transaksi duplikat"
    ]
  },
  {
    id: 3,
    project: "Petron",
    company: "Indivara Teknology Quantum",
    client: "Bank of Philippine Islands",
    role: "Technical Developer",
    duration: "November 2024 – Maret 2025",
    stack: ["Spring Framework", "AWS"],
    highlights: [
      "Performance improvement pada aplikasi existing",
      "Bug fixing dan adjustment sistem legacy"
    ]
  },
  {
    id: 4,
    project: "MAP E-Commerce",
    company: "Harmonix Technology Peentar",
    client: "Mitra Adi Perkasa",
    role: "Technical Developer",
    duration: "Mei 2023 – November 2023",
    stack: ["Java", "Spring Boot", "WatermelonDB"],
    highlights: [
      "Desain RESTful API untuk data retrieval dan Menu Management",
      "Backend service untuk data versioning menggunakan WatermelonDB",
      "API transaksi e-commerce"
    ]
  },
  {
    id: 5,
    project: "Kimia Farma Mobile",
    company: "Harmonix Technology Peentar",
    client: "Kimia Farma",
    role: "Technical Developer",
    duration: "Mei 2022 – April 2023",
    stack: ["Java", "Spring Boot"],
    highlights: [
      "Integrasi transaksi KF Mobile ke Tokopedia",
      "Pengembangan fitur Chat Dokter",
      "Backend API untuk transaksi"
    ]
  }
]
```

**UI Behavior:**
- Timeline vertikal dengan dot connector
- Setiap proyek: card yang bisa di-expand/collapse (_accordion_)
- Stack badge berwarna per teknologi
- Hover: card naik sedikit + shadow lebih dalam
- Animasi: slide-in dari kiri/kanan secara bergantian (_alternating_)

---

### 3.6 Section: Education & Certifications

**Layout:** 2-kolom — Pendidikan (kiri) + Sertifikasi (kanan)

**Education Card:**
```
🎓 Sarjana (S1) — Sastra Inggris
   UIN Syarif Hidayatullah Jakarta
   Lulus: November 2019
```

**Certifications Table (interaktif):**
| # | Provider | Program | Tahun |
|---|---|---|---|
| 1 | Digitalent (Kemkominfo) | Java Foundation & Programming | 2022 |
| 2 | Udemy | Spring & Hibernate | Agustus 2022 |
| 3 | LinkedIn Learning | Spring Security | November 2023 |
| 4 | LinkedIn Learning | Advanced SQL | November 2023 |

**UI:** Card dengan icon provider + badge tahun. Hover: subtle shine effect.

---

### 3.7 Section: Contact

**Layout:** Centered, minimal

**Konten:**
```
Heading: "Mari Berkolaborasi"
Sub: "Terbuka untuk peluang full-time, kontrak, maupun freelance."

Links:
- Email    : [ikon] faqih@email.com
- LinkedIn : [ikon] linkedin.com/in/faqih-abdul-rachman
- GitHub   : [ikon] github.com/faqihabdulrachman (jika ada)
- WhatsApp : [ikon] (nomor opsional)
```

**UI:** Card gelap dengan hover glow per link. CTA besar "Kirim Pesan" bisa dibuat sebagai `mailto:` link atau form sederhana.

---

### 3.8 Footer

```
© 2026 Faqih Abdul Rachman · Built with Next.js & ❤️
```

---

## 4. Design System

### 4.1 Color Palette
```css
/* Dark theme (default) */
--bg-primary    : #020817   /* slate-950 */
--bg-secondary  : #0f172a   /* slate-900 */
--bg-card       : #1e293b   /* slate-800 */
--accent-primary: #6366f1   /* indigo-500 — CTA, highlights */
--accent-glow   : #818cf8   /* indigo-400 — hover states */
--text-primary  : #f8fafc   /* slate-50 */
--text-secondary: #94a3b8   /* slate-400 */
--border        : #334155   /* slate-700 */

/* Skill category colors */
--skill-backend : #3b82f6   /* blue-500 */
--skill-db      : #10b981   /* emerald-500 */
--skill-cloud   : #f59e0b   /* amber-500 */
--skill-tools   : #8b5cf6   /* violet-500 */
--skill-domain  : #ec4899   /* pink-500 */
```

### 4.2 Typography Scale
```css
font-family: 'Inter', system-ui, sans-serif;
font-mono: 'JetBrains Mono', monospace;

/* Scale */
h1 (Hero name)   : clamp(2.5rem, 8vw, 5rem), font-bold
h2 (Section)     : clamp(1.75rem, 4vw, 2.5rem), font-semibold
h3 (Card title)  : 1.25rem, font-semibold
body             : 1rem / 1.6 line-height
small/caption    : 0.875rem
code/badge       : JetBrains Mono, 0.8rem
```

### 4.3 Spacing & Layout
```
Max content width : 1200px
Section padding   : py-24 (desktop) / py-16 (mobile)
Card border-radius: rounded-xl (12px)
Card border       : 1px solid var(--border) + hover: border-indigo-500/50
```

### 4.4 Animation Principles
| Elemen | Animasi | Durasi |
|---|---|---|
| Section masuk viewport | Fade up (y: 40 → 0, opacity: 0 → 1) | 0.6s ease-out |
| Skill badges | Staggered (0.05s delay per badge) | 0.4s |
| Counter stats | Easing number increment | 2s ease-in-out |
| Navbar scroll | Background transition | 0.3s |
| Card hover | translateY(-4px) + shadow | 0.2s |
| Timeline items | Alternating slide-in | 0.5s |
| Hero text | Typewriter / letter stagger | 1.2s |
| CTA buttons | Scale 1.0 → 1.05 on hover | 0.15s |

---

## 5. Responsiveness

### 5.1 Breakpoints (Tailwind)
```
sm  : 640px   — Tablet portrait
md  : 768px   — Tablet landscape
lg  : 1024px  — Desktop
xl  : 1280px  — Wide desktop
```

### 5.2 Behavior per Section
| Section | Mobile | Desktop |
|---|---|---|
| Hero | Stack vertikal, teks center | Teks kiri + animasi kanan |
| About | 1 kolom: teks → stats | 2 kolom: 60/40 split |
| Skills | 1 kolom grid | 2–3 kolom grid |
| Timeline | Timeline vertikal (satu sisi) | Alternating kiri-kanan |
| Education | Stack vertikal | 2 kolom |
| Contact | Stack vertikal | Centered horizontal |

---

## 6. Performance & SEO

### 6.1 Core Web Vitals Target
| Metrik | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID / INP | < 100ms |
| CLS | < 0.1 |
| Lighthouse Score | ≥ 90 |

### 6.2 Optimasi
- Semua gambar menggunakan `next/image` dengan `priority` untuk hero
- Font loading: `next/font` dengan `display: swap`
- Animasi Framer Motion: `will-change: transform` + `useReducedMotion()` support
- `React.lazy()` + Suspense untuk section di bawah fold
- Metadata lengkap di `layout.tsx` (OG tags, twitter card, favicon)

### 6.3 SEO Metadata
```typescript
export const metadata: Metadata = {
  title: "Faqih Abdul Rachman | Backend Developer",
  description: "Backend Developer spesialis Java Spring Boot, Mulesoft, dan sistem keuangan digital. Berpengalaman di fintech, e-commerce, dan healthcare.",
  keywords: ["backend developer", "java spring boot", "mulesoft", "fintech developer indonesia"],
  openGraph: {
    title: "Faqih Abdul Rachman — Backend Developer",
    type: "website",
    locale: "id_ID"
  }
}
```

---

## 7. Interaktivitas & UX Detail

### 7.1 Scroll Behavior
- `scroll-behavior: smooth` aktif secara global
- Section snap: opsional (`scroll-snap-type: y proximity`)
- Progress bar tipis di atas halaman menunjukkan posisi scroll

### 7.2 Easter Eggs / Extra Polish
- Kursor kustom (dot + ring) pada desktop
- Partikel/grid background pada hero yang merespons gerakan mouse
- Dark mode only (sesuai identitas developer)
- "Copy email" button dengan toast notification saat diklik

### 7.3 Aksesibilitas
- Semua elemen interaktif memiliki `aria-label`
- Fokus yang terlihat untuk navigasi keyboard
- Kontras warna WCAG AA minimum
- `prefers-reduced-motion` direspek — animasi dimatikan jika user set ini

---

## 8. Data Layer (`data/portfolio.ts`)

Semua konten CV diekstrak ke dalam satu file data TypeScript agar mudah diperbarui tanpa menyentuh komponen:

```typescript
// data/portfolio.ts

export const profile = {
  name: "Faqih Abdul Rachman",
  title: "Backend Developer",
  dob: "29 Mei 1995",
  tagline: "Membangun sistem backend yang andal untuk fintech, e-commerce, dan layanan kesehatan digital.",
  email: "", // isi
  linkedin: "",
  github: "",
  cvPath: "/assets/cv-faqih-2026.pdf"
}

export const skills = [ /* ... lihat section 3.4 */ ]

export const experiences = [ /* ... lihat section 3.5 */ ]

export const education = {
  degree: "Sarjana (S1) Sastra Inggris",
  institution: "UIN Syarif Hidayatullah Jakarta",
  graduation: "November 2019"
}

export const certifications = [ /* ... lihat section 3.6 */ ]
```

---

## 9. Deliverables & Milestones

### 9.1 Milestone Development
| Fase | Task | Estimasi |
|---|---|---|
| **Setup** | Inisialisasi Next.js, Tailwind, Framer Motion, folder struktur | 0.5 hari |
| **Data Layer** | Buat `portfolio.ts` lengkap dari CV | 0.5 hari |
| **Layout** | Navbar + Footer + scroll behavior | 0.5 hari |
| **Hero + About** | Animasi hero, counter stats | 1 hari |
| **Skills** | Grid kategori + badge animasi | 0.5 hari |
| **Experience** | Timeline + accordion card | 1 hari |
| **Education + Cert** | Card layout | 0.5 hari |
| **Contact** | Link cards + optional form | 0.5 hari |
| **Polish** | Responsiveness, perf audit, aksesibilitas | 1 hari |
| **Deploy** | Vercel deployment + domain | 0.5 hari |
| **Total** | | **~6.5 hari kerja** |

### 9.2 Checklist Final Launch
- [ ] Lighthouse score ≥ 90 di semua kategori
- [ ] Test di Chrome, Firefox, Safari, Edge
- [ ] Test di iOS Safari dan Android Chrome
- [ ] Semua animasi berjalan mulus di 60fps
- [ ] CV PDF ter-download dengan benar
- [ ] Semua link kontak berfungsi
- [ ] OG image tersedia untuk sharing sosial media
- [ ] `robots.txt` dan `sitemap.xml` terkonfigurasi

---

## 10. Catatan & Keputusan Desain

> **Mengapa dark theme?** Mencerminkan identitas developer, mengurangi eye strain, dan membuat elemen accent (indigo) lebih impactful.

> **Mengapa single-page?** Recruiter ingin melihat semua info tanpa navigasi halaman; scroll yang fluid memberikan pengalaman lebih imersif.

> **Mengapa Framer Motion?** Memberikan animasi deklaratif berbasis physics yang smooth tanpa overhead performa besar di Next.js.

> **Next.js App Router vs Pages Router?** App Router dipilih karena mendukung React Server Components untuk loading cepat dan metadata management yang lebih clean.

---

*Dokumen ini adalah living document dan akan diperbarui seiring iterasi development.*

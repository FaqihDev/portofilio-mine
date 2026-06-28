import { Briefcase, Cloud, Database, Server, Wrench, Network } from "lucide-react";

export const profile = {
  name: "Faqih Abdul Rachman",
  title: "Backend Developer",
  dob: "29 Mei 1995",
  tagline: "Membangun sistem backend yang andal untuk fintech, e-commerce, dan layanan kesehatan digital.",
  email: "iamfaqih.rochman@gmail.com", 
  linkedin: "https://www.linkedin.com/in/faqih-abdulrachman-03483b1b7/",
  github: "https://github.com/FaqihDev",
  cvPath: "assets/CV_Faqih_Abdul_Rachman.pdf"
};

export const skills = [
  {
    category: "Backend Development",
    icon: Server,
    color: "var(--skill-backend)",
    skills: ["Java", "Spring Boot", "Spring Framework", "RESTful API", "Mulesoft Anypoint", "JUnit"]
  },
  {
    category: "Database",
    icon: Database,
    color: "var(--skill-db)",
    skills: ["MySQL", "PostgreSQL", "Oracle", "Redis", "Vector DB"]
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    color: "var(--skill-cloud)",
    skills: ["AWS", "Apache Tomcat", "Linux (Ubuntu)", "Windows Server"]
  },
  {
    category: "Tools & Others",
    icon: Wrench,
    color: "var(--skill-tools)",
    skills: ["IntelliJ IDEA", "Anypoint Studio", "XML", "HTML", "JSP", "Servlet", "Locust", "Termius"]
  },
  {
    category: "Domain Expertise",
    icon: Briefcase,
    color: "var(--skill-domain)",
    skills: ["Payment Gateway", "Wallet Integration", "Healthcare API", "E-commerce Backend", "Transaction Locking"]
  },
  {
    category: "Message Broker",
    icon: Network,
    color: "var(--skill-broker)",
    skills: ["Kafka", "Rabbit MQ", "Elastic Search"]
  }
];

export const experiences = [
  {
    id: 6,
    project: "WMS Avantrade (Wealth Management System)",
    company: "Indivara Teknology Quantum",
    client: "Avantrade",
    role: "Technical Developer",
    duration: "Maret 2026 – Juni 2026",
    overview: "Merupakan aplikasi layanan pengelolaan kekayaan customer dengan menawarkan berbagai produk investasi yg sesuai dengan kebutuhan customer. dan juga dapat melakukan forecasting terhadap target dari pada investasi sesuai dengan profil resiko",
    highlights: [
      "Hands on developing on Menu Back Office that maintain the purchase of customer on of every investment product provided on Avantrade",
      "Bug Fixing and enhance performance by implementing Indexing on slow endpoint / API."
    ],
    stack: ["Java", "Spring Boot", "SQL"]
  },
  {
    id: 1,
    project: "Biller Rintis (PDAM & KAI)",
    company: "Indivara Teknology Quantum",
    client: "Rintis",
    role: "Technical Developer",
    duration: "Oktober 2025 – Februari 2026",
    overview: "Merupakan Fitur PPOB yang didevelop didalam aplikasi produk internal yaitu WOI ( Wallet Of Indivara ) dimana memungkinkan user bisa melakukan pembayaran tagihan biller PDAM dan KAI melalui aplikasi WOI",
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
    overview: "Merupakan aplikasi Wallet yang merupakan base dari WOI yang dienhance untuuk kebutuhan Client dari Filiphine ( BPI )",
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
    overview: "Merupakan Aplikasi untuk pembayaran BBM untuk client dari Philiphines",
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
    overview: "Merupakan Apllikasi E commerce lifestyle yg memungkinkan user untuk melakukan pembelian product lifestyle untuk product yang mostly dimiliki oleh merchant MAP.",
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
    overview: "Merupakan Aplikasi layanan kesehatan digital yg memungkinkan user dapat melakukan pembelian obat, konsultasi serta pengajuan resep secara online",
    stack: ["Java", "Spring Boot"],
    highlights: [
      "Integrasi transaksi KF Mobile ke Tokopedia",
      "Pengembangan fitur Chat Dokter",
      "Backend API untuk transaksi"
    ]
  }
];

export const education = {
  degree: "Sarjana (S1) Sastra Inggris",
  institution: "UIN Syarif Hidayatullah Jakarta",
  graduation: "November 2019"
};

export const certifications = [
  { id: 1, provider: "Digitalent (Kemkominfo)", program: "Java Foundation & Programming", year: "2022" },
  { id: 2, provider: "Udemy", program: "Spring & Hibernate", year: "Agustus 2022" },
  { id: 3, provider: "LinkedIn Learning", program: "Spring Security", year: "November 2023" },
  { id: 4, provider: "LinkedIn Learning", program: "Advanced SQL", year: "November 2023" }
];

export const personalProjects = [
  {
    id: 1,
    project: "Generusku",
    link: "https://generusku.webapz.my.id/login",
    description: "Aplikasi berbasis website yang mengelola Database management system, absensi Pengajian di madrasah madrasah dari usia PAUD sampai Dewasa, dan juga melaporkan progres dari pembelajaran serta orang tua dapat mengakses rapot dari masing masing progress anak.",
    stack: ["Golang", "React.js", "Vite.js", "PostgreSQL", "Docker"]
  },
  {
    id: 2,
    project: "Romantic Room",
    link: "https://romanticroom.webapz.my.id/",
    description: "Aplikasi berbasis website yang mengelola remaja remaji yang ingin melakukan taaruf secara online namun tetap mengedepankan syariah islam. User bisa saling berkenalan dan saling melihat data diri dan juga perkenalan secara singkat sekaligus akan didampingi secara psikologis oleh penasehat / pakar pernikahan / cinta yang sudah berpengalaman untuk melanjutkan proses berikutnya.",
    stack: ["Golang", "React.js", "Vite.js", "PostgreSQL", "Docker"]
  }
];


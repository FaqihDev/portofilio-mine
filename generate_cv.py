from fpdf import FPDF
import warnings
warnings.filterwarnings("ignore")

class PDF(FPDF):
    def footer(self):
        self.set_y(-15)
        self.set_font("helvetica", "I", 8)
        self.cell(190, 10, f"Page {self.page_no()}", align="C")

pdf = PDF()
pdf.set_margins(10, 10, 10)
pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=15)

pdf.set_font("helvetica", "B", 24)
pdf.cell(190, 10, "Faqih Abdul Rachman", new_x="LMARGIN", new_y="NEXT")

pdf.set_font("helvetica", "", 12)
pdf.cell(190, 6, "Backend Developer | Java Spring Boot - Mulesoft - Cloud Integration", new_x="LMARGIN", new_y="NEXT")

pdf.set_font("helvetica", "", 10)
pdf.set_text_color(100, 100, 100)
pdf.cell(190, 6, "Jakarta, Indonesia | iamfaqih.rochman@gmail.com | linkedin.com/in/faqihrachman | github.com/faqihrachman", new_x="LMARGIN", new_y="NEXT")
pdf.ln(5)

def section_title(title):
    pdf.set_font("helvetica", "B", 12)
    pdf.set_text_color(0, 51, 102)
    pdf.cell(190, 8, title, new_x="LMARGIN", new_y="NEXT")
    pdf.set_draw_color(0, 51, 102)
    pdf.line(pdf.get_x(), pdf.get_y(), pdf.get_x() + 190, pdf.get_y())
    pdf.ln(3)

def body_text(text):
    pdf.set_font("helvetica", "", 10)
    pdf.set_text_color(0, 0, 0)
    pdf.multi_cell(190, 5, text)
    pdf.ln(2)

section_title("PROFIL SINGKAT")
body_text("Backend Developer dengan 3+ tahun pengalaman membangun dan mengintegrasikan sistem enterprise di sektor fintech, e-commerce, dan healthcare digital. Berpengalaman mengembangkan RESTful API menggunakan Java Spring Boot dan integrasi middleware dengan Mulesoft Anypoint, dengan track record di klien-klien skala besar seperti Kimia Farma, Mitra Adi Perkasa, dan Bank of the Philippine Islands (BPI). Terbiasa bekerja dalam siklus penuh SDLC mulai dari requirement gathering hingga post-production support.")
pdf.ln(2)

section_title("PENGALAMAN KERJA")
def job(title, date, subtitle, bullets):
    pdf.set_font("helvetica", "B", 11)
    pdf.set_text_color(0, 0, 0)
    pdf.cell(190, 6, f"{title}        {date}", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("helvetica", "", 10)
    pdf.set_text_color(80, 80, 80)
    pdf.multi_cell(190, 5, subtitle)
    pdf.ln(1)
    pdf.set_font("helvetica", "", 10)
    pdf.set_text_color(0, 0, 0)
    for b in bullets:
        pdf.multi_cell(190, 5, "- " + b)
    pdf.ln(3)

job("Backend Developer", "Okt 2025 - Feb 2026", "Indivara Teknology Quantum | Klien: Rintis (PDAM & KAI) | Stack: Mulesoft, Anypoint, Java", [
    "Mengembangkan dan mengintegrasikan layanan WOI Wallet dengan third-party provider menggunakan Mulesoft untuk mendukung transaksi pembayaran PDAM dan tiket KAI.",
    "Membangun flow integrasi middleware Anypoint untuk routing transaksi multi-channel dengan error handling dan retry mechanism."
])

job("Backend Developer", "Apr 2025 - Okt 2025", "Indivara Teknology Quantum | Klien: Bank of the Philippine Islands (BPI) | Stack: Java Spring Boot", [
    "Merancang dan mengimplementasikan RESTful API untuk enhancement fitur aplikasi Vybe BPI.",
    "Membangun sistem locking untuk mencegah duplicate transaction pada layanan perbankan digital, mengurangi risiko inconsistency data."
])

job("Backend Developer", "Nov 2024 - Mar 2025", "Indivara Teknology Quantum | Klien: Bank of the Philippine Islands (BPI) | Stack: Spring Framework, AWS", [
    "Melakukan performance improvement dan bug fixing pada aplikasi Petron BPI.",
    "Tracing dan debugging existing application di environment AWS untuk meningkatkan stabilitas sistem produksi."
])

job("Backend Developer", "Mei 2023 - Nov 2023", "Harmonix Technology Peentar | Klien: Mitra Adi Perkasa (MAP) | Stack: Java Spring Boot", [
    "Merancang RESTful API untuk menu management dan data retrieval pada platform e-commerce MAP.",
    "Mengembangkan backend service untuk pulling dan versioning data menggunakan Watermelon DB, mendukung sinkronisasi offline-first di aplikasi mobile.",
    "Membangun API transaksi yang terintegrasi dengan sistem kasir dan inventory MAP."
])

job("Backend Developer", "Mei 2022 - Apr 2023", "Harmonix Technology Peentar | Klien: Kimia Farma | Stack: Java Spring Boot", [
    "Membangun integrasi transaksi antara KF Mobile dengan Tokopedia, menghubungkan dua platform e-commerce dengan volume transaksi harian tinggi.",
    "Mengembangkan fitur Chat Dokter untuk KF Mobile, termasuk backend service untuk manajemen sesi konsultasi dan notifikasi real-time.",
    "Membuat REST API untuk modul transaksi internal KF Mobile."
])
pdf.ln(2)

section_title("KEAHLIAN")
def skill(category, skills):
    pdf.set_font("helvetica", "B", 10)
    pdf.set_text_color(0, 0, 0)
    pdf.multi_cell(190, 6, f"{category}: {skills}")

skill("Backend", "Java, Spring Boot, Spring Framework, Mulesoft Anypoint, REST API, JUnit")
skill("Database", "PostgreSQL, MySQL, Oracle, Redis, Vector DB")
skill("Cloud & Tools", "AWS, Apache Tomcat, IntelliJ IDEA, Anypoint Studio, Termius, Locust")
skill("Lainnya", "XML, HTML, JSP, Servlet, JavaScript, Git, SDLC, Microservices")
skill("OS", "Linux (Ubuntu), Windows")
pdf.ln(5)

section_title("PENDIDIKAN")
pdf.set_font("helvetica", "B", 11)
pdf.set_text_color(0, 0, 0)
pdf.cell(190, 6, "UIN Syarif Hidayatullah Jakarta        Lulus Nov 2019", new_x="LMARGIN", new_y="NEXT")
pdf.set_font("helvetica", "", 10)
pdf.set_text_color(80, 80, 80)
pdf.multi_cell(190, 6, "S1 Bahasa dan Sastra Inggris")
pdf.ln(5)

section_title("SERTIFIKASI & PELATIHAN")
def cert(title, date, provider):
    pdf.set_font("helvetica", "B", 10)
    pdf.set_text_color(0, 0, 0)
    pdf.cell(190, 5, f"{title}        {date}", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("helvetica", "", 10)
    pdf.set_text_color(80, 80, 80)
    pdf.multi_cell(190, 5, provider)
    pdf.ln(2)

cert("Spring & Hibernate for Beginners", "Agustus 2022", "Udemy")
cert("Spring Security", "November 2023", "LinkedIn Learning")
cert("Advanced SQL", "November 2023", "LinkedIn Learning")
cert("Java Foundation and Programming", "Apr - Agu 2022", "Digitalent Scholarship - Kominfo")

pdf.output("public/assets/CV_Faqih_Abdul_Rachman.pdf")

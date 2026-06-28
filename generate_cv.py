from fpdf import FPDF
import warnings
warnings.filterwarnings("ignore")

class PDF(FPDF):
    def footer(self):
        self.set_y(-15)
        self.set_font("helvetica", "I", 8)
        self.cell(0, 10, f"Page {self.page_no()}", new_x="LMARGIN", new_y="NEXT", align="C")

pdf = PDF()
pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=15)

pdf.set_font("helvetica", "B", 24)
pdf.cell(0, 10, "Faqih Abdul Rachman", new_x="LMARGIN", new_y="NEXT")

pdf.set_font("helvetica", "", 12)
pdf.cell(0, 6, "Backend Developer | Java Spring Boot - Mulesoft - Cloud Integration", new_x="LMARGIN", new_y="NEXT")

pdf.set_font("helvetica", "", 10)
pdf.set_text_color(100, 100, 100)
pdf.cell(0, 6, "Jakarta, Indonesia | iamfaqih.rochman@gmail.com | linkedin.com/in/faqihrachman", new_x="LMARGIN", new_y="NEXT")
pdf.ln(5)

def section_title(title):
    pdf.set_font("helvetica", "B", 12)
    pdf.set_text_color(0, 51, 102)
    pdf.cell(0, 8, title, new_x="LMARGIN", new_y="NEXT")
    pdf.set_draw_color(0, 51, 102)
    pdf.line(pdf.get_x(), pdf.get_y(), pdf.get_x() + 190, pdf.get_y())
    pdf.ln(3)

def body_text(text):
    pdf.set_font("helvetica", "", 10)
    pdf.set_text_color(0, 0, 0)
    pdf.multi_cell(0, 5, text)
    pdf.ln(2)

section_title("PROFIL SINGKAT")
body_text("Backend Developer dengan 3+ tahun pengalaman membangun dan mengintegrasikan sistem enterprise di sektor fintech, e-commerce, dan healthcare digital.")
pdf.ln(5)

section_title("PENGALAMAN KERJA")
def job(title, date, subtitle):
    pdf.set_font("helvetica", "B", 11)
    pdf.set_text_color(0, 0, 0)
    pdf.cell(130, 6, title, border=0)
    pdf.set_font("helvetica", "", 10)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(60, 6, date, border=0, align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("helvetica", "", 10)
    pdf.set_text_color(80, 80, 80)
    pdf.multi_cell(0, 5, subtitle)
    pdf.ln(2)

job("Backend Developer", "Okt 2025 - Feb 2026", "Indivara Teknology Quantum | Klien: Rintis (PDAM & KAI)")
job("Backend Developer", "Apr 2025 - Okt 2025", "Indivara Teknology Quantum | Klien: Bank of the Philippine Islands (BPI)")
job("Backend Developer", "Mei 2023 - Nov 2023", "Harmonix Technology Peentar | Klien: Mitra Adi Perkasa (MAP)")
pdf.ln(5)

section_title("KEAHLIAN")
pdf.set_font("helvetica", "B", 10)
pdf.set_text_color(0, 0, 0)
pdf.cell(40, 6, "Backend", border=0)
pdf.set_font("helvetica", "", 10)
pdf.cell(150, 6, "Java, Spring Boot, REST API", border=0, new_x="LMARGIN", new_y="NEXT")

pdf.output("public/assets/cv-faqih-2026.pdf")

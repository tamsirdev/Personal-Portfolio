from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def create_cv():
    doc = SimpleDocTemplate("Tamsir_Njie_CV_Updated.pdf", pagesize=letter)
    styles = getSampleStyleSheet()
    
    # Custom Styles
    name_style = ParagraphStyle('NameStyle', parent=styles['Heading1'], fontSize=24, spaceAfter=10, textColor=colors.HexColor("#4f46e5"))
    section_style = ParagraphStyle('SectionStyle', parent=styles['Heading2'], fontSize=16, spaceBefore=15, spaceAfter=10, textColor=colors.HexColor("#1e293b"), borderPadding=5)
    job_title_style = ParagraphStyle('JobTitle', parent=styles['Normal'], fontSize=12, fontWeight='bold', fontName='Helvetica-Bold')
    meta_style = ParagraphStyle('Meta', parent=styles['Normal'], fontSize=10, textColor=colors.grey, italic=True)
    body_style = styles['Normal']
    
    story = []

    # Header
    story.append(Paragraph("Tamsir Njie", name_style))
    story.append(Paragraph("ICT Specialist | Web Developer | Network Engineer", styles['Normal']))
    story.append(Paragraph("Email: tamsirn568@gmail.com | Phone: 3370509 / 7863079", styles['Normal']))
    story.append(Spacer(1, 12))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#4f46e5"), spaceBefore=5, spaceAfter=5))

    # Profile
    story.append(Paragraph("Professional Profile", section_style))
    story.append(Paragraph("ICT Specialist with a strong academic background and extensive experience in technical support, system and database management, and network infrastructure. Proven track record in managing government ICT systems and national digital campaigns.", body_style))

    # Experience
    story.append(Paragraph("Work Experience", section_style))
    
    experiences = [
        ("ICT Officer", "Ministry of Information, Dept. of Information Services", "Jan 2026 - Present", "Managing government ICT infrastructure and information services, providing technical leadership and support."),
        ("ICT Officer", "Ministry of Health, Directorate of Planning & Information", "June 2024 - Jan 2026", "Managed healthcare data systems and technical infrastructure under the Ministry of Communication and Digital Economy."),
        ("Junior Network Engineer (Contract)", "LAN Installation Project", "Nov 2023 - June 2024", "Executed LAN installations across various health facilities. Configured and installed firewalls, switches, access points, routers, and server racks."),
        ("ICT Technician", "Ministry of Health (Mass Birth Certificate Campaign)", "Aug 2022 - Feb 2023", "Provided technical support for the national electronic birth certificate rollout."),
        ("Data Entry Clerk", "Ministry of Health (Covid-19 Vaccination)", "Mar 2021 - Nov 2021", "Managed critical data entry tasks during the national vaccination campaign.")
    ]
    
    for title, org, date, desc in experiences:
        story.append(Paragraph(title, job_title_style))
        story.append(Paragraph(f"{org} | {date}", meta_style))
        story.append(Paragraph(desc, body_style))
        story.append(Spacer(1, 8))

    # Skills
    story.append(Paragraph("Technical Skills", section_style))
    skills = [
        "<b>Web Development:</b> WordPress, HTML5, CSS3, SQL, PHP, JSP",
        "<b>Programming:</b> Python, JavaScript, Java, C++",
        "<b>Databases:</b> MySQL, Oracle (SQL), Database Design",
        "<b>DevOps & Deployment:</b> Docker, Basic CI/CD, Server Management",
        "<b>Infrastructure:</b> Networking, OS Management, Server Racks, Printer Maintenance",
        "<b>Tools:</b> Git, GitHub, Linux Server Admin, DHIS2"
    ]
    for skill in skills:
        story.append(Paragraph(f"• {skill}", body_style))

    # Education
    story.append(Paragraph("Education", section_style))
    story.append(Paragraph("<b>BSc in Information Technology</b>", body_style))
    story.append(Paragraph("International Open University (IOU) | 2018 - 2024", meta_style))
    story.append(Spacer(1, 5))
    story.append(Paragraph("<b>High School Diploma (Arts Field)</b>", body_style))
    story.append(Paragraph("Kotu Senior Secondary School | 2013 - 2016", meta_style))

    # Build PDF
    doc.build(story)
    print("PDF Generated: Tamsir_Njie_CV_Updated.pdf")

if __name__ == "__main__":
    create_cv()

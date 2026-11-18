import re
import xml.etree.ElementTree as ET

with open('assets/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

with open('assets/js/main.js', 'r', encoding='utf-8') as f:
    js = f.read()

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Make HTML XML-compliant
def make_xml_safe(text):
    # Replace void tags with self closing
    # img
    text = re.sub(r'<img\b([^>]*?)(?<!/)>', r'<img\1 />', text, flags=re.IGNORECASE)
    # input
    text = re.sub(r'<input\b([^>]*?)(?<!/)>', r'<input\1 />', text, flags=re.IGNORECASE)
    # br
    text = re.sub(r'<br\b([^>]*?)(?<!/)>', r'<br />', text, flags=re.IGNORECASE)
    # hr
    text = re.sub(r'<hr\b([^>]*?)(?<!/)>', r'<hr />', text, flags=re.IGNORECASE)
    
    # Replace & with &amp; if not part of entity
    text = re.sub(r'&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)', '&amp;', text)
    return text

# Extract topbar + header
header_raw = re.search(r'(<div class=\"gov-top-bar\">.*?)(?=<section class=\"hero-section\">)', html, re.DOTALL).group(1)
hero_raw = re.search(r'(<section class=\"hero-section\">.*?)(?=<section class=\"tool-section\">)', html, re.DOTALL).group(1)
tool_raw = re.search(r'(<section class=\"tool-section\">.*?)(?=<section class=\"articles-section\" id=\"articles\">)', html, re.DOTALL).group(1)
articles_raw = re.search(r'(<section class=\"articles-section\" id=\"articles\">.*?)(?=<section class=\"services-section\" id=\"services\">)', html, re.DOTALL).group(1)
services_raw = re.search(r'(<section class=\"services-section\" id=\"services\">.*?)(?=<section class=\"guide-content-section\">)', html, re.DOTALL).group(1)
guide_raw = re.search(r'(<section class=\"guide-content-section\">.*?)(?=<section class=\"faq-section\" id=\"faq\">)', html, re.DOTALL).group(1)
faq_raw = re.search(r'(<section class=\"faq-section\" id=\"faq\">.*?)(?=<footer class=\"site-footer\">)', html, re.DOTALL).group(1)
footer_raw = re.search(r'(<footer class=\"site-footer\">.*?)(?=<script)', html, re.DOTALL).group(1)

# Clean up relative links in header & footer for Blogger
header_xml = make_xml_safe(header_raw)
hero_xml = make_xml_safe(hero_raw)
tool_xml = make_xml_safe(tool_raw)
articles_xml = make_xml_safe(articles_raw)
services_xml = make_xml_safe(services_raw)
guide_xml = make_xml_safe(guide_raw)
faq_xml = make_xml_safe(faq_raw)
footer_xml = make_xml_safe(footer_raw)

# Fix index.html links to root '/'
header_xml = header_xml.replace('href="index.html"', 'expr:href="data:blog.homepageUrl"')
header_xml = header_xml.replace('src="assets/images/favicon.svg"', 'src="https://antigravity.luch.dev/site/ce5c7d26-4d5b-4628-8fbb-b9b84c3c5fe5/378fd27bc17b86156ec4e186/assets/images/favicon.svg"')

hero_xml = hero_xml.replace('href="index.html"', 'expr:href="data:blog.homepageUrl"')

footer_xml = footer_xml.replace('href="index.html"', 'expr:href="data:blog.homepageUrl"')

print("Header, hero, footer processed")

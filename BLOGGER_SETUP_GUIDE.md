# 🚀 Rajasthan SSO Guide को Blogger में कैसे डालें? (सम्पूर्ण स्टेप-बाय-स्टेप गाइड)

इस प्रोजेक्ट को **Google Blogger (Blogspot)** पर लाइव करने के लिए हमने आपके लिए एक रेडी-टू-अपलोड XML थीम तैयार कर दी है: **[`blogger-theme.xml`](file:///home/agent/workspace/blogger-theme.xml)**।

नीचे दिए गए 3 आसान स्टेप्स को फॉलो करें:

---

## 📌 स्टेप 1: Blogger में थीम (Theme XML) अपलोड करें

1. **[Blogger.com](https://www.blogger.com)** पर जाएं और अपने Google अकाउंट से लॉगिन करें।
2. अपना ब्लॉग चुनें (या बाएँ कोने से नया ब्लॉग बनाएं, जैसे: `sso-rajasthan-guide.blogspot.com`)।
3. बाएँ साइडबार (Left Menu) से **Theme (थीम)** पर क्लिक करें।
4. नारंगी रंग के **"Customize"** बटन के ठीक पास बने छोटे **डाउन एरो (▼)** पर क्लिक करें।
5. मेनू से **Restore (पुनर्स्थापित करें)** विकल्प चुनें।
6. **Upload** पर क्लिक करें और अपने कंप्यूटर/मोबाइल से **`blogger-theme.xml`** फाइल को चुनें।
7. 5-10 सेकंड में थीम अपलोड हो जाएगी। अब **"View Blog"** पर क्लिक करके देखें – आपकी आधुनिक SSO वेबसाइट का डिज़ाइन और डार्क मोड चालू हो जाएगा!

> **वैकल्पिक तरीका (Copy-Paste Code):**  
> अगर अपलोड में कोई समस्या आए, तो डाउन एरो (▼) पर क्लिक करके **Edit HTML** चुनें। पुराना सारा कोड मिटाएं (Select All + Delete), फिर [`blogger-theme.xml`](file:///home/agent/workspace/blogger-theme.xml) का पूरा कोड कॉपी करके पेस्ट करें और ऊपर दाईं ओर **Save (सेव)** आइकन दबाएं।

---

## 📌 स्टेप 2: कानूनी व आवश्यक Pages (पेज) बनाएं

AdSense अप्रूवल और गूगल रैंकिंग के लिए 4 पेज बहुत जरूरी हैं:

1. Blogger डैशबोर्ड में बाएँ मेनू से **Pages (पेज)** पर क्लिक करें।
2. ऊपर **+ New Page (+ नया पेज)** पर क्लिक करें।
3. ऊपर बाएँ कोने में **पेंसिल आइकन (✏️)** पर क्लिक करके **"HTML View"** चुनें।
4. निम्नलिखित फाइलों से HTML कोड कॉपी करके पेस्ट करें:
   - **About Us**: [`about.html`](file:///home/agent/workspace/about.html) से `<main>` के अंदर का भाग पेस्ट करें। (पेज का नाम दें: `About Us`)
   - **Contact Us**: [`contact.html`](file:///home/agent/workspace/contact.html) से कोड पेस्ट करें। (पेज का नाम दें: `Contact Us`)
   - **Privacy Policy**: [`privacy-policy.html`](file:///home/agent/workspace/privacy-policy.html) से कोड पेस्ट करें। (पेज का नाम दें: `Privacy Policy`)
   - **Disclaimer**: [`disclaimer.html`](file:///home/agent/workspace/disclaimer.html) से कोड पेस्ट करें। (पेज का नाम दें: `Disclaimer`)
5. ऊपर दाईं ओर **Publish (प्रकाशित करें)** पर क्लिक करें।

---

## 📌 स्टेप 3: Blog Posts (आर्टिकल्स) पब्लिश करें

हमारी वेबसाइट में 7 हाई-रैंकिंग SEO गाइड्स तैयार हैं:

1. Blogger डैशबोर्ड में **Posts** पर जाएं और **+ New Post** पर क्लिक करें।
2. पोस्ट का टाइटल (Title) डालें।
3. पेंसिल आइकन (✏️) दबाकर **"HTML View"** में जाएं।
4. [`blog/`](file:///home/agent/workspace/blog/) फोल्डर से संबंधित फाइल खोलें और `<article class="guide-article">` से `</article>` तक का कोड पेस्ट करें:
   - [`blog/how-to-create-sso-id.html`](file:///home/agent/workspace/blog/how-to-create-sso-id.html) -> टाइटल: *एसएसओ आईडी कैसे बनाएं 2026? Rajasthan SSO ID New Registration Step-by-Step Guide*
   - [`blog/sso-login-recruitment-portal.html`](file:///home/agent/workspace/blog/sso-login-recruitment-portal.html) -> टाइटल: *SSO Recruitment Portal 2026: RPSC व RSMSSB सरकारी भर्ती ऑनलाइन फॉर्म*
   - [`blog/forgot-sso-id-password-reset.html`](file:///home/agent/workspace/blog/forgot-sso-id-password-reset.html) -> टाइटल: *SSO ID Password Reset & Forgot ID Recovery 2026*
   - [`blog/link-jan-aadhaar-sso.html`](file:///home/agent/workspace/blog/link-jan-aadhaar-sso.html) -> टाइटल: *SSO ID में जन आधार कार्ड कैसे लिंक करें (Jan Aadhaar e-KYC)*
   - [`blog/emitra-sso-login-services.html`](file:///home/agent/workspace/blog/emitra-sso-login-services.html) -> टाइटल: *ई-मित्र लॉगिन एवं नागरिक सेवाएं SSO Portal 2026*
   - [`blog/rajasthan-scholarship-sso.html`](file:///home/agent/workspace/blog/rajasthan-scholarship-sso.html) -> टाइटल: *राजस्थान छात्रवृत्ति पोर्टल SSO Portal Scholarship Guide*
   - [`blog/sso-id-merge-deactivate-delete.html`](file:///home/agent/workspace/blog/sso-id-merge-deactivate-delete.html) -> टाइटल: *दो SSO ID कैसे मर्ज करें या डिलीट करें (Merge Multiple SSO IDs)*
5. दाईं ओर **Labels** में `SSO Rajasthan, Government Schemes` लिखें।
6. **Publish** बटन पर क्लिक करें।

---

## 💡 प्रो-टिप: GitHub Pages (बिना Blogger के 1 मिनट में लाइव)

चूंकि आपकी वेबसाइट पहले से ही GitHub रिपॉजिटरी में है, आप चाहें तो इसे सीधे **GitHub Pages** पर 100% मुफ्त होस्ट कर सकते हैं। इसमें किसी फाइल को कॉपी-पेस्ट करने की जरूरत नहीं पड़ेगी:

1. अपने GitHub रिपॉजिटरी में जाएं: `https://github.com/vikash-siyag/make-a-blogger-website-for-sso`
2. **Settings** टैब पर क्लिक करें।
3. बाएँ मेनू से **Pages** चुनें।
4. **Branch** में `main` चुनें और `/ (root)` सेलेक्ट करके **Save** करें।
5. 60 सेकंड में आपकी पूरी वेबसाइट बिना किसी एरर के लाइव हो जाएगी!

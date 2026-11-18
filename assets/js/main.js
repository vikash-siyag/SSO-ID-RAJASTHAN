/**
 * Rajasthan SSO Guide - Interactive Features
 * High-performance, vanilla JavaScript (no dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initFaqAccordion();
  initSsoValidator();
  initServiceFilter();
  initCopyButtons();
});

// 1. Theme Toggle (Dark / Light Mode)
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  themeToggle.innerHTML = theme === 'dark' 
    ? '☀️ <span class="sr-only" style="display:none">Light</span>' 
    : '🌙 <span class="sr-only" style="display:none">Dark</span>';
}

// 2. Mobile Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');
  if (!toggleBtn || !mainNav) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    mainNav.classList.toggle('show');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !toggleBtn.contains(e.target) && mainNav.classList.contains('show')) {
      mainNav.classList.remove('show');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// 3. FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// 4. Interactive Rajasthan SSO ID Format Validator
function initSsoValidator() {
  const checkBtn = document.getElementById('checkSsoBtn');
  const input = document.getElementById('ssoCheckInput');
  const resultBox = document.getElementById('ssoCheckResult');
  if (!checkBtn || !input || !resultBox) return;

  const validate = () => {
    const val = input.value.trim();
    resultBox.classList.remove('valid', 'invalid');

    if (!val) {
      resultBox.innerHTML = '⚠️ कृपया अपनी एसएसओ आईडी दर्ज करें (Please enter an SSO ID to check).';
      resultBox.classList.add('invalid', 'show');
      return;
    }

    // SSO ID Rules:
    // Alphanumeric with optional dot or underscore, length 4-30 chars, no spaces, no special characters
    const validPattern = /^[a-zA-Z0-9._]{4,30}$/;
    const hasSpace = /\s/.test(val);
    const hasSpecial = /[^a-zA-Z0-9._]/.test(val);

    if (hasSpace) {
      resultBox.innerHTML = '❌ <strong>अमान्य फॉर्मेट (Invalid):</strong> एसएसओ आईडी में स्पेस (खाली जगह) नहीं हो सकती। (SSO ID cannot contain spaces).';
      resultBox.classList.add('invalid', 'show');
    } else if (hasSpecial) {
      resultBox.innerHTML = '❌ <strong>अमान्य फॉर्मेट (Invalid):</strong> केवल अक्षर (A-Z), अंक (0-9), डॉट (.) और अंडरस्कोर (_) अनुमत हैं। @, #, $, & आदि मान्य नहीं हैं।';
      resultBox.classList.add('invalid', 'show');
    } else if (val.length < 4 || val.length > 30) {
      resultBox.innerHTML = `❌ <strong>अमान्य लम्बाई (Invalid Length):</strong> एसएसओ आईडी 4 से 30 अक्षरों की होनी चाहिए। वर्तमान लम्बाई: ${val.length} अक्षर।`;
      resultBox.classList.add('invalid', 'show');
    } else {
      // Valid syntax format
      let typeHint = 'Citizen SSO ID (नागरिक)';
      if (/^\d{10}$/.test(val)) {
        typeHint = 'Jan Aadhaar Linked ID (जन आधार)';
      } else if (/^[rR][jJ]/.test(val)) {
        typeHint = 'Govt Employee / RajKaj ID (राजकीय कर्मचारी)';
      }

      resultBox.innerHTML = `✅ <strong>मान्य एसएसओ आईडी फॉर्मेट (Valid Format)!</strong><br>
        ID: <code>${val}</code> | प्रकार: <strong>${typeHint}</strong><br>
        <span style="font-size: 0.85em;">आप इस आईडी से <a href="https://sso.rajasthan.gov.in" target="_blank" rel="noopener" style="text-decoration:underline; font-weight:700;">आधिकारिक SSO पोर्टल</a> पर लॉगिन कर सकते हैं।</span>`;
      resultBox.classList.add('valid', 'show');
    }
  };

  checkBtn.addEventListener('click', validate);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') validate();
  });
}

// 5. Services Filter Bar
function initServiceFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');
  if (!filterBtns.length || !serviceCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 6. Copy Links or Helpline
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('[data-copy]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        const origText = btn.innerHTML;
        btn.innerHTML = 'Copied! ✓';
        setTimeout(() => {
          btn.innerHTML = origText;
        }, 2000);
      });
    });
  });
}

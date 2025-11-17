document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSwitcher");

  // Top bar
  const topBar = document.querySelector("#topBar");

  // Navbar
  const navHome = document.getElementById("navHome");
  const navTutors = document.getElementById("navTutors");
  const navHow = document.getElementById("navHow");
  const navContact = document.getElementById("navContact");
  const navRequest = document.getElementById("navRequest");

  // Hero
  const heroTitle = document.getElementById("heroTitle");
  const heroDesc = document.getElementById("heroDesc");
  const findBtn = document.getElementById("findTutorBtn");
  const requestBtn = document.getElementById("requestTutorBtn");

  // Tutors section
  const tutorsTitle = document.getElementById("tutorsTitle");
  const searchInput = document.getElementById("searchInput");

  // How it works
  const howTitle = document.getElementById("howTitle");
  const howStep1Title = document.getElementById("howStep1Title");
  const howStep1Text = document.getElementById("howStep1Text");
  const howStep2Title = document.getElementById("howStep2Title");
  const howStep2Text = document.getElementById("howStep2Text");
  const howStep3Title = document.getElementById("howStep3Title");
  const howStep3Text = document.getElementById("howStep3Text");

  // Request section
  const requestTitle = document.getElementById("requestTitle");
  const requestText = document.getElementById("requestText");
  const requestSectionBtn = document.getElementById("requestBtn");

  // Top tutors
  const topTutorsTitle = document.getElementById("topTutorsTitle");

  // Footer
  const footerAboutTitle = document.getElementById("footerAboutTitle");
  const footerAboutText = document.getElementById("footerAboutText");
  const footerLinksTitle = document.getElementById("footerLinksTitle");
  const footerHomeLink = document.getElementById("footerHomeLink");
  const footerTutorsLink = document.getElementById("footerTutorsLink");
  const footerHowLink = document.getElementById("footerHowLink");
  const footerRequestLink = document.getElementById("footerRequestLink");
  const footerContactLink = document.getElementById("footerContactLink");
  const footerContactTitle = document.getElementById("footerContactTitle");

  // Contact section
  const contactTitle = document.getElementById("contactTitle");
  const contactText = document.getElementById("contactText");
  const contactLabelName = document.getElementById("contactLabelName");
  const contactLabelEmail = document.getElementById("contactLabelEmail");
  const contactLabelMessage = document.getElementById("contactLabelMessage");
  const contactSubmitBtn = document.getElementById("contactSubmitBtn");
  const formMessage = document.getElementById("formMessage");

  function applyLanguage(lang) {
    const t = translations[lang] || translations.en;

    if (topBar) topBar.textContent = t.top_bar;

    if (navHome) navHome.textContent = t.nav_home;
    if (navTutors) navTutors.textContent = t.nav_tutors;
    if (navHow) navHow.textContent = t.nav_how;
    if (navContact) navContact.textContent = t.nav_contact;
    if (navRequest) navRequest.textContent = t.nav_request;

    if (heroTitle) heroTitle.textContent = t.hero_title;
    if (heroDesc) heroDesc.textContent = t.hero_desc;
    if (findBtn) findBtn.textContent = t.hero_find;
    if (requestBtn) requestBtn.textContent = t.hero_request;

    if (tutorsTitle) tutorsTitle.textContent = t.tutors_title;
    if (searchInput) searchInput.placeholder = t.tutors_search;

    if (howTitle) howTitle.textContent = t.how_title;
    if (howStep1Title) howStep1Title.textContent = t.how_step1_title;
    if (howStep1Text) howStep1Text.textContent = t.how_step1_text;
    if (howStep2Title) howStep2Title.textContent = t.how_step2_title;
    if (howStep2Text) howStep2Text.textContent = t.how_step2_text;
    if (howStep3Title) howStep3Title.textContent = t.how_step3_title;
    if (howStep3Text) howStep3Text.textContent = t.how_step3_text;

    if (requestTitle) requestTitle.textContent = t.request_title;
    if (requestText) requestText.textContent = t.request_text;
    if (requestSectionBtn) requestSectionBtn.textContent = t.request_btn;

    if (topTutorsTitle) topTutorsTitle.textContent = t.top_tutors_title;

    if (footerAboutTitle) footerAboutTitle.textContent = t.footer_about_title;
    if (footerAboutText) footerAboutText.textContent = t.footer_about_text;
    if (footerLinksTitle) footerLinksTitle.textContent = t.footer_links_title;
    if (footerHomeLink) footerHomeLink.textContent = t.footer_home;
    if (footerTutorsLink) footerTutorsLink.textContent = t.footer_tutors;
    if (footerHowLink) footerHowLink.textContent = t.footer_how;
    if (footerRequestLink) footerRequestLink.textContent = t.footer_request;
    if (footerContactLink) footerContactLink.textContent = t.footer_contact;
    if (footerContactTitle) footerContactTitle.textContent = t.footer_contact_title;

    if (contactTitle) contactTitle.textContent = t.contact_title;
    if (contactText) contactText.textContent = t.contact_text;
    if (contactLabelName) contactLabelName.textContent = t.contact_label_name;
    if (contactLabelEmail) contactLabelEmail.textContent = t.contact_label_email;
    if (contactLabelMessage) contactLabelMessage.textContent = t.contact_label_message;
    if (contactSubmitBtn) contactSubmitBtn.textContent = t.contact_submit;
    if (formMessage) formMessage.textContent = t.contact_success;
  }

  // Default language
  applyLanguage("en");

  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      applyLanguage(e.target.value);
    });
  }
});
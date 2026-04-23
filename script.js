// =======================
// Ngôn ngữ dịch (translations)
// =======================
const translations = {
  vi: {
    home: "Trang chủ",
    about: "Giới thiệu",
    services: "Sản phẩm nổi bật",
    projects: "Dự án tiêu biểu",
    contact: "Liên hệ",
    hero_title: "Chào mừng đến với Meinianda",
    hero_subtitle: "Giải pháp sáng tạo và công nghệ cho nhà bếp thông minh",
    about_title: "Giới thiệu",
    about_text: "Meinianda là đơn vị tiên phong trong lĩnh vực thiết kế website, giải pháp công nghệ và branding cho sản phẩm nhà bếp thông minh.",
    services_title: "Sản phẩm nổi bật",
    product1: "Robot nấu tự động",
    product2: "Máy rửa bát công nghiệp",
    product3: "AI thu ngân nhận diện món",
    product4: "Nền tảng SAAS quản lý tập trung",
    cta_services: "Xem chi tiết dịch vụ",
    projects_title: "Dự án tiêu biểu",
    experience_title: "Mô hình 3D Trung tâm trải nghiệm bếp thông minh",
    footer_contact: "Liên hệ: contact@meinianda.com | Hotline: 363667673667",
    footer_rights: "© 2026 美年达. All rights reserved."
  },
  en: {
    home: "Home",
    about: "About",
    services: "Featured Products",
    projects: "Projects",
    contact: "Contact",
    hero_title: "Welcome to Meinianda",
    hero_subtitle: "Creative solutions and technology for smart kitchens",
    about_title: "About Us",
    about_text: "Meinianda is a pioneer in website design, technology solutions, and branding for smart kitchen products.",
    services_title: "Featured Products",
    product1: "Automatic Cooking Robot",
    product2: "Industrial Dishwasher",
    product3: "AI Cashier with Dish Recognition",
    product4: "Centralized SAAS Management Platform",
    cta_services: "View Service Details",
    projects_title: "Projects",
    experience_title: "3D Model Smart Kitchen Experience Center",
    footer_contact: "Contact: contact@meinianda.com | Hotline: 363667673667",
    footer_rights: "© 2026 Meinianda. All rights reserved."
  }
};

// =======================
// Hàm đổi ngôn ngữ
// =======================
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-lang-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    }
  });

  localStorage.setItem("siteLang", lang);
}

document.querySelectorAll(".lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    setLanguage(lang);
  });
});

const savedLang = localStorage.getItem("siteLang") || "vi";
setLanguage(savedLang);

// =======================
// Side menu toggle
// =======================
const menuIcon = document.getElementById("menu-icon");
const sideMenu = document.getElementById("side-menu");
menuIcon.addEventListener("click", () => sideMenu.classList.toggle("show"));

// =======================
// Scroll fade-in effect
// =======================
document.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add("visible");
  });
});

// =======================
// Modal gallery
// =======================
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');
const modalClose = modal.querySelector('.modal-close');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    modalImg.src = item.querySelector('img').src;
    modal.style.display = 'flex';
  });
});
modalClose.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

// =======================
// Popup cho Sản phẩm nổi bật
// =======================
const productCards = document.querySelectorAll(".card");
const productModal = document.getElementById("product-modal");
const productModalContent = document.querySelector(".product-images");
const productModalClose = productModal.querySelector(".modal-close");

productCards.forEach(card => {
  card.addEventListener("click", () => {
    const images = card.getAttribute("data-images").split(",");
    productModalContent.innerHTML = "";
    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src.trim();
      img.style.width = "100%";
      img.style.marginBottom = "20px";
      img.style.borderRadius = "8px";
      productModalContent.appendChild(img);
    });
    productModal.style.display = "flex";
  });
});
productModalClose.addEventListener("click", () => productModal.style.display = "none");
productModal.addEventListener("click", e => { if (e.target === productModal) productModal.style.display = "none"; });
// =======================
// Navbar hide/show khi scroll
// =======================
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll xuống -> ẩn navbar
    navbar.classList.add("hidden");
  } else {
    // Scroll lên -> hiện navbar
    navbar.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


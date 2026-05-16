/**
 * GuangDong ShenYing Packing Co., Ltd
 * Main JavaScript - Navigation & UI interactions
 */

(function () {
  "use strict";

  // Mobile navigation toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("active");
      mainNav.classList.toggle("open");
      document.body.style.overflow = mainNav.classList.contains("open")
        ? "hidden"
        : "";
    });

    // Close menu when clicking a link
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.classList.remove("active");
        mainNav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });

    // Close menu on resize to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        navToggle.classList.remove("active");
        mainNav.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // Contact form - static demo (no backend)
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Thank you for your message! This is a static demo form. Please connect a backend or use the email address on this page to receive inquiries."
      );
      contactForm.reset();
    });
  }

  // Smooth scroll for anchor links on same page
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();

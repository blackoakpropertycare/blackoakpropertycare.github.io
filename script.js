// ============================================================
// BLACK OAK PROPERTY CARE — SHARED SITE SCRIPT
// Runs on every page. Nothing here needs editing to update
// content — only touch this file to change *behavior*.
// ============================================================

// ---- Footer year -------------------------------------------------
var yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ---- Sticky header: solid + gold hairline once page scrolls ------
var header = document.querySelector(".site-header");
if (header) {
  var onScroll = function () {
    if (window.scrollY > 8) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// ---- Mobile nav toggle --------------------------------------------
var navToggle = document.querySelector(".nav-toggle");
var siteNav = document.querySelector(".site-nav");
if (navToggle && siteNav) {
  navToggle.addEventListener("click", function () {
    var isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  // Close the menu after a link is tapped
  siteNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---- Scroll-reveal for elements marked .reveal --------------------
// Progressive enhancement only: content is visible by default (see
// style.css), this just adds the fade/rise the brief asked for.
if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js-reveal-ready");
  var revealItems = document.querySelectorAll(".reveal");
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealItems.forEach(function (item) { observer.observe(item); });
}

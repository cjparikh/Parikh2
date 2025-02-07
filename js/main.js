(function ($) {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    // Get DOM elements
    const searchBtn = document.querySelector("#search-btn");
    const loginBtn = document.querySelector("#login-btn");
    const menuBtn = document.querySelector("#menu-btn");
    const searchForm = document.querySelector(".search-form");
    const loginForm = document.querySelector(".login-form");
    const navbar = document.querySelector(".navbar-nav");
    const closeSearch = document.querySelector("#close-search");
    const closeLogin = document.querySelector("#close-login-btn");

    // Form toggle functions
    searchBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      loginForm.classList.remove("active");
      navbar.classList.remove("active");
      searchForm.classList.toggle("active");
      navbar.classList.remove("show-menu");
    });

    loginBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      searchForm.classList.remove("active");
      navbar.classList.remove("active");
      loginForm.classList.toggle("active");
      navbar.classList.remove("show-menu");
    });

    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      searchForm.classList.remove("active");
      loginForm.classList.remove("active");
      navbar.classList.toggle("active");
    });

    // Close button handlers
    closeSearch?.addEventListener("click", () =>
      searchForm.classList.remove("active")
    );
    closeLogin?.addEventListener("click", () =>
      loginForm.classList.remove("active")
    );

    // Close forms when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(".search-form") &&
        !e.target.closest("#search-btn") &&
        !e.target.closest(".login-form") &&
        !e.target.closest("#login-btn") &&
        !e.target.closest(".navbar-nav") &&
        !e.target.closest("#menu-btn")
      ) {
        searchForm.classList.remove("active");
        loginForm.classList.remove("active");
        navbar.classList.remove("active");
      }
    });

    // Close forms on scroll
    window.addEventListener("scroll", () => {
      searchForm.classList.remove("active");
      loginForm.classList.remove("active");
      navbar.classList.remove("active");
    });

    // Menu Toggle
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navbar.classList.toggle("show-menu");

      // Close other forms when menu opens
      // searchForm.classList.remove("active");
      // loginForm.classList.remove("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".navbar-nav") && !e.target.closest("#menu-btn")) {
        navbar.classList.remove("show-menu");
      }
    });
  });

  $(document).ready(function () {
    // Spinner
    setTimeout(function () {
      $("#spinner").removeClass("show");
    }, 1);

    // Initiate WOW.js
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".sticky-top").addClass("shadow-sm");
      } else {
        $(".sticky-top").removeClass("shadow-sm");
      }
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
      },
    });

    // DROPDOWN TOGGLE
    document.getElementById("menu-btn").addEventListener("click", function () {
      navbar.classList.toggle("show-menu");
    });

    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });

    $(".back-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2000,
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      dots: true,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>',
      ],
    });

    // Adjusts the carousel height dynamically
    function adjustCarouselHeight() {
      let navbarHeight = document.querySelector(".navbar").offsetHeight;
      document.querySelectorAll(".owl-carousel-item").forEach((item) => {
        item.style.height = `calc(100vh - ${navbarHeight}px)`;
      });
    }

    adjustCarouselHeight();
    window.addEventListener("resize", adjustCarouselHeight);
  });
})(jQuery);

/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link"),
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

document.querySelectorAll(".cta-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const r = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    Object.assign(r.style, {
      position: "absolute",
      borderRadius: "50%",
      pointerEvents: "none",
      width: size + "px",
      height: size + "px",
      left: e.clientX - rect.left - size / 2 + "px",
      top: e.clientY - rect.top - size / 2 + "px",
      background: "rgba(255,255,255,0.30)",
      transform: "scale(0)",
      animation: "pricingRipple 0.55s linear",
    });
    this.appendChild(r);
    setTimeout(() => r.remove(), 560);
  });
});

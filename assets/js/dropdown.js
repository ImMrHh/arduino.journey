document.addEventListener("DOMContentLoaded", function () {
  const dropLink = document.querySelector(".drop-link");
  const menu = document.querySelector(".dropdown-content");

  if (!dropLink || !menu) return;

  // Helper: toggle menu
  function openMenu() {
    menu.style.display = "block";
    dropLink.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    menu.style.display = "none";
    dropLink.setAttribute("aria-expanded", "false");
  }
  function isOpen() {
    return menu.style.display === "block";
  }

  // Click/tap on Robotics label
  dropLink.addEventListener("click", function (e) {
    if (!isOpen()) {
      // First tap: open, don’t navigate
      e.preventDefault();
      openMenu();
    } else {
      // Second tap: navigate to overview
      // Allow default: if anchor default was prevented, navigate manually
      window.location.href = dropLink.href;
    }
  });

  // Keyboard support: Space/Enter opens when closed, navigates when open
  dropLink.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (!isOpen()) openMenu();
      else window.location.href = dropLink.href;
    } else if (e.key === "Escape") {
      closeMenu();
      dropLink.focus();
    }
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !dropLink.contains(e.target)) {
      closeMenu();
    }
  });

  // Optional: close on window blur for cleaner behavior
  window.addEventListener("blur", closeMenu);
});

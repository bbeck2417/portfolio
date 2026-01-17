/**
 * script.js
 * Handles dynamic year update, theme toggling, and Google Analytics event tracking.
 */

(function () {
  // Update Copyright Year
  const yearElement = document.getElementById("copyright-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Theme Toggling Logic
  const toggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const current = stored || (prefersDark ? "dark" : "light");

  if (current === "dark") {
    root.setAttribute("data-theme", "dark");
    if (toggle) {
      toggle.setAttribute("aria-pressed", "true");
      toggle.textContent = "☀️";
    }
  } else {
    root.removeAttribute("data-theme");
    if (toggle) {
      toggle.setAttribute("aria-pressed", "false");
      toggle.textContent = "🌙";
    }
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      const isDark = root.getAttribute("data-theme") === "dark";
      if (isDark) {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        this.setAttribute("aria-pressed", "false");
        this.textContent = "🌙";
      } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        this.setAttribute("aria-pressed", "true");
        this.textContent = "☀️";
      }
    });
  }
})();

// Google Analytics Event Tracking
document.addEventListener("DOMContentLoaded", () => {
  // Define all trackable links in an array of objects
  const trackableLinks = [
    {
      id: "resume-download",
      name: "Resume Download",
      event: "resume_download",
    },
    { id: "github-visit", name: "GitHub (Header)", event: "link_click" },
    { id: "github-visit-footer", name: "GitHub (Footer)", event: "link_click" },
    { id: "linkedin-visit", name: "LinkedIn (Header)", event: "link_click" },
    {
      id: "linkedin-visit-footer",
      name: "LinkedIn (Footer)",
      event: "link_click",
    },
    { id: "email-clicked", name: "Email (Header)", event: "link_click" },
    { id: "email-clicked-footer", name: "Email (Footer)", event: "link_click" },
    {
      id: "freecodecamp-visit",
      name: "FreeCodeCamp (Header)",
      event: "link_click",
    },
    {
      id: "freecodecamp-visit-footer",
      name: "FreeCodeCamp (Footer)",
      event: "link_click",
    },
  ];

  trackableLinks.forEach((link) => {
    const element = document.getElementById(link.id);
    if (element) {
      element.addEventListener("click", () => {
        gtag("event", link.event, {
          event_category: "engagement",
          event_label: link.name,
          link_id: link.id,
          // Special parameter just for the resume download
          ...(link.id === "resume-download" && {
            file_name: "Billy_Beck_Resume.pdf",
          }),
        });
        console.log(`GA Event Sent: ${link.name}`);
      });
    }
  });
});

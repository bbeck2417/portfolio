/**
 * script.js
 * Handles dynamic year update and theme toggling (light/dark mode)
 * for the portfolio website.
 */

(function () {
  document.getElementById("copyright-year").textContent =
    new Date().getFullYear();
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
document.addEventListener("DOMContentLoaded", () => {
  const resumeLink = document.getElementById("resume-download");

  if (resumeLink) {
    resumeLink.addEventListener("click", () => {
      // This sends the event to Google Analytics
      gtag("event", "resume_download", {
        event_category: "engagement",
        event_label: "Billy Beck Resume",
        file_name: "Billy_Beck_Resume.pdf",
      });
      console.log("Resume download event sent to GA!");
    });
  }
});

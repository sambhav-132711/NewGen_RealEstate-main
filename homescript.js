// Dark Mode Toggle
const toggleThemeButton = document.getElementById("toggle-theme");

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleThemeButton.textContent = "☀ Light Mode";
  }

  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    toggleThemeButton.textContent = isDark ? "☀ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

// Fade-in on Scroll
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

fadeElements.forEach((el) => observer.observe(el));

// Footer Interactions
const contactEmail = document.querySelector(".footer-contact .email");
if (contactEmail) {
  contactEmail.addEventListener("click", () => {
    navigator.clipboard
      .writeText(contactEmail.textContent)
      .then(() => alert("Email copied to clipboard!"))
      .catch(() => alert("Failed to copy email."));
  });
}

const addressBlock = document.querySelector(".footer-address");
if (addressBlock) {
  addressBlock.addEventListener("click", () => {
    window.open(
      "https://maps.google.com?q=JNTUH+Forum+Mall+Hyderabad",
      "_blank"
    );
  });
}

// Optional: Log social icon clicks
document.querySelectorAll(".footer-social a").forEach((link) => {
  link.addEventListener("click", () => {
    console.log(`Social icon clicked: ${link.href}`);
  });
});

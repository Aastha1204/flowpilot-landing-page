/* ==========================================================
   BrewBox Landing Page — JavaScript
   3 things happen here:
   1. AOS library init            -> scroll animations
   2. Theme toggle (dark/light)   -> interactive element
   3. EmailJS contact form        -> external service integration
   ========================================================== */

// ---------- 1. AOS (Animate On Scroll) ----------
// AOS reads the data-aos="fade-up" attributes in index.html
// and animates each element into view as you scroll to it.
AOS.init({
  duration: 700, //slow = 1500, fast=300, default=700
  once: true, // animate only the first time an element is seen here i can change the speed of animation speed
});

// ---------- 2. Dark / Light theme toggle ----------
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
// by adding !locastoage.getitem("flowpilot-theme") 
// Load saved theme (if the user picked one on a previous visit)
if (localStorage.getItem("flowpilot-theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("flowpilot-theme", isDark ? "dark" : "light");
});

// ---------- Mobile menu toggle ----------
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ---------- 3. EmailJS contact form ----------
// Sign up free at https://www.emailjs.com, create a service + template,
// then replace the 3 placeholders below with your own IDs.
// (Until you do, the form just shows a friendly demo message.)
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

if (window.emailjs) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const isConfigured = EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

  if (!isConfigured) {
    formStatus.textContent = "Demo mode: add your EmailJS keys in script.js to actually send this.";
    contactForm.reset();
    return;
  }

  const nameValue = waitlistForm.user_name.value.trim();

  if (nameValue.length < 2) {
  waitlistStatus.textContent = 'Please enter your full name.';
  return;  
}

  formStatus.textContent = "Sending...";

  emailjs
    .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
    .then(() => {
      formStatus.textContent = "Message sent! We'll get back to you soon.";
      contactForm.reset();
    })
    .then(() => {
    const count = Number(localStorage.getItem('waitlist-count') || 0) + 1;
    localStorage.setItem('waitlist-count', count);
    waitlistStatus.textContent = `You're on the list! (${count} people joined from this browser)`;
    waitlistForm.reset();
   })
    .catch((err) => {
      formStatus.textContent = "Something went wrong. Please try again.";
      console.error(err);
    });
});

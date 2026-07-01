// VECTA ACADEMY 2026 JavaScript

// Mobile navigation toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
}

// Smooth scroll for internal links (optional enhancement)
const navLinks = document.querySelectorAll("nav a[href^='#']");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      event.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Simple course highlight on hover/focus
const courseCards = document.querySelectorAll(".course-card");
courseCards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    card.classList.add("active");
  });
  card.addEventListener("mouseleave", function () {
    card.classList.remove("active");
  });
});

// Cost estimation for a hypothetical enrollment section
function calculateEnrollmentCost() {
  const planSelect = document.getElementById("planSelect");
  const learnerCount = document.getElementById("learnerCount");
  const costResult = document.getElementById("costResult");

  if (!planSelect || !learnerCount || !costResult) return;

  const price = Number(planSelect.value);
  const learners = Number(learnerCount.value);

  if (learners <= 0 || isNaN(learners)) {
    costResult.style.color = "red";
    costResult.textContent = "Please enter a valid number of learners.";
    return;
  }

  const total = price * learners;
  costResult.style.color = "green";
  costResult.textContent =
    "Estimated Total Investment: ₹" + total.toLocaleString("en-IN");
}

// Expose function to global scope so it can be used in HTML
window.calculateEnrollmentCost = calculateEnrollmentCost;

// Course category filter (similar to gallery filter)
function filterCourses(category) {
  const items = document.querySelectorAll(".course-card");

  items.forEach(function (item) {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

window.filterCourses = filterCourses;

// Simple contact/enquiry form validation
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";
    const formMessage = document.getElementById("formMessage");

    if (!formMessage) return;

    if (name === "" || email === "" || message === "") {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill all required fields.";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }

    formMessage.style.color = "green";
    formMessage.textContent =
      "Thank you! Your enquiry has been submitted. We will contact you soon.";
    enquiryForm.reset();
  });
}
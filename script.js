// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const userMessage = document.getElementById("message").value.trim();

  if (name === "" || email === "" || userMessage === "") {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
    return;
  }

  message.style.color = "green";
  message.textContent = "Message sent successfully! 🚀";

  form.reset();
});
const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
const progressBars = document.querySelectorAll(".progress-bar");

function showSkills() {
  progressBars.forEach(bar => {
    const value = bar.getAttribute("data-skill");
    bar.style.width = value + "%";
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if (sectionPos < screenPos) {
    showSkills();
  }
});
const progressBars = document.querySelectorAll(".progress-bar");

function animateSkills() {
  progressBars.forEach(bar => {
    const skillLevel = bar.getAttribute("data-skill");
    bar.style.width = skillLevel + "%";
  });
}

// Animate when page loads
window.addEventListener("load", animateSkills);
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.2;

    if (sectionTop < triggerPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


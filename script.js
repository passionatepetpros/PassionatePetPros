// Basic JavaScript for Passionate Pet Pros

// Toggle mobile navigation (if extended in future)
function toggleMenu() {
  const nav = document.querySelector('header nav');
  nav.classList.toggle('open');
}

// Simple form validation (Booking page)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.booking-form');
  if(form) {
    form.addEventListener('submit', (e) => {
      const email = form.querySelector('input[name="email"]');
      const name = form.querySelector('input[name="name"]');
      if(!email.value || !name.value) {
        alert("Please fill in your name and email before submitting.");
        e.preventDefault();
      }
    });
  }
});

// Smooth scroll to sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Simple contact form handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out, Rana will contact you soon!');
  this.reset();
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.background = window.scrollY > 50 ? 'rgba(20, 20, 20, 0.95)' : 'rgba(20, 20, 20, 0.8)';
});

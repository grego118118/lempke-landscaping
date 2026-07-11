// Mobile nav
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.service-card, .stat, .gallery-grid figure, .area-tags span, .contact-line').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Hide gallery images that fail to load (missing assets)
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('error', () => { img.closest('figure').style.display = 'none'; });
});

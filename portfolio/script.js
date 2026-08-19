const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  const saved = localStorage.getItem('theme');
if (saved === 'light') {
  root.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  if (isLight) {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

  // menu
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  // reveal
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.bar-fill').forEach(bar => {
          bar.style.width = bar.getAttribute('data-width');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  

  revealEls.forEach(el => observer.observe(el));
});

  // dynamic year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.main-nav');
const form = document.getElementById('contactForm');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('show');
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.fade-in').forEach((element) => observer.observe(element));

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      alert('من فضلك املأ جميع الحقول');
      return;
    }

    const emailAddress = 'info@yourbrand.com';
    const body = `مرحبا فريق YourBrand,\n\nالاسم: ${name}\nالبريد: ${email}\nالموضوع: ${subject}\nالرسالة: ${message}`;
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

const navLinks = document.querySelectorAll('.main-nav a');
if (navLinks.length && navMenu) {
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── theme toggle ──
const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');

// load saved preference, default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

toggleBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'light' ? 'dark' : 'light');
});

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  // sun = currently dark (click to go light), moon = currently light (click to go dark)
  icon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

// ── typing animation roles ──
const roles = [
  'CS Student @ Reichman University',
  'Aspiring Red Team Specialist',
  'Cybersecurity Enthusiast',
  'Hardware & Firmware Curious',
  'Powerlifting Athlete',
];

let roleIndex = 0;   // which role we're on
let charIndex = 0;   // how far into the current role
let deleting = false;

const typedEl = document.getElementById('typed-text');

function type() {
  const current = roles[roleIndex];

  if (deleting) {
    // remove one character
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
  } else {
    // add one character
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
  }

  let delay = deleting ? 60 : 100;

  if (!deleting && charIndex === current.length) {
    // pause at end before deleting
    delay = 1800;
    deleting = true;
  } else if (deleting && charIndex === 0) {
    // move to next role
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

type(); // kick it off

// ── auto-update footer year ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── mobile hamburger toggle ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── highlight active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // remove active from all, set on the matching link
      links.forEach(l => l.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.style.color = 'var(--accent)';
    }
  });
}, { threshold: 0.15 });

sections.forEach(s => observer.observe(s));

// ── fade-in cards on scroll ──
const cards = document.querySelectorAll('.card, .cert-card');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  // start invisible
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.4s ease, transform 0.4s ease, border-color 0.2s ease';
  fadeObserver.observe(card);
});

// triggered when card enters view
document.addEventListener('animationend', () => {});

// ── copy email to clipboard ──
const copyEmailBtn = document.getElementById('copy-email-btn');
copyEmailBtn.addEventListener('click', () => {
  navigator.clipboard.writeText('nathanielkinzelberg@icloud.com');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = 'Copied to clipboard!';
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('toast-show'), 10);
  setTimeout(() => {
    toast.classList.remove('toast-show');
    toast.addEventListener('transitionend', () => toast.remove());
  }, 2000);
});

// patch: use classList instead of animationend for the fade
const style = document.createElement('style');
style.textContent = `.card.visible, .cert-card.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

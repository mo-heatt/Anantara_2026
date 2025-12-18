// Initialize AOS + parallax
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // simple scroll parallax for background layers
    const guardian = document.querySelector('.cinema-guardian');
    const city = document.querySelector('.cinema-city');

    window.addEventListener('scroll', () => {
        const y = window.scrollY || window.pageYOffset;
        if (guardian) guardian.style.transform = `translate3d(0, ${y * -0.05}px, 0)`;
        if (city) city.style.transform = `translate3d(0, ${y * -0.02}px, 0)`;
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (!nav) return;
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(4, 13, 14, 0.95)';
        nav.style.padding = '10px 24px';
    } else {
        nav.style.background = 'rgba(4, 13, 14, 0.6)';
        nav.style.padding = '16px 24px';
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Accent border hover for glass cards
const glassCards = document.querySelectorAll('.glass');
glassCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = 'rgba(184, 115, 51, 0.5)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(184, 115, 51, 0.2)';
    });
});
// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({duration:1000, once:true});
});

// Add gentle floating animation to all sigils
const sigils = document.querySelectorAll('.sigil');
sigils.forEach((s, i) => {
    s.style.animationDelay = `${i*1.2}s`;
});

// Smooth scrolling for nav links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({behavior: 'smooth'});
    });
});

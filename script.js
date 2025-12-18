// Navigation mobile toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ===================================
// PARALLAX EFFECTS FOR INDEX PAGE
// ===================================

if (document.body.classList.contains('page-index')) {
    let satellites = document.querySelectorAll('.satellite');
    let stars1 = document.querySelector('.stars');
    let stars2 = document.querySelector('.stars2');
    let stars3 = document.querySelector('.stars3');

    window.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset;
        
        // Parallax effect for satellites
        satellites.forEach((satellite, index) => {
            if (index === 0) {
                let progress = (scrolled / (document.body.scrollHeight - window.innerHeight));
                let xPos = -200 + (progress * 1200);
                let yPos = Math.sin(progress * Math.PI * 2) * 150;
                let rotation = progress * 360;
                satellite.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${rotation}deg)`;
            } else if (index === 1) {
                let yPos = -100 + (scrolled * 0.15);
                let rotation = scrolled * 0.1;
                satellite.style.transform = `translateY(${yPos}px) scale(0.7) rotate(${rotation}deg)`;
                satellite.style.opacity = 0.6;
            } else if (index === 2) {
                let yPos = -(scrolled * 0.1);
                let xPos = Math.sin(scrolled * 0.0005) * 20;
                let rotation = -scrolled * 0.2;
                satellite.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${rotation}deg)`;
            }
        });
        
        // Animate stars
        if (stars1) stars1.style.transform = `translateY(${scrolled * 0.05}px)`;
        if (stars2) stars2.style.transform = `translateY(${scrolled * 0.08}px)`;
        if (stars3) stars3.style.transform = `translateY(${scrolled * 0.12}px)`;
    });
}

// ===================================
// EFFECTS FOR METEO PAGE
// ===================================

if (document.body.classList.contains('page-meteo')) {
    let cloudsLayer = document.querySelector('.clouds-layer');
    let weatherParticles = document.querySelector('.weather-particles');

    window.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset;
        
        // Parallax for clouds
        if (cloudsLayer) {
            cloudsLayer.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        
        if (weatherParticles) {
            weatherParticles.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    });
}

// ===================================
// SCROLL REVEAL ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all content wrappers
document.addEventListener('DOMContentLoaded', () => {
    const contentWrappers = document.querySelectorAll('.content-wrapper');
    contentWrappers.forEach((wrapper, index) => {
        wrapper.style.opacity = '0';
        wrapper.style.transform = 'translateY(50px)';
        wrapper.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(wrapper);
    });
});
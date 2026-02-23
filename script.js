// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#6366f1'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6366f1',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Typed Text Animation
const typedText = document.querySelector('.typed-text');
const words = [
    'Python Django Developer',
    'Data Analyst',
    'CRM Expert',
    'E-commerce Specialist',
    'Job Portal Creator'
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typedText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Start typing animation
setTimeout(typeEffect, 1000);

// Counter Animation
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = target / speed;
    
    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounter(counter), 1);
    } else {
        counter.innerText = target + (target === 98 ? '%' : '+');
    }
};

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter);
            observer.unobserve(counter);
        }
    });
}, observerOptions);

counters.forEach(counter => observer.observe(counter));

// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioGrid = document.querySelector('.portfolio-grid');

// Portfolio data
const projects = [
    {
        title: 'SkyJobs Portal',
        category: 'web',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=SkyJobs',
        description: 'AI-powered job portal',
        tags: ['Django', 'PostgreSQL', 'Redis'],
        link: 'https://github.com/mehidi-hridoy/skyjobs'
    },
    {
        title: 'crm-bi',
        category: 'crm',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=CRM-BI',
        description: 'Business Intelligence CRM',
        tags: ['Django', 'Power BI', 'SQL'],
        link: 'https://github.com/mehidi-hridoy/crm-bi'
    },
    {
        title: 'tazkiyah_mart',
        category: 'ecommerce',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=Tazkiyah+Mart',
        description: 'Islamic products marketplace',
        tags: ['Django', 'Stripe', 'Redis'],
        link: 'https://github.com/mehidi-hridoy/tazkiyah_mart'
    },
    {
        title: 'Realstate_CRM',
        category: 'crm',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=RealEstate+CRM',
        description: 'Real estate management system',
        tags: ['Python', 'Django', 'JavaScript'],
        link: 'https://github.com/mehidi-hridoy/Realstate_CRM'
    },
    {
        title: 'dokan',
        category: 'ecommerce',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=Dokan',
        description: 'Multi-vendor e-commerce',
        tags: ['Django', 'AJAX', 'PostgreSQL'],
        link: 'https://github.com/mehidi-hridoy/dokan'
    },
    {
        title: 'callanalysis',
        category: 'analytics',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=Call+Analysis',
        description: 'Call analytics platform',
        tags: ['Python', 'Analytics', 'SQL'],
        link: 'https://github.com/mehidi-hridoy/callanalysis'
    }
];

function displayProjects(category = 'all') {
    const filtered = category === 'all' 
        ? projects 
        : projects.filter(p => p.category === category);
    
    portfolioGrid.innerHTML = filtered.map(project => `
        <div class="portfolio-item fade-in">
            <div class="portfolio-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="portfolio-overlay">
                    <div class="overlay-links">
                        <a href="${project.link}" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
            <div class="portfolio-info">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div class="portfolio-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize portfolio
displayProjects();

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        displayProjects(btn.dataset.filter);
    });
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Smooth Scrolling
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

// Active Navigation on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Skill Bars Animation
const skillBars = document.querySelectorAll('.progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
            skillObserver.unobserve(bar);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// Parallax Effect on Floating Cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.floating-card');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    cards.forEach((card, index) => {
        const speed = (index + 1) * 20;
        const x = mouseX * speed;
        const y = mouseY * speed;
        card.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
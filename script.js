// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00ff9d'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.3,
            random: true
        },
        size: {
            value: 2,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff9d',
            opacity: 0.1,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
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
                    opacity: 0.3
                }
            },
            push: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Typed Text Animation
const typedText = document.querySelector('.typed-text');
const words = [
    'python django developer',
    'data analyst',
    'business intelligence analyst',
    'autiomation engineer',
    'crm specialist',
    'e-commerce expert',
    'api architect'
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
        setTimeout(typeEffect, isDeleting ? 30 : 60);
    }
}

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
        counter.innerText = target;
    }
};

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

// Portfolio data with all Heroku projects
const projects = [
    {
        title: 'SkyJobs',
        category: 'web',
        image: 'https://www.skyjobsuk.com/static/images/skyjobs_slider1.jpg',
        description: 'AI-powered job portal connecting professionals with top companies',
        tags: ['Django', 'PostgreSQL', 'Redis', 'Celery'],
        link: 'https://www.skyjobsuk.com/',
        github: 'https://github.com/mehidi-hridoy/skyjobs',
        stats: '5K+ Users',
        platform: 'Heroku'
    },
    {
        title: 'Kayacare',
        category: 'ecommerce',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=Kayacare',
        description: 'Beauty products marketplace with inventory management and secure payments',
        tags: ['Django', 'Power BI', 'PostgreSQL', 'Stripe'],
        link: 'https://kayacare-5c6a86ffb16d.herokuapp.com/',
        github: '#',
        stats: '2K+ Products',
        platform: 'Heroku'
    },
    {
        title: 'tawhtawhaa-madarasa',
        category: 'web',
        image: 'https://tawhtawhaa-madarasa-30ebae930b8d.herokuapp.com/',
        description: 'Online Islamic learning platform with Quran recitations, Tadabbur, Sirah, and Aqida courses',
        tags: ['Django', 'PostgreSQL', 'Video Streaming', 'Payment Gateway'],
        link: 'https://tawhtawhaa-madarasa-30ebae930b8d.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/tawhtawhaa_madarasa',
        stats: '1K+ Students',
        platform: 'Heroku'
    },
    {
        title: 'Hotpot',
        category: 'ecommerce',
        image: 'https://hotpot-26d6223c9f58.herokuapp.com/static/images/HOTPOT%20Culinary%20School%20LOGO.png',
        description: 'Online food ordering system with restaurant management dashboard and real-time tracking',
        tags: ['Django', 'AJAX', 'PostgreSQL', 'Google Maps API'],
        link: 'https://hotpot-26d6223c9f58.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/hotpot',
        stats: '30+ Restaurants',
        platform: 'Heroku'
    },
    {
        title: 'Paddle Coach',
        category: 'web',
        image: 'https://paddle-coach-hero-2b4aa6dceae5.herokuapp.com/static/images/talha.png',
        description: 'Professional coaching website for Bangladesh\'s first Paddle coach with booking system',
        tags: ['Django', 'Calendar API', 'Payment Integration', 'Bootstrap'],
        link: 'https://paddle-coach-hero-2b4aa6dceae5.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/paddle_coach',
        stats: '500+ Sessions',
        platform: 'Heroku'
    },
    {
        title: 'ServiceLink BPO',
        category: 'web',
        image: 'https://servicelink-app-9cce37994dac.herokuapp.com/',
        description: 'Business process outsourcing management platform with workflow automation',
        tags: ['Django', 'Celery', 'PostgreSQL', 'Redis'],
        link: 'https://servicelink-app-9cce37994dac.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/servicelinkBPO',
        stats: '100+ Agents',
        platform: 'Heroku'
    },
    {
        title: 'My Hospital CMS',
        category: 'web',
        image: 'https://my-hospital-cms-cb339cd63332.herokuapp.com/',
        description: 'Comprehensive hospital management system with patient records and appointments',
        tags: ['Django', 'PostgreSQL', 'Bootstrap', 'Chart.js'],
        link: 'https://my-hospital-cms-cb339cd63332.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/my-hospital-cms',
        stats: '5+ Hospitals',
        platform: 'Heroku'
    },
    {   
        title: 'Microservice API',
        category: 'api',
        image: 'https://microservice-api-f0e1b19fdd63.herokuapp.com/',
        description: 'Scalable microservice architecture with API gateway and service discovery',
        tags: ['Python', 'Django REST', 'Docker', 'Redis'],
        link: 'https://microservice-api-f0e1b19fdd63.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/micro_service_API',
        stats: '10+ Endpoints',
        platform: 'Heroku'
    },
    {
        title: 'Call Analysis',
        category: 'analytics',
        image: '#',
        description: 'Call analytics platform with performance metrics and trend visualization',
        tags: ['Python', 'Analytics', 'SQL', 'Pandas'],
        link: 'https://github.com/mehidi-hridoy/skyjobs',
        github: '#',
        stats: '10K+ Calls',
        platform: 'GitHub'
    }
];


// Display Portfolio
const portfolioGrid = document.getElementById('portfolio-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function displayProjects(category = 'all') {
    const filtered = category === 'all' 
        ? projects 
        : projects.filter(p => p.category === category);
    
    portfolioGrid.innerHTML = filtered.map(project => `
        <div class="portfolio-item">
            <div class="portfolio-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="portfolio-overlay">
                    <div class="overlay-links">
                        ${project.github ? `
                        <a href="${project.github}" target="_blank" title="View Code">
                            <i class="fab fa-github"></i>
                        </a>` : ''}
                        ${project.link ? `
                        <a href="${project.link}" target="_blank" title="Live Demo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>` : ''}
                        ${project.platform === 'Heroku' ? `
                        <span class="platform-badge" title="Hosted on Heroku">
                            <i class="fas fa-cloud"></i>
                        </span>` : ''}
                    </div>
                </div>
            </div>
            <div class="portfolio-info">
                <div class="portfolio-header">
                    <h4>${project.title}</h4>
                    ${project.stats ? `<span class="project-stat">${project.stats}</span>` : ''}
                </div>
                <p>${project.description}</p>
                <div class="portfolio-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                ${project.platform === 'Heroku' ? `
                <div class="platform-indicator">
                    <i class="fas fa-rocket"></i> live on heroku
                </div>` : ''}
            </div>
        </div>
    `).join('');
}

displayProjects();

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

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

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
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Active Navigation on Scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
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
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'sending... <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            showNotification('message sent successfully!', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Notification Function
function showNotification(message, type) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}" style="color: var(--accent);"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

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

// Window Load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add animation delays to portfolio items
    document.querySelectorAll('.portfolio-item').forEach((item, index) => {
        item.style.animation = `fadeIn 0.5s ease ${index * 0.1}s forwards`;
        item.style.opacity = '0';
    });
});

// Handle Window Resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) navLinks.style.display = 'flex';
    }
});



// Add to script.js
VanillaTilt.init(document.querySelector(".code-surface"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
});

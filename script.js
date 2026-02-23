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

// Portfolio data with all Heroku projects
const projects = [
    {
        title: 'SkyJobs',
        category: 'web',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=SkyJobs',
        description: 'AI-powered job portal connecting professionals with top companies',
        tags: ['Django', 'PostgreSQL', 'Redis', 'Celery'],
        link: 'https://skyjobs.herokuapp.com/',
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
        link: 'https://kayacare.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/kayacare',
        stats: '2K+ Products',
        platform: 'Heroku'
    },
    {
        title: 'tawhtawhaa-madarasa',
        category: 'web',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=Islamic+Learning',
        description: 'Online Islamic learning platform with Quran recitations, Tadabbur, Sirah, and Aqida courses',
        tags: ['Django', 'PostgreSQL', 'Video Streaming', 'Payment Gateway'],
        link: 'https://tawhtawhaa-madarasa.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/tawhtawhaa_madarasa',
        stats: '1K+ Students',
        platform: 'Heroku'
    },
    {
        title: 'Dokan E-commerce',
        category: 'ecommerce',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=Dokan',
        description: 'Multi-vendor e-commerce platform with real-time inventory and order management',
        tags: ['Django', 'AJAX', 'PostgreSQL', 'Redis'],
        link: 'https://dokan-ecommerce.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/dokan',
        stats: '50+ Vendors',
        platform: 'Heroku'
    },
    {
        title: 'Hotpot',
        category: 'ecommerce',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=Hotpot',
        description: 'Online food ordering system with restaurant management dashboard and real-time tracking',
        tags: ['Django', 'AJAX', 'PostgreSQL', 'Google Maps API'],
        link: 'https://hotpot.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/hotpot',
        stats: '30+ Restaurants',
        platform: 'Heroku'
    },
    {
        title: 'Paddle Coach',
        category: 'web',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=Paddle+Coach',
        description: 'Professional coaching website for Bangladesh\'s first Paddle coach with booking system',
        tags: ['Django', 'Calendar API', 'Payment Integration', 'Bootstrap'],
        link: 'https://paddle-coach-hero.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/paddle_coach',
        stats: '500+ Sessions',
        platform: 'Heroku'
    },
    {
        title: 'ServiceLink BPO',
        category: 'web',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=ServiceLink+BPO',
        description: 'Business process outsourcing management platform with workflow automation',
        tags: ['Django', 'Celery', 'PostgreSQL', 'Redis'],
        link: 'https://servicelinkbpo.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/servicelinkBPO',
        stats: '100+ Agents',
        platform: 'Heroku'
    },
    {
        title: 'ServiceLink App',
        category: 'web',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=ServiceLink+App',
        description: 'Service management application with client portal and task tracking',
        tags: ['Python', 'Django', 'REST API', 'JWT'],
        link: 'https://servicelink-app.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/servicelink',
        stats: '1K+ Tasks',
        platform: 'Heroku'
    },
    {
        title: 'My Hospital CMS',
        category: 'web',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=Hospital+CMS',
        description: 'Comprehensive hospital management system with patient records and appointments',
        tags: ['Django', 'PostgreSQL', 'Bootstrap', 'Chart.js'],
        link: 'https://my-hospital-cms.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/my-hospital-cms',
        stats: '5+ Hospitals',
        platform: 'Heroku'
    },
    {
        title: 'Microservice API',
        category: 'api',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=Microservice+API',
        description: 'Scalable microservice architecture with API gateway and service discovery',
        tags: ['Python', 'Django REST', 'Docker', 'Redis'],
        link: 'https://microservice-api.herokuapp.com/',
        github: 'https://github.com/mehidi-hridoy/micro_service_API',
        stats: '10+ Endpoints',
        platform: 'Heroku'
    },
    {
        title: 'Realstate CRM',
        category: 'crm',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=RealEstate+CRM',
        description: 'Real estate management system with property tracking and client management',
        tags: ['Python', 'Django', 'JavaScript', 'PostgreSQL'],
        link: '#',
        github: 'https://github.com/mehidi-hridoy/Realstate_CRM',
        stats: '100+ Properties',
        platform: 'GitHub'
    },
    {
        title: 'tazkiyah_mart',
        category: 'ecommerce',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=Tazkiyah+Mart',
        description: 'Islamic products marketplace with secure payment gateway',
        tags: ['Django', 'Stripe', 'Redis', 'PostgreSQL'],
        link: '#',
        github: 'https://github.com/mehidi-hridoy/tazkiyah_mart',
        stats: '500+ Products',
        platform: 'Private'
    },
    {
        title: 'Call Analysis',
        category: 'analytics',
        image: 'https://via.placeholder.com/600x400/2d2d2d/ffffff?text=Call+Analysis',
        description: 'Call analytics platform with performance metrics and trend visualization',
        tags: ['Python', 'Analytics', 'SQL', 'Pandas'],
        link: '#',
        github: 'https://github.com/mehidi-hridoy/callanalysis',
        stats: '10K+ Calls',
        platform: 'GitHub'
    }
];

// Add this CSS to style the portfolio items properly
const portfolioStyles = `
    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 30px;
        margin-top: 40px;
    }

    .portfolio-item {
        background: var(--card-bg);
        border-radius: 20px;
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid rgba(255,255,255,0.05);
        position: relative;
    }

    .portfolio-item:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
        border-color: var(--primary-color);
    }

    .portfolio-image {
        position: relative;
        overflow: hidden;
        aspect-ratio: 16/9;
        background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    }

    .portfolio-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
        opacity: 0.9;
    }

    .portfolio-item:hover .portfolio-image img {
        transform: scale(1.1);
    }

    .portfolio-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        backdrop-filter: blur(5px);
    }

    .portfolio-item:hover .portfolio-overlay {
        opacity: 1;
    }

    .overlay-links {
        display: flex;
        gap: 20px;
        align-items: center;
        transform: translateY(20px);
        transition: transform 0.3s ease;
    }

    .portfolio-item:hover .overlay-links {
        transform: translateY(0);
    }

    .overlay-links a,
    .platform-badge {
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 20px;
    }

    .overlay-links a:hover {
        background: var(--accent-color);
        transform: scale(1.1) rotate(360deg);
    }

    .platform-badge {
        background: #79589f;
        cursor: default;
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(121, 88, 159, 0.7); }
        70% { box-shadow: 0 0 0 10px rgba(121, 88, 159, 0); }
        100% { box-shadow: 0 0 0 0 rgba(121, 88, 159, 0); }
    }

    .portfolio-info {
        padding: 25px;
    }

    .portfolio-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .portfolio-header h4 {
        font-size: 18px;
        font-weight: 600;
        background: var(--gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .project-stat {
        background: var(--gradient);
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        color: white;
    }

    .portfolio-info p {
        color: var(--text-gray);
        font-size: 14px;
        line-height: 1.6;
        margin-bottom: 15px;
    }

    .portfolio-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 15px;
    }

    .portfolio-tags span {
        padding: 4px 10px;
        background: rgba(99, 102, 241, 0.1);
        border: 1px solid rgba(99, 102, 241, 0.2);
        border-radius: 15px;
        font-size: 11px;
        color: var(--text-gray);
        transition: all 0.3s ease;
    }

    .portfolio-tags span:hover {
        background: var(--primary-color);
        color: white;
        transform: translateY(-2px);
    }

    .platform-indicator {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(255,255,255,0.05);
        font-size: 12px;
        color: #79589f;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .platform-indicator i {
        font-size: 14px;
    }

    /* Filter buttons styling */
    .portfolio-filters {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin: 40px 0;
        flex-wrap: wrap;
    }

    .filter-btn {
        padding: 10px 25px;
        background: transparent;
        border: 1px solid rgba(255,255,255,0.1);
        color: var(--text-light);
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
        font-weight: 500;
    }

    .filter-btn:hover,
    .filter-btn.active {
        background: var(--gradient);
        border-color: transparent;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
    }

    /* Animation classes */
    .fade-in {
        animation: fadeInUp 0.6s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .portfolio-grid {
            grid-template-columns: 1fr;
            padding: 0 20px;
        }
        
        .portfolio-filters {
            gap: 10px;
        }
        
        .filter-btn {
            padding: 8px 16px;
            font-size: 12px;
        }
    }
`;

// Add the styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = portfolioStyles;
document.head.appendChild(styleSheet);

// Function to display projects
function displayProjects(category = 'all') {
    const filtered = category === 'all' 
        ? projects 
        : projects.filter(p => p.category === category);
    
    portfolioGrid.innerHTML = filtered.map(project => `
        <div class="portfolio-item fade-in" data-category="${project.category}">
            <div class="portfolio-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="portfolio-overlay">
                    <div class="overlay-links">
                        ${project.github ? `
                        <a href="${project.github}" target="_blank" title="View Code on GitHub">
                            <i class="fab fa-github"></i>
                        </a>` : ''}
                        ${project.link && project.link !== '#' ? `
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
                    <i class="fas fa-rocket"></i> Live on Heroku
                </div>` : ''}
            </div>
        </div>
    `).join('');
}

// Initialize portfolio
displayProjects();

// Filter buttons event listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        displayProjects(btn.dataset.filter);
        
        // Smooth scroll to portfolio grid
        portfolioGrid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                hamburger?.classList.remove('active');
            }
        }
    });
});

// Active Navigation on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
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
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Show success message
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Notification function
function showNotification(message, type) {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-family: 'Poppins', sans-serif;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

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
    
    // Add loading animation to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});

// Handle window resize for mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.style.display = 'flex';
        }
    }
});
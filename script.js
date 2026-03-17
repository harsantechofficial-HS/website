document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const header = document.getElementById('header');

    // Mobile Menu Toggle
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.querySelector('i').classList.toggle('fa-bars');
        mobileMenu.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu when clicking a link
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.querySelector('i').classList.add('fa-bars');
            mobileMenu.querySelector('i').classList.remove('fa-times');
        });
    });

    // Scroll Header Background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            // Close other open items
            document.querySelectorAll('.faq-item.faq-open').forEach(openItem => {
                if (openItem !== item) openItem.classList.remove('faq-open');
            });
            item.classList.toggle('faq-open');
        });
    });

    // ===== Gist Tabs =====
    document.querySelectorAll('.gist-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            // Update active tab
            document.querySelectorAll('.gist-tab').forEach(t => t.classList.remove('active-tab'));
            tab.classList.add('active-tab');
            // Update active panel
            document.querySelectorAll('.gist-panel').forEach(p => p.classList.remove('active-panel'));
            const panel = document.getElementById('panel-' + tabId);
            if (panel) panel.classList.add('active-panel');
        });
    });
});


// Brochure Form Submit → WhatsApp redirect
function handleBrochureSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('brochure-name').value.trim();
    const phone = document.getElementById('brochure-phone').value.trim();
    const phoneNumber = '916385573505'; // Replace with your WhatsApp number
    const message = encodeURIComponent(
        `Hi Harsan Technologies! My name is ${name}. I'm interested in your Full Stack Development course. Please send me the course brochure. My phone number is ${phone}.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

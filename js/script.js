/* ============================================================
   KHAN TRADERS & AL SHAHBAZAR ZARAI ALLAAT — Master Script
   Refreshed v2.0 — All interactive features
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // ---------- 1. Mobile Menu Toggle ----------
    const menuToggle = document.querySelector('.menu-toggle');
    const navigationMenu = document.querySelector('nav ul');

    if (menuToggle && navigationMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navigationMenu.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
            menuToggle.classList.toggle('is-active', isOpen);
        });

        // Close menu on link click
        navigationMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navigationMenu.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Open navigation menu');
                menuToggle.classList.remove('is-active');
            });
        });
    }

    // ---------- 2. Scroll Reveal (Intersection Observer) ----------
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optionally unobserve after reveal
                    // revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.10,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach((el) => revealObserver.observe(el));
    }

    // ---------- 3. Back to Top Button ----------
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Scroll to top');
    backToTop.innerHTML = '&#8593;'; // ↑ arrow
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('is-visible');
        } else {
            backToTop.classList.remove('is-visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---------- 4. Testimonial Carousel ----------
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
        const slides = carousel.querySelectorAll('.testimonial-slide');
        const dotsContainer = carousel.parentElement.querySelector('.testimonial-dots');
        let currentSlide = 0;
        let autoSlideInterval;

        // Create dots
        if (dotsContainer) {
            slides.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            });
        }

        function goToSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
            currentSlide = index;

            // Update dots
            if (dotsContainer) {
                const dots = dotsContainer.querySelectorAll('.testimonial-dot');
                dots.forEach((d, i) => d.classList.toggle('active', i === index));
            }
        }

        function nextSlide() {
            goToSlide((currentSlide + 1) % slides.length);
        }

        function startAutoSlide() {
            stopAutoSlide();
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoSlide() {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
                autoSlideInterval = null;
            }
        }

        // Initialize: show first slide
        goToSlide(0);
        startAutoSlide();

        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
    }

    // ---------- 5. FAQ Accordion ----------
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('is-open');

                // Close all other items
                faqItems.forEach((other) => other.classList.remove('is-open'));

                // Toggle current
                if (!isOpen) {
                    item.classList.add('is-open');
                }
            });
        }
    });

    // ---------- 6. Stats Counter Animation ----------
    const statNumbers = document.querySelectorAll('.stat-item h3');

    if (statNumbers.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = parseInt(target.getAttribute('data-count'), 10);
                    if (!finalValue || target.dataset.animated) return;

                    target.dataset.animated = 'true';
                    animateCounter(target, finalValue);
                    counterObserver.unobserve(target);
                }
            });
        }, { threshold: 0.50 });

        statNumbers.forEach((el) => counterObserver.observe(el));
    }

    function animateCounter(element, target) {
        const duration = 2000; // ms
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            // Format with commas
            element.textContent = current.toLocaleString() + '+';

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString() + '+';
            }
        }

        requestAnimationFrame(update);
    }

    // ---------- 7. Lightbox for Gallery Images ----------
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-label', 'Image lightbox');
    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
        <img src="" alt="Enlarged image">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    // Open lightbox on gallery images
    document.querySelectorAll('.gallery-img, .card img[loading="lazy"]').forEach((img) => {
        img.addEventListener('click', (e) => {
            // Only open if it's a gallery page or has gallery-img class
            if (img.classList.contains('gallery-img') || window.location.pathname.includes('gallery')) {
                e.preventDefault();
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || 'Enlarged image';
                lightbox.classList.add('is-open');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
            closeLightbox();
        }
    });

    // ---------- 8. Smooth scroll for anchor links ----------
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId && targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ---------- 9. Contact Form Handler (if present) ----------
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.textContent : '';

            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }

            // Simulate send (in production, use Formspree or similar)
            setTimeout(() => {
                const successMsg = document.createElement('div');
                successMsg.style.cssText = `
                    padding: 16px 20px;
                    background: #d4edda;
                    color: #155724;
                    border-radius: 8px;
                    margin-top: 16px;
                    font-weight: 600;
                    text-align: center;
                `;
                successMsg.textContent = '✅ Thank you! Your message has been sent. We will contact you soon.';

                // Remove old success message if any
                const oldMsg = contactForm.querySelector('.form-success');
                if (oldMsg) oldMsg.remove();

                successMsg.className = 'form-success';
                contactForm.appendChild(successMsg);
                contactForm.reset();

                if (submitBtn) {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }

                // Auto-remove after 5 seconds
                setTimeout(() => {
                    if (successMsg.parentNode) successMsg.remove();
                }, 5000);
            }, 1200);
        });
    }

    // ---------- 10. Active nav highlight on scroll (for single-page anchors) ----------
    // (Not needed for multi-page site, but kept for future use)

    console.log('Khan Traders website — Refreshed v2.0 loaded successfully.');
});
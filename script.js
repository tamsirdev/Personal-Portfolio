document.addEventListener('DOMContentLoaded', () => {

    // ─── Scroll Effects (Progress Bar + Navbar) ──────────────────────
    const progressBar = document.getElementById('scroll-progress');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
        if (progressBar) progressBar.style.width = progress + '%';
        if (navbar) navbar.classList.toggle('scrolled', scrollY > 50);
    });

    // ─── Mobile Menu Toggle ──────────────────────────────────────────
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    const closeMenu = () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    };

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });

        // Close on link click
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('nav-active')) {
                closeMenu();
            }
        });
    }

    // ─── Typewriter Effect ───────────────────────────────────────────
    const typewriterEl = document.getElementById('typewriter-text');
    if (typewriterEl) {
        const phrases = [
            'ICT Specialist',
            'Junior Software Developer',
            'Server & Database Administrator',
            'Network Engineer',
            'DevOps Enthusiast'
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentText = '';

        function type() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                currentText = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                currentText = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            typewriterEl.textContent = currentText;

            let delay = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentPhrase.length) {
                delay = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                delay = 500;
            }

            setTimeout(type, delay);
        }

        type();
    }

    // ─── Scroll Reveal (with staggering) ─────────────────────────────
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));

    // ─── Active Nav Link on Scroll ──────────────────────────────────
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        let current = '';
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === '#' + current;
            link.classList.toggle('active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // ─── Back to Top ─────────────────────────────────────────────────
    const backToTop = document.getElementById('back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 500);
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ─── Stat Items (Clickable Experience / Certifications) ─────────
    const statData = {
        experience: {
            title: 'Work Experience',
            items: [
                { title: 'ICT Officer', org: 'Ministry of Information — Dept. of Information Services', date: 'Jan 2026 — Present' },
                { title: 'ICT Officer (EIR Tracker Core Team)', org: 'Ministry of Health — Directorate of Planning & Information', date: 'June 2024 — Jan 2026' },
                { title: 'Junior Network Engineer (Contract)', org: 'LAN Installation Project', date: 'Nov 2023 — June 2024' },
                { title: 'ICT Technician', org: 'Ministry of Health — Mass Birth Certificate Campaign', date: 'Aug 2022 — Feb 2023' },
                { title: 'Data Entry Clerk', org: 'Ministry of Health', date: 'Mar 2021 — Nov 2021' }
            ]
        },
        certifications: {
            title: 'Professional Development & Technical Certifications',
            items: [
                { title: 'HTML Fundamentals Course Certificate', org: 'Sololearn', date: 'Jul 07, 2020' },
                { title: 'CSS Course Certificate', org: 'Sololearn', date: 'Jun 19, 2021' },
                //{ title: 'Taxpayer Identification Number (TIN) Certificate', org: 'Gambia Revenue Authority', date: 'Jul 16, 2021' },
                { title: 'SQL Course Certificates', org: 'Sololearn', date: 'Oct 05 & Oct 06, 2021' },
                { title: 'Certificate of Achievement: 12-Month Training Programme on the Core Values of Leadership', org: 'TAF Leadership Academy, TAF Africa Foundation Centre, Brufut, The Gambia', date: 'Dec 28, 2022' },
                { title: 'SQL Intermediate Course Certificate', org: 'Sololearn', date: 'Apr 05, 2023' },
                { title: 'Tech for Everyone Course Certificate', org: 'Sololearn', date: 'Apr 06, 2023' },
                { title: 'Introduction to Data Analysis using Microsoft Excel', org: 'Coursera Project Network (Freedom Learning Group)', date: 'Jul 28, 2023' },
                { title: 'PHP Course Certificate', org: 'Sololearn', date: 'Jul 30, 2023' },
                { title: 'Technical Support Fundamentals Certificate', org: 'Google (offered through Coursera)', date: 'Aug 01, 2023' },
                { title: 'Create a Website Using WordPress', org: 'Coursera Project Network', date: 'Aug 04, 2023' },
                { title: 'Introduction to Microsoft Excel', org: 'Coursera Project Network (Freedom Learning Group)', date: 'Aug 10, 2023' },
                { title: 'Using Basic Formulas and Functions in Microsoft Excel', org: 'Coursera Project Network (Freedom Learning Group)', date: 'Aug 10, 2023' },
                { title: 'Computer Hardware Certificate', org: 'TCPDF Powered Platform', date: 'Oct 05, 2023' },
                { title: 'Introduction to DHIS2 (GEN-D001-en)', org: 'DHIS2 Online Academy, HISP Centre', date: 'Aug 08, 2024' },
                { title: 'Aggregate Data Capture and Validation Fundamentals (GEN-D002-en)', org: 'DHIS2 Online Academy, HISP Centre', date: 'Aug 30, 2024' },
                { title: 'Aggregate Data Analysis Fundamentals (GEN-D003-en)', org: 'DHIS2 Online Academy, HISP Centre', date: 'Dec 18, 2024' },
                { title: 'Aggregate Customization Fundamentals', org: 'DHIS2 Online Academy, HISP Centre, University of Oslo', date: 'Aug 12, 2025' },
                { title: 'Bachelor of Science in Information Technology', org: 'International Open University (IOU), The Gambia', date: 'Feb 19, 2024' },
                { title: 'Certificate of Proficiency in English Language', org: 'International Open University (IOU), Registrar\'s Office, The Gambia', date: 'Mar 05, 2025' }
            ]
        }
    };

    const statModal = document.getElementById('stat-modal');
    const statModalTitle = document.getElementById('stat-modal-title');
    const statModalList = document.getElementById('stat-modal-list');

    const openStatModal = (key) => {
        const data = statData[key];
        if (!data) return;
        statModalTitle.textContent = data.title;
        statModalList.innerHTML = data.items.map(item =>
            `<li><h4>${item.title}</h4><p>${item.org} · <span class="stat-date">${item.date}</span></p></li>`
        ).join('');
        statModal.classList.add('open');
        statModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        document.querySelectorAll('[data-stat]').forEach(el => {
            if (el.dataset.stat === key) el.setAttribute('aria-expanded', 'true');
        });
    };

    const closeStatModal = () => {
        statModal.classList.remove('open');
        statModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        document.querySelectorAll('[data-stat]').forEach(el => el.setAttribute('aria-expanded', 'false'));
    };

    document.querySelectorAll('[data-stat]').forEach(el => {
        el.addEventListener('click', () => openStatModal(el.dataset.stat));
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openStatModal(el.dataset.stat);
            }
        });
    });

    if (statModal) {
        statModal.querySelectorAll('[data-close-modal]').forEach(el => {
            el.addEventListener('click', closeStatModal);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && statModal.classList.contains('open')) closeStatModal();
        });
    }

    // ─── Form Submission ─────────────────────────────────────────────
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;

            try {
                const res = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });
                if (res.ok) {
                    alert('Thank you! Your message has been sent.');
                    form.reset();
                } else {
                    alert('Oops! Something went wrong. Please try again.');
                }
            } catch {
                alert('Network error. Please check your connection and try again.');
            }

            btn.textContent = originalText;
            btn.disabled = false;
        });
    }
});

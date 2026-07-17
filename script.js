/* ═══════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════ */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════
   GALLERY — Fan Stack + Expand / Collapse
═══════════════════════════════════════ */
const galleryWrapper   = document.querySelector('.gallery-wrapper');
const galleryDiv       = document.querySelector('.gallery');
const galleryHint      = document.querySelector('.gallery-hint');
const galleryToggleBtn = document.getElementById('galleryToggleBtn');
let   isExpanded       = false;
let   lightboxWired    = false;

function expandGallery() {
    galleryWrapper.classList.add('expanded');
    galleryHint.classList.add('hidden');
    galleryToggleBtn.style.display = 'block';
    galleryToggleBtn.innerHTML = '<i class="fas fa-chevron-up"></i>&nbsp; Show Less';
    isExpanded = true;
    galleryDiv.style.cursor = 'default';

    if (!lightboxWired) {
        wireGalleryLightbox();
        lightboxWired = true;
    }
}

function collapseGallery() {
    galleryWrapper.classList.remove('expanded');
    galleryHint.classList.remove('hidden');
    galleryToggleBtn.style.display = 'none';
    isExpanded = false;
    galleryDiv.style.cursor = 'pointer';

    // smooth scroll back to gallery section
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

// Click the fan → expand
galleryDiv.addEventListener('click', (e) => {
    if (!isExpanded) expandGallery();
});

// Toggle button → show less
galleryToggleBtn.addEventListener('click', collapseGallery);

/* ═══════════════════════════════════════
   LIGHTBOX
═══════════════════════════════════════ */
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn    = document.querySelector('.close');

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
}

function wireGalleryLightbox() {
    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', (e) => {
            if (!isExpanded) return; // let the click bubble up to re-expand the fan
            e.stopPropagation();
            openLightbox(img.src);
        });
    });
}

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// ESC key closes lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

/* ═══════════════════════════════════════
   ACTIVE NAV on scroll
═══════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? '#FFD54F' : '';
    });
});
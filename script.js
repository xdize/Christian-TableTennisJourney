// ===============================
// Gallery — Fan Stack + Expand
// ===============================

const galleryWrapper = document.querySelector(".gallery-wrapper");
const galleryDiv     = document.querySelector(".gallery");
const expandHint     = document.querySelector(".gallery-expand-hint");
let   isExpanded     = false;

// Click the stacked cards → expand grid
galleryDiv.addEventListener("click", (e) => {

    if (!isExpanded) {
        // Expand into full grid
        galleryWrapper.classList.add("expanded");
        expandHint.classList.add("hidden");
        isExpanded = true;

        // Now wire up lightbox for ALL images
        wireGalleryLightbox();

    } else {
        // Individual image click → lightbox (handled by wireGalleryLightbox)
    }

});

// ===============================
// Lightbox
// ===============================

const lightbox    = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn    = document.querySelector(".close");

function wireGalleryLightbox() {

    const allImgs = document.querySelectorAll(".gallery img");

    allImgs.forEach(img => {

        img.addEventListener("click", (e) => {
            e.stopPropagation(); // don't re-trigger gallery expand
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });

    });

}

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
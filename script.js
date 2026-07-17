const button = document.getElementById("showMore");
const hiddenPhotos = document.querySelectorAll(".hidden-photo");

let expanded = false;

button.addEventListener("click", () => {

    expanded = !expanded;

    hiddenPhotos.forEach(photo => {

        photo.style.display = expanded ? "block" : "none";

    });

    button.textContent = expanded ? "Show Less" : "Show More";

});


// ===============================
// Gallery Lightbox
// ===============================

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = image.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});
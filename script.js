

const counters = document.querySelectorAll(".stats h1");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let current = 0;

    const update = () => {

        const increment = Math.ceil(target / 50);

        if(current < target){

            current += increment;

            if(current > target){
                current = target;
            }

            if(target >= 20){
                counter.innerText = current + "+";
            }else{
                counter.innerText = current;
            }

            setTimeout(update,30);

        }else{

            if(target >= 20){
                counter.innerText = target + "+";
            }else{
                counter.innerText = target;
            }

        }

    };

    update();

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
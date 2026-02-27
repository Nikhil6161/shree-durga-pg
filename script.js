let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(()=>{
slides[index].classList.remove("active");
index = (index + 1) % slides.length;
slides[index].classList.add("active");
},3000);

function copyNumber(number){
navigator.clipboard.writeText(number);

document.getElementById("copyMsg").innerText="Number copied!";
setTimeout(()=>{
document.getElementById("copyMsg").innerText="";
},2000);
}

/* ===== ROOM GALLERY SLIDER ===== */

const galleryImages = document.querySelectorAll(".slider-card .room-image");
const prevBtn = document.querySelector(".slider-card .left");
const nextBtn = document.querySelector(".slider-card .right");

let galleryIndex = 0; // ✅ separate variable

function showImage(i){
    galleryImages.forEach(img => img.classList.remove("active"));
    galleryImages[i].classList.add("active");
}

nextBtn.addEventListener("click", ()=>{
    galleryIndex++;
    if(galleryIndex >= galleryImages.length) galleryIndex = 0;
    showImage(galleryIndex);
});

prevBtn.addEventListener("click", ()=>{
    galleryIndex--;
    if(galleryIndex < 0) galleryIndex = galleryImages.length-1;
    showImage(galleryIndex);
});

showImage(galleryIndex);

document.querySelector(".menu-toggle").onclick = () =>{
document.querySelector(".nav-links").classList.toggle("show");
}

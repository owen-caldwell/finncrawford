let slideIndex = 0;
const dnum = document.querySelector(".dnum");
const dtotal = document.querySelector(".dtotal");
const dtitle = document.querySelector(".title");
showSlides();

function showSlides() {
  let ct;
  let slides = document.querySelector(".gallery").children;
  console.log(slides);
  for (ct = 0; ct < slides.length; ct++) {
    slides[ct].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "flex";
  dtotal.innerHTML = "0" + slides.length;
  dnum.innerHTML = "0" + slideIndex;
  setTimeout(showSlides, 5000);
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let ct;
  let slides = document.getElementsByClassName("slides");
  for (ct = 0; ct < slides.length; ct++) {
    slides[ct].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides, 5000);
}

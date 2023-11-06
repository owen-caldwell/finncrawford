const cimages = document.querySelector(".gallery");
const imgchildren = cimages.children;
const number = imgchildren.length;
function addEndMargin() {
  if (window.innerWidth >= 750) {
    imgchildren[number - 1].style.marginRight = "50em";
  }
  else if (window.innerWidth < 750) {
    imgchildren[number - 1].style.marginRight = "0";
  }
}
addEndMargin();
window.addEventListener('resize', addEndMargin);
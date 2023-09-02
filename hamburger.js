const index = document.querySelector(".index");
const feature = document.querySelector(".feature-gallery");
const hamburger = document.querySelector("#hamburger");
let open = false;
function toggleIndex() {
    if (open === false) {
        open = true;
        console.log("opening")
        index.style.display = "flex";
        feature.style.display = "none";
        hamburger.innerHTML = "(x)";
    } else {
        open = false;
        console.log("closing")
        index.style.display = "none";
        feature.style.display = "flex";
        hamburger.innerHTML = "(menu)";
    }
}
hamburger.addEventListener("click", toggleIndex);
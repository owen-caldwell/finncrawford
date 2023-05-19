let tg = true;
const menubtn = document.getElementById("menubtn");
const nav = document.querySelector("nav");
console.log("Hi! I'm running for the hamburger menu.");
function toggleNav() {
    if (tg) {
        console.log("Nav opening.");
        tg = false;
        nav.style.display = "block";
        menubtn.textContent = "(x)";
        // write code for when user clicks "menu"
        
    }
    else {
        console.log("Nav closing.");
        tg = true;
        nav.style.display = "none";
        menubtn.textContent = "(menu)";
        // write code for close button
    };
    
};

menubtn.addEventListener("click", toggleNav);
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("main").style.visibility = "hidden";
    }
    else {
        document.querySelector("main").style.visibility = "visible";
        document.querySelector(".loading-screen").style.display = "none";
    }
}
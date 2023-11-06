function stateChange() {
    console.log("running statechange");
    if (document.readyState !== "complete") {
        document.querySelector("main").style.visibility = "hidden";
    }
    else {
        document.querySelector("main").style.visibility = "visible";
        document.querySelector(".loading-screen").style.display = "none";
    }
  }
  document.onreadystatechange = setTimeout(stateChange, 2000);
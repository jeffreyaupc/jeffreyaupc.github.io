document.getElementById('btn-intro').addEventListener("click", function(){
    if (document.getElementById('section-container').style.visibility = "hidden"){
        document.getElementById('section-container').style.visibility = "visible";
        document.getElementById('section-container').style.opacity = 1;
        document.getElementById('btn-intro').style.display = "none";
    } else {
        document.getElementById('section-container').style.visibility = "hidden"
    }
})

document.getElementById('btn-close').addEventListener("click", function(){
    if (document.getElementById('section-container').style.visibility = "visible"){
        document.getElementById('section-container').style.visibility = "hidden";
        document.getElementById('section-container').style.opacity = 0;
        document.getElementById('btn-intro').style.display = "inline";
    } else {
        document.getElementById('section-container').style.visibility = "visible"
    }
})
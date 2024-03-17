function openPage() {
    window.open("react.html", "_blank");
}

let  openjsPage=()=>
 {
    window.open("js.html", "_blank");
}
document.querySelector('.back-button').addEventListener('click', () => {
    window.open("index.html", "_blank");
});
const p1Img = document.getElementById("p1-img");
p1Img.addEventListener("click", function() {  
    const link = "https://ttgame711.netlify.app";
    window.open(link, "_blank");
});
const p2Img = document.getElementById("p2-img");
p2Img.addEventListener("click", function() {  
    const link = "https://calculator711.netlify.app";
    window.open(link, "_blank");
});
const p3Img = document.getElementById("p3-img");
p3Img.addEventListener("click", function() {  
    const link = "https://github.com/Nikhil7112/project4";
    window.open(link, "_blank");
});
const p4Img = document.getElementById("p4-img");
p4Img.addEventListener("click", function() {  
    const link = "https://github.com/Nikhil7112/project3";
    window.open(link, "_blank");
});

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
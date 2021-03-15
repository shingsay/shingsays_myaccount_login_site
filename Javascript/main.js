/** Show and Hide Hamburger Links **/
function hamburgerClick() {
    var x = document.getElementById("hamburgerLinks");
    if (x.style.display === "block") {
     x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
/** Show and Hide Hamburger Links **/

/** function hamburgerClick() {
    var x = document.getElementById("hamburgerLinks");
    if (x.style.display === "block") {
     x.style.display = "none";
    } else {
     x.style.display = "block";
    }
}  **/

/** Hamburger Animation **/

/* const hamburgerMenu = document.querySelector('.hamburgerMenu');
let hamburgerOpen = false;
hamburgerMenu.addEventListener('click', () => {
    if(!hamburgerOpen) {
        hamburgerMenu.classList.add('open');
        hamburgerOpen = true;
    }   else {
        hamburgerMenu.classList.remove('open');
        hamburgerOpen = false;
    }
}); */



var nav = document.getElementById('access_nav'),
    body = document.body;

nav.addEventListener('click', function(e) {
    body.className = body.className? '' : 'with_nav';
    e.preventDefault();
});
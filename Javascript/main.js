/*** Open Hamburger ***/

var nav = document.getElementById('openNav'),
    body = document.body;

nav.addEventListener('click', function(e) {
    body.className = body.className? '' : 'with_nav';
    e.preventDefault();
});

/*** Validate Email ***/

function validate() {

var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
    if(email == "admin@example.com" && password == "password")
    {
        alert("Welcome admin@example.com!");
        return false;
    }
    else 
    {
        alert("Please enter correct credentials");
    }
    
}


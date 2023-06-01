//ADD SHADOW TO NAVBAR AFTER SCROLLING

window.addEventListener('scroll', function() {
    var navbar = document.getElementsByClassName('navBar')[0];
    if (window.scrollY > 0) {
      navbar.style.boxShadow = "var(--shadow)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
  


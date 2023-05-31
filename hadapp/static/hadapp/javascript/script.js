//ADD SHADOW TO NAVBAR AFTER SCROLLING

window.addEventListener('scroll', function() {
    var navbar = document.getElementsByClassName('navBar')[0];
    if (window.scrollY > 0) {
      navbar.style.boxShadow = "var(--shadow)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
  

//FUNCTION FOR THE LIGHT AND DARK THEME BUTTON

function setDarkModeCookie() {
    // Set a cookie that expires in 30 days
    const d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = "darkMode=true; " + expires + "; path=/";
  }
  
  function setLightModeCookie() {
    // Set a cookie that expires in 30 days
    const d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = "darkMode=false; " + expires + "; path=/";
  }

  const btnIcon = document.querySelector('.themeIcon')
  
  function checkDarkModeCookie() {
    const darkModeButton = document.querySelector('#themeTweak');
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf('darkMode=') == 0) {
        const isDarkMode = cookie.substring('darkMode='.length, cookie.length) == 'true';
        const body = document.querySelector('body');
        if (isDarkMode) {
          body.classList.add('darkMode');
          btnIcon.classList.add('fa-moon');
          btnIcon.classList.remove('fa-sun');
        } else {
          body.classList.remove('darkMode');
          btnIcon.classList.add('fa-sun');
          btnIcon.classList.remove('fa-moon');
        }
      }
    }
  }
  
  checkDarkModeCookie();
  
  const darkModeButton = document.querySelector('#themeTweak');
  darkModeButton.addEventListener('click', function() {
    const body = document.querySelector('body');
    if (body.classList.contains('darkMode')) {
      setLightModeCookie();
      body.classList.remove('darkMode');
      btnIcon.classList.add('fa-sun');
      btnIcon.classList.remove('fa-moon');
    } else {
      setDarkModeCookie();
      body.classList.add('darkMode');
      btnIcon.classList.add('fa-moon');
      btnIcon.classList.remove('fa-sun');
    }
  });


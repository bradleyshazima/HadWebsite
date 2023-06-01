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
          darkModeButton.innerHTML = "&#xe518";
        } else {
          body.classList.remove('darkMode');
          darkModeButton.innerHTML = "&#xe213";
        }
      }
    }
  }
  
  checkDarkModeCookie();
  
  const darkModeButton = document.getElementById('themeTweak');
  darkModeButton.addEventListener('click', () => {
    const body = document.querySelector('body');
    if (body.classList.contains('darkMode')) {
      setLightModeCookie();
      body.classList.remove('darkMode');
      darkModeButton.innerHTML = "&#xe213";
    } else {
      setDarkModeCookie();
      body.classList.add('darkMode');
      darkModeButton.innerHTML = "&#xe518";
    }
  });

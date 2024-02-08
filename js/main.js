document.addEventListener('DOMContentLoaded', function () {
  let navBar = document.querySelector('.navbar');
  let darkMode = document.querySelector('.dark-mode-icon');
  let body = document.body;
  let darkModeState = localStorage.getItem('darkModeState');

  // Check if dark mode is enabled
  if (darkModeState === 'enabled') {
    enableDarkMode();
  }

  // Toggle dark mode
  darkMode.addEventListener('click', () => {
    darkModeState = localStorage.getItem('darkModeState');
    if (darkModeState !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });

  // Enable dark mode
  function enableDarkMode() {
    navBar.classList.add('dark-nav');
    body.classList.add('dark-mode');
    localStorage.setItem('darkModeState', 'enabled');
  }

  // Disable dark mode
  function disableDarkMode() {
    navBar.classList.remove('dark-nav');
    body.classList.remove('dark-mode');
    localStorage.setItem('darkModeState', null);
  }
});

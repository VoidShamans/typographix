const themeSwitcher = document.getElementById("theme-switcher");

// Update Theme Icon & Text
function updateThemeIcon(isDarkMode) {
  themeSwitcher.children[0].textContent = isDarkMode
    ? "Dark Mode"
    : "Light Mode";
  themeSwitcher.children[1].classList.replace(
    isDarkMode ? "fa-sun" : "fa-moon",
    isDarkMode ? "fa-moon" : "fa-sun"
  );
}

// Determine if dark mode is prefered
function prefersDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

// Set the theme based on the preference
function setThemeBasedOnPreference() {
  const isDarkMode = prefersDarkMode();
  document.documentElement.setAttribute(
    "data-theme",
    isDarkMode ? "dark" : "light"
  );
  updateThemeIcon(isDarkMode);
}

// Switch Theme
function switchTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme === "dark");
}

// Event Listener
themeSwitcher.addEventListener("click", switchTheme);

// Check Local Storage For Theme
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme === "dark");
  } else {
    setThemeBasedOnPreference();
  }
}

// Listen for system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", setThemeBasedOnPreference);

//Initialize theme when the script loads
initializeTheme;

// Navigation-------------------------------------

const nav = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");
}

function hideMenu() {
  nav.classList.remove("active");
  menuIcon.classList.remove("active");
}

const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme from localStorage if available
if (currentTheme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(currentTheme);
}
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
});


// Toggle between light-mode and dark-mode
themeToggle.addEventListener('click', function () {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeToggle.textContent = '🌞';  // Change the icon to a sun for light mode
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        themeToggle.textContent = '🌙';  // Change the icon to a moon for dark mode
    }
});

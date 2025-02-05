window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.add('show');
            setTimeout(() => document.querySelector('.arrow-link').classList.add('show'), 300);
            setTimeout(() => document.getElementById('profile').classList.add('show'), 600);
            setTimeout(() => document.getElementById('name').classList.add('show'), 900);
            setTimeout(() => document.getElementById('bio').classList.add('show'), 1200);
            setTimeout(() => document.getElementById('whatsapp-link').classList.add('show'), 1500);
            setTimeout(() => document.getElementById('linkedin-link').classList.add('show'), 1800);
            setTimeout(() => document.getElementById('email-link').classList.add('show'), 2100);
            setTimeout(() => document.getElementById('toggle-rgb').classList.add('show'), 2400);
        }, 500);
    }, 2000);
    const toggleRgbButton = document.getElementById('toggle-rgb');
    const profile = document.querySelector('.profile');
    if (toggleRgbButton && profile) {
        toggleRgbButton.addEventListener('click', () => {
            profile.classList.toggle('no-rgb');
            toggleRgbButton.textContent = profile.classList.contains('no-rgb') ? 'Ligar RGB' : 'Desligar RGB';
        });
    }
});

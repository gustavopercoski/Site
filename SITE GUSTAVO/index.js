window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const container = document.querySelector('.container');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.4s ease';
    }, 3000);
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        container.classList.add('loaded');
        document.body.style.overflow = 'auto';
    }, 3400);
});
const toggleButton = document.getElementById('toggle-rgb');
const animatedText = document.querySelector('h1.animated-text');
const gifImage = document.querySelector('.gif-image');
const profileImg = document.querySelector('.profile-img');
let rgbEnabled = true;
if (animatedText) animatedText.style.animation = 'gradientBG 3s linear infinite';
if (profileImg) profileImg.style.animation = 'rgbBorda 3s ease-in-out infinite';
if (toggleButton) toggleButton.textContent = 'Desligar Efeitos';
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        if (rgbEnabled) {
            if (animatedText) animatedText.style.animation = 'none';
            if (profileImg) profileImg.style.animation = 'none';
            if (gifImage) gifImage.style.visibility = 'hidden';
            toggleButton.textContent = 'Ligar Efeitos';
        } else {
            if (animatedText) animatedText.style.animation = 'gradientBG 3s linear infinite';
            if (profileImg) profileImg.style.animation = 'rgbBorda 3s ease-in-out infinite';
            if (gifImage) gifImage.style.visibility = 'visible';
            toggleButton.textContent = 'Desligar Efeitos';
        }
        rgbEnabled = !rgbEnabled;
    });
}
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => myObserver.observe(element));
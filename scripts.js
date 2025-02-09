document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enterBtn');
    const menuBox = document.getElementById('menuBox');
    const infoBox = document.getElementById('infoBox');
    const infoBtn = document.getElementById('infoBtn');
    const backBtn = document.getElementById('backBtn');
    const bgMusic = document.getElementById('bgMusic');
    const infoContent = document.querySelector('.info-content');

    enterBtn.addEventListener('click', () => {
        enterBtn.classList.add('hidden');
        menuBox.classList.remove('hidden');
        bgMusic.play();
    });

    infoBtn.addEventListener('click', () => {
        menuBox.classList.add('hidden');
        infoBox.classList.remove('hidden');
        setTimeout(() => {
            infoContent.classList.add('visible');
        }, 100);
    });

    backBtn.addEventListener('click', () => {
        infoContent.classList.remove('visible');
        setTimeout(() => {
            infoBox.classList.add('hidden');
            menuBox.classList.remove('hidden');
        }, 500);
    });
});
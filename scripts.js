document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enterBtn');
    const menuBox = document.getElementById('menuBox');
    const infoBox = document.getElementById('infoBox');
    const donateBox = document.getElementById('donateBox');
    const infoBtn = document.getElementById('infoBtn');
    const donateBtn = document.getElementById('donateBtn');
    const backBtnInfo = document.getElementById('backBtnInfo');
    const backBtnDonate = document.getElementById('backBtnDonate');
    const bgMusic = document.getElementById('bgMusic');
    const infoContent = document.querySelector('.info-content');
    const donateContent = document.querySelector('.donate-content');

    // Matrix effect
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()';
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(26, 27, 38, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#7aa2f7';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    // Transition helper function
    const transitionBetweenElements = (hideElement, showElement) => {
        hideElement.classList.remove('visible');
        
        setTimeout(() => {
            hideElement.classList.add('hidden');
            showElement.classList.remove('hidden');
            
            requestAnimationFrame(() => {
                showElement.classList.add('visible');
            });
        }, 300);
    };

    // Button event listeners
    enterBtn.addEventListener('click', () => {
        enterBtn.style.transition = 'opacity 0.3s ease';
        enterBtn.style.opacity = '0';
        
        setTimeout(() => {
            enterBtn.classList.add('hidden');
            menuBox.classList.remove('hidden');
            
            requestAnimationFrame(() => {
                menuBox.classList.add('visible');
            });
            
            bgMusic.play();
        }, 300);
    });

    infoBtn.addEventListener('click', () => {
        transitionBetweenElements(menuBox, infoBox);
        setTimeout(() => {
            infoContent.classList.add('visible');
        }, 100);
    });

    donateBtn.addEventListener('click', () => {
        transitionBetweenElements(menuBox, donateBox);
        setTimeout(() => {
            donateContent.classList.add('visible');
        }, 100);
    });

    backBtnInfo.addEventListener('click', () => {
        infoContent.classList.remove('visible');
        setTimeout(() => {
            transitionBetweenElements(infoBox, menuBox);
        }, 300);
    });

    backBtnDonate.addEventListener('click', () => {
        donateContent.classList.remove('visible');
        setTimeout(() => {
            transitionBetweenElements(donateBox, menuBox);
        }, 300);
    });

    // Start Matrix animation
    setInterval(drawMatrix, 33);

    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
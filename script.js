document.addEventListener('DOMContentLoaded', function() {
    const enterBtn = document.getElementById('enter-btn');
    const enterScreen = document.getElementById('enter-screen');
    const content = document.getElementById('content');
    const image = document.getElementById('movable-image');
    
    // Create audio element
    const audio = new Audio();
    audio.src = 'song.mp3';
    
    enterBtn.addEventListener('click', function() {
        audio.play()
        
        enterScreen.classList.add('fade-out');
        
        content.classList.remove('hidden');
        
        setTimeout(() => {
            content.classList.add('fade-in');
        }, 500);
        
        setTimeout(() => {
            enterScreen.classList.add('hidden');
        }, 1500);
    });
    
    content.addEventListener('mousemove', function(e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        image.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    content.addEventListener('mouseleave', function() {
        image.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});
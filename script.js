// script.js

// Function to generate heart rain
function createLoveRain() {
    const container = document.getElementById('rain-container');

    // Create a number of heart drops
    for (let i = 0; i < 50; i++) {
        const loveDrop = document.createElement('div');
        loveDrop.classList.add('love-drop');
        loveDrop.style.left = `${Math.random() * 100}%`;
        loveDrop.style.animationDuration = `${Math.random() * 2 + 2}s`; // Random duration between 2s and 4s
        loveDrop.style.animationDelay = `${Math.random() * 2}s`; // Random delay for staggered fall
        container.appendChild(loveDrop);
    }
}

// Call the function to start the love rain
window.onload = createLoveRain;

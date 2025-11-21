/* --- Particle System for Header Texture --- */
class Particle {
    constructor(canvas, color) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.color = color;
        this.reset();
    }
    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.opacitySpeed = (Math.random() - 0.5) * 0.01;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += this.opacitySpeed;
        if (this.opacity <= 0.1 || this.opacity >= 0.6) this.opacitySpeed = -this.opacitySpeed;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.x > this.canvas.width) this.x = 0;
        if (this.y < 0) this.y = this.canvas.height;
        if (this.y > this.canvas.height) this.y = 0;
    }
    draw() {
        this.ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }
}

class ParticleSystem {
    constructor(canvasId, rgbColor) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.rgbColor = rgbColor;
        this.particles = [];
        this.particleCount = 60;
        this.resize();
        window.addEventListener('resize', () => this.resize());
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(new Particle(this.canvas, this.rgbColor));
        }
        this.animate();
    }
    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem('canvas-red', '255, 59, 59');
    new ParticleSystem('canvas-green', '0, 210, 106');

    initCursorAndTilt();
});

/* --- Cursor & Split Interaction Logic --- */
function initCursorAndTilt() {
    const cursor = document.getElementById('cursor');
    const redCard = document.getElementById('card-red');
    const greenCard = document.getElementById('card-green');

    // Use requestAnimationFrame for smooth UI updates
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Move custom cursor
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';

        handleTilt(mouseX, mouseY);
    });

    // Cursor hover states
    const interactiveElements = document.querySelectorAll('a, .card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });

    function handleTilt(x, y) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const midPoint = windowWidth / 2;

        // Common vertical tilt calculation based on screen center
        const yAxis = (windowHeight / 2 - y) / 20;

        if (x < midPoint) {
            // --- Left Side: Active Red Card ---
            // Calculate rotation relative to left zone center (approx 25% width)
            const leftZoneCenter = windowWidth * 0.25;
            const xAxis = -(leftZoneCenter - x) / 20;

            // Apply to Red
            redCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.02)`;

            // Reset Green
            greenCard.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
        } else {
            // --- Right Side: Active Green Card ---
            // Calculate rotation relative to right zone center (approx 75% width)
            const rightZoneCenter = windowWidth * 0.75;
            const xAxis = -(rightZoneCenter - x) / 20;

            // Apply to Green
            greenCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.02)`;

            // Reset Red
            redCard.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
        }
    }
}
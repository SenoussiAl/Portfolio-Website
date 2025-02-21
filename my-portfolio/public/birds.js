const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the canvas to be behind other content
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1'; // Ensure it's behind other content

const birds = [];
const birdCount = 20;

class Bird {
   constructor() {
       this.x = Math.random() * canvas.width;
       this.y = Math.random() * canvas.height;
       this.dx = (Math.random() - 0.5) * 4;
       this.dy = (Math.random() - 0.5) * 4;
       this.size = Math.random() * 10 + 5;
   }

   draw() {
       ctx.beginPath();
       ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
       ctx.fillStyle = '#6A5ACD'; // Purple color
       ctx.fill();
       ctx.closePath();
   }

   update() {
       if (this.x + this.size > canvas.width || this.x - this.size < 0) {
           this.dx = -this.dx;
       }
       if (this.y + this.size > canvas.height || this.y - this.size < 0) {
           this.dy = -this.dy;
       }
       this.x += this.dx;
       this.y += this.dy;
       this.draw();
   }
}

function init() {
   for (let i = 0; i < birdCount; i++) {
       birds.push(new Bird());
   }
}

function animate() {
   requestAnimationFrame(animate);
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   birds.forEach(bird => bird.update());
}

init();
animate();

window.addEventListener('resize', () => {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
});
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');


const colors = ['234, 196, 53', '23, 126, 137', '3, 206, 164', '251, 77, 61', '202, 21, 81, 1', '95, 173, 86', '165, 28, 48', '155, 40, 123'];
const neon = ['fuchsia', 'lime', 'red', 'yellow', 'blue'];
const colors2 = ['255, 239, 14', '34, 116, 165', '247, 92, 3', '217, 3, 104', '0, 204, 102', '249, 224, 0', '255, 239, 14', '255, 239, 14', '255, 239, 14', '255, 239, 14', '249, 224, 0'];



let mouse = {
  x: undefined,
  y: undefined
}
const sparkleArray = [];
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  


for(let i = 0; i < 1; i++) {
  // let x = 75;
  // let y = 75;
  let x = mouse.x;
  let y = mouse.y;
  let dx = Math.ceil((Math.random() - 0.5) * 5);
  let dy = Math.ceil((Math.random() - 0.5) * 5);
  let opacity = 1;
  let dopactiy = .1;

  let colorIndex = Math.floor(Math.random() * colors.length);
  let color = colors2[colorIndex];
  sparkleArray.push(new Sparkle(x, y, dx, dy, opacity, .1, color));
}
  
})

function Sparkle(x, y, dx, dy, opacity, dopacity, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.opacity = opacity;
  this.dopacity = dopacity;
  this.color = color;
  this.count = 0;
  
  this.draw = function() {
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.quadraticCurveTo(this.x-10, this.y, this.x-10, this.y+15);
    c.quadraticCurveTo(this.x-10, this.y, this.x-20, this.y);
    c.quadraticCurveTo(this.x-10, this.y, this.x-10, this.y-15);
    c.quadraticCurveTo(this.x-10, this.y, this.x, this.y);
    c.strokeStyle = `rgba(255,255,255,${this.opacity})`;
    c.fillStyle = `rgba(${this.color},${this.opacity})`;
    c.lineWidth = 3;
    c.stroke();
    c.fill();
  }
  
  this.update = function() {
//     if((this.x > this.x + 50 || this.x < this.x - 50) && (this.y > this.y + 50 || this.y < this.y + 50)) {

//       this.opacity -= this.dopacity;
      
//     }
    if(this.count > 30) {
      this.opacity -= this.dopacity;
    }
    
    this.x += this.dx;

    this.y += this.dy;
    this.count += 1;
    this.draw();
  }
}








function animate() {
  
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  
  
  for(let i = 0; i < sparkleArray.length; i++) {
    sparkleArray[i].update();
  }
  sparkleArray = [];
  
}

animate();
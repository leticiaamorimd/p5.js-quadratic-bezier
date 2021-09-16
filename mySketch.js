let p0, p1
function setup() {
  createCanvas(800, 800);
  p0 = new Particle(0, 300);
  p1 = new Particle(800, 300);
  p2 = new Particle(400, 400);
  p3 = new Particle(600, 600)
}

function draw() {
  background(0);
  stroke(250)
  strokeWeight(2);
  noFill()
  
  let delta = 0.04
  colorMode(0, 17, 200, 500);
   
  beginShape()
  for (let t=0; t <= 1.001; t += delta) {
   
      
    //line(x1, y1, x2, y2)
    stroke(t*360, 255,255, 2300, 0.5);
    let v = cubic(p0,p1,p2,p3, t);
  vertex(v.x, v.y);
  }
  
  
  p1.update(); //link to function update, responsible for move
  p2.update();
 
   endShape();   
    }

  function cubic(p0,p1,p2,p3, t) {
    let v1 = quadratic(p0, p1, p2, t);
    let v2 = quadratic(p1, p2, p3, t);
    
    let x = lerp(v1.x, v2.x, t)
    let y = lerp(v1.y, v2.y, t)
    
    line(v1.x, v1.y, v2.x, v2.y);
    return createVector(x, y)
  }
  
  

function quadratic(p0,p1,p2, t) {
   let x1 = lerp(p0.x, p1.x, t);
    let y1 = lerp(p0.y, p1.y, t);
    let x2 = lerp(p1.x, p2.x, t); 
    let y2 = lerp(p1.y, p2.x, t);
  
    
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);
    line(x1, y1, x2, y2)
      return createVector(x, y)
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    
    this.dx = random(-3, 3);
    this.dy = random(-3, 3);
  }
  
   update(){
    this.x += this.dx;
     this.y += this.dy;
     
     if(this.x >= width || this.x <0) {
       this.dx *= -1;
     }
     
     if(this.y >= height || this.y < 0){
       this.dy *=-1;
     }
   }
}
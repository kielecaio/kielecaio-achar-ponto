let x;
let y

function setup() {
  createCanvas(400, 400);
 x = random(400)
 x = int(x)
 y = random(400)
 y = int(y)
}

function draw() {
    background(220);
    let distanciaX;
    let distanciaY;
    let distancia;
    distanciaX = mouseX - x;
    distanciaY = mouseY - y;
    distancia = sqrt(distanciaX*distanciaX + distanciaX*distanciaX);
    circle(mouseX,mouseY,distancia);
  
  if (distancia < 3) {
        text('Encontrei!', 200, 200);
        noLoop();
    }
  
  
  
}
let myCanvas;
// x, y, v_x, v_y değişkenleri, önizleme için gerekliler.
let x = 0,
  y = 0,
  v_x = 0,
  v_y = 0,
  r = 30;
let balls = [];
let time = 0.1;

p5.disableFriendlyErrors = true;
function setup() {
  myCanvas = createCanvas(windowWidth * .9, windowHeight);
  //myCanvas = createCanvas(800, 600);
  //frameRate(30);
}
function draw() {
 
  background(255);
  let fps = frameRate();
  fill(255);
  stroke(0);
  textSize(32);
  text("FPS: " + fps.toFixed(2), 10, height - 10);
  text("top sayısı: " + balls.length, 10, height -50)
  noStroke();
  for (var i = 0; i < balls.length; i++) {
    if (balls[i].toBeDeleted == true) {
      balls.splice(i, 1);
      continue;
    }
    //balls[i].applyForce(0, 10 * balls[i].mass);
    balls[i].applyMagneticField(10);
    balls[i].update();
    balls[i].show();
  }
  previewBall();
}


function mouseReleased() {
  if (v_x == 0 && v_y == 0) return;
  // console.log("Fırlattım: " + v_x + ", " + v_y);
  balls.push(new Ball(x, y, v_x, v_y, r))
}

function mouseWheel(event) {
  print(event.delta);
  // move the square according to the vertical scroll amount
  r *= Math.pow(1.005, event.delta);
  // uncomment to block page scrolling
  return false;
}
class Ball {

    constructor(x, y, v_x, v_y, r) {
      this.x = x;
      this.y = y;
      this.v_x = v_x;
      this.v_y = v_y;
      this.f_x = 0;
      this.f_y = 0;
      this.a_x = 0;
      this.a_y = 0;
      this.mass = r;
      this.toBeDeleted = false;
      this.r = Math.floor(Math.random()*255);
      this.g = Math.floor(Math.random()*255);
      this.b = Math.floor(Math.random()*255);
      this.alpha = Math.floor(Math.random()*100+155);
    }
  
    applyForce(f_x, f_y) {
      this.f_x = f_x;
      this.f_y = f_y;
    }

    applyMagneticField(b_z){
      // F = q BxV (yükü şimdilik yoksay)
      // 
      // b_z sayfa düzleminden dışarı pozitif olsun.
      // o zaman sağ el kuralından v vektörünün saatin tersi yönünde 90 derece dönmesi gerekir kuvvetin yönü için

      // yeni x = eski y
      // yeni y = - eski x

      this.f_x = b_z * this.v_y
      this.f_y = b_z * this.v_x
    }
  
    update() {
      this.a_y = this.f_y / this.mass;
      this.a_x = this.f_x / this.mass;
      this.v_y -= this.a_y * time;
      this.v_x += this.a_x * time;
      this.y -= this.v_y * time;
      this.x += this.v_x * time;
      this.toBeDeleted = ballIsGone(this);
    }
    show() {
      //noStroke();
      fill(this.r, this.g, this.b);
      circle(this.x, this.y, this.mass);
    }
  }
  
  function ballIsGone(b) {
    // ekranın üst ve altından çıkmışsa
    if (b.y < -b.mass || b.y > height + b.mass) return true;
    // ekranın yanlarından çıkmışsa
    if (b.x < -b.mass || b.x > width + b.mass) return true;
  
    return false;
  }
  
  function previewBall() {
    if (!mouseIsPressed) {
      x = mouseX;
      y = mouseY;
    }
    circle(x, y, r);
  
    v_x = x - mouseX;
    v_y = mouseY - y;
    let force = createVector(v_x, v_y);
    translate(x, y);
    force.show();
    translate(-x, -y);
  }
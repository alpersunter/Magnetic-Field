p5.Vector.prototype.show = (function(){
    stroke(50,200,255,230);
    strokeWeight(3);
    fill(50,200,255,230);
    arrow(this, false);
});

function arrow(vector_2d, isStroke){
    let L = vector_2d.mag();
    push();
        rotate(-vector_2d.heading());
        let x_tri = L*0.6;
        line(0,0, x_tri, 0);
        let y_tri = (L-x_tri)/1.71;
        if (!isStroke) noStroke();
        triangle(x_tri, y_tri, x_tri, -y_tri, L, 0)
    pop();
}
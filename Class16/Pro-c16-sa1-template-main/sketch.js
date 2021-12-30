
var box1;
var box2

function setup() {
  createCanvas(600, 400);
   box1 = new Box()
   box2 = new Box()
}

function draw() {
  background(220);
box1.show()
box1.set_width(20)
box1.set_velocity(2)

box2.show()
box2.set_width(60)
box2.set_velocity(0.5)
}


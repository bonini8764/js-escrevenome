function setup() {
    createCanvas(400, 400);
    background ("#FFC107")
  }
  
  function draw() {
     stroke ("red")
     fill("pink");
    
    
    
    if (mouseIsPressed) { 
      rect(mouseX, mouseY,2,5);
    }
  }
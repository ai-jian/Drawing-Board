/* ONE STROKE FREE HAND FEELING DRAWING BOARD

- Click the button to try three different brushes.
- The sizes of rectangle and ellipse can be changed by  moving speed.

- Right click -> change brush color to black and white. 
- Press RETURN -> change background color.
- Press "S" -> save your drawing.


*/


let cc = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255);
  background(255, 212, 226);
}

function draw() {

  //menu
  let m = random(225);
  rectMode(CENTER);
  strokeWeight(2);
  stroke(100, 100, m);
  noFill();

  //interface
  noFill(0);
  stroke(255, 134, 174, 100);
  //rect(300,30,160,50,5);
  rect(300, 30, 20, 20, 5);
  rect(350, 30, 20, 20, 5);
  rect(250, 30, 20, 20, 5);

  //button
  rect(300, 30, 10, 10);

  ellipse(350, 30, 12, 12);


  line(250, 25, 250, 36);
  line(245, 30, 255, 30);





  //button
  if (mouseY >= 20 && mouseY <= 50 && mouseIsPressed === true) {

    if (mouseX >= 270 && mouseX <= 330)
      cc = 1; // rect

    else if (mouseX >= 330 && mouseX <= 400)
      cc = 2; // ellipse

    else if (mouseX >= 200 && mouseX <= 270)
      cc = 3; // 

  }

  // rect
  if (cc == 1) {
    let m = random(225);
    fill(200, 0, m);
    stroke(100, 100, 225);
    strokeWeight(4);
    rect(300, 30, 10, 10);

    variableRect(mouseX, mouseY, pmouseX, pmouseY);

    function variableRect(x, y, px, py) {
      let speed = abs(x - px) + abs(y - py);
      let m = random(255);
      fill(255, m, 125, 200);
      stroke(2, 15, 225);

      strokeWeight(speed / 10);
      rect(x, y, speed, speed);
    }
    if (mouseIsPressed) {
      variableRect(mouseX, mouseY, pmouseX, pmouseY);

      function variableRect(x, y, px, py) {
        let speed = abs(x - px) + abs(y - py);
        fill(255);
        stroke(25);

        strokeWeight(speed / 10);
        rect(x, y, speed, speed);
      }

    }

  } else {
    noFill();
    stroke(0);
    strokeWeight(0);
    rect(300, 30, 10, 10);

  }

  //ellipse
  if (cc == 2) {
    let m = random(225);
    fill(0, m, 20);
    stroke(100, 100, 225);
    strokeWeight(4);
    ellipse(350, 30, 12, 12);

    variableEllipse(mouseX, mouseY, pmouseX, pmouseY);

    function variableEllipse(x, y, px, py) {
      let speed = abs(x - px) + abs(y - py);
      let m = random(255);
      fill(0, m, 160, 200);
      stroke(225, 150, 170);
      strokeWeight(speed / 10);
      ellipse(x, y, speed, speed);
    }

    if (mouseIsPressed) {
      variableEllipse(mouseX, mouseY, pmouseX, pmouseY);

      function variableEllipse(x, y, px, py) {
        let speed = abs(x - px) + abs(y - py);
        fill(255);
        stroke(25);
        strokeWeight(speed / 10);
        ellipse(x, y, speed, speed);
      }
    }

  } else {
    noFill();
    noStroke(200, 200, 0);
    strokeWeight(2);
    ellipse(75, 30, 30, 30);
  }




  //x
  if (cc == 3) {
    let m = random(255);
    stroke((2 * frameCount) % 300, m, 190, m);
    line(250, 25, 250, 36);
    line(245, 30, 255, 30);

    if (mouseIsPressed) {
      stroke(25);
      line(mouseX - 10, mouseY, mouseX + 10, mouseY);
      line(mouseX, mouseY - 10, mouseX, mouseY + 10);

    } else {
      let m = random(255);
      stroke((2 * frameCount) % 300, m, 190, 200);
    }
    line(mouseX - 10, mouseY, mouseX + 10, mouseY);
    line(mouseX, mouseY - 10, mouseX, mouseY + 10);

  } else {
    noStroke(200, 200, 0);
    strokeWeight(2);
    line(250, 25, 250, 36);
    line(245, 30, 255, 30);

  }

}






//clean up
function keyPressed() {
  if (keyCode === RETURN) {
    background((2 * frameCount) % 255, random(100, 155), random(155, 255));
  }
}

//save and download the drawing
function keyTyped() {
  if (key === 's') {
    save('drawing');
  }

}

//responsive sizes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 212, 226);

}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Use degrees for angles
}

function draw() {
  background(0); // Black background
  
  translate(width / 2, height / 2); // Move origin to center of canvas
  rotate(-90); // Rotate so 0 degrees is at the top

  let h = hour();
  let m = minute();
  let s = second();

  // Draw clock face
  strokeWeight(8);
  noFill();
  stroke(255);
  ellipse(0, 0, 300); // Outer circle for the clock face

  // Draw hour hand
  strokeWeight(8);
  stroke(255);
  let hourAngle = map(h % 12, 0, 12, 0, 360);
  line(0, 0, 80 * cos(hourAngle), 80 * sin(hourAngle));

  // Draw minute hand
  strokeWeight(6);
  stroke(255);
  let minuteAngle = map(m, 0, 60, 0, 360);
  line(0, 0, 120 * cos(minuteAngle), 120 * sin(minuteAngle));

  // Draw second hand
  strokeWeight(4);
  stroke(255, 0, 0); // Red color for the second hand
  let secondAngle = map(s, 0, 60, 0, 360);
  line(0, 0, 140 * cos(secondAngle), 140 * sin(secondAngle));

  // Draw clock ticks
  strokeWeight(2);
  for (let i = 0; i < 60; i++) {
    let angle = map(i, 0, 60, 0, 360);
    let x1 = 150 * cos(angle);
    let y1 = 150 * sin(angle);
    let x2 = 160 * cos(angle);
    let y2 = 160 * sin(angle);
    stroke(255);
    line(x1, y1, x2, y2);
  }

  // Draw numbers
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(255);
  noStroke();
  for (let i = 1; i <= 12; i++) {
    let angle = map(i, 0, 12, 0, 360);
    let x = 130 * cos(angle);
    let y = 130 * sin(angle);
    text(i, x, y);
  }

  // Draw digital time
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  noStroke();
  text(
    nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2),
    0, // X position
    180 // Y position
  );
}

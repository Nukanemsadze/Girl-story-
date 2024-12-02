 var saba=0;


//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
   background(240,130,167);// baby pink
}

//The draw function happens over and over again
function draw() {

  stroke(200,300,200);// pink
  strokeWeight(3);
  fill(255,saba,255,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,random(height),saba,130); // center of canvas, 20px dia
  
  fill(200,random (130,255),164,mouseY);
  ellipse(mouseX,mouseY,50,50);
  rect(200,130,50,50);
  fill (150,140,100);
  stroke (255,255,255);
  strokeWeight(5);
textFont ("Helvetica");
textSize (60);
text( 'Life Is Perfect!',40,230);

}
function mousePressed() {
  if (saba>=500) {
    saba=0;
  }else{
    saba=saba+5;
  }


}
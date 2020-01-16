 void setup()
 {
 size (600, 600); // screen size to 600 by 600 pixels
 }

 // draw function to constantly draw the squares
 void draw() {

 background (255, 255, 255); // makes background white
 fill (100, 171, 227); // makes fill color blue
 noStroke(); // ensures no shape outlines

 // draws large center square
 rect (200.0, 200.0, 200, 200);
 
 // values of s and t to calculate square offsets
 float s = 300 - mouseX;
 float t = 300 - mouseY;

 // calls drawSquare function to draw the moving squares
 drawSquare(300.0, 300.0, s, t, 100.0, 0);
 
 }
 
 // recursive function that draws squares based on a center point, s 
 // and t values, side length, and a count of how many times the function has been called
 void drawSquare(float centerX, float centerY, float newS, float newT, float sideL, int count) {
   // Changes the fill color of the square based on their level of depth (calculated
   // by count value)
   if (count < 4) {
     if (count == 0) {
       fill (146, 196, 238);
     } else if (count == 1) {
       fill (187, 219, 247);
     } else if (count == 2) {
       fill (246, 227, 212);
     } else if (count == 3) {
       fill (253, 216, 181);
     } else if (count == 4) {
       fill (249, 209, 153);
     }
     
     // increments count
     count++;
     
     // draws 4 subsquares (surrounding squares)
     rect (centerX + newT - sideL/2, centerY - newS - sideL/2, sideL, sideL);
     rect (centerX + newS - sideL/2, centerY + newT - sideL/2, sideL, sideL);
     rect (centerX - newT - sideL/2, centerY + newS - sideL/2, sideL, sideL);
     rect (centerX - newS - sideL/2, centerY - newT - sideL/2, sideL, sideL); 
     
     // calls drawSquare on new subsquares 
     drawSquare (centerX - newS, centerY - newT, newS/2, newT/2, sideL/2, count);
     drawSquare (centerX + newT, centerY - newS, newS/2, newT/2, sideL/2, count);
     drawSquare (centerX + newS, centerY + newT, newS/2, newT/2, sideL/2, count);
     drawSquare (centerX - newT, centerY + newS, newS/2, newT/2, sideL/2, count);
   }
 }

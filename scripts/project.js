var slideIndex = 0;
var slideIndexv2 = 0;
var slideIndexv3 = 0;
var slideIndexv4 = 0;
var slideIndexv5 = 0;
showSlides();
showSlides2();
showSlides3();
showSlides4();
showSlides5();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2500);
}

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mayaSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndexv2++;
  if (slideIndexv2 > slides.length) {slideIndexv2 = 1}    
  slides[slideIndexv2-1].style.display = "block";  
  setTimeout(showSlides2, 2500);
}

function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("GBA");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndexv3++;
  if (slideIndexv3 > slides.length) {slideIndexv3 = 1}    
  slides[slideIndexv3-1].style.display = "block";  
  setTimeout(showSlides3, 2500);
}

function showSlides4() {
  var i;
  var slides = document.getElementsByClassName("ray");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndexv4++;
  if (slideIndexv4 > slides.length) {slideIndexv4 = 1}    
  slides[slideIndexv4-1].style.display = "block";  
  setTimeout(showSlides4, 2500);
}

function showSlides5() {
  var i;
  var slides = document.getElementsByClassName("patch");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndexv5++;
  if (slideIndexv5 > slides.length) {slideIndexv5 = 1}    
  slides[slideIndexv5-1].style.display = "block";  
  setTimeout(showSlides5, 2500);
}

//refrence: https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 0;
var slideIndexv2 = 0;
var slideIndexv3 = 0;
showSlides();
showSlides2();
showSlides3();

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

//refrence: https://www.w3schools.com/howto/howto_js_slideshow.asp


function myFunction0() {
  var x = document.getElementById("myDIV0");
  if (x.innerHTML === "Cat") {
    x.innerHTML = "Kot";
  } else {
    x.innerHTML = "Cat";
  }
}


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Dog") {
    x.innerHTML = "Pies";
  } else {
    x.innerHTML = "Dog";
  }
}



function myFunction2() {
  var x = document.getElementById("myDIV2");
  if (x.innerHTML === "Hamster") {
    x.innerHTML = "Chomik";
  } else {
    x.innerHTML = "Hamster";
  }
}

function myFunction3() {
  var x = document.getElementById("myDIV3");
  if (x.innerHTML === "Bear") {
    x.innerHTML = "Niedźwiedź";
  } else {
    x.innerHTML = "Bear";
  }
}

function myFunction4() {
  var x = document.getElementById("myDIV4");
  if (x.innerHTML === "Horse") {
    x.innerHTML = "Koń";
  } else {
    x.innerHTML = "Horse";
  }
}


function myFunction5() {
  var x = document.getElementById("myDIV5");
  if (x.innerHTML === "Monkey") {
    x.innerHTML = "Małpa";
  } else {
    x.innerHTML = "Monkey";
  }
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





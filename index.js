

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



function correctFunction() {
  document.getElementById("correct").style.backgroundColor = "green";
}

function wrongFunction() {
  document.getElementById("wrong").style.backgroundColor = "red";
}


function correctFunction2() {
  document.getElementById("correct2").style.backgroundColor = "green";
}

function wrongFunction2() {
  document.getElementById("wrong2").style.backgroundColor = "red";
}


function correctFunction3() {
  document.getElementById("correct3").style.backgroundColor = "green";
}

function wrongFunction3() {
  document.getElementById("wrong3").style.backgroundColor = "red";
}

function correctFunction4() {
  document.getElementById("correct4").style.backgroundColor = "green";
}

function wrongFunction4() {
  document.getElementById("wrong4").style.backgroundColor = "red";
}


function correctFunction5() {
  document.getElementById("correct5").style.backgroundColor = "green";
}

function wrongFunction5() {
  document.getElementById("wrong5").style.backgroundColor = "red";
}



function correctFunction6() {
  document.getElementById("correct6").style.backgroundColor = "green";
}

function wrongFunction6() {
  document.getElementById("wrong6").style.backgroundColor = "red";
}


function correctFunction7() {
  document.getElementById("correct7").style.backgroundColor = "green";
}

function wrongFunction7() {
  document.getElementById("wrong7").style.backgroundColor = "red";
}


function correctFunction8() {
  document.getElementById("correct8").style.backgroundColor = "green";
}

function wrongFunction8() {
  document.getElementById("wrong8").style.backgroundColor = "red";
}







function correctFunction9() {
  document.getElementById("correct9").style.backgroundColor = "green";
}

function wrongFunction9() {
  document.getElementById("wrong9").style.backgroundColor = "red";
}




function correctFunction10() {
  document.getElementById("correct10").style.backgroundColor = "green";
}

function wrongFunction10() {
  document.getElementById("wrong10").style.backgroundColor = "red";
}



function correctFunction11() {
  document.getElementById("correct11").style.backgroundColor = "green";
}

function wrongFunction11() {
  document.getElementById("wrong11").style.backgroundColor = "red";
}


function correctFunction12() {
  document.getElementById("correct12").style.backgroundColor = "green";
}

function wrongFunction12() {
  document.getElementById("wrong12").style.backgroundColor = "red";
}




function makeSound(){
    naviagtor.notification.beep(1);
}

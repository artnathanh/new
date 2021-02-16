var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = 0;
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.opacity = 1;
  setTimeout(carousel, 10000); // Change image every 2 seconds
}
$("#slideshow > div:gt(0)").hide();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let slides = document.querySelectorAll(".mySlides");
  let dot = document.querySelectorAll(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  let arr = Array.from(slides);
  arr.map((item) => {
    item.style.display = "none";
  });

  let arr2 = Array.from(dot);
  arr2.map((itm) => {
    itm.className = itm.className.replace(" active", "");
  });
  slides[slideIndex - 1].style.display = "block";
  dot[slideIndex - 1].className += " active";
}

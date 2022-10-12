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
  let dots = document.querySelectorAll(".dot");

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

  let arr2 = Array.from(dots);
  arr2.map((itm) => {
    itm.className = itm.className.replace(" active", "");
  });
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* 
const slides = document.querySelectorAll('.mySlides')
const dots = document.querySelectorAll('.dot')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let slideIndex = 0

function showSlides (newIndex) {
  slideIndex = (slides.length + newIndex) % slides.length

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideIndex)
  })

  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? 'block' : 'none'
  })

  slides[slideIndex].scrollIntoView(true)
}

prev.addEventListener('click', () => {
  showSlides(slideIndex - 1)
})

next.addEventListener('click', () => {
  showSlides(slideIndex + 1)
})

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlides(index)
  })
})

showSlides(0)

*/

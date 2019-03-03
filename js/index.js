
window.addEventListener('scroll', function() {
  let logo = document.querySelector('.logo')
  pageYOffset >= 20 ?
    logo.classList.add   ("scroll-logo"):
    logo.classList.remove("scroll-logo")
});

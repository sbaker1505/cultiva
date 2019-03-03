
// let main = document.getElementById('main')
// main.innerHTML = Home
//
// const loadPage = (element) => {main.innerHTML = element}


// for (const link of links) {
//   link.addEventListener('click', async (event) => {
//     event.preventDefault()
//     try {
//       const module = await import (`/${link.dataset.entryModule}.mjs`)
//       module.loadPageInto(main)
//     } catch (error) {
//       main.textContent = error.message
//     }
//   })
// }
window.addEventListener('scroll', function() {
  let logo = document.querySelector('.logo')
  pageYOffset >= 420 ? 
    logo.classList.add   ("scroll-logo"):
    logo.classList.remove("scroll-logo")
});

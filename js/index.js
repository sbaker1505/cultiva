
window.addEventListener('scroll', function() {
  let logo = document.querySelector('.logo')
  pageYOffset >= 20 ?
    logo.classList.add   ("scroll-logo"):
    logo.classList.remove("scroll-logo")
});

let lang = 'es';

function products(type) {
  const list = catalog[type];
  const ProductList = document.getElementById('productList');
  ProductList.innerHTML = list.map(item =>
    `<div class="product-item">
      <img src="../img/${type}/${item.image[0]}" alt=""/>
      <h3>${item.name[lang]}</h3>
      <p class="taste">${item.discription.taste[lang]}</p>
      <p class="look">${item.discription.look[lang]}</p>
    </div>`).join('')
}

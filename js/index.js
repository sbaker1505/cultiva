
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
    `<div class="product-item" id="${type[0]}${item.id}" onclick="showProductInfo('${type[0]}${item.id}')">
      <img src="../img/${type}/${item.image[0]}" alt=""/>
      <h3>${item.name[lang]}</h3>
      <div class="description">
        <div class="taste">
          <h4>Taste</h4>
          <p>${item.discription.taste[lang]}</p>
        </div>
        <div class="look">
          <h4>Look</h4>
          <p class="look">${item.discription.look[lang]}</p>
        </div>
      </div>
    </div>`).join('');
}

function showProductInfo(id){
  if(document.querySelector('div.show') || document.querySelector('div.click')) {
    document.querySelector('div.click').classList.remove('click')
    document.querySelector('div.show').classList.remove('show')
  }
  const item = document.getElementById(id);
  item.classList.toggle('click')
  item.children[2].classList.toggle('show')
  console.log(item)
}

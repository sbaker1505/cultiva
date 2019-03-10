
window.addEventListener('scroll', function() {
  let logo = document.querySelector('.logo')
  let lang = document.querySelector('.lang')
  let nav = document.querySelector('.header-nav')
  pageYOffset >= 20
    ? logo.classList.add   ("scroll-logo")
    : logo.classList.remove("scroll-logo")
  pageYOffset >= 40
    ? lang.classList.add   ("lang-scroll")
    : lang.classList.remove("lang-scroll")
  pageYOffset >= 40
    ? nav.classList.add   ("scroll")
    : nav.classList.remove("scroll")
});

let lang = 'es';

function products(type) {
  const list = catalog[type];
  const ProductList = document.getElementById('productList');
  ProductList.innerHTML = list.map(item =>
    `<div class="product-item" id="${type[0]}${item.id}" onclick="showProductInfo('${type[0]}${item.id}')">
      <img src="../img/${type}/${item.image[0]}" alt=""/>
      <h3>${item.name[lang]}</h3>
      <div class="details">
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
  const item = document.getElementById(id);
  const show = document.querySelector('div.show');
  const highlight = document.querySelector('div.highlight');
  // if (highlight && show){
  //   highlight.classList.remove('highlight')
  //   show.classList.remove('show')
  //   num = id
  //   console.log(highlight, show, num)
  // }
  item.classList.toggle('highlight');
  item.children[2].classList.toggle('show');
  console.log(highlight, show, num)
}

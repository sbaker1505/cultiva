//Constants
const page = $('html');
let lang =
  localStorage.getItem("lang") ?
  localStorage.getItem("lang") :'es'


//Scroll Event for Logo and Lang
window.addEventListener('scroll', function() {
  pageYOffset >= 20
    ? $('.logo').addClass   ("scroll-logo")
    : $('.logo').removeClass("scroll-logo")
  pageYOffset >= 40
    ? $('.lang').addClass   ("lang-scroll")
    : $('.lang').removeClass("lang-scroll")
  pageYOffset >= 40
    ? $('.header-nav').addClass   ("scroll")
    : $('.header-nav').removeClass("scroll")
});

//loadPage ⏱
function loadPage(){
  Language();
  HeaderNav();
  if(page.hasClass('microgreens')) {Products('microgreens')} //🥦
  if(page.hasClass('vegetables'))  {Products('vegetables' )} //🌽
  if(page.hasClass('flowers'))     {Products('flowers'    )} //💐
}

function Language(){
  $('.lang').html('');
  if(lang === 'es'){
    $('.lang').append(`<div class="en">${header.lang.en}</div>`)
  } else {
    $('.lang').append(`<div class="es">${header.lang.es}</div>`)
  }
}

function HeaderNav(){
  const { home, products, images, contact } = header.nav;
  $('.nav').html('');
  console.log(home)
  $('.nav').append(`
    <a href="${
      page.hasClass('products-pages')
      ? '../' + home.path
      : home.path
      }" class="nav-link">
    <div class="${home.icon}"></div>
    <span>${home.title[lang]}</span>
    </a>
    <a href="${
      page.hasClass('products-pages')
      ? products.path
      : 'products/' + products.path
      }" class="nav-link">
    <div class="${products.icon}"></div>
    <span>${products.title[lang]}</span>
    </a>
    <div class="logo"></div>
    <a href="${
      page.hasClass('products-pages')
      ? '../' + images.path
      : images.path
      }" class="nav-link">
    <div class="${images.icon}"></div>
    <span>${images.title[lang]}</span>
    </a>
    <a href="${
      page.hasClass('products-pages')
      ? '../' + contact.path
      : contact.path
      }" class="nav-link">
    <div class="${contact.icon}"></div>
    <span>${contact.title[lang]}</span>
    </a>
    `)

    if(page.hasClass('products-pages')){
      $('.logo').load('../svg/logo.svg')
    } else {
      $('.logo').load('svg/logo.svg')
    }
}

function HomePage() {

}

//create Product Pages
function Products(type) {
  const list = catalog[type][type];
  const { title } = catalog[type];

  //add Title
  const MainContent = $('#main');
  MainContent.html('');
  MainContent.append(`
    <section class="product-page">
      <h2 class="product-page-title">${title[lang]}</h2>
      <article class="product-list"></article>
    </section>`)

  //add Content
  const ProductList = $('.product-list');
  list.map(item => ProductList.append(`
    <div class="product-item" id="${type[0] + item.id}">
      <img src="../img/${type + '/' + item.image[0]}" alt=""/>
      <h3>${item.name[lang]}</h3>
      <div class="details">
        <div class="taste">
          <h4>Taste</h4>
          <p>${item.description.taste[lang]}</p>
        </div>
        <div class="look">
          <h4>Look</h4>
          <p class="look">${item.description.look[lang]}</p>
        </div>
      </div>
    </div>
  `));

  //add Click Event for Details
  $('.product-item').click(function(){
      let position = $(this).index() // where in the array
      alert(
      list[position].description.taste[lang] +"\n\n"+
      list[position].description.look [lang])
    })
}

//odd Click Event for Details
// function showProductInfo(id){
//   const item = document.getElementById(id);
//   const show = document.querySelector('div.show');
//   const highlight = document.querySelector('div.highlight');
//   item.classList.toggle('highlight');
//   item.children[2].classList.toggle('show');
//   console.log(highlight, show, num)
// }

//changeLanguage 🇺🇸🇪🇸
$('.lang').click(function(){
  if(lang == 'es')
  { localStorage.setItem("lang","en"); lang = 'en'} else
  { localStorage.setItem("lang","es"); lang = 'es'}
  loadPage()
})

//renderView
$(document).ready(loadPage)

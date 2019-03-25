//Constants
const page = $('html');
let lang = localStorage.getItem("lang")
            ? localStorage.getItem("lang") :'es'


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

$(window).resize(function(){
  if(window.innerWidth <= 800 && page.hasClass('desktop')){
    page.removeClass('desktop').addClass('mobile')
    HeaderNav();
    ContactSlider();
    $('footer').html('');
  } else if(window.innerWidth >= 801 && page.hasClass('mobile')){
    page.removeClass('mobile').addClass('desktop')
    HeaderNav();
    FooterPage();
    $('.contact-slider').remove();
  }
})

//loadPage ⏱
function loadPage(){
  Language();
  HeaderNav();
  if (window.innerWidth <= 800){
    page.addClass('mobile')
    ContactSlider();
  } else {
    page.addClass('desktop');
    FooterPage();
  }
  if(page.hasClass('microgreens')) {Products('microgreens')} //🥦
  if(page.hasClass('vegetables'))  {Products('vegetables' )} //🌽
  if(page.hasClass('flowers'))     {Products('flowers'    )} //💐
}

//language html populator
function Language(){
  $('.lang').html('');
  if(lang === 'es'){
    $('.lang').append(`<div class="en">${header.lang.en}</div>`)
  } else {
    $('.lang').append(`<div class="es">${header.lang.es}</div>`)
  }
}

//header html populator
function HeaderNav(){
  const { home, products, images, contact } = header.nav;
  $('.nav').html(`
    <div class="nav-link-container">
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
    </div>
    <div class="logo"></div>
    <div class="nav-link-container">
      <a href="${
        page.hasClass('products-pages')
        ? '../' + images.path
        : images.path
        }" class="nav-link">
      <div class="${images.icon}"></div>
      <span>${images.title[lang]}</span>
      </a>
      ${window.innerWidth <= 800
        ?   `<a href="#" class="nav-link" onclick="slide()">
              <div class="${contact.icon}"></div>
              <span>${contact.title[lang]}</span>
            </a>`
        :   `<a href="${
              page.hasClass('products-pages')
              ? '../' + contact.path
              : contact.path
              }" class="nav-link">
              <span>${contact.title[lang]}</span>
            </a>`
      }
    </div>
    `)

    if(page.hasClass('products-pages')){
      $('.logo').load('../svg/logo.svg')
    } else {
      $('.logo').load('svg/logo.svg')
    }
}

//home page html populator
function HomePage() {

}

//footer page html populator
function FooterPage() {
  const FooterContent = $('footer');
  FooterContent.html('')
    .append(`<div class="contact"></div>`);
  footer.map(item => $('.contact').append(`
    <address class="${item.title.toLowerCase()}">
      <h3>${item.title}</h3>
      <a href="tel:${item.contact.phone}">${item.contact.phoneFormatted}</a>
      <a href="mailto:${item.contact.email}">${item.contact.email}</a>
      <div class="location">
        <p>street address</p>
        <p>city, provience, Ecuador</p>
      </div>
      <div class="icons">
        <a href="${item.social.twitter.url}" class="social entypo-twitter" alt="Twitter Icon"></a>
        <a href="${item.social.facebook.url}" class="social entypo-facebook-squared" alt="Facebook Icon"></a>
      </div>
    </address>
  `))

}

//contactPage html populator
function ContactPage(){

}

//contactSlider html populator
function ContactSlider(){
  $('header').append(`
    <div class="contact-slider">
      <div class="entypo-cancel" onclick="slide()"></div>
    </div>
  `)
  footer.map(item => $('.contact-slider').append(`
    <address class="${item.title.toLowerCase()}">
      <h3>${item.title}</h3>
      <a href="tel:${item.contact.phone}">${item.contact.phoneFormatted}</a>
      <a href="mailto:${item.contact.email}">${item.contact.email}</a>
      <div class="location">
        <p>street address</p>
        <p>city, provience, Ecuador</p>
      </div>
      <div class="icons">
        <a href="${item.social.twitter.url}" class="social entypo-twitter" alt="Twitter Icon"></a>
        <a href="${item.social.facebook.url}" class="social entypo-facebook-squared" alt="Facebook Icon"></a>
      </div>
    </address>
  `))
}

function slide(){
  $('.contact-slider').toggleClass('slide');
}

//create Product Pages
function Products(type) {
  const list = catalog[type][type];
  const { title } = catalog[type];

  //add Title
  const MainContent = $('#main');
  MainContent.html('')
    .append(`
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

  //Click Event for Details
  $('.product-item').click(function(){
      let position = $(this).index() // where in the array
      alert(
      list[position].description.taste[lang] +"\n\n"+
      list[position].description.look [lang])
    })
}

//changeLanguage 🇺🇸🇪🇸
$('.lang').click(function(){
  if(lang == 'es')
  { localStorage.setItem("lang","en"); lang = 'en'} else
  { localStorage.setItem("lang","es"); lang = 'es'}
  loadPage()
})

//renderView
$(document).ready(loadPage)

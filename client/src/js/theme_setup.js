// Swiper theme setting update
// Import area
const {
  default: Swiper,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  Scrollbar
} = require('swiper');

// Define
Swiper.use([Pagination, Navigation, Mousewheel, Keyboard, Autoplay, Scrollbar]);
const swiper1Array = GenerateNewArray(12);
$.each(swiper1Array, function () {
  let item = $(this)[0];
  let itemTemplate = `
  <div class="swiper-slide">
    <figure>
      <img src="/assets/images/post/${item}.webp"/>
      <div class="swiper-lazy-preloader"></div>
      <figcaption>
        Slide ${item}
      </figcaption>
    </figure>
  </div>`
  $(itemTemplate).appendTo($("#swiper01 .swiper-wrapper"));
});

const swiperInstance1 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: false,
  loop: true,
  autoplay: true,
  autoplayDisableOnInteraction: true,
  speed: 500,
  scrollbar: true,
  keyboard: {
    enabled: true,
  },
  mousewheel:false,
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    dynamicBullets: true,
    progressbarOpposite: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
});

const discoverSwiper = new Swiper("#discover-list-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: false,
  autoplay:true,
  loop: true,
  autoplayDisableOnInteraction: true,
  speed: 500,
  scrollbar: true,
  keyboard: {
    enabled: true,
  },
  mousewheel:false,
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    dynamicBullets: true,
    progressbarOpposite: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    // >=0
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // >=600
    600: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // >=900
    900: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // >=1200
    1200: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    // >=1800
    1800: {
      slidesPerView: 4,
      spaceBetween: 10
    },
  },
});



$(".swiper-slide figure").css({
  "max-height":"400px"
});

$(window).on("load", function(){
  const currentStyle = localStorage.getItem("--swiper-theme-color")?localStorage.getItem("--swiper-theme-color") : getComputedStyle(document.documentElement).getPropertyValue('--swiper-theme-color').trim();
  $("#theme-setting").val(currentStyle);
  document.documentElement.style.setProperty("--swiper-theme-color", currentStyle);
  const discoverCardList = $(".discover-card");
  $.each(discoverCardList,function(index){
    if(index+1 <=  10){
      $(this).css({
        "background-image":`url(../assets/images/discovers/discover${(index+1)}.webp)`
      })
    }else{
      $(this).css({
        "background-image":`url(../assets/images/discovers/discover${(index+1)-10}.webp)`
      })
    }
  })
});

$("#theme-setting").on("change", function () {
  let swiperThemeColor = $(this).val() + "";
  localStorage.setItem("--swiper-theme-color", swiperThemeColor);
  $(':root').css({
    "--swiper-theme-color": swiperThemeColor
  });
});
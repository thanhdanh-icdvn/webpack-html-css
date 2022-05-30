// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction()
};
let headerHeight = $("#header").outerHeight();
$(".main__content").css({
  "margin-top": headerHeight + "px"
})

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("#header").css({
      "font-size": "16px"
    })
  } else {
    $("#header").css({
      "font-size": "24px"
    })
  }
}

scrollFunction();

$("#btn-menu-toogle").on("click", function (e) {
  var menuToogleIcon = $(this).find("span.icon");
  var navMenu = $("ul#top-menu");
  menuToogleIcon.toggleClass("icon-navigation-menu icon-close");
  navMenu.toggleClass("hidden show");
})
$(".btn-search").on("click",function(e){
  e.preventDefault();
  $(".search-box").toggleClass("show");
  $(this).find("span.icon").fadeIn().toggleClass("icon-search icon-close-circled");
})
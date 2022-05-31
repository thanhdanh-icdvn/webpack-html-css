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
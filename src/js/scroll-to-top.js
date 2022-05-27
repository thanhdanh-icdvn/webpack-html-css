const backToTopBtn  = $(".scroll-to-top")|| {};

// Set button visibility
function setBackToTopBtnVisibility(offset=50){
 if(document.body.scrollTo > offset || document.documentElement.scrollTop > offset){
  $(backToTopBtn).css({
    "visibility":"visible",
    "opacity":1,
    "transform":"scale(1)"
  })
 }else{
  $(backToTopBtn).css({
    "visibility":"hidden",
    "opacity":0,
    "transform":"scale(0)"
  })
 }
}
document.addEventListener("scroll",function(){
  setBackToTopBtnVisibility(100);
})

$(backToTopBtn).on("click",function (e) {
  window.scrollTo({
    top: 0, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
})
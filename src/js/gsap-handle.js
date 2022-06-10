import { default as gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);


function revealAnimation(){
  var reveals = $(".product-card");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var headerSize = $("#header").outerHeight();
    var elementTop = reveals[i].getBoundingClientRect().top - headerSize ;
    var elementVisible = $('.product-card:first').height();

    if (windowHeight - elementVisible > elementTop ) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.revealAnimation = revealAnimation;
window.addEventListener("scroll", revealAnimation);
// To check the scroll position on page load
revealAnimation();
$(window).on("resize",function(){
  revealAnimation();
})
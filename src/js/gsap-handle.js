import { default as gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);


function revealAniamation(){
  var reveals = $(".product-card");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 600;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}
window.revealAniamation = revealAniamation;
window.addEventListener("scroll", revealAniamation);
// To check the scroll position on page load
revealAniamation();
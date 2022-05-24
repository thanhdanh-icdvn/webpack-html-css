class Header extends HTMLElement{
  constructor(){
    super();
  }
}
customElements.define('header-component',Header);

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
let headerHeight = $("#header").outerHeight();
$(".main__content").css({
  "margin-top":headerHeight+"px"
})
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("#header").css({
      "font-size":"16px"
    })
  } else {
    $("#header").css({
      "font-size":"24px"
    })
  }
}

scrollFunction();
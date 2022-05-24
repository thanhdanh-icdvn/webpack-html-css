// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
let headerHeight = $("#header").outerHeight();
$(".main__content").css({
  "margin-top":headerHeight+"px"
})
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("#header").css({
      "font-size":"30px"
    })
  } else {
    $("#header").css({
      "font-size":"60px"
    })
  }
}

scrollFunction();
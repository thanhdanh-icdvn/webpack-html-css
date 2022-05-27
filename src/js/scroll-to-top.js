const backToTopBtn = $(".scroll-to-top") || {};

// Set button visibility
function setBackToTopBtnVisibility(offset = 50) {
  if (document.body.scrollTo > offset || document.documentElement.scrollTop > offset) {
    $(backToTopBtn).removeClass("hide").addClass("show");
  } else {
    $(backToTopBtn).removeClass("show").addClass("hide");
  }
}
document.addEventListener("scroll", function () {
  setBackToTopBtnVisibility(50);
})

$(backToTopBtn).on("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
  $(this).removeClass("show").addClass("hide");
})
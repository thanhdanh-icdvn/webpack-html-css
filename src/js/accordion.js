var accordionBtn = document.getElementsByClassName("accordion__btn");
var i;

for (i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// Jquery control
$(".btn").on("click",function(e){
  e.preventDefault();
  // $(this).closest(".button-list").children().not(this).toggle();
  // $(this).siblings(".btn").toggle();
  $(this).parent().find(".btn").not(this).toggle();

})


// Adds and removes body class depending on screen width.
function screenClass() {
  if($(window).innerWidth() > 960) {
      $('body').addClass('big-screen').removeClass('small-screen');
  } else {
      $('body').addClass('small-screen').removeClass('big-screen');
  }
}

// Fire.
screenClass();

// And recheck when window gets resized.
$(window).on('resize',function(){
  screenClass();
});
window.onresize = function() {
  console.log( $("body").attr("class"))
};

updateTableIndex("table#tbl-list-icon>tbody>tr");

$("table#tbl-list-icon>tbody>tr").each(function(){
  let iconClass = $(this).find("td span.icon").attr("class");
  if(iconClass && iconClass.split(' ')){
    $( this ).find( "td" ).last().html(iconClass && iconClass);
  }
});
// handle event of input is oninput not onkeyup cause by this combine clear button
$("#txt-search").on("input", delay(function() {
  var value = $(this).val().toLowerCase();
  $("table#tbl-list-icon > tbody > tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
  console.log(value);
},1000));

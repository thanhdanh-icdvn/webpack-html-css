// Load image from user iamge computer
function loadFile(event) {
  var output = document.getElementById('output');
  const currentFile = event.target.files[0];
  if(currentFile){
    output.src = URL.createObjectURL(currentFile);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  }
};
window.loadFile = loadFile;

function updateTableIndex($selector)
{
    $($selector).each(function(){
      $( this ).find( "td" ).first().html( $(this).index() + 1 );
    });
}
window.updateTableIndex = updateTableIndex;

function GenerateNewArray(size){
  let array = [];
  for(let i = 0; i < size;i++){
    array[i] = i+1;
  }
  return array;
}
window.GenerateNewArray = GenerateNewArray;

// Deplay function to wait user input end and handle event after that
function delay(callback, ms) {
  var timer = 0;
  return function() {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}
window.delay = delay;

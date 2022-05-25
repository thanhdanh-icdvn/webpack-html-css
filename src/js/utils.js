/**
 * Function to load single image from local
 * @param {*} event
 */
function loadFile(event, $selectorId) {
  var output = document.getElementById($selectorId);
  const currentFile = event.target.files[0];
  if (currentFile) {
    output.src = URL.createObjectURL(currentFile);
    output.onload = function () {
      URL.revokeObjectURL(output.src) // free memory
    }
  }
};
window.loadFile = loadFile;
/**
 * Function to update Table index from table selector
 * @param {*} $selector
 */
function updateTableIndex($selector) {
  $($selector).each(function () {
    $(this).find("td").first().html($(this).index() + 1);
  });
}
window.updateTableIndex = updateTableIndex;
/**
 * Function to generate an Array with size
 * @param {*} size
 * @returns Array with size
 */
function GenerateNewArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array[i] = i + 1;
  }
  return array;
}
window.GenerateNewArray = GenerateNewArray;

/**
 * Deplay function to wait user input end and handle event after that
 * @param {*} callback Callback function
 * @param {*} ms Milisecond delay
 * @returns Callback function with delay
 */
function delay(callback, ms) {
  var timer = 0;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}
window.delay = delay;

function renderModal($modalId, $buttonId) {
  // Get the modal
  var modal = document.getElementById($modalId);

  // Get the button that opens the modal
  var btn = document.getElementById($buttonId);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
window.renderModal = renderModal;
renderModal("myModal","myBtn");
$(document).ready(function() {
	$('a').smoothScroll();
});
codifyMarkup(".code");
function codifyMarkup(selector) {
  var classSel = document.querySelectorAll(selector);
  for(var i = 0; i < classSel.length; i++) {
    var currentText = classSel[i].innerHTML;
    var fixedText = currentText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    classSel[i].innerHTML = fixedText;
  }
}
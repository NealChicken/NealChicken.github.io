let _nextColor = "#ffff00"

function flashBodyBackground() {
	document.getElementsByTagName("body")[0].style.backgroundColor = _nextColor;
	if (_nextColor === "#ffff00") _nextColor = "#ff00ff";
	else _nextColor = "#ffff00";
	setTimeout(flashBodyBackground, 500);
}
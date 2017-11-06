let _nextColor = "#fff42d"

function flashBodyBackground() {
	document.getElementsByTagName("body")[0].style.backgroundColor = _nextColor;
	if (_nextColor === "#fff42d") _nextColor = "#f909dd";
	else _nextColor = "#fff42d";
	setTimeout(flashBodyBackground, 100);
}

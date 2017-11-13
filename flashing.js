let _nextColor = 0;
const COLORS = ["#fff42d", "#f909dd"];

let _nextImage = 0;
const IMAGES = ["/images/lechickens.png", "/images/lechickens2.png"];

function initFlashing() {
	_loadImage(0);
	_flashBodyBackground();
}

function _loadImage(num) {
	if (!(0 <= num && num < IMAGES.length)) return;
	let dlImage = new Image();
	dlImage.onload = function () {
		document.getElementById("img-load-area").innerHTML += "<img src=\"" + this.src + "\" />";
		_loadImage(num+1);
	}
}

function _flashBodyBackground() {
	document.getElementsByTagName("body")[0].style.backgroundColor = COLORS[_nextColor];
	document.getElementsByTagName("body")[0].style.backgroundImage = "url('" + IMAGES[_nextImage] + "')";
	_nextColor++; _nextColor %= COLORS.length;
	_nextImage++; _nextImage %= IMAGES.length;
	setTimeout(_flashBodyBackground, 50);
}


function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		nav_home_over = newImage("images/nav_home-over.gif");
		nav_bio_over = newImage("images/nav_bio-over.gif");
		nav_bw_over = newImage("images/nav_bw-over.gif");
		nav_spirit_over = newImage("images/nav_spirit-over.gif");
		nav_italia_over = newImage("images/nav_italia-over.gif");
		nav_coasts_over = newImage("images/nav_coasts-over.gif");
		preloadFlag = true;
	}
}


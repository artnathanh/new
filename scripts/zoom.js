window.onload = function() {
	logos = document.getElementsByClassName("logo");
	layouts = document.getElementsByClassName("layout");
	for (i = 0; i < logos.length; i++) {
		(function(i) {
			logos[i].onclick = function() {
				window.open(logos[i].src);
			}
		}(i));
	}
	for (i = 0; i < layouts.length; i++) {
		(function(i) {
			layouts[i].onclick = function() {
				window.open(layouts[i].src);
			}
		}(i));
	}
}
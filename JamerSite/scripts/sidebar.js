
function toggleNav() {
	var sidenav = document.getElementById("mySidebar"),
    main = document.getElementById("main");
    sidenav.style.width = sidenav.style.width == "17%" ? '0' : '17%';
    main.style.marginLeft = main.style.marginLeft === "12%" ? '0' : '12%' ;
}

function myFunction(x) {
    x.classList.toggle("change");
}

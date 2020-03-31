function Ontoggle(object) {
	let icontoChange = document.getElementById('#' + object);
	if (icontoChange.getAttribute('class') === 'fas fa-caret-right') 
	{
	icontoChange.setAttribute('class','fas fa-caret-down');
	} else {
		icontoChange.setAttribute('class', 'fas fa-caret-right');
	}
}

function openPage(pageName, elmnt, color) {
	// Hide all elements with class="mainscreen" by default */
	var i, mainscreen, navbtn;
	mainscreen = document.getElementsByClassName("Langue");
	for (i = 0; i < mainscreen.length; i++) {
		mainscreen[i].style.display = "none";
	}
	// Remove the background color of all tablinks/buttons
	navbtn = document.getElementsByClassName("navbtn");
	for (i = 0; i < mainscreen.length; i++) {
		navbtn[i].style.backgroundColor = "";
	}
	// Show the specific tab content
	document.getElementById(pageName).style.display = "block";

	// Add the specific color to the button used to open the tab content
	elmnt.style.backgroundColor = color;
}


window.addEventListener("load", function load() {
    // L'écouteur n'est plus nécessaire ici, on l'enlève
    window.removeEventListener("load", load, false);
 
  // Code à exécuter lorsque la fenêtre est chargée
  // Get the element with i?d="defaultOpen" and click on it
  document.getElementById("FRbtn").click();
});



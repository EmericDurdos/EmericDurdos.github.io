function Ontoggle(object) {
	let icontoChange = document.getElementById('#' + object);
	if (icontoChange.getAttribute('class') === 'fas fa-caret-right') 
	{
	icontoChange.setAttribute('class','fas fa-caret-down');
	} else {
		icontoChange.setAttribute('class', 'fas fa-caret-right');
	}
}

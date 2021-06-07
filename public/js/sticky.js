document.addEventListener('DOMContentLoaded', function() {
	
	// Get the navbar
	const navbar = document.getElementById("navbar");
	const parent = navbar.parentElement;

	var parentOffset = parent.getBoundingClientRect().top;

	// Get the initial offset position of the navbar
	var offsetFromTopInit = navbar.getBoundingClientRect().top;

	// get the distance of the viewport from the top of the document
	const distanceScrolledInit = window.screenY;

	/* When the user scrolls the page, 
	add the sticky class to the navbar 
	when you reach its scroll position. 
	Remove "sticky" when you leave the scroll position */
	window.onscroll = function(event) {beSticky(event)};
		
	beSticky = function (event) {
	
		if (window.pageYOffset >= offsetFromTopInit - parentOffset) {

	    	navbar.classList.add("sticky");

	  	} else {

	    	navbar.classList.remove("sticky");
			navbar.style.top = parentOffset;

	  	}
	}

})
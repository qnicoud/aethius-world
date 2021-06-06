document.addEventListener('DOMContentLoaded', function() {
	// When the user scrolls the page, execute beSticky
	window.onscroll = function(event) {beSticky(event)};

	// Get the navbar
	var navbar = document.getElementById("navbar");

	// Get the offset position of the navbar
	var offsetFromTop = navbar.getBoundingClientRect().top;

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function beSticky(event) {
		console.log([navbar, offsetFromTop]);
	  if (window.pageYOffset >= offsetFromTop) {
	    navbar.classList.add("sticky");
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}

})

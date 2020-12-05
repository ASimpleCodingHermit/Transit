// Listen for all clicks on the document
document.addEventListener('click', function () {

	// Bail if it's not a .nav-link
	if (!event.target.classList.contains('nav-link')) return;

	// Add the active class
	event.target.classList.add('active');

	// Get all nav links
	var links = document.querySelectorAll('.nav-link');

	// Loop through each link
	for (var i = 0; i < links.length; i++) {

		// If the link is the one clicked, skip it
		if (links[i] === event.target) continue;

		// Remove the .active class
		links[i].classList.remove('active');

	}

}, false);


// //Optional Menu Transition
// const nav = document.querySelector('.navbar-nav')
// const burger = document.querySelector('.burger')
// const links = nav.querySelectorAll('a')

// burger.addEventListener('click', () => {
//   nav.classList.toggle('navOpen')
//   burger.classList.toggle('toggle')
// })

// links.forEach((link) => {
//   link.addEventListener('click', () => {
//     nav.classList.toggle('navOpen')
//     burger.classList.toggle('toggle')
//   })
// })

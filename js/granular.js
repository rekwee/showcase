
	// 1.click on the scroll - button - arrow in the header 
	// 2. figure out the section we want to move to
	// 3. .announcement
	// 4. check how far the section we want to go to is away from the top of the page
	// animate our page down to this position. 

	$ ('.scroll-btn').on ('click', function() {
		// list of instructions inside
			console.log ('Hello');
			var announcement = $('.announcement').offset().top;
			console.log(announcement);
	
	$ ('html, body').animate({
		scrollTop: announcement + 50
	}, 600);

});
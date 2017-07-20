// ===== Scroll to Top ==== 
jQuery(document).ready(function($){
	$(window).scroll(function() {
    	if ($(this).scrollTop() >= 800) {          // If page is scrolled more than 800px
        	$('#return-to-top').fadeIn('slow');    // Fade in the arrow
    	} else {
        	$('#return-to-top').fadeOut('slow');           // Else fade out the arrow
    }
	});
	$('#return-to-top').click(function() {                 // When arrow is clicked
    	$('body,html').animate({ scrollTop : 0 }, 800);   // Scroll to top of body                 
    	return false;
	});
});

jQuery(document).ready(function($){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {          // If page is scrolled more than 200px
            $('#return-to-top-w').fadeIn('slow');    // Fade in the arrow
        } else {
            $('#return-to-top-w').fadeOut('slow');           // Else fade out the arrow
    }
    });
    $('#return-to-top-w').click(function() {                 // When arrow is clicked
        $('body,html').animate({ scrollTop : 0 }, 200);   // Scroll to top of body                 
        return false;
    });
});

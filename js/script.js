
	$("button").on('click', function() {
	  $(this).siblings('.read-more').slideToggle( "slow" );

	  if ( $( ".read-more" ).is( "none" ) ) {
   		$('.read-more').hide();
  	} else {
  		$('#section2.container').css({'height': '+=220%'});
	  	$('#section2').css({'height': '+=220%'});
  	}
	  
	  // $('#section2.container').css({'height': '+=475%'}).slideToggle( "slow" );
	  // $('#section2').css({'height': '+=475%'}).slideToggle( "slow" );
	});




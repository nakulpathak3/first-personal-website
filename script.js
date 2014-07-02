
$(document).ready(function() {
//accordion
	$('.contentone').hide();
	$('.contenttwo').hide();
	$('.contentthree').hide();
	$('.contentfour').hide();

	$('.list').hover(function() {
		$(this).css('opacity', '1');
		$(this).css('font-size', '410%');	
	}, function() {
		$(this).css('font-size', '400%');
		$(this).css('opacity', '0.6');
	});

 	$('#accordion').accordion({ 
	 	collapsible: true, 
	 	active: false,
	 	heightStyle: "content",
	 });
 	
	 $('h3').hover(function() {
		$(this).css('color', '#100577');
	}, function() {
		$(this).css('color', '#444444');
	});

	 
	/*$("h3").click( function(event){
	event.preventDefault();
	
	if ($(this).hasClass("isDown") ) {	
		$(".basic-grey").css('margin-top','213%');	
		$("#skills").animate({top:"-=65%"});			
		$(".updown").animate({top:"-=65%"});
		$("#contact").animate({top:"-=65%"});								
		$(this).removeClass("isDown");
	} 
	else {	
		$(".basic-grey").css('margin-top','180%');	
		$("#skills").animate({top:"+=65%"});
		$(".updown").animate({top:"+=65%"});						
		$("#contact").animate({top:"+=65%"});							
		$(this).addClass("isDown");
	}
	return false;
	});*/	

	$("#sone").click( function(event){
	event.preventDefault();
	
	if ($(this).hasClass("isDown") ) {
		$('.contentone').toggle('slide', {direction: 'left'}, 700);	
		$(this).removeClass("isDown");
	} 
	else {
		$('.contentone').toggle('slide', {direction: 'left'}, 700);	
		$(this).addClass("isDown");
	}
	return false;
	});
	
	$("#stwo").click( function(event){
	event.preventDefault();
	
	if ($(this).hasClass("isDown") ) {
		$('.contenttwo').toggle('slide', {direction: 'right'}, 700);	
		$(this).removeClass("isDown");
	} 
	else {
		$('.contenttwo').toggle('slide', {direction: 'right'}, 700);	
		$(this).addClass("isDown");
	}
	return false;
	});
	$("#sthree").click( function(event){
	event.preventDefault();
	
	if ($(this).hasClass("isDown") ) {
		$('.contentthree').toggle('slide', {direction: 'left'}, 700);	
		$(this).removeClass("isDown");
	} 
	else {
		$('.contentthree').toggle('slide', {direction: 'left'}, 700);	
		$(this).addClass("isDown");
	}
	return false;
	});	

	$("#sfour").click( function(event){
	event.preventDefault();
	
	if ($(this).hasClass("isDown") ) {
		$('.contentfour').toggle('slide', {direction: 'right'}, 700);	
		$(this).removeClass("isDown");
	} 
	else {
		$('.contentfour').toggle('slide', {direction: 'right'}, 700);	
		$(this).addClass("isDown");
	}
	return false;
	});

	 $('#sone').hover(function() {
	 	$('#sone').css('font-size','220%');
	}, function() {
	 	$('#sone').css('font-size','200%');
	});

	 $('#stwo').hover(function() {
	 	$('#stwo').css('font-size','220%');
	}, function() {
	 	$('#stwo').css('font-size','200%');
	 });

	 $('#sthree').hover(function() {
	 	$('#sthree').css('font-size','220%');
	}, function() {
	 	$('#sthree').css('font-size','200%');
	 });

	 $('#sfour').hover(function() {
	 	$('#sfour').css('font-size','220%');
	}, function() {
	 	$('#sfour').css('font-size','200%');
	 });

});



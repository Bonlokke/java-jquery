
//LISTS, CONTAINER & BUTTON: 8 UL x 8 LI
$(document).ready(function() {
	$("body").prepend('<div class="container"></div>');
	
	$(".container").prepend('<button id="gridButton">Create Grid</button>');
	
	//VARIABLES FOR HEIGHT AND WIDTH OF STARTING GRID
	var width = 7;
	var height = 7;

	for (var i = 0; i <= height; i++) {
		$('.container').append('<ul></ul>');
	}

	for (var i = 0; i <= width; i++) {
		$('ul').append('<li></li>');
	}

	//OLD WAY OF CREATING THE LISTS - REDUNDANT; LEARNING. INSPIRED BY THE GOOGLE PROJECT
	//$(".container").prepend('<ul></ul>').prepend('<ul></ul>').prepend('<ul></ul>').prepend('<ul></ul>').prepend('<ul></ul>').prepend('<ul></ul>').prepend('<ul></ul>').prepend('<ul></ul>');
	//$('ul').append('<li></li>').append('<li></li>').append('<li></li>').append('<li></li>').append('<li></li>').append('<li></li>').append('<li></li>').append('<li></li>');
	
	//CSS INFO - SET GRID (8X8)
	$('ul').css( {
		margin: '0px',
		height: '31px'
	})

	$('li').css( {
		display: 'inline-block',
		height: '30px',
		width: '30px',
		border: '1px black solid',
		'background-color': 'white',
	}).hover(function() {
		$(this).css( {
			'background-color': 'black',
			})
		});

	$('#gridButton').css( {
		'margin-left': '40px',
		'margin-bottom': '10px',
		padding: '15px',
		'background-color': '#4791DA',
		border: '1px',
		color: 'white',
	})
	//BUTTON FUNCTION
	$('#gridButton').click(function() {
		//REMOVES THE PREVIOUS GRID
		$('ul').remove();
		
		//PROMPT FOR GRID SIZE
		var widthB = prompt("Enter a width!");
	
		var heightB = prompt("Enter a height!");

		//GENERATING THE LISTS
		for (var i = 0 ; i <= heightB-1; i++) {
			$('.container').append('<ul></ul>');
		}
		for (var i = 0; i <= widthB-1; i++) {
			$('ul').append('<li></li>');
		}
		
		//NEED TO REESTABLISH CSS INFO IN ORDER TO SET GRID (8X8)
		$('ul').css( {
			margin: '0px',
			height: '31px'
		})

		$('li').css( {
			display: 'inline-block',
			height: '30px',
			width: '30px',
			border: '1px black solid',
			'background-color': 'white', }).hover(function() {   
				//COLOR SQUARE WHEN HOVERED
				$(this).css( {
					'background-color': 'black',
					});
				});
	});
})
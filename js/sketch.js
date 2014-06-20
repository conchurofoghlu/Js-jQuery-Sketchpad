$(document).ready(function() {
	var input = 16;
	createSquares(16);

	$('.reset').click(function() {
		 input = window.prompt('Please enter grid number:', '24' );
		$(".square").remove();
		createSquares(parseInt(input));
		//var width = ($("#wrapper").width()) / parseInt(input);
		//$(".square").css({"width":width, "height":width});
	});
	$('.rgb').click(function() {
		rgb(parseInt(input));
	});
});

function createSquares(gridNum) {
	var $wrapper = $('#wrapper');
	var squareSize = 450 / gridNum;
	
	$($wrapper).empty();

	for (var i = 0; i < gridNum; i++) {
		var row ='<div class="row">';

		for (var j = 0; j < gridNum; j++) {
			row += '<div class="square"></div>';
		}
		row += '</div>';
		$wrapper.append(row);
	}
	$('.square').hover(function() {
		$(this).addClass("gridColor");
	});

	$('.square').css({'height':squareSize, 'width':squareSize});
	$('.row').css({'height':squareSize});

}

function rgb(gridNum) {
	
	var $wrapper = $('#wrapper');
	var squareSize = 450 / gridNum;
	
	$($wrapper).empty();

	for (var i = 0; i < gridNum; i++) {
		var row ='<div class="row">';

		for (var j = 0; j < gridNum; j++) {
			row += '<div class="square"></div>';
		}
		row += '</div>';
		$wrapper.append(row);
	}

	$('.square').hover(function() {
		var colorHue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
		(Math.floor(Math.random() * 256)) + ',' +
		(Math.floor(Math.random() * 256)) + ')';
		$(this).css({'background-color': colorHue}, 250);
	});

	$('.square').css({'height':squareSize, 'width':squareSize});
	$('.row').css({'height':squareSize});
}
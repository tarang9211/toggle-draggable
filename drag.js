$(document).ready(function(){

$('.customButton').draggable();

$('#drag').click(function(){
	var isDisabled = $('.customButton').draggable('option', 'disabled');
	console.log(isDisabled);

	if (isDisabled){
		$('.customButton').draggable('option', 'disabled', false);
	}
	else{
		$('.customButton').draggable('option', 'disabled', true);
	}
});

});
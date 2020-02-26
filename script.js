var aboutSec = $("#about")
var resumeSec =$("#resume")
var socialSec =$("#social")


$(function(){
	$("#modal").click(function(){
		$(".lay").modal('show');
	});
	$(".lay").modal({
		closable: true
	});
});


$('.special.cards .image').dimmer({
	on: 'hover'
  });
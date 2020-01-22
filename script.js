var aboutSec = $("#about")
var resumeSec =$("#resume")
var socialSec =$("#social")


$(resumeSec).click(function(){
    $("#resumeSwitch").removeClass("hide")
    $("#aboutSwitch").addClass("hide")
    $("#socialSwitch").addClass("hide")
    $(resumeSec).addClass("active")
    $(aboutSec).removeClass("active")
    $(socialSec).removeClass("active")
})

$(aboutSec).click(function(){
    $("#aboutSwitch").removeClass("hide")
    $("#resumeSwitch").addClass("hide")
    $("#socialSwitch").addClass("hide")
    $(aboutSec).addClass("active")
    $(resumeSec).removeClass("active")
    $(socialSec).removeClass("active")
})

$(socialSec).click(function(){
    $("#socialSwitch").removeClass("hide")
    $("#resumeSwitch").addClass("hide")
    $("#aboutSwitch").addClass("hide")
    $(socialSec).addClass("active")
    $(aboutSec).removeClass("active")
    $(resumeSec).removeClass("active")
})


$(function(){
	$("#modal").click(function(){
		$(".lay").modal('show');
	});
	$(".lay").modal({
		closable: true
	});
});


$("#submit").click(function(){
    alert("Your Message Has been Submitted!")
})
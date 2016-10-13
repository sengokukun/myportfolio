// JavaScript Document

$(function(){
    $('.gNav li').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.child",this).slideUp();
    });
});

$(function(){
	$("ul#headnav-menu ul").hide();
	$("ul#headnav-menu li").hover(function(){
		$(">ul:not(:animated)",this).slideDown("fast");
	}, function(){
		$(">ul",this).slideUp("fast");
	});
});


$(document).ready(function () {
$("#mainVisual").bgswitcher({
images:["./img/main%20visual/mainvis_01.png",
		"./img/main%20visual/mainvis_04.png",
		"./img/main%20visual/mainvis_03.png"],
effect: "fade",
easing: "swing",

loop: true,
});
});

$(function(){
    $('.gotoTop').click(function () {
		$("html,body").animate({scrollTop:0},"300");
    });
});

$(function() {
	$(window).on('resize', function(){
		setTimeout(function() {
			var spNavT = $('#spNavHeader').height();
			$('#spNav').css('top', spNavT + 'px');
		}, 500);
	});

	$(document).on('click', '#spMenuBtn', function() {
		$('#spNav,#black').css('display', 'block');
		$('#spMenuBtn').addClass('spNavClose');
		$('#spMenuBtn img').attr('src', $('#spMenuBtn img').attr('src').replace('-off', '-on'));
	});
	$(document).on('click', '.spNavClose', function() {
		$('#spNav,#black').css("display", 'none');
		$('#spMenuBtn').removeClass('spNavClose');
		$('#spMenuBtn img').attr('src', $('#spMenuBtn img').attr('src').replace('-on', '-off'));
	});
});


$(function(){
	$("a:has(.textShow)").mouseover(function(e){
		$("body").append('<div id="sonic">' + $(this).children(".textShow").html() + "</div>");
		$("#sonic").css({top:(e.pageY+10) + "px",left:(e.pageX+10) + "px"}).fadeIn("fast");
	}).mousemove(function(e){
		$("#sonic").css({top:(e.pageY+10) + "px",left:(e.pageX+10) + "px"});
	}).mouseout(function(){
		$("#sonic").remove();
	});
});

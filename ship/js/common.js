

$('.search').click(function(){
	//$('.search').addClass("none")
	$('.search_pole').addClass("view");
	var e = $(".search_pole").children("input");
	$(e).addClass("view");
});
jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".search_pole"); 
		var div2 = $(".search"); // тут указываем ID элемента
		if (!div.is(e.target)   // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { 
if (!div2.is(e.target)   // если клик был не по нашему блоку
		    && div2.has(e.target).length === 0) {$('.search_pole').removeClass("view");$('.search_pole').addClass("none"); }
		    // и не по его дочерним элементам
			//$('.search_pole').addClass("none"); // скрываем его

		}
	});
});

$('.send').click(function(){
	$(".first_display").addClass("none");
	$('.message_end').addClass("view_flex");
});


		jQuery('.list').jScrollPane();
	
	$jqNew = jQuery.noConflict(true);  
		$jqNew(document).ready(function () {  
		$jqNew("#waterwheel-carousel-default").waterwheelCarousel();  
		});  
		
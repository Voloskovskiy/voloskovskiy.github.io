
window.onscroll = function() {
  	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	var a = $('#item_top').height();
	$("#item_top").css("background-position-y", -scrolled*1.7 , "px;");

  if(scrolled > a){
  	var header = document.getElementById("section_first"); 
  	$('#header_fix').addClass('fixed');
  }
  else{$('#header_fix').removeClass('fixed');}
}
 $('#menu_href').click(function(){
 	
 	$('#menu').addClass('active');
 });
 $('#menu').click(function(){
 	$('#menu').removeClass('active');
 });
  $('.end').click(function(){
 	$('#menu').removeClass('active');
 });
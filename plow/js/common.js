window.addEventListener("DOMContentLoaded", function() {
function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(event) {
    var matrix = this.defaultValue,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
        def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}

    var input = document.querySelector("input");
    input.addEventListener("input", mask, false)
});

$(".add_product").click(function () {
    

	var Hide=$(this).parent("div.right_details");
    var h=$(Hide).parent("div.select");
	$(h).append('<div class="plus"><div class="offer"><span>Плов (праздничный)</span><span>Выберите порцию:</span></div><a><div class="add_product btn"><span>100гр</span><span>200p</span></div></a><a><div class="add_product btn"><span>100гр</span><span>200p</span></div></a><a><div class="add_product btn"><span>100гр</span><span>200p</span></div></a><span class="composition">Состав:<br> рис, мясо, морковь, лук, приправы</span></div></div>');
	$(h).children("img").css('opacity','0.3');
    $(h).children(".item_title").css('opacity','0.3');
	$(this).addClass('btn_active');

	       $('.add_product').click(function () {
	       	$(this).addClass('btn_active');
			  
	       });
       
    });
var ch=0;
$(".toggle").click(function () {
    
ch=ch+1;
if(ch==1){
    $(".mobile_menu").append('<li class="menu_item"><a href=""><b>SUP</b></a></li><li class="menu_item"><a href=""><b>SUP</b></a></li><li class="menu_item"><a href=""><b>SUP</b></a></li>');
}
else{
    $(".menu_item").remove();
    ch=0;
}


});
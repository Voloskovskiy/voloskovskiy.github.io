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

$('#add_product').click(function () { var count=0;
       $('.plus').css({'display':'flex'});

	       $('.plus .btn').click(function () {
	       	
	       	if(this.classList.contains('btn_active'))
	       	{
	       		count=count-1;
	       		$(this).removeClass('btn_active');	
				
	       		if(count==0){
	       			a.innerHTML='ЗАКАЗАТЬ';
	       			$('#add_product').removeClass('btn_active');
	       	}
	       		     		
	       	}
	       	else
	       	{	count++;
	       		$(this).addClass('btn_active');
	       		$('#add_product').addClass('btn_active');
	       		a.innerHTML='В ЗАКАЗЕ';  

	       	}       
	       });
       
    })
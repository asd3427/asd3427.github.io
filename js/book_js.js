$('.waters').ripples({
	
	resolution: 512,
	dropRadius: 20, //px
	perturbance: 0.04,
	
});

setInterval(function () {
	var $el = $('.waters');
	var x = Math.random() * $el.outerWidth();
	var y = Math.random() * $el.outerHeight();
	var dropRadius = 20;
	var strength = 0.08 + Math.random() * 0.08;
	$el.ripples('drop', x, y, dropRadius, strength);
}, 400);
;

$(".logo img").fadeIn(10000);

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}


sleep(8000).then(() => {
	
	$('.background').fadeOut(2000)
	$('.index').show(4000);
	
	
	// 这里写sleep之后需要去做的事情
})

$(function () {
	//例子1
	$('.text_bar').lu_word();
});

products_list = $('.about .product_list')
console.log(products_list)
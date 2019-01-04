setTimeout(function(){
//bar 생성
$(".gnb-wrap").append("<span class='bar'></span>")
//gnb
var bar, positionX;
	bar = $(".gnb-wrap .bar");
	positionX = $(".gnb-wrap > ul > li > a").map(function( index, elem ){
		var left = Math.floor($(elem).offset().left);
		return  $(window).width() > 1100 ? (left) - ($(window).width() - 1100) / 2 : left
	}).get();

$(".gnb-wrap > ul > li").on("mouseenter",function(){
	var subGnbIdx = $(this).index();
	if ( $(".total-menu-wrap").hasClass('on') ) return false;

	$(this).addClass('topMenuOn').siblings().removeClass('topMenuOn')
	
	// gnb 움직이는 바
	var posX = Math.floor(positionX[subGnbIdx]);
	bar.css({
		width : $(".gnb-wrap > ul > li").eq(subGnbIdx).outerWidth(true),
		'-webkit-transform': 'translate('+ posX+'px , 49px )',
		'-moz-transform': 'translate('+ posX+'px , 49px)',
		transform : 'translate('+ posX+'px , 49px)'
	}).addClass('on')

});

$(".gnb-wrap").on("mouseleave",function(){
	bar.removeClass('on')
});
}, 0)
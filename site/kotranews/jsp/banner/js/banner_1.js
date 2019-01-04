$(document).ready(function(){ 
	var $banner_1 = $('.banner_1').slick({ 
		pauseOnHover : false, 
		draggable: false, 
		arrows : true, 
		lazyLoad: 'ondemand', 
		autoplay: true, 
		autoplaySpeed: 2000, 
		prevArrow : "<a href='javascript:;' title='이전' class='slick-prev'><img src='/site/kotranews/upload/banner/1/1_20160711130220_0d0871f0806eae32d30983b62252da50.png' alt='이전'/></a>", 
		nextArrow : "<a href='javascript:;' title='다음' class='slick-next'><img src='/site/kotranews/upload/banner/1/1_20160711130220_19bc916108fc6938f52cb96f7e087941.png' alt='다음'/></a><a href='javascript:;' title='시작' class='slick-play'><img src='/site/kotranews/upload/banner/1/1_20160711130220_31839b036f63806cba3f47b93af8ccb5.png' alt='시작'/></a><a href='javascript:;' title='정지' class='slick-stop'><img src='/site/kotranews/upload/banner/1/1_20160711130220_ed3d2c21991e3bef5e069713af9fa6ca.png' alt='정지'/></a>", 
		dots: false, 
		infinite: true, 
		speed: 800, 
		slidesToShow: 5
	}); 

$('.banner_1 .slick-play').hide();

	$('.banner_1 .slick-play').on('click', function(){ 
		$banner_1.slick('slickPlay');
		$('.banner_1 .slick-play').hide();
		$('.banner_1 .slick-stop').show();
		$('.banner_1 .slick-stop').focus();
	}); 

	$('.banner_1 .slick-stop').on('click', function(){ 
		$banner_1.slick('slickPause');
		$('.banner_1 .slick-stop').hide();
		$('.banner_1 .slick-play').show();
		$('.banner_1 .slick-play').focus();
	}); 

	$('.banner_1 .slick-prev, .slick-next').on('click', function(){ 
		$banner_1.slick('slickPause');
		$('.banner_1 .slick-stop').show();
		$('.banner_1 .slick-play').hide();
	}); 

}); 
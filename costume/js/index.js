$(function() {
	//alert($(window).height());//1298
	//alert($('#itc').offset().top);//1258
	//alert($('.banner001').height());//1760
	$(window).scroll(function(){
		var s1;
		var s2;
		var s3;
		s1 = $('.banner001').height();
		s2 = $(window).height();
		s3 = $('#itc').height();
		if($(window).scrollTop()>(s1-s2+s3)){
			$('#itc').css({'color':'#000'});
		}else{
			$('#itc').css({'color':'#fff'});
		}
	});
	
	
	
	
});
// JavaScript Document
$(function(){
	//alert($(window).width()); //浏览器当前窗口可视区域宽度
	//alert($(window).height()); //浏览器当前窗口可视区域高度
	//alert($(document).width());//浏览器当前窗口文档对象宽度
	//alert($(document).height()); //浏览器当前窗口文档的高度
	//获取Banner实际内容区+padding的宽高
	//var ban_width;
	//var ban_heigth;
	//ban_width=$('#carousel-example-generic').innerWidth();
	//ban_heigth=$('#carousel-example-generic').innerHeight();
	
	//核心团队中间照片
	$(function(){
		var n = 1;
		var dir = 1;
		/*向左播放*/
		function runL(){
			var div;
			div=1;
			if(n<4){
			n=n+1;
			}else{
			n=2;
			$(".scrollobj").css({left:-300*(n-1)});
			}
			$(".scrollobj").stop(true,true).animate({left:-300*n},1000);
			/*控钮切换(左)*/
			$(".ctrl li").removeClass("current2");
			if(n===4){
				$(".ctrl li").eq(0).addClass("current2");
			}else{
				$(".ctrl li").eq(n-1).addClass("current2");
			}
		}
		var tL;
		tL = setInterval(runL,2000);
		/*向右播放*/
		function runR(){
			var div;
			div=0;
			if(n>0){
			n=n-1;
			}else{
			n=4;
			$(".scrollobj").css({left:-300*(n+1)});	
			}
			$(".scrollobj").stop(true,true).animate({left:-300*n},1000);
			/*控钮切换(右)*/
			$(".ctrl li").removeClass("current2");
			//if(n==6){
				//$(".ctrl li").eq(0).addClass("current");
			//}else{
			$(".ctrl li").eq(n-1).addClass("current2");
			//}
		}
		/*停止*/
		$(".win").mouseenter(function(){
			//document.title=dir;
			if(dir){
			clearInterval(tL);
			}else{
			//clearInterval(tR);
			}
		}).mouseleave(function(){
			//document.title=dir;
			if(dir){
			tL = setInterval(runL,2000);
			}else{
			//tR = setInterval(runR,2000);
			}
		});
		/*点控钮*/
		$(".ctrl li").click(function(){
			n=$(this).index()+1;
			$(".ctrl li").removeClass("current2");
			$(this).addClass("current2");
			$(".scrollobj").stop(true,true).animate({left:-300*n},1000);
		});
	});	
	
	$(".silder-main").css({'height':'800px'});
	
	//banner全屏
	$('.carousel-inner img').css({
		'width':$(window).width(),
		'height':$(window).height()
	});
	
	//手机端案例特效
	$('.mCaseBigBox').css({
		'width' : $('.mCaseView').width() * 5,
		'height' : $('.mCaseView').height(),
	});
	//案例底部图片宽度占手机端全屏
	$('.mCaseFoot img').css({
		'width' : $(window).width()
	});
	//案例动效开始
	//定义位移变量和速度变量
	var s = 0;
	var v = -$(".mCaseView").width();
	$('.mCaseBigBox').css({
		'left' : v + 'px'
	});
	//自动播放
	var n = 1;
	var dir = 1;
	/*向左播放*/
	function mCaseRunL() {
		$(".mCaseBigBox").stop(true, true).animate({
			left : v * n
		}, 1000);
		if (n < 4) {
			n = n + 1;
		} else {
			n = 2;
			$(".mCaseBigBox").stop(true, true).css({
				left : v * (n - 1)
			});
		}
	}
	var tL;
	tL = setInterval(mCaseRunL, 1500);
	/*停止*/
	$(".mCaseView").mouseenter(function() {
		if (dir) {
			clearInterval(tL);
		}
	}).mouseleave(function() {
		if (dir) {
			tL = setInterval(mCaseRunL, 2000);
		}
	});
	//手机端案例动效结束
	
	
});
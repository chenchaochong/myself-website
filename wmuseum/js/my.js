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
		
	
	
	//banner全屏
	$('.carousel-inner img').css({
		'width':$(window).width(),
		'height':$(window).height()
	});
	
});
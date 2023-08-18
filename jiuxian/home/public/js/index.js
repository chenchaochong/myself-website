// JavaScript Document
$(function(){
	//我的酒仙下拉菜单
	$('.right .jiuxian').mouseenter(function(){
	$(this).find('.myjiuxian_ico').css({'transform':'rotate(180deg)','margin-left':'0px','margin-top':'10px'});
	$(this).find('.jiuxian-top').css({'background':'#fff'});
	$(this).find('.mydropdown').show();
	});	
	$('.right .jiuxian').mouseleave(function(){
		$(this).find('.jiuxian-top').css({'background':'#f2f2f2'});
		$(this).find('.mydropdown').hide();
	});	
	//$('.right').eq(0).show();
	//左侧导航	
	$('.vertical-nav-ul li').mouseenter(function(){
		$(this).css({'background':'#fff'});
		$(this).find('span').css({'color':'#b61d1d'});
		$('.vertical-nav-ul li').not($(this)).css({'background':'#b61d1d'});
		$(this).find('.right').show();
		$('.right').not($(this).find('.right')).hide();
	});
	$('.vertical-nav-ul li').mouseleave(function(){
		$(this).find('.right').hide();
		$(this).find('span').css({'color':'#fff'});
		$(this).css({'background':'#b61d1d'});
	});	
	//左侧大标签页
	$('.indextabboxtop ul li').mouseenter(function(){
		$(this).addClass('active');
		$('.indextabboxtop ul li').not($(this)).removeClass('active');
		var idx;
		idx = $(this).index('.indextabboxtop ul li');
		$('.indextabcon').eq(idx).show();
		$('.indextabcon').not($('.indextabcon').eq(idx)).hide();
	});
	$('.indextabcon').eq(0).show();	
	//右侧小标签页
	$('.indextabnewcon').eq(0).show();	
	$('.indexTabNewNav-gonggao').mouseenter(function(){
		$(this).addClass('active');
		$('.indexTabNewNav-gonggao').not($(this)).removeClass('active');
		var idx;
		idx = $(this).index('.indexTabNewNav-gonggao');
		$('.indextabnewcon').eq(idx).show();
		$('.indextabnewcon').not($('.indextabnewcon').eq(idx)).hide();
	});	
	//广告区小幻灯片
	$(document).ready(function(){
	  $('.bxslider').bxSlider();
	});	
	//广告区小幻灯片
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
		$(".scrollobj").css({left:-268*(n-1)});
		}
		$(".scrollobj").stop(true,true).animate({left:-268*n},1000);
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
		$(".scrollobj").css({left:-268*(n+1)});	
		}
		$(".scrollobj").stop(true,true).animate({left:-268*n},1000);
		/*控钮切换(右)*/
		$(".ctrl li").removeClass("current2");
		//if(n==6){
			//$(".ctrl li").eq(0).addClass("current");
		//}else{
		$(".ctrl li").eq(n-1).addClass("current2");
		//}
	}
	//var tR;
	//tR = setInterval(runR,2000);
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
		$(".scrollobj").stop(true,true).animate({left:-268*n},1000);
	});
});	
	//广告区小幻灯片delay()
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
		$(".scrollobj1").css({left:-268*(n-1)})	;
		}
		$(".scrollobj1").stop(true,true).delay(800).animate({left:-268*n},1000);
		/*控钮切换(左)*/
		$(".ctrl1 li").removeClass("current1");
			if(n===4){
				$(".ctrl1 li").eq(0).addClass("current1");
			}else{
				$(".ctrl1 li").eq(n-1).addClass("current1");
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
			$(".scrollobj1").css({left:-268*(n+1)});
			}
			$(".scrollobj1").stop(true,true).delay(800).animate({left:-268*n},1000);
			/*控钮切换(右)*/
			$(".ctrl1 li").removeClass("current1");
			//if(n==6){
				//$(".ctrl li").eq(0).addClass("current");
			//}else{
			$(".ctrl1 li").eq(n-1).addClass("current1");
			//}
		}
		//tR = setInterval(runR,2000);
		/*停止*/
		$(".win1").mouseenter(function(){
			//document.title=dir;
			var tR;
			if(dir){
			clearInterval(tL);
			}
			else{
			clearInterval(tR);	
			}
		}).mouseleave(function(){
			//document.title=dir;
			var tR;
			if(dir){
			tL = setInterval(runL,2000);
			}else{
			tR = setInterval(runR,2000);
			}
		});
		/*点控钮*/
		$(".ctrl1 li").click(function(){
			n=$(this).index()+1;
			$(".ctrl1 li").removeClass("current1");
			$(this).addClass("current1");
			$(".scrollobj1").stop(true,true).animate({left:-268*n},1000);
		});
	});	
	//1优惠推荐
	$('.titlebox-t2 span').click(function(){
		$(this).addClass('active');
		$('.titlebox-t2 span').not($(this)).removeClass('active');
	});
	//2优惠推荐手动箭头轮播
	var s;
	s=0;
	var v;
	v=-1200;
	$('.raceRight').click(function(){
		s+=v;
		if(s<=-2400){
			s=-2400;
		}
		$('.raceListWrap .receBoxs').stop().animate({'left':s+'px'},500);
	});
	$('.raceLeft').click(function(){
		s-=v;
		if(s>=0){
			s=0;
		}
		$('.raceListWrap .receBoxs').stop().animate({'left':s+'px'},500);
	});		
	//3优惠推荐手动点轮播
	$('.titlebox-t2 span').click(function(){
		var idx;
		idx=$(this).index('.titlebox-t2 span');
		s=idx*v;
		$('.raceListWrap .receBoxs').stop().animate({'left':s+'px'},500);
	});	
	//白酒馆轮播
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
		$(".scrollobj2").css({left:-210*(n-1)})	;
		}
		$(".scrollobj2").stop(true,true).animate({left:-210*n},1000);
		/*控钮切换(左)*/
		$(".ctrl2 li").removeClass("current2");
			if(n===4){
				$(".ctrl2 li").eq(0).addClass("current2");
			}else{
				$(".ctrl2 li").eq(n-1).addClass("current2");
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
			$(".scrollobj2").css({left:-210*(n+1)});
			}
			$(".scrollobj2").stop(true,true).animate({left:-210*n},1000);
			/*控钮切换(右)*/
			$(".ctrl2 li").removeClass("current2");
			//if(n==6){
				//$(".ctrl li").eq(0).addClass("current");
			//}else{
			$(".ctrl2 li").eq(n-1).addClass("current2");
			//}
		}
		//tR = setInterval(runR,2000);
		/*停止*/
		$(".win2").mouseenter(function(){
			//document.title=dir;
			var tR;
			if(dir){
			clearInterval(tL);
			}
			else{
			clearInterval(tR);	
			}
		}).mouseleave(function(){
			//document.title=dir;
			var tR;
			if(dir){
			tL = setInterval(runL,2000);
			}else{
			tR = setInterval(runR,2000);
			}
		});
		/*点控钮*/
		$(".ctrl2 li").click(function(){
			n=$(this).index()+1;
			$(".ctrl2 li").removeClass("current2");
			$(this).addClass("current2");
			$(".scrollobj2").stop(true,true).animate({left:-210*n},1000);
		});
	});	
	//葡萄馆轮播
	$(function(){
	var n = 1;
	var dir = 1;
	/*向左播放*/
	function runL(){
		var div;
		div=1;
		if(n<3){
		n=n+1;
		}else{
		n=2;
		$(".scrollobj3").css({left:-210*(n-1)})	;
		}
		$(".scrollobj3").stop(true,true).animate({left:-210*n},1000);
		/*控钮切换(左)*/
		$(".ctrl3 li").removeClass("current3");
			if(n===3){
				$(".ctrl3 li").eq(0).addClass("current3");
			}else{
				$(".ctrl3 li").eq(n-1).addClass("current3");
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
			n=3;
			$(".scrollobj3").css({left:-210*(n+1)});
			}
			$(".scrollobj3").stop(true,true).animate({left:-210*n},1000);
			/*控钮切换(右)*/
			$(".ctrl3 li").removeClass("current3");
			//if(n==6){
				//$(".ctrl li").eq(0).addClass("current");
			//}else{
			$(".ctrl3 li").eq(n-1).addClass("current3");
			//}
		}
		//tR = setInterval(runR,2000);
		/*停止*/
		$(".win3").mouseenter(function(){
			//document.title=dir;
			var tR;
			if(dir){
			clearInterval(tL);
			}
			else{
			clearInterval(tR);	
			}
		}).mouseleave(function(){
			//document.title=dir;
			var tR;
			if(dir){
			tL = setInterval(runL,2000);
			}else{
			tR = setInterval(runR,2000);
			}
		});
		/*点控钮*/
		$(".ctrl3 li").click(function(){
			n=$(this).index()+1;
			$(".ctrl3 li").removeClass("current3");
			$(this).addClass("current3");
			$(".scrollobj3").stop(true,true).animate({left:-210*n},1000);
		});
	});
	//洋酒馆轮播
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
		$(".scrollobj4").css({left:-210*(n-1)})	;
		}
		$(".scrollobj4").stop(true,true).animate({left:-210*n},1000);
		/*控钮切换(左)*/
		$(".ctrl4 li").removeClass("current4");
			if(n===4){
				$(".ctrl4 li").eq(0).addClass("current4");
			}else{
				$(".ctrl4 li").eq(n-1).addClass("current4");
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
			$(".scrollobj4").css({left:-210*(n+1)});
			}
			$(".scrollobj4").stop(true,true).animate({left:-210*n},1000);
			/*控钮切换(右)*/
			$(".ctrl4 li").removeClass("current4");
			//if(n==6){
				//$(".ctrl li").eq(0).addClass("current");
			//}else{
			$(".ctrl4 li").eq(n-1).addClass("current4");
			//}
		}
		//tR = setInterval(runR,2000);
		/*停止*/
		$(".win4").mouseenter(function(){
			//document.title=dir;
			var tR;
			if(dir){
			clearInterval(tL);
			}
			else{
			clearInterval(tR);	
			}
		}).mouseleave(function(){
			//document.title=dir;
			var tR;
			if(dir){
			tL = setInterval(runL,2000);
			}else{
			tR = setInterval(runR,2000);
			}
		});
		/*点控钮*/
		$(".ctrl4 li").click(function(){
			n=$(this).index()+1;
			$(".ctrl4 li").removeClass("current4");
			$(this).addClass("current4");
			$(".scrollobj4").stop(true,true).animate({left:-210*n},1000);
		});
	});
	//养生酒馆轮播
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
		$(".scrollobj5").css({left:-210*(n-1)})	;
		}
		$(".scrollobj5").stop(true,true).animate({left:-210*n},1000);
		/*控钮切换(左)*/
		$(".ctrl5 li").removeClass("current5");
			if(n===4){
				$(".ctrl5 li").eq(0).addClass("current5");
			}else{
				$(".ctrl5 li").eq(n-1).addClass("current5");
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
			$(".scrollobj5").css({left:-210*(n+1)});
			}
			$(".scrollobj5").stop(true,true).animate({left:-210*n},1000);
			/*控钮切换(右)*/
			$(".ctrl5 li").removeClass("current5");
			//if(n==6){
				//$(".ctrl li").eq(0).addClass("current");
			//}else{
			$(".ctrl5 li").eq(n-1).addClass("current5");
			//}
		}
		//tR = setInterval(runR,2000);
		/*停止*/
		$(".win5").mouseenter(function(){
			//document.title=dir;
			var tR;
			if(dir){
			clearInterval(tL);
			}
			else{
			clearInterval(tR);	
			}
		}).mouseleave(function(){
			//document.title=dir;
			var tR;
			if(dir){
			tL = setInterval(runL,2000);
			}else{
			tR = setInterval(runR,2000);
			}
		});
		/*点控钮*/
		$(".ctrl5 li").click(function(){
			n=$(this).index()+1;
			$(".ctrl5 li").removeClass("current5");
			$(this).addClass("current5");
			$(".scrollobj5").stop(true,true).animate({left:-210*n},1000);
		});
	});
	//食尚轮播
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
		$(".scrollobj6").css({left:-210*(n-1)})	;
		}
		$(".scrollobj6").stop(true,true).animate({left:-210*n},1000);
		/*控钮切换(左)*/
		$(".ctrl6 li").removeClass("current6");
			if(n===4){
				$(".ctrl6 li").eq(0).addClass("current6");
			}else{
				$(".ctrl6 li").eq(n-1).addClass("current6");
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
			$(".scrollobj6").css({left:-210*(n+1)});
			}
			$(".scrollobj6").stop(true,true).animate({left:-210*n},1000);
			/*控钮切换(右)*/
			$(".ctrl6 li").removeClass("current6");
			//if(n==6){
				//$(".ctrl li").eq(0).addClass("current");
			//}else{
			$(".ctrl6 li").eq(n-1).addClass("current6");
			//}
		}
		//tR = setInterval(runR,2000);
		/*停止*/
		$(".win6").mouseenter(function(){
			//document.title=dir;
			var tR;
			if(dir){
			clearInterval(tL);
			}
			else{
			clearInterval(tR);	
			}
		}).mouseleave(function(){
			//document.title=dir;
			var tR;
			if(dir){
			tL = setInterval(runL,2000);
			}else{
			tR = setInterval(runR,2000);
			}
		});
		/*点控钮*/
		$(".ctrl6 li").click(function(){
			n=$(this).index()+1;
			$(".ctrl6 li").removeClass("current6");
			$(this).addClass("current6");
			$(".scrollobj6").stop(true,true).animate({left:-210*n},1000);
		});
	});	
	//官方推荐下方三角滑动（判断x坐标）
	$('.contentThree .titleBox ul li').mouseenter(function(){
		var x;
		x=$(this).position().left-351;
		$('.contentThree .titleSlider').stop().animate({
			'left':x+'px'
		},500);
	});	
	//官方推荐中的品牌图标滑动效果
	$('.logobox-jiu img').hover(
		function(){
		$(this).stop().animate({'margin-left':'-100px'},200);
		},
		function(){
		$(this).stop().animate({'margin-left':'0px'},200);	
		}
	);	
	//官方推荐标签页
	$('.logobox-one').show();
	$('.contentThree .titleBox ul li').mouseenter(function(){
		var idx;
		idx=$(this).index('.contentThree .titleBox li');
		$('.lbslider').eq(idx).show();
		$('.lbslider').not($('.lbslider').eq(idx)).hide();
	});	
	//官方推荐手动箭头左右滑动
	$('.bsrightctrl').click(function(){
		$('.logoBox .one').animate({'left':'-1200px'},200);
	});	
	$('.bsleftctrl').click(function(){
		$('.logoBox .one').animate({'left':'0px'},200);
	});	
	//滚动监听定高
	var sw;
	sw=$(window).width();
	$('.returntop').css({'height':sw+'px'});
	//右侧我
	$('.rightSidebarCon1').mouseenter(function(){
		var x;
		x=$(this).position().left;
		var y;
		y=$(this).position().top+250;
		$('.sliderbar').show();
	});
	$('.rightSidebarCon1').mouseleave(function(){
		var x;
		x=$(this).position().left;
		var y;
		y=$(this).position().top+250;
		$('.sliderbar').hide();
	});	
	//右侧收藏
	$('.rightSidebarCon2').mouseenter(function(){		
		$('.rightSidebarCon2-sliderbar').show();
	});
	$('.rightSidebarCon2').mouseleave(function(){		
		$('.rightSidebarCon2-sliderbar').hide();
	});	
	//右侧用户反馈
	$('.rightSidebarBot-fankui').mouseenter(function(){		
		$('.rightSidebarBot-fankui-info').show();
	});
	$('.rightSidebarBot-fankui').mouseleave(function(){		
		$('.rightSidebarBot-fankui-info').hide();
	});	
	//右侧微信
	$('.rightSidebarBot-weixin').mouseenter(function(){		
		$('.rightSidebarBot-weixin-info').show();
	});
	$('.rightSidebarBot-weixin').mouseleave(function(){		
		$('.rightSidebarBot-weixin-info').hide();
	});	
	//窗口右侧缓缓回到顶部
	$('.rightSidebarBot-rtop').click(function(){
		var s;
		var v;		
		s=$(window).scrollTop();		
		v=1000;
		
		var sobj;
		sobj=setInterval(function(){
			s-=v;
			if(s<=0){
				s=0;
				clearInterval(sobj);
			}
			$(window).scrollTop(s);
		},100);
		
	});	
	//窗口左侧滚动监听	
	//回到顶部
	$('.leftjianting-fback').click(function(){
		var s;
		var v;		
		s=$(window).scrollTop();		
		v=1000;
		
		var sobj;
		sobj=setInterval(function(){
			s-=v;
			if(s<=0){
				s=0;
				clearInterval(sobj);
				$('.leftjianting').hide();
			}
			$(window).scrollTop(s);
		},100);
	});	
	//1F,2F,3F,4F,5F
	//f1name=$('.leftjianting-f1').find('a').attr('name1');
	//$('.leftjianting-f1').find('a').html(f1name).css({'display':'block','color':'#fff','text-decoration':'none','width':'30px','background':'rgb(212,61,78)'});
	//$('.leftjianting-f1').find('i').hide();	
	//左侧导航1楼图标
	$('.leftjianting-f1').mouseenter(function(){
		//f1name2=$('.leftjianting-f1').find('a').attr('name2');
		$(this).find('i').css({'opacity':'0'});		
		$(this).find('a').css({'display':'block','color':'#fff','text-decoration':'none'});
		$(this).find('a').animate({'width':'60px'},500);
	});
	$('.leftjianting-f1').mouseleave(function(){		
		$(this).find('a').css({'display':'none'});
		$(this).find('a').animate({'width':'0px'},500,function(){
			$(this).hide();
			$('.leftjianting-f1').find('i').css({'opacity':'1'});
		});
	});	
	$('.leftjianting-f1').click(function(){
		var f;
		var y;
		f=$(this).find('a').attr('name1');
		y=$('#'+f).offset().top-200;
		$(window).scrollTop(y);
	});	
	//左侧导航2楼图标
	$('.leftjianting-f2').mouseenter(function(){
		$(this).find('i').css({'opacity':'0'});		
		$(this).find('a').css({'display':'block','color':'#fff','text-decoration':'none'});
		$(this).find('a').animate({'width':'60px'},500);
	});
	$('.leftjianting-f2').mouseleave(function(){		
		$(this).find('a').css({'display':'none'});
		$(this).find('a').animate({'width':'0px'},500,function(){
			$(this).hide();
			$('.leftjianting-f2').find('i').css({'opacity':'1'});
		});
	});
	$('.leftjianting-f2').click(function(){
		var f;
		var y;
		f=$(this).find('a').attr('name1');
		y=$('#'+f).offset().top-200;
		$(window).scrollTop(y);
	});	
	//左侧导航3楼图标
	$('.leftjianting-f3').mouseenter(function(){
		$(this).find('i').css({'opacity':'0'});		
		$(this).find('a').css({'display':'block','color':'#fff','text-decoration':'none'});
		$(this).find('a').animate({'width':'60px'},500);
	});
	$('.leftjianting-f3').mouseleave(function(){		
		$(this).find('a').css({'display':'none'});
		$(this).find('a').animate({'width':'0px'},500,function(){
			$(this).hide();
			$('.leftjianting-f3').find('i').css({'opacity':'1'});
		});
	});
	$('.leftjianting-f3').click(function(){
		var f;
		var y;
		f=$(this).find('a').attr('name1');
		y=$('#'+f).offset().top-200;
		$(window).scrollTop(y);
	});	
	//左侧导航4楼图标
	$('.leftjianting-f4').mouseenter(function(){
		$(this).find('i').css({'opacity':'0'});		
		$(this).find('a').css({'display':'block','color':'#fff','text-decoration':'none'});
		$(this).find('a').animate({'width':'110px'},500);
	});
	$('.leftjianting-f4').mouseleave(function(){		
		$(this).find('a').css({'display':'none'});
		$(this).find('a').animate({'width':'0px'},500,function(){
			$(this).hide();
			$('.leftjianting-f4').find('i').css({'opacity':'1'});
		});
	});
	$('.leftjianting-f4').click(function(){
		var f;
		var y;
		f=$(this).find('a').attr('name1');
		y=$('#'+f).offset().top-200;
		$(window).scrollTop(y);
	});	
	//左侧导航5楼图标
	$('.leftjianting-f5').mouseenter(function(){
		$(this).find('i').css({'opacity':'0'});		
		$(this).find('a').css({'display':'block','color':'#fff','text-decoration':'none'});
		$(this).find('a').animate({'width':'60px'},500);
	});
	$('.leftjianting-f5').mouseleave(function(){		
		$(this).find('a').css({'display':'none'});
		$(this).find('a').animate({'width':'0px'},500,function(){
			$(this).hide();
			$('.leftjianting-f5').find('i').css({'opacity':'1'});
		});
	});
	$('.leftjianting-f5').click(function(){
		var f;
		var y;
		f=$(this).find('a').attr('name1');
		y=$('#'+f).offset().top-200;
		$(window).scrollTop(y);
	});	
	//监听开始		
	$(window).scroll(function(){
		var st;
		var ft;
		st=$(window).scrollTop();
		ft=$('.comTitle .comIcon1').first().offset().top-200;
		if(st<ft){
			$('.leftjianting').hide();
		}else{
			$('.comTitle .comIcon1').each(function(){
			var ot;
			ot=$(this).offset().top-200;	
			
			if(st>=ot){
				$('.leftjianting').show();
				var fname1;
				var fname2;
				fname1=$(this).attr('id');
				$('.leftjianting a[name1='+fname1+']').html(fname1).css({'display':'block','width':'30px','color':'#fff'});
				$('.leftjianting').find('i').css({'opacity':'0'});
				$('.leftjianting a').not($('.leftjianting a[name1='+fname1+']')).each(function(){
					fname2=$(this).attr('name2');
					$(this).html(fname2).hide();
					$(this).next().css({'opacity':'1'});
				});
			}
		});
		}
		
	});
	
});



// JavaScript Document
$(function(){
	//此处引用：鼠标滚轮mousewheel插件
	!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
	
	$(function(){
		var i=0;
		var $btn = $('.section-btn li'),
			$wrap = $('.section-wrap'),
			$arrow = $('.arrow');
		
		/*当前页面赋值*/
		function up(){i++;if(i==$btn.length){i=0};}
		function down(){i--;if(i<0){i=$btn.length-1};}
		/*页面滑动*/
		function run(){
			$btn.eq(i).addClass('on').siblings().removeClass('on');	
			$wrap.attr("class","section-wrap").addClass(function() { return "put-section-"+i; }).find('.section').eq(i).find('.title').addClass('active');
		};
		
		/*右侧按钮点击*/
		$btn.each(function(index) {
			$(this).click(function(){
				i=index;
				run();
				if(i==1){
					fuwu();
				}else if(i==4){
					gsjs();
				}else if(i==5){
					cont();
				}else{
					fuwuelse();
				}
			})
		});
		
		/*翻页按钮点击*/
		$arrow.one('click',go);
		function go(){
			up();run();	
			setTimeout(function(){$arrow.one('click',go)},1000)
			if(i==1){
				fuwu();
			}else if(i==4){
				gsjs();
			}else if(i==5){
				cont();
			}else{
				fuwuelse();
			}
		};
		
		/*响应鼠标*/
		$wrap.one('mousewheel',mouse_);
		function mouse_(event){
			if(event.deltaY<0) {up()}
			else{down()}
			run();
			setTimeout(function(){$wrap.one('mousewheel',mouse_)},1000)
			if(i==1){
				fuwu();
			}else if(i==4){
				gsjs();
			}else if(i==5){
				cont();
			}else{
				fuwuelse();
			}
		};
		
		/*响应键盘上下键*/
		$(document).one('keydown',k);
		function k(event){
			var e=event||window.event;
			var key=e.keyCode||e.which||e.charCode;
			switch(key)	{
				case 38: down();run();	
				break;
				case 40: up();run();	
				break;
			};
			setTimeout(function(){$(document).one('keydown',k)},1000);
			if(i==1){
				fuwu();
			}else if(i==4){
				gsjs();
			}else if(i==5){
				cont();
			}else{
				fuwuelse();
			}
		}
		
		function fuwu(){
			if($(window).width() >= 1000){
				fuwuw1();
			}else{
				fuwuw2();
			}
		}	
			
			
		function fuwuelse(){
		}
		function fuwuw1(){
			//服务动效
			//1.默认文字隐藏，图标中间偏上
			//2.图标向上移动，文字显示
			//3.文字边上的两条线显示
			//服务1
			$('.tubiao1').animate({
				top:'0'
			},400,function(){
				$(this).animate({
					top:'30px'
				},100);
			});
			$('.fuwu1 .tubiao_title').show().animate({
				top:'130px'
			},400,function(){
				$(this).animate({
					top:'150px'
				},100);
			});	
			$('.fuwu1 .tubiao_text1').delay().show(400).animate({top:"60%"},100,function(){
				$(this).animate({
					top:'50%'
				},100);
			});
			$('.fuwu1 .tubiao_text2').delay().show(500).animate({top:"50%"},100,function(){
				$(this).animate({
					top:'60%'
				},100);
			});
			$('.fuwu1 .tubiaoll').delay().show(600).animate({top:"55%"},100,function(){
				$(this).animate({
					top:'45%'
				},100);
			});
			$('.fuwu1 .tubiaorl').delay().show(650).animate({top:"47%"},100,function(){
				$(this).animate({
					top:'57%'
				},100);
			});
			//服务2
			$('.tubiao2').delay(700).show().animate({top:'10px'},400,function(){
				$(this).animate({top:'30px'},100);
			});
			$('.fuwu2 .tubiao_title').delay(700).show().animate({top:'130px'},400,function(){
				$(this).animate({top:'150px'},100);
			});
			$('.fuwu2 .tubiao_text1').delay().show(900).animate({top:"60%"},100,function(){
				$(this).animate({
					top:'50%'
				},100);
			});
			$('.fuwu2 .tubiao_text2').delay().show(900).animate({top:"50%"},100,function(){
				$(this).animate({
					top:'60%'
				},100);
			});
			$('.fuwu2 .tubiaoll').delay().show(1000).animate({top:"55%"},100,function(){
				$(this).animate({
					top:'45%'
				},100);
			});
			$('.fuwu2 .tubiaorl').delay().show(1050).animate({top:"47%"},100,function(){
				$(this).animate({
					top:'57%'
				},100);
			});
			//服务3
			$('.tubiao3').delay(1100).show().animate({top:'10px'},400,function(){
				$(this).animate({top:'30px'},100);
			});
			$('.fuwu3 .tubiao_title').delay(1100).show().animate({top:'130px'},400,function(){
				$(this).animate({top:'150px'},100);
			});
			$('.fuwu3 .tubiao_text1').delay().show(1500).animate({top:"60%"},100,function(){
				$(this).animate({
					top:'50%'
				},100);
			});
			$('.fuwu3 .tubiao_text2').delay().show(1600).animate({top:"50%"},100,function(){
				$(this).animate({
					top:'60%'
				},100);
			});
			$('.fuwu3 .tubiaoll').delay().show(1700).animate({top:"55%"},100,function(){
				$(this).animate({
					top:'45%'
				},100);
			});
			$('.fuwu3 .tubiaorl').delay().show(1750).animate({top:"47%"},100,function(){
				$(this).animate({
					top:'57%'
				},100);
			});
			//服务4
			$('.tubiao4').delay(1800).show().animate({top:'10px'},400,function(){
				$(this).animate({top:'30px'},100);
			});
			$('.fuwu4 .tubiao_title').delay(1800).show().animate({top:'130px'},400,function(){
				$(this).animate({top:'150px'},100);
			});
			$('.fuwu4 .tubiao_text1').delay().show(2200).animate({top:"60%"},100,function(){
				$(this).animate({
					top:'50%'
				},100);
			});
			$('.fuwu4 .tubiao_text2').delay().show(2300).animate({top:"50%"},100,function(){
				$(this).animate({
					top:'60%'
				},100);
			});
			$('.fuwu4 .tubiaoll').delay().show(2400).animate({top:"55%"},100,function(){
				$(this).animate({
					top:'45%'
				},100);
			});
			$('.fuwu4 .tubiaorl').delay().show(2450).animate({top:"47%"},100,function(){
				$(this).animate({
					top:'57%'
				},100);
			});
		}
		function fuwuw2(){
			//手机端服务动效
			//1.默认文字隐藏，图标中间偏上
			//2.图标向上移动，文字显示
			//3.文字边上的两条线显示
			//服务1
			$('.tubiao1').animate({
				top:'0'
			},400,function(){
				$(this).animate({
					top:'30px'
				},100);
			});
			$('.fuwu1 .tubiao_title').show().animate({
				top:'2px'
			},400,function(){
				$(this).animate({
					top:'5px'
				},100);
			});	
			$('.fuwu1 .tubiao_text1').delay().css({
				'':''
			}).show(400).animate({top:"50%"},100,function(){
				$(this).animate({
					top:'40%'
				},100);
			});
			$('.fuwu1 .tubiao_text2').delay().show(500).animate({top:"50%"},100,function(){
				$(this).animate({
					top:'40%'
				},100);
			});
			//服务2
			$('.tubiao2').delay(700).show().animate({top:'10px'},400,function(){
				$(this).animate({top:'30px'},100);
			});
			$('.fuwu2 .tubiao_title').delay(700).show().animate({top:'2px'},400,function(){
				$(this).animate({top:'5px'},100);
			});
			$('.fuwu2 .tubiao_text1').delay().show(900).animate({top:"50%"},100,function(){
				$(this).animate({
					top:'40%'
				},100);
			});
			$('.fuwu2 .tubiao_text2').delay().show(900).animate({top:"50%"},100,function(){
				$(this).animate({
					top:'40%'
				},100);
			});
			//服务3
			$('.tubiao3').delay(1100).show().animate({top:'10px'},400,function(){
				$(this).animate({top:'30px'},100);
			});
			$('.fuwu3 .tubiao_title').delay(1100).show().animate({top:'2px'},400,function(){
				$(this).animate({top:'5px'},100);
			});
			$('.fuwu3 .tubiao_text1').delay().show(1500).animate({top:"50%"},100,function(){
				$(this).animate({
					top:'40%'
				},100);
			});
			$('.fuwu3 .tubiao_text2').delay().show(1600).animate({top:"50%"},100,function(){
				$(this).animate({
					top:'40%'
				},100);
			});
			//服务4
			$('.tubiao4').delay(1800).show().animate({top:'10px'},400,function(){
				$(this).animate({top:'30px'},100);
			});
			$('.fuwu4 .tubiao_title').delay(1800).show().animate({top:'2px'},400,function(){
				$(this).animate({top:'5px'},100);
			});
			$('.fuwu4 .tubiao_text1').delay().show(2200).animate({top:"50%"},100,function(){
				$(this).animate({
					top:'40%'
				},100);
			});
			$('.fuwu4 .tubiao_text2').delay().show(2300).animate({top:"50%"},100,function(){
				$(this).animate({
					top:'40%'
				},100);
			});
		}
		//公司介绍
		function gsjs(){
			//////////////////////////////////////////////////////////////////////关于我们
			var winw;
			winw = $(window).width();
			var winwInfo;
			winwInfo = winw - 50;
			if(winw >= 1000){
				$('.gsjj_info').css({
					'width':winw/3
				});
				//菱形效果
				$('.gsjjC img').hide();
				$('.gsjjC img').show(1500).animate({
					width:"60%"
				},500);
			}else{
				$('.gsjj_info').css({
					'width':winwInfo + 'px'
				});
				//菱形效果
				$('.gsjjC img').hide();
				$('.gsjjC img').show(1500).animate({
					width:"100%"
				},500);
			}
			//9个菱形
			$('.gsjl1').mouseenter(function(){
				$(this).css({'opacity':'0.5'});
			}).mouseleave(function(){
				$(this).css({'opacity':'1'});
			});
			$('.gsjl2').mouseenter(function(){
				$(this).css({'opacity':'0.5'});
			}).mouseleave(function(){
				$(this).css({'opacity':'1'});
			});
			$('.gsjl3').mouseenter(function(){
				$(this).css({'opacity':'0.5'});
			}).mouseleave(function(){
				$(this).css({'opacity':'1'});
			});
			$('.gsjl4').mouseenter(function(){
				$(this).css({'opacity':'0.5'});
			}).mouseleave(function(){
				$(this).css({'opacity':'1'});
			});
			$('.gsjl5').mouseenter(function(){
				$(this).css({'opacity':'0.5'});
			}).mouseleave(function(){
				$(this).css({'opacity':'1'});
			});
			$('.gsjl6').mouseenter(function(){
				$(this).css({'opacity':'0.5'});
			}).mouseleave(function(){
				$(this).css({'opacity':'1'});
			});
			$('.gsjl7').mouseenter(function(){
				$(this).css({'opacity':'0.5'});
			}).mouseleave(function(){
				$(this).css({'opacity':'1'});
			});
			$('.gsjl8').mouseenter(function(){
				$(this).css({'opacity':'0.5'});
			}).mouseleave(function(){
				$(this).css({'opacity':'1'});
			});
			$('.gsjl9').mouseenter(function(){
				$(this).css({'opacity':'0.5'});
			}).mouseleave(function(){
				$(this).css({'opacity':'1'});
			});
			//文字
			$('.gsjj_title').delay(2000).show(200);
			//$('.gsjj_info0').delay(2000).hide(1500);
			$('.gsjj_info0').delay(2000).animate({
				width:'0',
				height:'0'
			},1500,function(){
				$(this).animate({
					width:'0',
					height:'10px'
				},100);
			});
		}
		
		//联系我们
		function cont(){
			////////////////////////////////////////////////////////////////////////////联系我们
			$('.contb1').animate({
				width:'0',
				height:'0'
			},1200,function(){
				$(this).animate({
					width:'10px',
					height:'10px'
				},100);
			});
		}
		
		
	
	
	
	
	
	});
	
	
	
	
});
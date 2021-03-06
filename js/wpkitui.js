jQuery(document).ready(function($){

	/*
	CSS Browser Selector v0.4.0 (Nov 02, 2010)
	Rafael Lima (http://rafael.adm.br)
	http://rafael.adm.br/css_browser_selector
	License: http://creativecommons.org/licenses/by/2.5/
	Contributors: http://rafael.adm.br/css_browser_selector#contributors
	*/
	function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);


		if($(window).width() > 770 ) {

			$('.no-flexbox .wk-cols').each(function(){
				items = $(this).children('.wk-col').length;
				width = 100 / items;
				$(this).children('.wk-col').css('width', width + '%');
			});


		} else {

			$('.no-flexbox .wk-cols').each(function(){
				$(this).children('.wk-col').css('width', '100%');
			});

		}

		$('.no-flexbox .wk-cols-m').each(function(){
			items = $(this).children('[class~="wk-col"]').length;
			width = 100 / items;
			$(this).children('[class~="wk-col"]').css('width', width + '%');
		});


		// Solo en tablet
		if($(window).width() > 415 )  {

			$('.no-flexbox .wk-cols-t').each(function(){
				items = $(this).children('[class~="wk-col"]').length;
				width = 100 / items;
				$(this).children('[class^="wk-col"]').css('width', width + '%');
			});

		} else {

			$('.no-flexbox .wk-cols-t').each(function(){
				$(this).children('[class~="wk-col"]').css('width', '100%');
			});
		}


		// Resize
		$(window).on('resize', function(){

			if($(window).width() > 770 ) {

				$('.no-flexbox .wk-cols').each(function(){
					items = $(this).children('.wk-col').length;
					width = 100 / items;
					$(this).children('.wk-col').css('width', width + '%');
				});


			} else {

				$('.no-flexbox .wk-cols').each(function(){
					$(this).children('.wk-col').css('width', '100%');
				});

			}

			$('.no-flexbox .wk-cols-m').each(function(){
				items = $(this).children('[class~="wk-col"]').length;
				width = 100 / items;
				$(this).children('[class~="wk-col"]').css('width', width + '%');
			});


			// Solo en tablet
			if($(window).width() > 415 )  {

				$('.no-flexbox .wk-cols-t').each(function(){
					items = $(this).children('[class~="wk-col"]').length;
					width = 100 / items;
					$(this).children('[class^="wk-col"]').css('width', width + '%');
				});

			} else {

				$('.no-flexbox .wk-cols-t').each(function(){
					$(this).children('[class~="wk-col"]').css('width', '100%');
				});
			}



		});

		// Clase is-scrolled en body
			$(window).scroll(function(){
				var scroll = $(window).scrollTop();

				if( scroll >= 10 ) {
					$('body').addClass('is-scrolled');
				} else {
					$('body').removeClass('is-scrolled');
				}
			});

		// Clase .mobile en body
			$(window).on('resize', function(){
				var win = $(this);
				if(win.width() < 770) {
					$('html').addClass('mobile');
					$('html').removeClass('desktop');
				} else {
					$('html').removeClass('mobile');
					$('html').addClass('desktop');
				}
			});

			// Si se carga inicialmente
			if ($(window).width() < 770) {
			   $('html').addClass('mobile');
			}

			if ($(window).width() > 771) {
			   $('html').addClass('desktop');
			}


});


$(function(){


    //ドロワーメニュー
  $('.toggle_nav,.toggle_nav_bg').on('click', function () {
    $('body').toggleClass('open');
  });

  //page_top
  var topBtn = $('.page_top');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $('body,html').animate({
         scrollTop: 0
    }, 500);
    return false;
	});


	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
	
	// $(window).scroll(function (){
	// 	$(".js-ani").each(function(){
	// 		var articlePos = $(this).offset().top;    
	// 		var scroll = $(window).scrollTop();
	// 		var windowHeight = $(window).height();
	// 		if (scroll > articlePos - windowHeight + windowHeight/5){
	// 			$(this).addClass("js-ani-on");
	// 		} else {
	// 			$(this).removeClass("js-ani-on");
	// 		}
	// 	});
	// });

		var $window = $(window);
		var $targets = $('.js-ani'); 
		var onClass = 'js-ani-on';
		// 初期表示で各要素の座標を判定して処理する
		toggleClassOnScreenEdges(50);
		
		// スクロールするたびに各要素の座標を判定して処理する
		$window.on('scroll', function () {
			toggleClassOnScreenEdges(50);
		});
		
		function toggleClassOnScreenEdges (offset) {/* クラスを付与するときの画面の上辺下辺からの距離 */ 
			if (!offset) {
				offset = 0;
			}
			var scrollTop = $window.scrollTop();
			var scrollBottom = scrollTop + $window.outerHeight();
			$targets.each(function () {
				var $target = $(this);
				var targetTop = $target.offset().top;
				var targetBottom = targetTop + $target.outerHeight();
				
				// 要素の上辺(+offset)が画面の下辺よりも上にあり、
				// 要素の下辺(-offset)が画面の上辺よりも下にあるとき、
				// 要素のすべてが画面の中にあると判定する
				if ((targetTop + offset) < scrollBottom && (targetBottom - offset) > scrollTop) {
					$target.addClass(onClass);
				} else {
					$target.removeClass(onClass);
				}
			});
		}

});

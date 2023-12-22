var $currPage;
var PageTransitions = (function() {

	var $main = $( '#pt-main' ),
		$pages = $main.children( 'div.pt-page' ),
		$page1 = $('#page1'),
		$page2 = $('#page2'),
		$page3 = $('#page3'),
		$page4 = $('#page4'),
		$page5 = $('#page5'),
		$page6 = $('#page6'),
		$page7 = $('#page7'),
		$page8 = $('#page8'),
		$page9 = $('#page9'),
		$page10 = $('#page10'),
		$myModal = $('.myModal'),
		$pt_page = $('.pt-page'),
		$page = $('.pt-touch-button'),
		current = localStorage.getItem("current"),
		isAnimating = false,
		endCurrPage = false,
		endNextPage = false,
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		// support css animations
		support = Modernizr.cssanimations;
	
	function init() {

		$pages.each( function() {
			var $page = $( this );
			$page.data( 'originalClassList', $page.attr( 'class' ) );
		} );

		$pages.eq( current ).addClass( 'pt-page-current' );
		addshadow = $page.eq(current).addClass('shadow');

		$page1.on( 'click', function() {/*일반기기*/
			if( isAnimating  || current == 0) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 0;
			localStorage.setItem('current', current);
			$minbar.attr("src", "../image/소개바/일반기기.jpg");
			nextPage();
		} );

		$page2.on( 'click', function() {/*열조리기기*/
			if( isAnimating || current == 1) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 1;
			localStorage.setItem('current', current);
			$minbar.attr("src", "../image/소개바/열조리기기.jpg");
			nextPage();
		} );

		$page3.on( 'click', function() {/*자율배식대/일반배식대*/
			if( isAnimating || current == 2) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 2;
			localStorage.setItem('current', current);
			$minbar.attr("src", "../image/소개바/자율배식대.jpg");
			nextPage();
		} );

		$page4.on( 'click', function() {/*냉장기기*/
			if( isAnimating || current == 3) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 3;
			localStorage.setItem('current', current);
			$minbar.attr("src", "../image/소개바/냉장기기.jpg");
			nextPage();
		} );

		$page5.on( 'click', function() {/*세척기기*/
			if( isAnimating || current == 4) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 4;
			localStorage.setItem('current', current);
			$minbar.attr("src", "../image/소개바/세척기기.jpg");
			nextPage();
		} );

		$page6.on( 'click', function() {/*소독기기*/
			if( isAnimating || current == 5) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 5;
			localStorage.setItem('current', current);
			$minbar.attr("src", "../image/소개바/소독기기.jpg");
			nextPage();
		} );

		$page7.on( 'click', function() {/*식품가공기기*/
			if( isAnimating || current == 6) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 6;
			localStorage.setItem('current', current);
			$minbar.attr("src", "../image/소개바/식품가공기기.jpg");
			nextPage();
		} );

		$page8.on( 'click', function() {/*취반기기/냉온정수기/배기후드*/
			if( isAnimating || current == 7) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 7;
			localStorage.setItem('current', current);
			$minbar.attr("src", "../image/소개바/취반기기.jpg");
			nextPage();
		} );

		$page9.on( 'click', function() {/*기타기기*/
			if( isAnimating || current == 8) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 8;
			localStorage.setItem('current', current);
			$minbar.attr("src", "../image/소개바/기타기기.jpg");
			nextPage();
		} );

		$page10.on( 'click', function() {/*협력사*/
			if( isAnimating || current == 9) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 9;
			localStorage.setItem('current', current);
			$minbar.attr("src", "../image/소개바/협력사.jpg");
			nextPage();
		} );

	}

	function nextPage() {

		if( isAnimating ) {
			return false;
		}

		isAnimating = true;
		
		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
			removeshadow = $page.removeClass('shadow'),
			addshadow = $page.eq(current).addClass('shadow'),
			outClass = '', inClass = '';

		$myModal.css('display', 'none');
		$pt_page.css('display', '');

		outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
		inClass = 'pt-page-moveFromRight';

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $nextPage );
		}

	}

	function onEndAnimation( $outpage, $inpage ) {
		endCurrPage = false;
		endNextPage = false;
		resetPage( $outpage, $inpage );
		isAnimating = false;
	}

	function resetPage( $outpage, $inpage ) {
		$outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
		$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
	}

	init();

	return { 
		init : init,
		nextPage : nextPage,
	};

})();
var $currPage;
var PageTransitions = (function() {

	var $main = $( '#pt-main' ),
		$pages = $main.children( 'div.pt-page' ),
		$page1 = $('#page1'),
		$page2 = $('#page2'),
		$page3 = $('#page3'),
		$minbar = $('#minbar'),
		current = localStorage.getItem("current"),
		isAnimating = false,
		endCurrPage = false,
		endNextPage = false,
		$page = $('.pt-touch-button'),
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

		$page1.on( 'click', function() {/*공지사항*/
			if( isAnimating  || current == 0) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 0;
			localStorage.setItem('current', current);
			$minbar.attr("src", "../image/소개바/공지사항.jpg");
			nextPage();
		} );

		$page2.on( 'click', function() {/*사후관리*/
			if( isAnimating || current == 1) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 1;
			localStorage.setItem('current', current);
			$minbar.attr("src", "../image/소개바/사후관리.jpg");
			nextPage();
		} );

		$page3.on( 'click', function() {/*자료실*/
			if( isAnimating || current == 2) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 2;
			localStorage.setItem('current', current);
			$minbar.attr("src", "../image/소개바/자료실.jpg");
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

	window.onload = function(){
		if (current == 0) {
			$minbar.attr("src", "../image/소개바/공지사항.jpg");
		}else if(current == 1){
			$minbar.attr("src", "../image/소개바/사후관리.jpg");
		}else if(current == 2){
			$minbar.attr("src", "../image/소개바/자료실.jpg");
		}
	}

	return { 
		init : init,
		nextPage : nextPage,
	};

})();
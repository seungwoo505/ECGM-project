var $currPage;
var PageTransitions = (function() {

	var $main = $( '#pt-main' ),
		$pages = $main.children( 'div.pt-page' ),
		$page1 = $('#page1'),
		$page2 = $('#page2'),
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

		$page1.on( 'click', function() {/*거래처*/
			if( isAnimating  || current == 0) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 0;
			localStorage.setItem('current', current);
			nextPage();
		} );

		$page2.on( 'click', function() {/*시공사진*/
			if( isAnimating || current == 1) {
				return false;
			}
			$currPage = $pages.eq( current );
			current = 1;
			localStorage.setItem('current', current);
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

	return { 
		init : init,
		nextPage : nextPage,
	};

})();
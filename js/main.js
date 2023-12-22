var middle_time; // 슬라이드 넘어가는 시간
var middle_slideulLi;
var middle_slideCount; //슬라이드 개수
var middle_slideIndex;//현재 보여지는 슬라이드 값
var middle_caInterval;
var middle_m = 0;

//사진 연결
var middle_imgW; // 사진 한장의 너비	

var time; // 슬라이드 넘어가는 시간
var slideulLi;
var slideCount; //슬라이드 개수
var slideIndex;//현재 보여지는 슬라이드 값
var caInterval;
var m = 0;

//사진 연결
var imgW; // 사진 한장의 너비	

$(document).ready(function(){
	middle_slideInit($("#middle_slide").css("height"), 4000);
	slideInit($("#slide").css("height"), 4000);

	$('.prev').on('click', function(event){
		var middle_left = "+" + middle_imgW;
		middle_m = 1;

		for (var i = 0; i < middle_slideCount; i++) {
			if (middle_slideIndex != i) middle_slideulLi.eq(i).css("left", -middle_imgW);
		}

		//현재 슬라이드를 왼쪽으로 이동 ( 마이너스 지점 )
		middle_slideulLi.eq(middle_slideIndex).animate( { left: middle_left }, function(){
			// 다시 오른쪽 (제자리)로 이동
			middle_slideulLi.eq(middle_slideIndex).css("left", -middle_imgW);

			if( middle_slideIndex == 0)
			{
				middle_slideIndex = (middle_slideCount - 1);
			}
			else
			{
				middle_slideIndex --;
			}
		} );

		// 다음 슬라이드 화면으로
		if( middle_slideIndex == 0 )
		{
			// 마지막 슬라이드가 넘어갈땐 처음 슬라이드가 보이도록
			middle_slideulLi.eq(middle_slideCount - 1).animate( { left:  0} );
		}
		else
		{
			middle_slideulLi.eq(middle_slideIndex - 1).animate( { left: 0} );
		}
	});

	$('.next').on('click', function(event){
		var middle_left = "-" + middle_imgW;
		middle_m = 0;

		for (var i = 0; i < middle_slideCount; i++) {
			if (middle_slideIndex != i) middle_slideulLi.eq(i).css("left", middle_imgW);
		}
		//현재 슬라이드를 왼쪽으로 이동 ( 마이너스 지점 )
		middle_slideulLi.eq(middle_slideIndex).animate( { left: middle_left }, function(){
			// 다시 오른쪽 (제자리)로 이동
			middle_slideulLi.eq(middle_slideIndex).css("left", middle_imgW);

			if( middle_slideIndex == ( middle_slideCount - 1 ) )
			{
				middle_slideIndex = 0;
			}
			else
			{
				middle_slideIndex ++;
			}
		} );

		// 다음 슬라이드 화면으로
		if( middle_slideIndex == ( middle_slideCount - 1 ) )
		{
			// 마지막 슬라이드가 넘어갈땐 처음 슬라이드가 보이도록
			middle_slideulLi.eq(0).animate( { left: 0 } );
		}
		else
		{
			middle_slideulLi.eq(middle_slideIndex + 1).animate( { left: 0 } );
		}
	});
});

$(window).resize(function(){
	middle_slide_setImgPosition();
	slide_setImgPosition();
});

/* 초기 설정 */
function middle_slideInit( height, t ){
	/*
	 * height : 캐러셀 높이
	 * t : 사진 전환 간격 
	*/

	middle_time = t;
	middle_slideulLi = $("#middle_slide > ul >li");
	middle_slideCount = middle_slideulLi.length; // 캐러셀 사진 갯수
	middle_slideIndex = 0; // 현재 보여지는 슬라이드 인덱스 값
	middle_slide_setImgPosition();
}

function middle_slide_setImgPosition(){

	middle_imgW = middle_slideulLi.width(); // 사진 한장의 너비	
	// 이미지 위치 조정
	for(var i = 0; i < middle_slideCount; i++)
	{
		if( i == middle_slideIndex)
		{
			middle_slideulLi.eq(i).css("left", 0);
		}
		else
		{
			middle_slideulLi.eq(i).css("left", middle_imgW);
		}
	}
}

/* 초기 설정 */
function slideInit( height, t ){
	/*
	 * height : 캐러셀 높이
	 * t : 사진 전환 간격 
	*/

	time = t;
	slideulLi = $("#slide > ul >li");
	slideCount = slideulLi.length; // 캐러셀 사진 갯수
	slideIndex = 0; // 현재 보여지는 슬라이드 인덱스 값
	slide_setImgPosition();
	carousel();
}

function slide_setImgPosition(){

	imgW = slideulLi.width(); // 사진 한장의 너비	
	// 이미지 위치 조정
	for(var i = 0; i < slideCount; i++)
	{
		if( i == slideIndex)
		{
			slideulLi.eq(i).css("left", 0);
		}
		else
		{
			slideulLi.eq(i).css("left", imgW);
		}
	}
}

function carousel(){

	// 사진 넘기기
	// 사진 하나가 넘어간 후 다시 꼬리에 붙어야함
	// 화면에 보이는 슬라이드만 보이기
	caInterval = setInterval(function(){
		var left = "-" + imgW;

		if (m == 1) {
			for (var i = 0; i < slideCount; i++) {
				if (slideIndex != i) slideulLi.eq(i).css("left", imgW);
			}
		}
		m = 0;

		//현재 슬라이드를 왼쪽으로 이동 ( 마이너스 지점 )
		slideulLi.eq(slideIndex).animate( { left: left }, function(){
			// 다시 오른쪽 (제자리)로 이동
			slideulLi.eq(slideIndex).css("left", imgW);

			if( slideIndex == ( slideCount - 1 ) )
			{
				slideIndex = 0;
			}
			else
			{
				slideIndex ++;
			}
		} );

		// 다음 슬라이드 화면으로
		if( slideIndex == ( slideCount - 1 ) )
		{
			// 마지막 슬라이드가 넘어갈땐 처음 슬라이드가 보이도록
			slideulLi.eq(0).animate( { left: 0 } );
		}
		else
		{
			slideulLi.eq(slideIndex + 1).animate( { left: 0 } );
		}
	}, time);
}
var page = document.getElementsByClassName('pt-page-current');

/*************
  4. 냉장기기류
**************/
var refrigerator_model = document.getElementById("refrigerator");

var refrigerator_bigimg = document.getElementById("refrigerator_bigimg");
var refrigerator_title = document.getElementById("refrigerator_title");
var refrigerator_explanation = document.getElementById("refrigerator_explanation");
var refrigerator_standard = document.getElementById("refrigerator_standard");

var refrigerator_im01 = document.getElementById("refrigerator_im01");
var refrigerator_im02 = document.getElementById("refrigerator_im02");
var refrigerator_im03 = document.getElementById("refrigerator_im03");
var refrigerator_im04 = document.getElementById("refrigerator_im04");
var refrigerator_im05 = document.getElementById("refrigerator_im05");
var refrigerator_im06 = document.getElementById("refrigerator_im06");
var refrigerator_im07 = document.getElementById("refrigerator_im07");
var refrigerator_im08 = document.getElementById("refrigerator_im08");

var refrigerator_img1 = document.getElementById("refrigerator_img1");
var refrigerator_img2 = document.getElementById("refrigerator_img2");
var refrigerator_img3 = document.getElementById("refrigerator_img3");
var refrigerator_img4 = document.getElementById("refrigerator_img4");
var refrigerator_img5 = document.getElementById("refrigerator_img5");
var refrigerator_img6 = document.getElementById("refrigerator_img6");
var refrigerator_img7 = document.getElementById("refrigerator_img7");
var refrigerator_img8 = document.getElementById("refrigerator_img8");

var refrigerator_txt1 = document.getElementById("refrigerator_txt1");
var refrigerator_txt2 = document.getElementById("refrigerator_txt2");
var refrigerator_txt3 = document.getElementById("refrigerator_txt3");
var refrigerator_txt4 = document.getElementById("refrigerator_txt4");
var refrigerator_txt5 = document.getElementById("refrigerator_txt5");
var refrigerator_txt6 = document.getElementById("refrigerator_txt6");
var refrigerator_txt7 = document.getElementById("refrigerator_txt7");
var refrigerator_txt8 = document.getElementById("refrigerator_txt8");

var refrigerator_biglittleimgs = document.getElementById("refrigerator_biglittleimgs");

var refrigerator_minimg1 = document.getElementById("refrigerator_minimg1");
var refrigerator_minimg2 = document.getElementById("refrigerator_minimg2");
var refrigerator_minimg3 = document.getElementById("refrigerator_minimg3");
var refrigerator_minimg4 = document.getElementById("refrigerator_minimg4");

var refrigerator_divimg3 = document.getElementById("refrigerator_divimg3");
var refrigerator_divimg4 = document.getElementById("refrigerator_divimg4");

refrigerator_im01.onclick = function(){
  refrigerator_model.style.display = "inline-block";
  refrigerator_bigimg.src = refrigerator_img1.src;
  refrigerator_title.innerHTML = refrigerator_txt1.innerHTML;

  refrigerator_explanation_txt = "냉동, 냉장식품인 어류, 육류, 야채류등을 변질되지 않고 보관하는데 사용한다.";
  refrigerator_standard_txt = "전체용량 : 1106L<br>\
                              본    체 : 고급 스테인리스 강판<br>\
                              외부크기 : 1260 x 800 x 1900(mm)<br>\
                              단열방식 : 고밀도 경질 폴리우레탄<br>\
                              제어방식 : 디지털<br>\
                              편리한 수납형 병꽂이<br>\
                              이동식 코팅선반<br>\
                              고효율 LED고내등<br>\
                              환경친화 신냉매<br>\
                              열림고정 & 자동닫힘도어, 알람경보기능<br>\
                              고강도캐스터 및 레벨링 스크류<br>\
                              권장온도범위 : 냉장 0℃ ~ +5℃ / 냉동 -20℃ ~ -15℃";

  refrigerator_explanation.innerHTML = refrigerator_explanation_txt;
  refrigerator_standard.innerHTML = refrigerator_standard_txt;

  refrigerator_biglittleimgs.style.display = "none";

  scrolltop();
  page[0].style.display = "none";
}

refrigerator_im02.onclick = function(){
  refrigerator_model.style.display = "inline-block";
  refrigerator_bigimg.src = refrigerator_img2.src;
  refrigerator_title.innerHTML = refrigerator_txt2.innerHTML;

  refrigerator_explanation_txt = "냉동, 냉장식품인 어류, 육류, 야채류등을 변질되지 않고 보관하는데 사용한다.";
  refrigerator_standard_txt = "전체용량 : 1106L<br>\
                              본    체 : 고급 스테인리스 강판<br>\
                              외부크기 : 1260 x 800 x 1900(mm)<br>\
                              단열방식 : 고밀도 경질 폴리우레탄<br>\
                              제어방식 : 디지털<br>\
                              편리한 수납형 병꽂이<br>\
                              이동식 코팅선반<br>\
                              고효율 LED고내등<br>\
                              환경친화 신냉매<br>\
                              열림고정 & 자동닫힘도어, 알람경보기능<br>\
                              고강도캐스터 및 레벨링 스크류<br>\
                              권장온도범위 : 냉장 0℃ ~ +5℃ / 냉동 -20℃ ~ -15℃";

  refrigerator_explanation.innerHTML = refrigerator_explanation_txt;
  refrigerator_standard.innerHTML = refrigerator_standard_txt;

  if (refrigerator_txt2.innerHTML == "냉동창고") {
    refrigerator_biglittleimgs.style.display = "inline-block";
    refrigerator_minimg1.src = "../image/4-냉장기기류/10-냉동창고.jpg";
    refrigerator_minimg2.src = "../image/4-냉장기기류/10.1-냉동창고.jpg";
    refrigerator_divimg3.style.display = "inline-block";
    refrigerator_divimg4.style.display = "inline-block";
  }else{
    refrigerator_biglittleimgs.style.display = "none";
  }

  scrolltop();
  page[0].style.display = "none";
}

refrigerator_im03.onclick = function(){
  refrigerator_model.style.display = "inline-block";
  refrigerator_bigimg.src = refrigerator_img3.src;
  refrigerator_title.innerHTML = refrigerator_txt3.innerHTML;

  refrigerator_explanation_txt = "냉동, 냉장식품인 어류, 육류, 야채류등을 변질되지 않고 보관하는데 사용한다.";
  refrigerator_standard_txt = "전체용량 : 1699L<br>\
                              본    체 : 고급 스테인리스 강판<br>\
                              외부크기 : 1900 x 800 x 1900(mm)<br>\
                              단열방식 : 고밀도 경질 폴리우레탄<br>\
                              제어방식 : 디지털<br>\
                              편리한 수납형 병꽂이<br>\
                              이동식 코팅선반<br>\
                              고효율 LED고내등<br>\
                              환경친화 신냉매<br>\
                              열림고정 & 자동닫힘도어, 알람경보기능<br>\
                              고강도캐스터 및 레벨링 스크류<br>\
                              권장온도범위 : 냉장 0℃ ~ +5℃ / 냉동 -20℃ ~ -15℃";

  refrigerator_explanation.innerHTML = refrigerator_explanation_txt;
  refrigerator_standard.innerHTML = refrigerator_standard_txt;

  refrigerator_biglittleimgs.style.display = "none";

  scrolltop();
  page[0].style.display = "none";
}

refrigerator_im04.onclick = function(){
  refrigerator_model.style.display = "inline-block";
  refrigerator_bigimg.src = refrigerator_img4.src;
  refrigerator_title.innerHTML = refrigerator_txt4.innerHTML;

  refrigerator_explanation_txt = "조리시 저온 상태로 신선하게 식자재를 보관하면서 필요시 소량의 사용량<br>\
                                 만큼 쓸수 있으며 상부 일반 작업대 역할을 할 수 있다.";
  refrigerator_standard_txt = "본    체 : 고급 스테인리스 강판<br>\
                              단열방식 : 고밀도 경질 폴리우레탄<br>\
                              제어방식 : 디지털<br>\
                              강력 스마트 쿨링시스템<br>\
                              환경친화 신냉매<br>\
                              열림고정 & 자동닫힘도어<br>\
                              코팅선반<br>\
                              튼튼한 일체형 손잡이<br>\
                              권장온도범위 : 냉장 0℃ ~ +5℃";

  refrigerator_explanation.innerHTML = refrigerator_explanation_txt;
  refrigerator_standard.innerHTML = refrigerator_standard_txt;

  refrigerator_biglittleimgs.style.display = "none";

  scrolltop();
  page[0].style.display = "none";
}

refrigerator_im05.onclick = function(){
  refrigerator_model.style.display = "inline-block";
  refrigerator_bigimg.src = refrigerator_img5.src;
  refrigerator_title.innerHTML = refrigerator_txt5.innerHTML;

  refrigerator_explanation_txt = "조리시 저온 상태로  신선하게 식자재를 보관하면서 필요시 소량의 사용량<br>\
                                 만큼 쓸수 있으며 상부 일반 작업대 역할을 할 수 있다.";
  refrigerator_standard_txt = "본    체 : 고급 스테인리스 강판<br>\
                              단열방식 : 고밀도 경질 폴리우레탄<br>\
                              제어방식 : 디지털<br>\
                              강력 스마트 쿨링시스템<br>\
                              환경친화 신냉매<br>\
                              열림고정 & 자동닫힘도어<br>\
                              코팅선반<br>\
                              튼튼한 일체형 손잡이<br>\
                              서랍내부 받드 적용<br>\
                              권장온도범위 : 냉장 0℃ ~ +5℃";
  refrigerator_explanation.innerHTML = refrigerator_explanation_txt;
  refrigerator_standard.innerHTML = refrigerator_standard_txt;

  refrigerator_biglittleimgs.style.display = "none";

  scrolltop();
  page[0].style.display = "none";
}

refrigerator_im06.onclick = function(){
  refrigerator_model.style.display = "inline-block";
  refrigerator_bigimg.src = refrigerator_img6.src;
  refrigerator_title.innerHTML = refrigerator_txt6.innerHTML;

  refrigerator_explanation_txt = "";
  refrigerator_standard_txt = "고급 스테인리스 강판<br>\
                              실용적인 메탈코팅 적용<br>\
                              단열방식 : 고밀도 경질 폴리우레탄<br>\
                              효율적인 아날로그 온도조절 컨트롤러<br>\
                              강력 스마트 쿨링시스템<br>\
                              환경친화 신냉매<br>\
                              코팅선반<br>\
                              튼튼한 일체형 손잡이<br>\
                              권장온도범위 : 냉장 0℃ ~ +5℃";

  refrigerator_explanation.innerHTML = refrigerator_explanation_txt;
  refrigerator_standard.innerHTML = refrigerator_standard_txt;

  refrigerator_biglittleimgs.style.display = "none";

  scrolltop();
  page[0].style.display = "none";
}

refrigerator_im07.onclick = function(){
  refrigerator_model.style.display = "inline-block";
  refrigerator_bigimg.src = refrigerator_img7.src;
  refrigerator_title.innerHTML = refrigerator_txt7.innerHTML;

  refrigerator_explanation_txt = "";
  refrigerator_standard_txt = "고급 스테인리스 강판<br>\
                              실용적인 메탈코팅 적용<br>\
                              단열방식 : 고밀도 경질 폴리우레탄<br>\
                              효율적인 아날로그 온도조절 컨트롤러<br>\
                              강력 스마트 쿨링시스템<br>\
                              환경친화 신냉매<br>\
                              코팅선반<br>\
                              튼튼한 일체형 손잡이<br>\
                              권장온도범위 : 냉장 0℃ ~ +5℃";
  refrigerator_explanation.innerHTML = refrigerator_explanation_txt;
  refrigerator_standard.innerHTML = refrigerator_standard_txt;

  refrigerator_biglittleimgs.style.display = "none";

  scrolltop();
  page[0].style.display = "none";
}

refrigerator_im08.onclick = function(){
  refrigerator_model.style.display = "inline-block";
  refrigerator_bigimg.src = refrigerator_img8.src;
  refrigerator_title.innerHTML = refrigerator_txt8.innerHTML;

  refrigerator_explanation_txt = "";
  refrigerator_standard_txt = "제어방식 : 디지털<br>\
                              전    원 : AC 220V / 60Hz<br>\
                              사각 또는 곡면 타입 선택<br>\
                              세련된 디자인으로 매장 분위기 UP<br>\
                              패어유리 채용<br>\
                              권장온도범위 : 냉장 5℃ ~ +8℃";

  refrigerator_explanation.innerHTML = refrigerator_explanation_txt;
  refrigerator_standard.innerHTML = refrigerator_standard_txt;

  refrigerator_biglittleimgs.style.display = "inline-block";
  refrigerator_minimg1.src = "../image/4-냉장기기류/8-사각제과쇼케이스.png";
  refrigerator_minimg2.src = "../image/4-냉장기기류/8.1-곡면제과쇼케이스.png";
  refrigerator_divimg3.style.display = "none";
  refrigerator_divimg4.style.display = "none";

  scrolltop();
  page[0].style.display = "none";
}

function refrigerator_one(){
  $('#refrigerator_one').contents().unwrap().wrap('<strong id = "refrigerator_one" onclick = "refrigerator_one()"></strong>');
  $('#refrigerator_two').contents().unwrap().wrap('<a id = "refrigerator_two" onclick = "refrigerator_two()"></a>');

  refrigerator_im03.style.visibility = "visible";
  refrigerator_im04.style.visibility = "visible";
  refrigerator_im05.style.visibility = "visible";
  refrigerator_im06.style.visibility = "visible";
  refrigerator_im07.style.visibility = "visible";
  refrigerator_im08.style.visibility = "visible";

  refrigerator_img1.src = "../image/4-냉장기기류/1-냉동냉장고.png";
  refrigerator_img2.src = "../image/4-냉장기기류/2-냉동냉장고.png";

  refrigerator_txt1.innerHTML = "냉동냉장고";
  refrigerator_txt2.innerHTML = "냉동냉장고";

  refrigerator_explanation_txt1 = "냉동, 냉장식품인 어류, 육류, 야채류등을 변질되지 않고 보관하는데 사용한다.";
  refrigerator_standard_txt1 = "전체용량 : 1106L<br>\
                              본    체 : 고급 스테인리스 강판<br>\
                              외부크기 : 1260 x 800 x 1900(mm)<br>\
                              단열방식 : 고밀도 경질 폴리우레탄<br>\
                              제어방식 : 디지털<br>\
                              편리한 수납형 병꽂이<br>\
                              이동식 코팅선반<br>\
                              고효율 LED고내등<br>\
                              환경친화 신냉매<br>\
                              열림고정 & 자동닫힘도어, 알람경보기능<br>\
                              고강도캐스터 및 레벨링 스크류<br>\
                              권장온도범위 : 냉장 0℃ ~ +5℃ / 냉동 -20℃ ~ -15℃";

  refrigerator_explanation_txt2 = "냉동, 냉장식품인 어류, 육류, 야채류등을 변질되지 않고 보관하는데 사용한다.";
  refrigerator_standard_txt2 = "전체용량 : 1106L<br>\
                              본    체 : 고급 스테인리스 강판<br>\
                              외부크기 : 1260 x 800 x 1900(mm)<br>\
                              단열방식 : 고밀도 경질 폴리우레탄<br>\
                              제어방식 : 디지털<br>\
                              편리한 수납형 병꽂이<br>\
                              이동식 코팅선반<br>\
                              고효율 LED고내등<br>\
                              환경친화 신냉매<br>\
                              열림고정 & 자동닫힘도어, 알람경보기능<br>\
                              고강도캐스터 및 레벨링 스크류<br>\
                              권장온도범위 : 냉장 0℃ ~ +5℃ / 냉동 -20℃ ~ -15℃";
}

function refrigerator_two(){
  $('#refrigerator_one').contents().unwrap().wrap('<a id = "refrigerator_one" onclick = "refrigerator_one()"></a>');
  $('#refrigerator_two').contents().unwrap().wrap('<strong id = "refrigerator_two" onclick = "refrigerator_two()"></strong>');

  refrigerator_im03.style.visibility = "hidden";
  refrigerator_im04.style.visibility = "hidden";
  refrigerator_im05.style.visibility = "hidden";
  refrigerator_im06.style.visibility = "hidden";
  refrigerator_im07.style.visibility = "hidden";
  refrigerator_im08.style.visibility = "hidden";

  refrigerator_img1.src = "../image/4-냉장기기류/9-음료냉장고.png";
  refrigerator_img2.src = "../image/4-냉장기기류/10-냉동창고.jpg";

  refrigerator_txt1.innerHTML = "음료냉장고";
  refrigerator_txt2.innerHTML = "냉동창고";

  refrigerator_explanation_txt1 = "";
  refrigerator_standard_txt1 = "재    질 : 냉연,아연도금 칼라강판<br>\
                                외부크기 : 650 x 580 x 1890 (mm)<br>\
                                권장온도범위 : 냉장 -15℃ ~ -10℃<br>\
                                전    원 : AC 220V / 60Hz<br>\
                                효율적인 아날로그 온도조절 콘트롤러<br>\
                                간접냉각 강력 쿨링 시스템<br>\
                                환경 친화 신냉매<br>\
                                강력쿨링시스템<br>\
                                냉연칼라강판 도어프레임<br>\
                                메탈 탭 적용<br>\
                                조명스위치<br>\
                                3중 페어 글라스<br>\
                                고효율 LED고내등<br>\
                                고강도 캐스터";

  refrigerator_explanation_txt2 = "사람이 출입하여 많은양의 조리용 재료를 장시간 변질없이 신선도를 유지하여 저온저장할수 있다.";
  refrigerator_standard_txt2 = "주문제작<br>\
                                조립식 판넬로 제작하며 단열효과가 좋은 우레탄재질로 한다.<br>\
                                재질을 자유롭게 선택<br>\
                                WALK-IN TYPE / ROLL-IN TYPE 선택";
}

refrigerator_minimg1.onclick = function(){
  refrigerator_bigimg.src = refrigerator_minimg1.src;
}

refrigerator_minimg2.onclick = function(){
  refrigerator_bigimg.src = refrigerator_minimg2.src;
}

refrigerator_minimg3.onclick = function(){
  refrigerator_bigimg.src = refrigerator_minimg3.src;
}

refrigerator_minimg4.onclick = function(){
  refrigerator_bigimg.src = refrigerator_minimg4.src;
}
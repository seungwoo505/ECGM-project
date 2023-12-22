var page = document.getElementsByClassName('pt-page-current');

/*************
  5. 세척기기류
**************/

var washing_modal = document.getElementById("washing");

var washing_bigimg = document.getElementById("washing_bigimg");

var washing_title = document.getElementById("washing_title");

var washing_standard = document.getElementById("washing_standard");

var second_washing_modal = document.getElementById('second_washing');

var second_washing_bigimg = document.getElementById('second_washing_bigimg');

var second_washing_title = document.getElementById('second_washing_title');

var second_washing_thead = document.getElementById('second_washing_thead');

var washing_im01 = document.getElementById('washing_im01');
var washing_img1 = document.getElementById('washing_img1');
var washing_txt1 = document.getElementById('washing_txt1');

var washing_im02 = document.getElementById('washing_im02');
var washing_img2 = document.getElementById('washing_img2');
var washing_txt2 = document.getElementById('washing_txt2');

var washing_im03 = document.getElementById('washing_im03');
var washing_img3 = document.getElementById('washing_img3');
var washing_txt3 = document.getElementById('washing_txt3');

var washing_im04 = document.getElementById('washing_im04');
var washing_img4 = document.getElementById('washing_img4');
var washing_txt4 = document.getElementById('washing_txt4');

var washing_im05 = document.getElementById('washing_im05');
var washing_img5 = document.getElementById('washing_img5');
var washing_txt5 = document.getElementById('washing_txt5');

var washing_im06 = document.getElementById('washing_im06');
var washing_img6 = document.getElementById('washing_img6');
var washing_txt6 = document.getElementById('washing_txt6');

var washing_im07 = document.getElementById('washing_im07');
var washing_img7 = document.getElementById('washing_img7');
var washing_txt7 = document.getElementById('washing_txt7');

var washing_im08 = document.getElementById('washing_im08');
var washing_img8 = document.getElementById('washing_img8');
var washing_txt8 = document.getElementById('washing_txt8');

var thead;

washing_im01.onclick = function(){
  washing_txt1.innerHTML
  if (washing_txt1.innerHTML == "도어타입세척기") {
    washing_modal.style.display = 'inline-block';
    washing_bigimg.src = washing_img1.src;
  
    washing_title.innerHTML = washing_txt1.innerHTML;
  
    washing_standard.innerHTML = "형    식 : 도어타입<br>\
                                  제품규격 : 650(W) * 650(L) * 1340(H)<br>\
                                  세척능력 : 중ㆍ소형 접시류 1,500~1,800Medium-size  dishes,small-size<br>\
                                  dishes:1,500~1,800units<br>\
                                  시 간 당 : 밥공기류 1,500개 Bowls:1,500 units<br>\
                                             유리컵 종류 2,000개 Glasses:2,000 units<br>\
                                  세척모터(단상) : 1KW/H<br>\
                                  헹굼모터(단상) : 96W/H<br>\
                                  전    압 : 220V * 단상 * 60HZ<br>\
                                  세척탱크용량/온도 : 33.5ℓ/65℃~75℃(최고온도)Maximum temperature<br>\
                                  헹굼탱크용량/온도 : 32.5ℓ/80℃~95℃(최고온도)Maximum temperature<br>\
                                  최대사용전력 : 3.5~3.9KW/H";
  }else if(washing_txt1.innerHTML == "미니플라이트타입"){
    second_washing_modal.style.display = 'inline-block';
    second_washing_bigimg.src = washing_img1.src;
  
    second_washing_title.innerHTML = washing_txt1.innerHTML;
  
  
    thead = [["형식", "형식", "미니플라이트1탱크 일반형", "미니플라이트1탱크 건조형"],
                 ["형식", "형식", "가스식 Gas type", "가스식 Gas type"],
                 ["규격", "규격", "2875(L)*700(W)*1450(H)", "3575(L)*700(W)*1830(H)"],
                 ["세척용량(식판 Meal plate/Hr)", "세척용량(식판 Meal plate/Hr)", "900 EA/Er", "900 EA/Er"],
                 ["에너지소비량", "최대소비전력", "7㎾", "19.5㎾"],
                 ["에너지소비량", "가스", "48,000㎉/Hr", "48,000㎉/Hr"],
                 ["에너지소비량", "전기", "3상 220V/380V", "3상 220V/380V"],
                 ["섭비사양", "급수", "15A", "15A"],
                 ["섭비사양", "배수", "50A", "50A"],
                 ["섭비사양", "가스", "15A", "15A"],
                 ["콘베어 사양", "속도", "0.8m/min", "0.8m/min"],
                 ["콘베어 사양", "넓이", "530㎜", "530㎜"]];

    second_washing_table(thead);

  }

  scrolltop();
  page[0].style.display = "none";
}

washing_im02.onclick = function(){
  if (washing_txt2.innerHTML == "랙콘베이어타입세척기") {
    second_washing_modal.style.display = 'inline-block';
    second_washing_bigimg.src = washing_img2.src;
  
    second_washing_title.innerHTML = washing_txt2.innerHTML;
  
  
    thead = [["형식", "형식", "1탱크 일반형", "2탱크 일반형"],
                 ["형식", "형식", "가스식,랙콘베어(Gas type)", "가스식,랙콘베어(Gas type)"],
                 ["규격", "규격", "1150(L)*675(W)*1560(H)", "1850(L)*675(W)*1560(H)"],
                 ["세척용량(식판 Meal plate/Hr)", "세척용량(식판 Meal plate/Hr)", "150 EA/Er", "200 EA/Er"],
                 ["세척조", "탱크용량(L*탱크수)", "100", "100(2)"],
                 ["세척조", "탱크히팅(㎉/H)", "5700", "5700"],
                 ["세척조", "펌프용량(L/MIN)", "950", "950"],
                 ["세척조", "펌프압력(㎏/㎠)", "1.0", "1.0"],
                 ["세척조", "펌프모타(㎾)", "1.5", "1.5 x 2"],
                 ["헹굼조", "헹굼용량(L/H)", "720", "720"],
                 ["헹굼조", "헹굼히팅(㎉/H)", "40000", "40000"],
                 ["헹굼조", "헹굼펌프(㎾)", "0.4", "0.4"],
                 ["구동모터(KW)", "구동모터(KW)", "0.2", "0.2"],
                 ["전기소모량(KW)-가스식(스팀식)", "전기소모량(KW)-가스식(스팀식)", "7(3)", "8.5(4)"],
                 ["물소모량(L/H)", "물소모량(L/H)", "500", "500"],
                 ["스팀소모량(KG/H)", "스팀소모량(KG/H)", "88.4", "88.4"],
                 ["스팀관경(A)", "스팀관경(A)", "32", "32"],
                 ["급수관경(A)", "급수관경(A)", "15", "15"]];

  }else if(washing_txt2.innerHTML == "가스부스타"){
    second_washing_modal.style.display = 'inline-block';
    second_washing_bigimg.src = washing_img2.src;
  
    second_washing_title.innerHTML = washing_txt2.innerHTML;
  
  
    thead = [["모델", "모델", "STB-3000", "STB-4000", "STB-5000"],
                 ["규격", "규격", "380*586*670", "520*585*670", "840*585*670"],
                 ["가스소비량", "LPG", "2.0㎏/H", "3.0㎏/H", "5.0㎏/H"],
                 ["가스소비량", "LNG", "26,500㎉/H", "36,000㎉/H", "60,000㎉/H"],
                 ["저탕량", "저탕량", "38ℓ", "50ℓ", "92ℓ"],
                 ["중탕", "중탕", "29㎏", "38㎏", "56㎏"],
                 ["버너 FIN수", "버너 FIN수", "15ea", "19ea", "38ea"],
                 ["열교환기관수", "열교환기관수", "22ea", "33ea", "33ea"],
                 ["접속구경<br>Junction<br>caliber", "급수", "15A", "15A", "15A"],
                 ["접속구경<br>Junction<br>caliber", "출탕", "25A", "25A", "25A"],
                 ["접속구경<br>Junction<br>caliber", "가스", "15A", "15A", "15A"],
                 ["전원", "전원", "220V / 60㎐ / 25W", "220V / 60㎐ / 25W", "220V / 60㎐ / 25W"],
                 ["점화방식", "점화방식", "연속방전 자동점화방식", "연속방전 자동점화방식", "연속방전 자동점화방식"],
                 ["배기방식", "배기방식", "자연배기방식", "자연배기방식", "자연배기방식"]];

  }

  second_washing_table(thead);

  scrolltop();
  page[0].style.display = "none";
}

washing_im03.onclick = function(){
  second_washing_modal.style.display = 'inline-block';
  second_washing_bigimg.src = washing_img3.src;

  second_washing_title.innerHTML = washing_txt3.innerHTML;


  thead = [["형식", "형식", "1탱크 일반형", "1탱크 일반형"],
               ["형식", "형식", "스팀식 Steam type", "가스식 Gas type"],
               ["규격", "규격", "3625(L)*820(W)*1450(H)", "3625(L)*820(W)*1450(H)"],
               ["세척용량(식판 Meal plate/Hr)", "세척용량(식판 Meal plate/Hr)", "900 EA/Er", "900 EA/Er"],
               ["에너지소비량", "최대소비전력", "3㎾", "9㎾"],
               ["에너지소비량", "스팀", "140㎏/Hr", ""],
               ["에너지소비량", "가스", "", "63,700㎉/Hr"],
               ["에너지소비량", "전기", "3상 220V/380V", "3상 220V/380V"],
               ["섭비사양", "급수", "15A", "15A"],
               ["섭비사양", "배수", "50A", "50A"],
               ["섭비사양", "스팀", "32A", ""],
               ["섭비사양", "가스", "", "15A"],
               ["콘베어 사양", "속도", "0.8m/min", "0.8m/min"],
               ["콘베어 사양", "넓이", "630㎜", "630㎜"]];

  second_washing_table(thead);

  scrolltop();
  page[0].style.display = "none";
}

washing_im04.onclick = function(){
  second_washing_modal.style.display = 'inline-block';
  second_washing_bigimg.src = washing_img4.src;

  second_washing_title.innerHTML = washing_txt4.innerHTML;


  thead = [["형식", "형식", "1탱크 건조형", "1탱크 건조형"],
               ["형식", "형식", "스팀식 Steam type", "가스식 Gas type"],
               ["규격", "규격", "4925(L)*820(W)*1830(H)", "4925(L)*820(W)*1830(H)"],
               ["세척용량(식판 Meal plate/Hr)", "세척용량(식판 Meal plate/Hr)", "900 EA/Er", "900 EA/Er"],
               ["에너지소비량", "최대소비전력", "3㎾", "27㎾"],
               ["에너지소비량", "스팀", "165㎏/Hr", ""],
               ["에너지소비량", "가스", "", "63,700㎉/Hr"],
               ["에너지소비량", "전기", "3상 220V/380V", "3상 220V/380V"],
               ["섭비사양", "급수", "15A", "15A"],
               ["섭비사양", "배수", "50A", "50A"],
               ["섭비사양", "스팀", "32A", ""],
               ["섭비사양", "가스", "", "15A"],
               ["콘베어 사양", "속도", "0.8m/min", "0.8m/min"],
               ["콘베어 사양", "넓이", "630㎜", "630㎜"]];


  second_washing_table(thead);

  scrolltop();
  page[0].style.display = "none";
}

washing_im05.onclick = function(){
  second_washing_modal.style.display = 'inline-block';
  second_washing_bigimg.src = washing_img5.src;

  second_washing_title.innerHTML = washing_txt5.innerHTML;


  thead = [["형식", "형식", "2탱크 일반형", "2탱크 일반형"],
               ["형식", "형식", "스팀식 Steam type", "가스식 Gas type"],
               ["규격", "규격", "4475(L)*820(W)*1450(H)", "4475(L)*820(W)*1450(H)"],
               ["세척용량(식판 Meal plate/Hr)", "세척용량(식판 Meal plate/Hr)", "1140 EA/Er", "1140 EA/Er"],
               ["에너지소비량", "최대소비전력", "4.9㎾", "11㎾"],
               ["에너지소비량", "스팀", "149㎏/Hr", ""],
               ["에너지소비량", "가스", "", "63,700㎉/Hr"],
               ["에너지소비량", "전기", "3상 220V/380V", "3상 220V/380V"],
               ["섭비사양", "급수", "15A", "15A"],
               ["섭비사양", "배수", "50A", "50A"],
               ["섭비사양", "스팀", "32A", ""],
               ["섭비사양", "가스", "", "15A"],
               ["콘베어 사양", "속도", "0.8m/min", "0.8m/min"],
               ["콘베어 사양", "넓이", "630㎜", "630㎜"]];

  second_washing_table(thead);

  scrolltop();
  page[0].style.display = "none";
}

washing_im06.onclick = function(){
  second_washing_modal.style.display = 'inline-block';
  second_washing_bigimg.src = washing_img6.src;

  second_washing_title.innerHTML = washing_txt6.innerHTML;


  thead = [["형식", "형식", "2탱크 건조형", "2탱크 건조형"],
               ["형식", "형식", "스팀식 Steam type", "가스식 Gas type"],
               ["규격", "규격", "5575(L)*820(W)*1830(H)", "5575(L)*820(W)*1830(H)"],
               ["세척용량(식판 Meal plate/Hr)", "세척용량(식판 Meal plate/Hr)", "1140 EA/Er", "1140 EA/Er"],
               ["에너지소비량", "최대소비전력", "5.3㎾", "30㎾"],
               ["에너지소비량", "스팀", "180㎏/Hr", ""],
               ["에너지소비량", "가스", "", "63,700㎉/Hr"],
               ["에너지소비량", "전기", "3상 220V/380V", "3상 220V/380V"],
               ["섭비사양", "급수", "15A", "15A"],
               ["섭비사양", "배수", "50A", "50A"],
               ["섭비사양", "스팀", "32A", ""],
               ["섭비사양", "가스", "", "15A"],
               ["콘베어 사양", "속도", "1.4m/min", "1.4m/min"],
               ["콘베어 사양", "넓이", "630㎜", "630㎜"]];

  second_washing_table(thead);

  scrolltop();
  page[0].style.display = "none";
}

washing_im07.onclick = function(){
  second_washing_modal.style.display = 'inline-block';
  second_washing_bigimg.src = washing_img7.src;

  second_washing_title.innerHTML = washing_txt7.innerHTML;


  thead = [["형식", "형식", "3탱크 일반형", "3탱크 일반형"],
               ["형식", "형식", "스팀식 Steam type", "가스식 Gas type"],
               ["규격", "규격", "5325(L)*820(W)*1450(H)", "5325(L)*820(W)*1450(H)"],
               ["세척용량(식판 Meal plate/Hr)", "세척용량(식판 Meal plate/Hr)", "1380 EA/Er", "1380 EA/Er"],
               ["에너지소비량", "최대소비전력", "7㎾", "13㎾"],
               ["에너지소비량", "스팀", "167㎏/Hr", ""],
               ["에너지소비량", "가스", "", "63,700㎉/Hr"],
               ["에너지소비량", "전기", "3상 220V/380V", "3상 220V/380V"],
               ["섭비사양", "급수", "15A", "15A"],
               ["섭비사양", "배수", "50A", "50A"],
               ["섭비사양", "스팀", "32A", ""],
               ["섭비사양", "가스", "", "15A"],
               ["콘베어 사양", "속도", "2.6m/min", "2.6m/min"],
               ["콘베어 사양", "넓이", "630㎜", "630㎜"]];

  second_washing_table(thead);

  scrolltop();
  page[0].style.display = "none";
}

washing_im08.onclick = function(){
  second_washing_modal.style.display = 'inline-block';
  second_washing_bigimg.src = washing_img8.src;

  second_washing_title.innerHTML = washing_txt8.innerHTML;


  thead = [["형식", "형식", "3탱크 건조형", "3탱크 건조형"],
               ["형식", "형식", "스팀식 Steam type", "가스식 Gas type"],
               ["규격", "규격", "6625(L)*820(W)*1830(H)", "6625(L)*820(W)*1830(H)"],
               ["세척용량(식판 Meal plate/Hr)", "세척용량(식판 Meal plate/Hr)", "2160 EA/Er", "2160 EA/Er"],
               ["에너지소비량", "최대소비전력", "7.4㎾", "38㎾"],
               ["에너지소비량", "스팀", "200㎏/Hr", ""],
               ["에너지소비량", "가스", "", "63,700㎉/Hr"],
               ["에너지소비량", "전기", "3상 220V/380V", "3상 220V/380V"],
               ["섭비사양", "급수", "15A", "15A"],
               ["섭비사양", "배수", "50A", "50A"],
               ["섭비사양", "스팀", "32A", ""],
               ["섭비사양", "가스", "", "15A"],
               ["콘베어 사양", "속도", "2.6m/min", "2.6m/min"],
               ["콘베어 사양", "넓이", "630㎜", "630㎜"]];

  second_washing_table(thead);

  scrolltop();
  page[0].style.display = "none";
}

function washing_one(){
  $('#washing_one').contents().unwrap().wrap('<strong id = "washing_one" onclick = "washing_one()"></strong>');
  $('#washing_two').contents().unwrap().wrap('<a id = "washing_two" onclick = "washing_two()"></a>');

  washing_im01.style.visibility = "visible";
  washing_im02.style.visibility = "visible";
  washing_im03.style.visibility = "visible";
  washing_im04.style.visibility = "visible";
  washing_im05.style.visibility = "visible";
  washing_im06.style.visibility = "visible";
  washing_im07.style.visibility = "visible";
  washing_im08.style.visibility = "visible";

  washing_img1.src = "../image/5-세척기기류/1-도어타입세척기.png";
  washing_txt1.innerHTML = "도어타입세척기";
  washing_img2.src = "../image/5-세척기기류/2-랙콘베아타입2개.png";
  washing_txt2.innerHTML = "랙콘베이어타입세척기";
}

function washing_two(){
  $('#washing_one').contents().unwrap().wrap('<a id = "washing_one" onclick = "washing_one()"></a>');
  $('#washing_two').contents().unwrap().wrap('<strong id = "washing_two" onclick = "washing_two()"></strong>');

  washing_im01.style.visibility = "visible";
  washing_im02.style.visibility = "visible";
  washing_im03.style.visibility = "hidden";
  washing_im04.style.visibility = "hidden";
  washing_im05.style.visibility = "hidden";
  washing_im06.style.visibility = "hidden";
  washing_im07.style.visibility = "hidden";
  washing_im08.style.visibility = "hidden";

  washing_img1.src = "../image/5-세척기기류/9-미니플라이트타입.png";
  washing_txt1.innerHTML = "미니플라이트타입";
  washing_img2.src = "../image/5-세척기기류/10-가스부스타.png";
  washing_txt2.innerHTML = "가스부스타";
}
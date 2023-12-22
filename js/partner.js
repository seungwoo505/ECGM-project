/*************
  10. 협력사
**************/

var partner_url01 = document.getElementById("partner_url01");
var partner_url02 = document.getElementById("partner_url02");
var partner_url03 = document.getElementById("partner_url03");
var partner_url04 = document.getElementById("partner_url04");
var partner_url05 = document.getElementById("partner_url05");
var partner_url06 = document.getElementById("partner_url06");
var partner_url07 = document.getElementById("partner_url07");
var partner_url08 = document.getElementById("partner_url08");
var partner_url09 = document.getElementById("partner_url09");
var partner_url10 = document.getElementById("partner_url10");
var partner_url11 = document.getElementById("partner_url11");
var partner_url12 = document.getElementById("partner_url12");

var partner_img01 = document.getElementById("partner_img01");
var partner_img02 = document.getElementById("partner_img02");
var partner_img03 = document.getElementById("partner_img03");
var partner_img04 = document.getElementById("partner_img04");
var partner_img05 = document.getElementById("partner_img05");
var partner_img06 = document.getElementById("partner_img06");
var partner_img07 = document.getElementById("partner_img07");
var partner_img08 = document.getElementById("partner_img08");
var partner_img09 = document.getElementById("partner_img09");
var partner_img10 = document.getElementById("partner_img10");
var partner_img11 = document.getElementById("partner_img11");
var partner_img12 = document.getElementById("partner_img12");

var partner_txt01 = document.getElementById("partner_txt01");
var partner_txt02 = document.getElementById("partner_txt02");
var partner_txt03 = document.getElementById("partner_txt03");
var partner_txt04 = document.getElementById("partner_txt04");
var partner_txt05 = document.getElementById("partner_txt05");
var partner_txt06 = document.getElementById("partner_txt06");
var partner_txt07 = document.getElementById("partner_txt07");
var partner_txt08 = document.getElementById("partner_txt08");
var partner_txt09 = document.getElementById("partner_txt09");
var partner_txt10 = document.getElementById("partner_txt10");
var partner_txt11 = document.getElementById("partner_txt11");
var partner_txt12 = document.getElementById("partner_txt12");

var exit = document.getElementsByClassName("partner");

function partner_one(){
  $('#partner_one').contents().unwrap().wrap('<strong id = "partner_one" onclick = "partner_one()"></strong>');
  $('#partner_two').contents().unwrap().wrap('<a id = "partner_two" onclick = "partner_two()"></a>');
  $('#partner_three').contents().unwrap().wrap('<a id = "partner_three" onclick = "partner_three()"></a>');

  partner_url01.setAttribute('href', "http://www.rinnai.co.kr");
  partner_url02.setAttribute('href', "http://www.kwmy.co.kr");
  partner_url03.setAttribute('href', "http://www.guwha.co.kr");
  partner_url04.setAttribute('href', "http://www.nanoi.co.kr");
  partner_url05.setAttribute('href', "http://www.idaekyo.co.kr");
  partner_url06.setAttribute('href', "http://www.daeyung.co.kr");
  partner_url07.setAttribute('href', "http://www.daijin-ent.co.kr");
  partner_url08.setAttribute('href', "http://www.dipoelec.com");
  partner_url09.setAttribute('href', "https://lassele.com");
  partner_url10.setAttribute('href', "http://www.rationalkorea.co.kr");
  partner_url11.setAttribute('href', "http://www.busungrh.com");
  partner_url12.setAttribute('href', "http://www.sun-kyung.co.kr/");

  partner_img01.src = "../image/협력사마크/1-린나이코리아.jpg";
  partner_img02.src = "../image/협력사마크/2-광명상사.jpg";
  partner_img03.src = "../image/협력사마크/3-거화산업.jpg";
  partner_img04.src = "../image/협력사마크/4-나노전자.jpg";
  partner_img05.src = "../image/협력사마크/5-대교통상.jpg";
  partner_img06.src = "../image/협력사마크/6-대영제과제빵기계.jpg";
  partner_img07.src = "../image/협력사마크/7-대진엔터프라이즈.jpg";
  partner_img08.src = "../image/협력사마크/8-디포인덕션.jpg";
  partner_img09.src = "../image/협력사마크/9-라셀르.jpg";
  partner_img10.src = "../image/협력사마크/10-라치오날코리아.jpg";
  partner_img11.src = "../image/협력사마크/11-부성.jpg";
  partner_img12.src = "../image/협력사마크/12-선경산업.jpg";

  partner_txt01.innerHTML = "린나이코리아(주)";
  partner_txt02.innerHTML = "(주)광명상사";
  partner_txt03.innerHTML = "거화산업";
  partner_txt04.innerHTML = "나노전자";
  partner_txt05.innerHTML = "(주)대교통상";
  partner_txt06.innerHTML = "대영제과제빵기계(주)";
  partner_txt07.innerHTML = "대진엔터프라이즈";
  partner_txt08.innerHTML = "(주)디포인덕션";
  partner_txt09.innerHTML = "(주)라셀르";
  partner_txt10.innerHTML = "라치오날코리아(주)";
  partner_txt11.innerHTML = "(주)부성";
  partner_txt12.innerHTML = "선경산업";

  for (var i = 4; i < exit.length; i++) {
    exit[i].style.visibility = "visible";
  }
}

function partner_two(){
  $('#partner_one').contents().unwrap().wrap('<a id = "partner_one" onclick = "partner_one()"></a>');
  $('#partner_two').contents().unwrap().wrap('<strong id = "partner_two" onclick = "partner_two()"></strong>');
  $('#partner_three').contents().unwrap().wrap('<a id = "partner_three" onclick = "partner_three()"></a>');

  partner_url01.setAttribute('href', "http://www.sungworld.co.kr");
  partner_url02.setAttribute('href', "http://www.segisystem.kr");
  partner_url03.setAttribute('href', "http://www.kitchen24.co.kr");
  partner_url04.setAttribute('href', "http://www.sjm.co.kr");
  partner_url05.setAttribute('href', "http://www.ohjin.co.kr");
  partner_url06.setAttribute('href', "https://www.unox.com/ko_kr");
  partner_url07.setAttribute('href', "http://www.uniqueds.com");
  partner_url08.setAttribute('href', "http://www.instem.co.kr");
  partner_url09.setAttribute('href', "https://www.koreel.com");
  partner_url10.setAttribute('href', "http://tnt4909.co.kr");
  partner_url11.setAttribute('href', "https://www.paseco.co.kr");
  partner_url12.setAttribute('href', "http://www.primewash.co.kr");

  partner_img01.src = "../image/협력사마크/13-성월드.jpg";
  partner_img02.src = "../image/협력사마크/14-세기시스템.jpg";
  partner_img03.src = "../image/협력사마크/15-신강물산.jpg";
  partner_img04.src = "../image/협력사마크/16-신진마스타.jpg";
  partner_img05.src = "../image/협력사마크/17-오진양행.jpg";
  partner_img06.src = "../image/협력사마크/18-우녹스.jpg";
  partner_img07.src = "../image/협력사마크/19-유니크대성.jpg";
  partner_img08.src = "../image/협력사마크/20-인스템.jpg";
  partner_img09.src = "../image/협력사마크/21-코릴.jpg";
  partner_img10.src = "../image/협력사마크/22-티앤티.jpg";
  partner_img11.src = "../image/협력사마크/23-파세코.jpg";
  partner_img12.src = "../image/협력사마크/24-프라임.jpg";

  partner_txt01.innerHTML = "(주)성월드";
  partner_txt02.innerHTML = "(주)세기시스템";
  partner_txt03.innerHTML = "신강물산";
  partner_txt04.innerHTML = "(주)신진마스타";
  partner_txt05.innerHTML = "(주)오진양행";
  partner_txt06.innerHTML = "우녹스";
  partner_txt07.innerHTML = "(주)유니크대성";
  partner_txt08.innerHTML = "(주)인스템";
  partner_txt09.innerHTML = "코릴";
  partner_txt10.innerHTML = "(주)티앤티";
  partner_txt11.innerHTML = "(주)파새코";
  partner_txt12.innerHTML = "(주)프라임";

  for (var i = 4; i < exit.length; i++) {
    exit[i].style.visibility = "visible";
  }
}

function partner_three(){
  $('#partner_one').contents().unwrap().wrap('<a id = "partner_one" onclick = "partner_one()"></a>');
  $('#partner_two').contents().unwrap().wrap('<a id = "partner_two" onclick = "partner_two()"></a>');
  $('#partner_three').contents().unwrap().wrap('<strong id = "partner_three" onclick = "partner_three()"></strong>');

  partner_url01.setAttribute('href', "http://www.hains.kr");
  partner_url02.setAttribute('href', "http://www.hanshinfood.co.kr");
  partner_url03.setAttribute('href', "http://www.honey-bee.biz");
  partner_url04.setAttribute('href', "http://www.hoshizaki.co.kr");

  partner_img01.src = "../image/협력사마크/25-하인스.jpg";
  partner_img02.src = "../image/협력사마크/26-한신기업.jpg";
  partner_img03.src = "../image/협력사마크/27-허니비.jpg";
  partner_img04.src = "../image/협력사마크/28-호시자키.jpg";

  partner_txt01.innerHTML = "(주)하인스";
  partner_txt02.innerHTML = "(주)한신기업";
  partner_txt03.innerHTML = "(주)허니비";
  partner_txt04.innerHTML = "호시자키한국(주)";

  for (var i = 4; i < exit.length; i++) {
    exit[i].style.visibility = "hidden";
  }
}
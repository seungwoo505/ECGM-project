/*회사연혁*/
var move1 = document.getElementsByClassName("year")[0];
var move2 = document.getElementsByClassName("year")[1];
var move3 = document.getElementsByClassName("year")[2];

var move = document.getElementById("round");
var infomation = document.getElementById("infomation");
var info_img = document.getElementById("info_img");

function scrolltop(){
  $('html, body').animate({scrollTop: $('.pt-triggers').offset().top}, 400);
}

function preloading(imageArray){
  let n = imageArray.length;

  for (let i = 0; i < n; i++) {
    let img = new Image();
    img.src = imageArray[i];
  }
}

move1.onclick = function(){
  move1.style.border = "3px solid rgba(207, 107, 57, 0.6)";
  move1.style.color = "rgba(207, 107, 57, 1)";
  move2.style.border = "3px solid rgba(79, 78, 78, 0.6)";
  move2.style.color = "rgba(79, 78, 78, 1)";
  move3.style.border = "3px solid rgba(79, 78, 78, 0.6)";
  move3.style.color = "rgba(79, 78, 78, 1)";
	move.style.margin = "2% 0 0 13%";
	move.style.transform = "translate(0, 0)";
	move.style.width = "";

	infomation.style.opacity = 1;
	info_img.src = "../image/회사소개/y10.jpg";
}

move2.onclick = function(){
  move1.style.border = "3px solid rgba(79, 78, 78, 0.6)";
  move1.style.color = "rgba(79, 78, 78, 1)";
  move2.style.border = "3px solid rgba(207, 107, 57, 0.6)";
  move2.style.color = "rgba(207, 107, 57, 1)";
  move3.style.border = "3px solid rgba(79, 78, 78, 0.6)";
  move3.style.color = "rgba(79, 78, 78, 1)";
	move.style.margin = "2% 0 0 13%";
	move.style.transform = "translate(0, 0)";
	move.style.width = "";

	infomation.style.opacity = 1;
	info_img.src = "../image/회사소개/y00.jpg";
}

move3.onclick = function(){
  move1.style.border = "3px solid rgba(79, 78, 78, 0.6)";
  move1.style.color = "rgba(79, 78, 78, 1)";
  move2.style.border = "3px solid rgba(79, 78, 78, 0.6)";
  move2.style.color = "rgba(79, 78, 78, 1)";
  move3.style.border = "3px solid rgba(207, 107, 57, 0.6)";
  move3.style.color = "rgba(207, 107, 57, 1)";
	move.style.margin = "2% 0 0 13%";
	move.style.transform = "translate(0, 0)";
	move.style.width = "";

	infomation.style.opacity = 1;
	info_img.src = "../image/회사소개/y90.jpg";
}

/*인증서 및 수상*/
//사진 확대하는 부분을 의미
var modal = document.getElementById("myModal");

//사진 및 글씨를 클릭했을때 사진이 확대되는부분이 나오게 하기
var modalImg = document.getElementById("bigimg");
var modaltxt = document.getElementById("explanation");

var img01 = document.getElementById("im01");
var img01_change = document.getElementById("img1");
var txt1 = document.getElementById('txt1');
img01.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img01_change.src;
  modaltxt.innerHTML = txt1.innerHTML;
  scrolltop();
}

var img02 = document.getElementById("im02");
var img02_change = document.getElementById("img2");
var txt2 = document.getElementById('txt2');
img02.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img02_change.src;
  modaltxt.innerHTML = txt2.innerHTML;
  scrolltop();
}

var img03 = document.getElementById("im03");
var img03_change = document.getElementById("img3");
var txt3 = document.getElementById('txt3');
img03.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img03_change.src;
  modaltxt.innerHTML = txt3.innerHTML;
  scrolltop();
}

var img04 = document.getElementById("im04");
var img04_change = document.getElementById("img4");
var txt4 = document.getElementById('txt4');
img04.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img04_change.src;
  modaltxt.innerHTML = txt4.innerHTML;
  scrolltop();
}

var img05 = document.getElementById("im05");
var img05_change = document.getElementById("img5");
var txt5 = document.getElementById('txt5');
img05.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img05_change.src;
  modaltxt.innerHTML = txt5.innerHTML;
  scrolltop();
}

var img06 = document.getElementById("im06");
var img06_change = document.getElementById("img6");
var txt6 = document.getElementById('txt6');
img06.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img06_change.src;
  modaltxt.innerHTML = txt6.innerHTML;
  scrolltop();
}

var img07 = document.getElementById("im07");
var img07_change = document.getElementById("img7");
var txt7 = document.getElementById('txt7');
img07.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img07_change.src;
  modaltxt.innerHTML = txt7.innerHTML;
  scrolltop();
}

var img08 = document.getElementById("im08");
var img08_change = document.getElementById("img8");
var txt8 = document.getElementById('txt8');
img08.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img08_change.src;
  modaltxt.innerHTML = txt8.innerHTML;
  scrolltop();
}

var img09 = document.getElementById("im09");
var img09_change = document.getElementById("img9");
var txt9 = document.getElementById('txt9');
img09.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img09_change.src;
  modaltxt.innerHTML = txt9.innerHTML;
  scrolltop();
}

var img10 = document.getElementById("im10");
var img10_change = document.getElementById("img10");
var txt10 = document.getElementById('txt10');
img10.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img10_change.src;
  modaltxt.innerHTML = txt10.innerHTML;
  scrolltop();
}

var img11 = document.getElementById("im11");
var img11_change = document.getElementById("img11");
var txt11 = document.getElementById('txt11');
img11.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img11_change.src;
  modaltxt.innerHTML = txt11.innerHTML;
  scrolltop();
}

var img12 = document.getElementById("im12");
var img12_change = document.getElementById("img12");
var txt12 = document.getElementById('txt12');
img12.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img12_change.src;
  modaltxt.innerHTML = txt12.innerHTML;
  scrolltop();
}

var img13 = document.getElementById("im13");
var img13_change = document.getElementById("img13");
var txt13 = document.getElementById('txt13');
img13.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img13_change.src;
  modaltxt.innerHTML = txt13.innerHTML;
  scrolltop();
}

var img14 = document.getElementById("im14");
var img14_change = document.getElementById("img14");
var txt14 = document.getElementById('txt14');
img14.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img14_change.src;
  modaltxt.innerHTML = txt14.innerHTML;
  scrolltop();
}

var img15 = document.getElementById("im15");
var img15_change = document.getElementById("img15");
var txt15 = document.getElementById('txt15');
img15.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img15_change.src;
  modaltxt.innerHTML = txt15.innerHTML;
  scrolltop();
}

var img16 = document.getElementById("im16");
var img16_change = document.getElementById("img16");
var txt16 = document.getElementById('txt16');
img16.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img16_change.src;
  modaltxt.innerHTML = txt16.innerHTML;
  scrolltop();
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $('body').removeClass('scroll');
}

function one(){
  $('#one').contents().unwrap().wrap('<strong id = "one" onclick = "one()"></strong>');
  $('#two').contents().unwrap().wrap('<a id = "two" onclick = "two()"></a>');

  img01_change.src = "../image/인증서/1-사업자등록증.jpg";
  img02_change.src = "../image/인증서/2-공장등록증.jpg";
  img03_change.src = "../image/인증서/3-한국상업용조리기계조합등록증.jpg";
  img04_change.src = "../image/인증서/4-품질경영시스템인증서.jpg";
  img05_change.src = "../image/인증서/5-중소기업확인서.jpg";
  img06_change.src = "../image/인증서/6-벤처기업확인서.jpg";
  img07_change.src = "../image/인증서/7-가스용품제조사업허가증.jpg";
  img08_change.src = "../image/인증서/8-완성검사증명서-2020.jpg";
  img09_change.src = "../image/인증서/9-건설업등록증(기계설비시공업).jpg";
  img10_change.src = "../image/인증서/10-건설업등록증(가스시설시공업).jpg";
  img11_change.src = "../image/인증서/11-여성기업확인서.jpg";
  img12_change.src = "../image/인증서/12-기술혁신이노비즈확인서.jpg";
  img13_change.src = "../image/인증서/13-기업은행패밀리기업-2019.jpg";
  img14.style.visibility = "visible";
  img15.style.visibility = "visible";
  img16.style.visibility = "visible";

  txt1.innerHTML = "사업자등록증";
  txt2.innerHTML = "공장등록증";
  txt3.innerHTML = "한국산업용조리기계조합등록증";
  txt4.innerHTML = "품질경영시스템인증서";
  txt5.innerHTML = "중소기업확인서";
  txt6.innerHTML = "벤처기업확인서";
  txt7.innerHTML = "가스용품제조사업허가증";
  txt8.innerHTML = "완성검사증명서";
  txt9.innerHTML = "건설업등록증(기계설비시공업)";
  txt10.innerHTML = "건설업등록증(가스시설시공업)";
  txt11.innerHTML = "여성기업확인서";
  txt12.innerHTML = "기술혁신이노비즈확인서";
  txt13.innerHTML = "기업은행패밀리기업";
}

function two(){
  $('#two').contents().unwrap().wrap('<strong id = "two" onclick = "two()"></strong>');
  $('#one').contents().unwrap().wrap('<a id = "one" onclick = "one()"></a>');

  img01_change.src = "../image/인증서/17-특허0822754.jpg";
  img02_change.src = "../image/인증서/18-표창장-2007.jpg";
  img03_change.src = "../image/인증서/19-표창장-2008.jpg";
  img04_change.src = "../image/인증서/20-표창장-2009.jpg";
  img05_change.src = "../image/인증서/21-표창장-2010.jpg";
  img06_change.src = "../image/인증서/22-표창장-2011.jpg";
  img07_change.src = "../image/인증서/23-표창장-2012.jpg";
  img08_change.src = "../image/인증서/24-감사장-2005.jpg";
  img09_change.src = "../image/인증서/25-수료증-2008.jpg";
  img10_change.src = "../image/인증서/26-수료증-2009.jpg";
  img11_change.src = "../image/인증서/27-위촉장-2005.jpg";
  img12_change.src = "../image/인증서/28-위촉장-2011.jpg";
  img13_change.src = "../image/인증서/29-회원증-2009.jpg";
  img14.style.visibility = "hidden";
  img15.style.visibility = "hidden";
  img16.style.visibility = "hidden";

  txt1.innerHTML = "특허증(전동회전식 솥)";
  txt2.innerHTML = "표창장(한국조리기계공업협동조합)";
  txt3.innerHTML = "표창장(특허청장)";
  txt4.innerHTML = "표창장(중소기업진흥공단)";
  txt5.innerHTML = "표창장(지식경제부장관)";
  txt6.innerHTML = "표창장(인천광역시서구청장)";
  txt7.innerHTML = "표창장(중소기업경영자협의회)";
  txt8.innerHTML = "감사장";
  txt9.innerHTML = "수료증";
  txt10.innerHTML = "수료증";
  txt11.innerHTML = "위촉장";
  txt12.innerHTML = "위촉장";
  txt13.innerHTML = "회원증(중소기업경영자협의회)";
}

window.onload = function(){
  preloading(['../image/회사소개/y10.jpeg', '../image/회사소개/y00.jpeg', '../image/회사소개/y90.jpeg']);
}
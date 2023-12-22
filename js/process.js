var page = document.getElementsByClassName('pt-page-current');

/*************
  7. 가공기기류
**************/

//사진 확대하는 부분을 의미
var process_modal = document.getElementById("process");

//사진 및 글씨를 클릭했을때 사진이 확대되는부분이 나오게 하기
var process_modalImg = document.getElementById("process_bigimg");
var process_title = document.getElementById("process_title");
var process_modaltxt = document.getElementById("process_explanation");
var process_standard = document.getElementById("process_standard");
var process_knife = document.getElementById("process_knife");
var process_knife_img = document.getElementById("process_knife_img");

var process_img01 = document.getElementById("process_im01");
var process_img01_change = document.getElementById("process_img1");
var process_txt1 = document.getElementById('process_txt1');
process_img01.onclick = function(){
  process_modal.style.display = "inline-block";
  process_title.innerHTML = process_txt1.innerHTML;
  process_modalImg.src = process_img01_change.src;
  process_modaltxt.innerHTML = "주방에서 다루는 야채를 요리에 쓰이는 용도에 따라 적당하게 가공하여 준다.<br>\
                                다양한 칼날(기본7개)의 조합으로 여러가지 모양의 전처리가 가능하다.<br>\
                                작동법이 간편하고 2중 안전장치로 안전성이 뛰어나다.<br>\
                                원형투입구(Ø160)와 오이파이프 채용으로 감자, 양파등 둥근 야채와 오이, 대파등 가늘고 긴 야채도 원활히 작업가능하다.";
  process_standard.innerHTML = "모    델 : HMV -200<br>\
                                규    격 : W210*H620*D400<br>\
                                전기사양 : 단상 220V 1/2HP, 400W<br>\
                                처리능력 : 360Kg/h 이상<br>제품중량 : 18KG";
  process_knife.style.display = "block";
  process_knife_img.style.display = "block";
  process_knife_img.src = "../image/7-가공기기류/1-칼날구성.jpg";

  scrolltop();
  page[0].style.display = "none";
}

var process_img02 = document.getElementById("process_im02");
var process_img02_change = document.getElementById("process_img2");
var process_txt2 = document.getElementById('process_txt2');
process_img02.onclick = function(){
  process_modal.style.display = "inline-block";
  process_title.innerHTML = process_txt2.innerHTML;
  process_modalImg.src = process_img02_change.src;
  process_modaltxt.innerHTML = "주방에서 다루는 야채를 요리에 쓰이는 용도에 따라 적당하게 가공하여 준다.<br>\
                                투입구가 넓어 작업성이 뛰어나다.<br>\
                                2중의 안전장치 적용으로 안전성이 뛰어나다.<br>\
                                야채절단기 최초로 어슷썰기가 적용되었다.(가이드파이프 별도구매)<br>";
  process_standard.innerHTML = "모    델 : HMV -200<br>\
                                규    격 : W210*H620*D400<br>\
                                전기사양 : 단상 220V 1/2HP, 400W<br>\
                                처리능력 : 360Kg/h 이상<br>\
                                제품중량 : 18KG";
  process_knife.style.display = "block";
  process_knife_img.style.display = "block";
  process_knife_img.src = "../image/7-가공기기류/2-칼날구성.jpg";

  scrolltop();
  page[0].style.display = "none";
}

var process_img03 = document.getElementById("process_im03");
var process_img03_change = document.getElementById("process_img3");
var process_txt3 = document.getElementById('process_txt3');
process_img03.onclick = function(){
  process_modal.style.display = "inline-block";
  process_title.innerHTML = process_txt3.innerHTML;
  process_modalImg.src = process_img03_change.src;
  process_modaltxt.innerHTML = "고성능 중형 고급 모델<br>\
                                최고급 알루미늄 재질의 컴팩트한 외형으로 협소한 장소에서도 작업 가능<br>\
                                테이블타입으로 준 대형 수준의 처리 용량<br>\
                                저소음, 강력한 직결식 감속기 채용<br>\
                                고기와 접촉부 전체 스테인리스 스틸 사용<br>\
                                탈착레버로 간단히 분리되는 헤드<br>\
                                믹싱시 열발생이 없이 갈아지는 특수 설계<br>\
                                PL법에 대비한 안전한 투입구 구조<br>\
                                사용온도 : -2℃ ~ 2℃";

  process_standard.innerHTML = "모    델 : M-22S<br>\
                                규    격 : 660*240*420mm<br>\
                                전기사양 : 1Ø/ 3Ø, 220V/ 380V, 750W<br>\
                                처리능력 : 300Kg/h<br>\
                                Diameter of Knife : Ø76㎜<br>\
                                제품중량 : 35KG";
  process_knife.style.display = "none";
  process_knife_img.style.display = "none";

  scrolltop();
  page[0].style.display = "none";
}

var process_img04 = document.getElementById("process_im04");
var process_img04_change = document.getElementById("process_img4");
var process_txt4 = document.getElementById('process_txt4');
process_img04.onclick = function(){
  process_modal.style.display = "inline-block";
  process_title.innerHTML = process_txt4.innerHTML;
  process_modalImg.src = process_img04_change.src;
  process_modaltxt.innerHTML = "최소형 고성능 실용적인 모델<br>\
                                컴팩트한 외형으로 협소한 장소에서도 작업 가능<br>\
                                테이블타입으로 고성능 발휘<br>\
                                저소음 초강력 감속기 채용<br>\
                                고기와 접촉부 전체 스테인리스 스틸 사용<br>\
                                탈착 레버로 간단히 분리되는 헤드부분<br>\
                                믹싱시 열발생을 최소화한 특수설계로 갈아진 고기의 변색 방지<br>\
                                PL법에 대비한 안전한 투입구 구조<br>\
                                사용온도 : -2℃ ~ 2℃";

  process_standard.innerHTML = "모    델 : M-12S<br>\
                                규    격 : 620×340×395㎜<br>\
                                전기사양 : 1Ø/ 3Ø, 220V/ 380V, 750W<br>\
                                처리능력 : 150Kg/h<br>\
                                Diameter of Knife : Ø69㎜<br>\
                                제품중량 : 27KG";
  process_knife.style.display = "none";
  process_knife_img.style.display = "none";

  scrolltop();
  page[0].style.display = "none";
}

var process_img05 = document.getElementById("process_im05");
var process_img05_change = document.getElementById("process_img5");
var process_txt5 = document.getElementById('process_txt5');
process_img05.onclick = function(){
  process_modal.style.display = "inline-block";
  process_title.innerHTML = process_txt5.innerHTML;
  process_modalImg.src = process_img05_change.src;
  process_modaltxt.innerHTML = "작지만 강력한 파워와 고성능<br>\
                                컴팩트한 외형으로 협소한 장소에서도 작업이 가능<br>\
                                테이블타입으로 처리용량은 준 대형 수준<br>\
                                저소음 강력한 감속기 채용 (1.5HP)<br>\
                                고기와 접촉부 전체 스테인리스 스틸 사용<br>\
                                헤드부분 탈착레버로 간단히 분리<br>\
                                믹싱시 열발생이 없이 갈아지는 특수 설계<br>\
                                PL법에 대비한 안전한 투입구 구조<br>\
                                사용온도 : -2℃ ~ 2℃";

  process_standard.innerHTML = "모    델 : MN-22S<br>\
                                규    격 : 640×340×395㎜<br>\
                                전기사양 : 1Ø/ 3Ø, 220V/ 380V, 1100W<br>\
                                처리능력 : 300Kg/h<br>\
                                Diameter of Knife : Ø76㎜<br>\
                                제품중량 : 35KG";
  process_knife.style.display = "none";
  process_knife_img.style.display = "none";

  scrolltop();
  page[0].style.display = "none";
}

//사진 확대하는 부분을 의미
var second_process_modal = document.getElementById("second_process");

//사진 및 글씨를 클릭했을때 사진이 확대되는부분이 나오게 하기
var second_process_modalImg = document.getElementById("second_process_bigimg");
var second_process_title = document.getElementById("second_process_title");
var second_process_modaltxt = document.getElementById("second_process_explanation");
var second_process_thead = document.getElementById("process_thead");
var second_process_tbody = document.getElementById("process_tbody");

var second_process_biglittleimgs = document.getElementById("second_process_biglittleimgs");

var second_process_txt1 = document.getElementById("second_process_txt1");
var second_process_txt2 = document.getElementById("second_process_txt2");
var second_process_txt3 = document.getElementById("second_process_txt3");

var second_process_img1 = document.getElementById("second_process_img1");
var second_process_img2 = document.getElementById("second_process_img2");
var second_process_img3 = document.getElementById("second_process_img3");

var process_img06 = document.getElementById("process_im06");
var process_img06_change = document.getElementById("process_img6");
var process_txt6 = document.getElementById('process_txt6');
process_img06.onclick = function(){
  second_process_modal.style.display = "inline-block";
  second_process_title.innerHTML = process_txt6.innerHTML;
  second_process_modalImg.src = process_img06_change.src;
  second_process_modaltxt.innerHTML = "빠르고 간편하게 감자등의 껍질을 제거(세척 및 탈피가 동시에 가능)<br>\
                                       균등한 탈피능력으로 손실을 최소화<br>\
                                       작업이 간편하여 누구나 손쉽게 사용할 수 있다.";
  second_process_biglittleimgs.style.display = "none";

  var thead = ["모델", "규격", "전기용량", "처리능력", "용도"];
  var tbody = [["HMP-20", "Ø470*850mm", "1Ø, 220V, 1/2HP, 0.4KW", "15~20KG", "감자,고구마,당근등"],
               ["HMP-30", "Ø600*930mm", "1Ø, 220V, 1/2HP, 0.75KW ", "25~30KG", "감자,고구마,당근등"]];

  second_process_table(thead, tbody);

  scrolltop();
  page[0].style.display = "none";
}

var process_img07 = document.getElementById("process_im07");
var process_img07_change = document.getElementById("process_img7");
var process_txt7 = document.getElementById('process_txt7');
process_img07.onclick = function(){
  second_process_modal.style.display = "inline-block";
  second_process_title.innerHTML = process_txt7.innerHTML;
  second_process_modalImg.src = process_img07_change.src;
  second_process_modaltxt.innerHTML = "소시지, 햄, 가공육, 치즈, 생선, 정육등의 손쉬운 절단을 위해 디자인된 소형 고성능 햄슬라이서<br>\
                                       강력한 무소음의 단상, 삼상모터<br>\
                                       부식이 없고 인체에 무해한 최고급 알루미늄 재질인 7A를 사형주조로 사용<br>\
                                       강력한 기어구동 칼날 모터<br>\
                                       인체공학적 설계의 Chute 핸들<br>\
                                       사용온도 : 1℃ ~ 3℃";

  second_process_biglittleimgs.style.display = "inline-block";

  second_process_txt1.innerHTML = "HS-2N/Automatic";
  second_process_txt2.innerHTML = "HS-1N/Manual";
  second_process_txt3.style.display = "none";

  second_process_img1.src = "../image/7-가공기기류/7-슬라이서HS-1N.png";
  second_process_img2.src = "../image/7-가공기기류/7.1-슬라이서HS-2N.png";
  second_process_img3.style.display = "none";

  var thead = ["모 델", "규격", "Motor", "Capacity", "Diameter of Knife", "Slice Thickness", "Net Weight"];
  var tbody = [["HS-2N", "750*550*600", "1Ø/ 3Ø, 220V/380V, 560W", "45 slices/min", "Ø300㎜", "0.1~20mm", "78kg"],
               ["HS-1N", "600*500*500", "1Ø/3Ø, 220V/380V, 400W", "45 slices/min", "Ø300㎜" , "0.1~20mm", "37kg"],
               ["HS-300", "780*580*760", "1Ø, 220V, 550W/850W", "45 slices/min", "Ø283㎜", "0.1~20mm", "85kg/90kg"]];

  second_process_table(thead, tbody);

  scrolltop();
  page[0].style.display = "none";
}

var process_img08 = document.getElementById("process_im08");
var process_img08_change = document.getElementById("process_img8");
var process_txt8 = document.getElementById('process_txt8');
process_img08.onclick = function(){
  second_process_modal.style.display = "inline-block";
  second_process_title.innerHTML = process_txt8.innerHTML;
  second_process_modalImg.src = process_img08_change.src;
  second_process_modaltxt.innerHTML = "소시지, 햄, 가공육, 치즈, 생선, 정육등의 손쉬운 절단을 위해 디자인된 소형 고성능 햄슬라이서<br>\
                                       강력한 무소음의 단상, 삼상모터<br>\
                                       부식이 없고 인체에 무해한 최고급 알루미늄 재질인 7A를 사형주조로 사용<br>\
                                       강력한 기어구동 칼날 모터<br>\
                                       인체공학적 설계의 Chute 핸들<br>\
                                       사용온도 : 1℃ ~ 3℃";

  second_process_biglittleimgs.style.display = "inline-block";

  second_process_txt1.innerHTML = "GS-12A/Automatic";
  second_process_txt2.innerHTML = "GS-12M/Manual";
  second_process_txt3.style.display = "none";

  second_process_img1.src = "../image/7-가공기기류/8-슬라이서GS-12A.png";
  second_process_img2.src = "../image/7-가공기기류/8.1-슬라이서GS-12M.png";
  second_process_img3.style.display = "none";

  var thead = ["모 델", "규격", "Motor", "Diameter of Knife", "Slice Thickness", "Net Weight"];
  var tbody = [["GS-12A", "650*660*700mm", "1/2HP×1phx×AC115V×60㎐", "Dia 12″", "tissus thin~1″", "86.5kg"],
               ["GS-12M", "650*600*600mm", "1/2HP×1phx×AC115×60㎐", "Dia 12″", "tissus thin~1″ thick", "65kg"]];

  second_process_table(thead, tbody);

  scrolltop();
  page[0].style.display = "none";
}

var second_process_divimg1 = document.getElementById("second_process_divimg1");
var second_process_divimg2 = document.getElementById("second_process_divimg2");
var second_process_divimg3 = document.getElementById("second_process_divimg3");

second_process_divimg1.onclick = function(){
  second_process_bigimg.src = second_process_img1.src;
}

second_process_divimg2.onclick = function(){
  second_process_bigimg.src = second_process_img2.src;
}

second_process_divimg3.onclick = function(){
  second_process_bigimg.src = second_process_img3.src;
}
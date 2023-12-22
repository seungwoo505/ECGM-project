var page = document.getElementsByClassName('pt-page-current');

/*************
  2.가스기기류
**************/

var gas_modal = document.getElementById("gas");

var gas_bigimg = document.getElementById("gas_bigimg");

var gas_title = document.getElementById("gas_title");
var gas_explanation = document.getElementById("gas_explanation");

var gas_biglittleimgs = document.getElementById("gas_biglittleimgs");

var gas_divimg1 = document.getElementById("gas_divimg1");
var gas_littleimg1 = document.getElementById("gas_littleimg1");

var gas_divimg2 = document.getElementById("gas_divimg2");
var gas_littleimg2 = document.getElementById("gas_littleimg2");

var gas_divimg3 = document.getElementById("gas_divimg3");
var gas_littleimg3 = document.getElementById("gas_littleimg3");

var gas_thead = document.getElementById("gas_thead");
var gas_tbody = document.getElementById("gas_tbody");


var gas_im01 = document.getElementById("gas_im01");
var gas_img1 = document.getElementById("gas_img1");
var gas_txt1 = document.getElementById("gas_txt1");

var gas_im02 = document.getElementById("gas_im02");
var gas_img2 = document.getElementById("gas_img2");
var gas_txt2 = document.getElementById("gas_txt2");

var gas_im03 = document.getElementById("gas_im03");
var gas_img3 = document.getElementById("gas_img3");
var gas_txt3 = document.getElementById("gas_txt3");

var gas_im04 = document.getElementById("gas_im04");
var gas_img4 = document.getElementById("gas_img4");
var gas_txt4 = document.getElementById("gas_txt4");

var gas_im05 = document.getElementById("gas_im05");
var gas_img5 = document.getElementById("gas_img5");
var gas_txt5 = document.getElementById("gas_txt5");

var gas_im06 = document.getElementById("gas_im06");
var gas_img6 = document.getElementById("gas_img6");
var gas_txt6 = document.getElementById("gas_txt6");

var gas_im07 = document.getElementById("gas_im07");
var gas_img7 = document.getElementById("gas_img7");
var gas_txt7 = document.getElementById("gas_txt7");

var gas_im08 = document.getElementById("gas_im08");
var gas_img8 = document.getElementById("gas_img8");
var gas_txt8 = document.getElementById("gas_txt8");

var gass_modal = document.getElementById("gass");

var gass_bigimg = document.getElementById("gass_bigimg");

var gass_title = document.getElementById("gass_title");
var gass_explanation = document.getElementById("gass_explanation");

var gass_biglittleimgs = document.getElementById("gass_biglittleimgs");

var gass_divimg1 = document.getElementById("gass_divimg1");
var gass_minimg1 = document.getElementById("gass_minimg1");

var gass_divimg2 = document.getElementById("gass_divimg2");
var gass_minimg2 = document.getElementById("gass_minimg2");

var gass_divimg3 = document.getElementById("gass_divimg3");
var gass_minimg3 = document.getElementById("gass_minimg3");

var gass_divimg4 = document.getElementById("gass_divimg4");
var gass_minimg4 = document.getElementById("gass_minimg4");

gas_im01.onclick = function(){
  if (gas_txt1.innerHTML == "가스렌지(노브점화방식)") {
    gas_modal.style.display = "inline-block";
    gas_bigimg.src = gas_img1.src;
  
    gas_title.innerHTML = gas_txt1.innerHTML;
    gas_explanation.innerHTML = "일정한 용기의 음식물을 가스의 연소열로 가열 조리하는데 사용한다.<br>\
                                (끓임, 볶음, 데침등)<br>\
                                렌지의 형태는 2구, 3구, 4구, 5구등 원하는대로 제작이 가능하다.<br>\
                                내구성이 강한 스테인리스로 제작되어 기구의 부식이 없다.<br>\
                                사용시 이물질이 바닥에 직접 떨어지지 않도록 오물 거름받이를 설치한다.<br>\
                                점화방식은 기존의 가스점화봉을 이용한 방식에서 탈피하여 노브점화방식으로 편리성을 높였다.";
  
    gas_biglittleimgs.style.display = "inline-block";
  
    gas_divimg1.style.display = "inline-block";
    gas_divimg2.style.display = "inline-block";
    gas_divimg3.style.display = "none";
  
    gas_littleimg1.src = "../image/2-열조리기기류/가스렌지(노브점화방식)1.png";
    gas_littleimg2.src = "../image/2-열조리기기류/가스렌지(노브점화방식)2.png";
  
    var thead = ["모델", "규격", "타입", "버너", "가스소비량 (LNG)", "비고"];
    var tbody = [["ECR-902SN", "900*750*850", "노브점화방식", "2열2구", "33.7㎾ (29,000 ㎉/h)", "2구"],
                 ["ECR-1203SN", "1200*750*850", "노브점화방식", "2열2구", "51.0㎾ (43,500 ㎉/h)", "3구"],
                 ["ECR-1503SN", "1500*750*850", "노브점화방식", "2열2구", "51.0㎾ (43,500 ㎉/h)", "3구"]];
  
    gas_table(thead, tbody);
  }else if(gas_txt1.innerHTML == "국솥칸트리버시스템"){
    gass_modal.style.display = "inline-block";
    gass_bigimg.src = gas_img1.src;

    gass_title.innerHTML = gas_txt1.innerHTML;
    gass_explanation.innerHTML = "현장여건에 따라 주문제작합니다";

    gass_biglittleimgs.style.display = "inline-block";

    gass_minimg1.src = "../image/2-열조리기기류/국솥칸트리버시스템1.png";
    gass_minimg2.src = "../image/2-열조리기기류/국솥칸트리버시스템2.png";
    gass_minimg3.src = "../image/2-열조리기기류/국솥칸트리버시스템3.png";
    gass_minimg4.src = "../image/2-열조리기기류/국솥칸트리버시스템4.png";
  }

  scrolltop();
  page[0].style.display = "none";
}

gas_im02.onclick = function(){
  gas_modal.style.display = "inline-block";
  gas_bigimg.src = gas_img2.src;

  gas_title.innerHTML = gas_txt2.innerHTML;
  gas_explanation.innerHTML = "끓임 용도로 사용되며 대형 틀통으로 많은 양을 장시간 조리시에 사용한다.<br>\
                              용량이 많아 큰용기에 음식을 끓일 경우 렌지 높이를 낮게하여 안전한 작업이 될 수 있도록 제작한다.<br>\
                              렌지의 형태는 1구, 2구등 원하는대로 제작이 가능하다.<br>\
                              점화방식은 기존의 가스점화봉을 이용한 방식에서 탈피하여 노브점화방식으로 편리성을 높였다.<br>\
                              상판은 열변형 및 사용시 하중에 충분히 견딜 수 있고 벽면등이 손상되지 않도록 뒷빽을 설치한다.";

  gas_biglittleimgs.style.display = "inline-block";

  gas_divimg1.style.display = "inline-block";
  gas_divimg2.style.display = "inline-block";
  gas_divimg3.style.display = "none";

  gas_littleimg1.src = "../image/2-열조리기기류/가스낮은렌지(노브점화방식)1.png";
  gas_littleimg2.src = "../image/2-열조리기기류/가스낮은렌지(노브점화방식)2.png";

  var thead = ["모델", "규격", "타입", "버너", "가스소비량 (LNG)", "비고"];
  var tbody = [["ECLR-701SN", "750*750*450", "노브점화방식", "3열3구", "29.5㎾ (25,400 ㎉/h)", "1구"],
               ["ECLR-1202SN", "1200*750*450", "노브점화방식", "3열3구", "58.1㎾ (50,000 ㎉/h)", "2구"],
               ["ECLR-1502SN", "1500*750*450", "노브점화방식", "3열3구", "58.1㎾ (50,000 ㎉/h)", "2구"]];

  gas_table(thead, tbody);

  scrolltop();
  page[0].style.display = "none";
}

gas_im03.onclick = function(){
  gas_modal.style.display = "inline-block";
  gas_bigimg.src = gas_img3.src;

  gas_title.innerHTML = gas_txt3.innerHTML;
  gas_explanation.innerHTML = "다량의 음식을 같은 온도조건에서 부침, 볶음등을 할때 사용한다.<br>\
                              철판표면을 가공하여 부침판으로 사용하고 고열시에도 음식물이 붙지 않는 충분한 두께로 제작한다.<br>\
                              기름은 전면 홈으로 흐르게 되어 있어 청소가 용이하다.<br>\
                              사용하지 않을시에는 부침판 전체를 뚜껑으로 덮어 위생적이다.<br>\
                              점화방식은 기존의 가스점화봉을 이용한 방식에서 탈피하여 노브점화방식으로 편리성을 높였다.";

  gas_biglittleimgs.style.display = "inline-block";

  gas_divimg1.style.display = "inline-block";
  gas_divimg2.style.display = "inline-block";
  gas_divimg3.style.display = "none";

  gas_littleimg1.src = "../image/2-열조리기기류/가스부침기(노브점화방식)1.png";
  gas_littleimg2.src = "../image/2-열조리기기류/가스부침기(노브점화방식)2.png";

  var thead = ["모델", "규격", "타입", "버너", "가스소비량 (LNG)"];
  var tbody = [["ECG-602SN", "600*750*850", "노브점화방식", "일자버너(2개)", "11.6㎾ (10,000 ㎉/h)"],
               ["ECG-903SN", "900*750*850", "노브점화방식", "일자버너(3개)", "17.4㎾ (15,000 ㎉/h)"],
               ["ECG-1204SN", "1200*750*850", "노브점화방식", "일자버너(4개)", "23.3㎾ (20,000 ㎉/h)"],
               ["ECG-1506SN", "1500*750*850", "노브점화방식", "일자버너(6개)", "34.9㎾ (30,000 ㎉/h)"]];

  gas_table(thead, tbody);

  scrolltop();
  page[0].style.display = "none";
}

gas_im04.onclick = function(){
  gas_modal.style.display = "inline-block";
  gas_bigimg.src = gas_img4.src;

  gas_title.innerHTML = gas_txt4.innerHTML;
  gas_explanation.innerHTML = "일정한 용기의 음식물을 가스의 연소열로 가열 조리하는데 사용한다.<br>\
                              (끓임, 볶음, 데침등)<br>\
                              렌지의 형태는 2구,3구,4구,5구등 원하는대로 제작이 가능하다.<br>\
                              내구성이 강한 스테인리스로 제작되어 기구의 부식이 없다.<br>\
                              사용시 이물질이 바닥에 직접 떨어지지 않도록 오물 거름받이를 설치한다.<br>\
                              점화방식은 가스점화봉을 이용한 방식이다.";

  gas_biglittleimgs.style.display = "inline-block";

  gas_divimg1.style.display = "inline-block";
  gas_divimg2.style.display = "inline-block";
  gas_divimg3.style.display = "none";

  gas_littleimg1.src = "../image/2-열조리기기류/가스렌지1.png";
  gas_littleimg2.src = "../image/2-열조리기기류/가스렌지2.png";

  var thead = ["모델", "규격", "타입", "버너", "가스소비량 (LNG)", "비고"];
  var tbody = [["ECR-903N", "900*750*850", "볼밸브타입", "2열2구, 1열1구", "39.5㎾ (34,000 ㎉/h)", "3구"],
               ["ECR-1204N", "1200*750*850", "볼밸브타입", "2열2구, 1열1구", "45.3㎾ (39,000 ㎉/h)", "4구"],
               ["ECR-1503N", "1500*750*850", "볼밸브타입", "2열2구", "51.0㎾ (43,500 ㎉/h)", "3구"],
               ["ECR-1505N", "1500*750*850", "볼밸브타입", "2열2구, 1열1구", "62.2㎾ (53,500 ㎉/h)", "5구"]];

  gas_table(thead, tbody);

  scrolltop();
  page[0].style.display = "none";
}

gas_im05.onclick = function(){
  gas_modal.style.display = "inline-block";
  gas_bigimg.src = gas_img5.src;

  gas_title.innerHTML = gas_txt5.innerHTML;
  gas_explanation.innerHTML = "끓임 용도로 사용되며 대형 틀통으로 많은 양을 장시간 조리시에 사용한다.<br>\
                              용량이 많아 큰용기에 음식을 끓일 경우 렌지 높이를 낮게하여 안전한 작업이 될 수 있도록 제작한다.<br>\
                              렌지의 형태는 1구, 2구등 원하는대로 제작이 가능하다.<br>\
                              점화방식은 가스점화봉을 이용한 방식이다.<br>\
                              상판은 열변형 및 사용시 하중에 충분히 견딜 수 있고 벽면등이 손상되지 않도록 뒷빽을 설치한다.";

  gas_biglittleimgs.style.display = "inline-block";

  gas_divimg1.style.display = "inline-block";
  gas_divimg2.style.display = "inline-block";
  gas_divimg3.style.display = "none";

  gas_littleimg1.src = "../image/2-열조리기기류/가스낮은렌지1.png";
  gas_littleimg2.src = "../image/2-열조리기기류/가스낮은렌지2.png";

  var thead = ["모델", "규격", "타입", "버너", "가스소비량 (LNG)", "비고"];
  var tbody = [["ECLR-701N", "750*750*450", "볼밸브타입", "3열3구", "29.5㎾ (25,400 ㎉/h)", "1구"],
               ["ECLR-1202N", "1200*750*450", "볼밸브타입", "3열3구", "58.1㎾ (50,000 ㎉/h)", "2구"],
               ["ECLR-1502N", "1500*750*450", "볼밸브타입", "3열3구", "58.1㎾ (50,000 ㎉/h)", "2구"]];

  gas_table(thead, tbody);

  scrolltop();
  page[0].style.display = "none";
}

gas_im06.onclick = function(){
  gas_modal.style.display = "inline-block";
  gas_bigimg.src = gas_img6.src;

  gas_title.innerHTML = gas_txt6.innerHTML;
  gas_explanation.innerHTML = "다량의 음식을 같은 온도조건에서 부침, 볶음등을 할때 사용한다.<br>\
                              철판표면을 가공하여 부침판으로 사용하고 고열시에도 음식물이 붙지 않는 충분한 두께로 제작한다.<br>\
                              기름은 전면 홈으로 흐르게 되어 있어 청소가 용이하다.<br>\
                              사용하지 않을시에는 부침판 전체를 뚜껑으로 덮어 위생적이다.<br>\
                              점화방식은 가스점화봉을 이용한 방식이다.";

  gas_biglittleimgs.style.display = "inline-block";

  gas_divimg1.style.display = "inline-block";
  gas_divimg2.style.display = "inline-block";
  gas_divimg3.style.display = "inline-block";

  gas_littleimg1.src = "../image/2-열조리기기류/가스부침기1.png";
  gas_littleimg2.src = "../image/2-열조리기기류/가스부침기2.png";
  gas_littleimg3.src = "../image/2-열조리기기류/가스부침기3.png";

  var thead = ["모델", "규격", "타입", "버너", "가스소비량 (LNG)"];
  var tbody = [["ECG-602N", "600*750*850", "볼밸브타입", "일자버너(2개)", "11.6㎾ (10,000 ㎉/h)"],
               ["ECG-903N", "900*750*850", "볼밸브타입", "일자버너(3개)", "17.4㎾ (15,000 ㎉/h)"],
               ["ECG-1204N", "1200*750*850", "볼밸브타입", "일자버너(4개)", "23.3㎾ (20,000 ㎉/h)"],
               ["ECG-1506N", "1500*750*850", "볼밸브타입", "일자버너(6개)", "34.9㎾ (30,000 ㎉/h)"]];

  gas_table(thead, tbody);

  scrolltop();
  page[0].style.display = "none";
}

gas_im07.onclick = function(){
  gas_modal.style.display = "inline-block";
  gas_bigimg.src = gas_img7.src;

  gas_title.innerHTML = gas_txt7.innerHTML;
  gas_explanation.innerHTML = "가스의 직화열로 대용량의 국을 끓이는데 사용한다.<br>\
                              국솥 내피는 스테인리스 또는 주물내피로 제작이 가능하다.(선택사항)<br>\
                              버너는 Z-32구를 사용한다.<br>\
                              국솥외피는 스테인리스로도 제작이 가능하다.(선택사항)<br>\
                              핸들은 기어식으로 하고 솥이 180도 회전하는데 이상이 없도록한다.(안전장치 부착)<br>\
                              국솥에 수도파이프를 부착하여 조리시 편리하다.<br>\
                              다리는 무게하중을 충분히 고려하여 제작하고 재질은 스테인리스로 한다.";

  gas_biglittleimgs.style.display = "inline-block";

  gas_divimg1.style.display = "inline-block";
  gas_divimg2.style.display = "inline-block";
  gas_divimg3.style.display = "inline-block";

  gas_littleimg1.src = "../image/2-열조리기기류/가스회전식국솥1.png";
  gas_littleimg2.src = "../image/2-열조리기기류/가스회전식국솥2.png";
  gas_littleimg3.src = "../image/2-열조리기기류/가스회전식국솥3.png";

  var thead = ["모델", "규격", "타입", "버너", "가스소비량 (LNG)"];
  var tbody = [["ECGK-300N", "150ℓ (300인용)", "볼밸브타입", "충염식 32구", "58.1㎾ (50,000 ㎉/h)"],
               ["ECGK-500N", "250ℓ (500인용)", "볼밸브타입", "충염식 32구", "58.1㎾ (50,000 ㎉/h)"],
               ["ECGK-300A", "150ℓ (300인용)", "자동점화방식", "충염식 32구", "58.1㎾ (50,000 ㎉/h)"],
               ["ECGK-500A", "250ℓ (500인용)", "자동점화방식", "충염식 32구", "58.1㎾ (50,000 ㎉/h)"]];

  gas_table(thead, tbody);

  scrolltop();
  page[0].style.display = "none";
}

gas_im08.onclick = function(){
  gas_modal.style.display = "inline-block";
  gas_bigimg.src = gas_img8.src;

  gas_title.innerHTML = gas_txt8.innerHTML;
  gas_explanation.innerHTML = "스팀의 발열을 이용하여 다량의 국이나 찌개류등을 끓이는데 사용한다.<br>\
                              내피와 외피를 스테인리스로 제작하여 위생적이며 다양한 크기로 제작할 수 있다.<br>\
                              핸들은 기어식으로 하고 솥이 180도 회전하는데 이상이 없도록 한다.(안전장치부착)<br>\
                              외피 최하단부는 배수 드레인 밸브를 부착한다.<br>\
                              국솥에 수도파이프를 부착하여 조리시 편리하다.<br>\
                              다리는 무게하중을 충분히 고려하여 제작하고 재질은 스테인리스로 한다.";

  gas_biglittleimgs.style.display = "inline-block";

  gas_divimg1.style.display = "inline-block";
  gas_divimg2.style.display = "inline-block";
  gas_divimg3.style.display = "inline-block";

  gas_littleimg1.src = "../image/2-열조리기기류/스팀회전식국솥1.png";
  gas_littleimg2.src = "../image/2-열조리기기류/스팀회전식국솥2.png";
  gas_littleimg3.src = "../image/2-열조리기기류/스팀회전식국솥3.png";

  var thead = ["모델", "용량", "인원", "스팀소비량", "스팀사용압력"];
  var tbody = [["ECSK-300S", "150ℓ", "300인", "70㎏/hr", "1.8㎏/㎤"],
               ["ECSK-400S", "200ℓ", "400인", "74㎏/hr", "1.8㎏/㎤"],
               ["ECSK-500S", "250ℓ", "500인", "80㎏/hr", "1.8㎏/㎤"]];

  gas_table(thead, tbody);

  scrolltop();
  page[0].style.display = "none";
}

function gas_one(){
  $('#gas_one').contents().unwrap().wrap('<strong id = "gas_one" onclick = "gas_one()"></strong>');
  $('#gas_two').contents().unwrap().wrap('<a id = "gas_two" onclick = "gas_two()"></a>');

  gas_im01.style.visibility = "visible";
  gas_im02.style.visibility = "visible";
  gas_im03.style.visibility = "visible";
  gas_im04.style.visibility = "visible";
  gas_im05.style.visibility = "visible";
  gas_im06.style.visibility = "visible";
  gas_im07.style.visibility = "visible";
  gas_im08.style.visibility = "visible";

  gas_img1.src = "../image/2-열조리기기류/가스렌지(노브점화방식)1.png";
  gas_txt1.innerHTML = "가스렌지(노브점화방식)";
}

function gas_two(){
  $('#gas_one').contents().unwrap().wrap('<a id = "gas_one" onclick = "gas_one()"></a>');
  $('#gas_two').contents().unwrap().wrap('<strong id = "gas_two" onclick = "gas_two()"></strong>');

  gas_im01.style.visibility = "visible";
  gas_im02.style.visibility = "hidden";
  gas_im03.style.visibility = "hidden";
  gas_im04.style.visibility = "hidden";
  gas_im05.style.visibility = "hidden";
  gas_im06.style.visibility = "hidden";
  gas_im07.style.visibility = "hidden";
  gas_im08.style.visibility = "hidden";

  gas_img1.src = "../image/2-열조리기기류/국솥칸트리버시스템1.png";
  gas_txt1.innerHTML = "국솥칸트리버시스템";
}

gas_divimg1.onclick = function(){
  gas_bigimg.src = gas_littleimg1.src;
}

gas_divimg2.onclick = function(){
  gas_bigimg.src = gas_littleimg2.src;
}

gas_divimg3.onclick = function(){
  gas_bigimg.src = gas_littleimg3.src;
}

gass_divimg1.onclick = function(){
  gass_bigimg.src = gass_minimg1.src;
}

gass_divimg2.onclick = function(){
  gass_bigimg.src = gass_minimg2.src;
}

gass_divimg3.onclick = function(){
  gass_bigimg.src = gass_minimg3.src;
}

gass_divimg4.onclick = function(){
  gass_bigimg.src = gass_minimg4.src;
}
var page = document.getElementsByClassName('pt-page-current');
/*************
  1.일반기기류
**************/
var genenal_model = document.getElementById("genenal");

var genenal_bigimg = document.getElementById("genenal_bigimg");

var genenal_title = document.getElementById("genenal_title");
var genenal_explanation = document.getElementById("genenal_explanation");

var genenal_biglittleimgs = document.getElementById("genenal_biglittleimgs");

var genenal_divimg = [document.getElementById("genenal_divimg1"),
                      document.getElementById("genenal_divimg2"),
                      document.getElementById("genenal_divimg3"),
                      document.getElementById("genenal_divimg4")];

var genenal_minimg = [document.getElementById("genenal_minimg1"),
                      document.getElementById("genenal_minimg2"),
                      document.getElementById("genenal_minimg3"),
                      document.getElementById("genenal_minimg4")];


var genenal_thead = document.getElementById("genenal_thead");
var genenal_tbody = document.getElementById("genenal_tbody");

var genenal_im01 = document.getElementById("genenal_im01");
var genenal_im02 = document.getElementById("genenal_im02");
var genenal_im03 = document.getElementById("genenal_im03");
var genenal_im04 = document.getElementById("genenal_im04");
var genenal_im05 = document.getElementById("genenal_im05");
var genenal_im06 = document.getElementById("genenal_im06");
var genenal_im07 = document.getElementById("genenal_im07");
var genenal_im08 = document.getElementById("genenal_im08");

var genenal_img1 = document.getElementById("genenal_img1");
var genenal_img2 = document.getElementById("genenal_img2");
var genenal_img3 = document.getElementById("genenal_img3");
var genenal_img4 = document.getElementById("genenal_img4");
var genenal_img5 = document.getElementById("genenal_img5");
var genenal_img6 = document.getElementById("genenal_img6");
var genenal_img7 = document.getElementById("genenal_img7");
var genenal_img8 = document.getElementById("genenal_img8");

var genenal_txt1 = document.getElementById("genenal_txt1");
var genenal_txt2 = document.getElementById("genenal_txt2");
var genenal_txt3 = document.getElementById("genenal_txt3");
var genenal_txt4 = document.getElementById("genenal_txt4");
var genenal_txt5 = document.getElementById("genenal_txt5");
var genenal_txt6 = document.getElementById("genenal_txt6");
var genenal_txt7 = document.getElementById("genenal_txt7");
var genenal_txt8 = document.getElementById("genenal_txt8");

var genenal_secondimg = [["../image/일반기기류/작업대1.png", "../image/일반기기류/작업대2.png", "../image/일반기기류/작업대3.png"],
                     ["../image/일반기기류/작업대하부찬장1.png", "../image/일반기기류/작업대하부찬장2.png", "../image/일반기기류/작업대하부찬장3.png"],
                     ["../image/일반기기류/이동식작업대1.png", "../image/일반기기류/이동식작업대2.png"],
                     ["../image/일반기기류/1조세정대1.png", "../image/일반기기류/1조세정대2.png"],
                     ["../image/일반기기류/2조세정대1.png", "../image/일반기기류/2조세정대2.png", "../image/일반기기류/2조세정대3.png"],
                     ["../image/일반기기류/3조세정대1.png", "../image/일반기기류/3조세정대2.png"],
                     ["../image/일반기기류/담금세정대1.png", "../image/일반기기류/담금세정대2.png"],
                     ["../image/일반기기류/이동식세정대1.png", "../image/일반기기류/이동식세정대2.png"]];

  var tbody = [[["ECT-97", "900*750*850"],
              ["ECT-127", "1200*750*850"],
              ["ECT-157", "1500*750*850"],
              ["ECT-187", "1800*750*850"]],

             [["ECTC-97", "900*750*850"],
              ["ECTC-127", "1200*750*850"],
              ["ECTC-157", "1500*750*850"],
              ["ECTC-187", "1800*750*850"]],

             [["ECTM-97", "900*750*850"],
              ["ECTM-127", "1200*750*850"],
              ["ECTM-157", "1500*750*850"]],

             [["EC1S-97", "900*750*850"],
              ["EC1S-127", "1200*750*850"],
              ["EC1S-157", "1500*750*850"],
              ["EC1S-187", "1800*750*850"]],

             [["EC2S-127", "1200*750*850"],
              ["EC2S-157", "1500*750*850"],
              ["EC2S-187", "1800*750*850"],
              ["EC2S-217", "2100*750*850"]],

             [["EC3S-157", "1500*750*850"],
              ["EC3S-187", "1800*750*850"],
              ["EC3S-217", "2100*750*850"],
              ["EC3S-247", "2400*750*850"]],

             [["ECDS-189", "1800*900*850"],
              ["ECDS-219", "2100*900*850"]],

             [["ECSM-900", "900*750*850"],
              ["ECSM-1200", "1200*750*850"],
              ["ECSM-1500", "1500*750*850"]]];

  var explanation = ["주방에서 이루어지는 가장 기본적인 작업인 식자재다듬기, 집기류 정리등의 작업을 하는데 사용된다.<br>\
                    상판은 평면의 판에 전면과 좌우 및 후면은 2회 이상의 직각 절곡을 하여 견고성을 높인다.<br>\
                    상판의 하부에는 휨을 방지하기 위하여 다리부착부와 중앙의 가로방향으로 보강을 부착한다.<br>\
                    하부가 선반타입일 경우 잔넬과 평판타입등 원하는대로 제작이 가능하다.",

                    "전처리, 조리실등에 야채, 육류, 생선등을 절단, 조리하는 작업대로 하부는 수납보관찬장으로 사용된다.<br>\
                    평면의 상판에 전후면 및 좌우측면은 직각 밴딩을 하여 견고성을 높인다.<br>\
                    문짝은 하부에 호차를 부착하여 잘 열리도록 한다.<br>\
                    상판, 중간선반, 몸체하부에는 보강을 부착하여 휨의 방지 및 뒤틀림이 없도록 한다.<br>\
                    조절식발은 경사면에 수평으로 적응할수 있도록 높낮이 조절이 가능하도록 한다.",

                    "주방내에서 작업시 한쪽으로 편중되어 작업이 이루어질 때 이동하여 일반작업대와 같은 기능을 할 수 있는 이동형의 작업대이다.<br>\
                    상판은 평면의 판에 전면과 좌우 및 후면은 2회 이상의 직각 절곡을 하여 견고성을 높인다.<br>\
                    상판의 하부에는 휨을 방지하기 위하여 다리부착부와 중앙의 가로방향으로 보강을 부착한다.<br>\
                    하부가 선반타입일 경우 잔넬과 평판타입등 원하는대로 제작이 가능하다.<br>\
                    이동을 용이하게 하기 위하여 바퀴를 부착한다.",

                    "전처리, 조리실등에 야채, 육류, 생선류등을 세척하는데 사용한다.<br>\
                    싱크볼은 1개로 누수가 없도록 제작한다.<br>\
                    싱크볼바닥면에 배수구를 설치하고 후면에 오버플로우를 부착하여 물이 넘쳐 바닥으로 흐르는 것을 방지한다.<br>\
                    좌.우 전면에 치마를 부착하여 싱크볼 몸체가 보이지 않도록 하며 또한 보강 역할을 할 수 있도록 제작한다.<br>\
                    다리는 파이프로 견고하게 조립하고 조절식발을 부착하여 수평을 조절할 수 있도록 한다.<br>\
                    하부가 선반타입일 경우 잔넬과 평판타입등 원하는대로 제작이 가능하다.",

                    "전처리, 조리실등에 야채, 육류, 생선류등을 세척하는데 사용한다.<br>\
                    싱크볼은 2개로 누수가 없도록 제작한다.<br>\
                    싱크볼바닥면에 배수구를 설치하고 후면에 오버플로우를 부착하여 물이 넘쳐 바닥으로 흐르는 것을 방지한다.<br>\
                    좌.우 전면에 치마를 부착하여 싱크볼 몸체가 보이지 않도록 하며 또한 보강 역할을 할 수 있도록 제작한다.<br>\
                    다리는 파이프로 견고하게 조립하고 조절식발을 부착하여 수평을 조절할 수 있도록 한다.<br>\
                    하부가 선반타입일 경우 잔넬과 평판타입등 원하는대로 제작이 가능하다.",

                    "전처리, 조리실등에 야채, 육류, 생선류등을 세척하는데 사용한다.<br>\
                    싱크볼은 3개로 누수가 없도록 제작한다.<br>\
                    싱크볼바닥면에 배수구를 설치하고 후면에 오버플로우를 부착하여 물이 넘쳐 바닥으로 흐르는 것을 방지한다.<br>\
                    좌.우 전면에 치마를 부착하여 싱크볼 몸체가 보이지 않도록 하며 또한 보강 역할을 할 수 있도록 제작한다.<br>\
                    다리는 파이프로 견고하게 조립하고 조절식발을 부착하여 수평을 조절할 수 있도록 한다.<br>\
                    하부가 선반타입이 경우 잔넬과 평판타입등 원하는대로 제작이 가능하다.",

                    "식사후 반납되어 온 식기류를 불림하는 세정대로 사용한다.<br>\
                    싱크볼은 1개로 누수가 없도록 제작한다.<br>\
                    싱크볼바닥면에 대형배수구를 설치한다.<br>\
                    좌.우 전면에 치마를 부착하여 싱크볼 몸체가 보이지 않도록 하며 또한 보강 역할을 할 수 있도록 제작한다.<br>\
                    다리는 파이프로 견고하게 조립하고 조절식발을 부착하여 수평을 조절할 수 있도록 한다.<br>\
                    배수구는 레버식으로 제작하여 사용이 편리하도록 한다.",

                    "이동식세정대로서 필요공간에서의 세정작업 및 물기가 많은 야채류등을 운반시 사용한다.<br>\
                    배수구는 레버식으로 제작하여 사용이 편리하도록 한다.<br>\
                    이동을 용이하게 하기 위하여 바퀴를 부착한다."];

var thead = ["모델", "규격"];

genenal_im01.onclick = function(){
  genenal_model.style.display = "inline-block";

  genenal_bigimg.src = genenal_img1.src;
  genenal_title.innerHTML = genenal_txt1.innerHTML;
  genenal_explanation.innerHTML = explanation[0];

  for (var i = 0; i < 4; i++) {
    genenal_divimg[i].style.visibility = "hidden";
  }

  for (var i = 0; i < genenal_secondimg[0].length; i++) {
    if (genenal_secondimg[0][0] == "") break;
    genenal_divimg[i].style.visibility = "visible";
    genenal_minimg[i].src = genenal_secondimg[0][i];
  }

  genenal_table(thead, tbody[0]);

  scrolltop();
  page[0].style.display = "none";
}

genenal_im02.onclick = function(){
  genenal_model.style.display = "inline-block";

  genenal_bigimg.src = genenal_img2.src;
  genenal_title.innerHTML = genenal_txt2.innerHTML;
  genenal_explanation.innerHTML = explanation[1];

  for (var i = 0; i < 4; i++) {
    genenal_divimg[i].style.visibility = "hidden";
  }

  for (var i = 0; i < genenal_secondimg[1].length; i++) {
    if (genenal_secondimg[1][0] == "") break;
    genenal_divimg[i].style.visibility = "visible";
    genenal_minimg[i].src = genenal_secondimg[1][i];
  }

  genenal_table(thead, tbody[1]);

  scrolltop();
  page[0].style.display = "none";
}

genenal_im03.onclick = function(){
  genenal_model.style.display = "inline-block";

  genenal_bigimg.src = genenal_img3.src;
  genenal_title.innerHTML = genenal_txt3.innerHTML;
  genenal_explanation.innerHTML = explanation[2];

  for (var i = 0; i < 4; i++) {
    genenal_divimg[i].style.visibility = "hidden";
  }

  for (var i = 0; i < genenal_secondimg[2].length; i++) {
    if (genenal_secondimg[2][0] == "") break;
    genenal_divimg[i].style.visibility = "visible";
    genenal_minimg[i].src = genenal_secondimg[2][i];
  }

  genenal_table(thead, tbody[2]);

  scrolltop();
  page[0].style.display = "none";
}

genenal_im04.onclick = function(){
  genenal_model.style.display = "inline-block";

  genenal_bigimg.src = genenal_img4.src;
  genenal_title.innerHTML = genenal_txt4.innerHTML;
  genenal_explanation.innerHTML = explanation[3];

  for (var i = 0; i < 4; i++) {
    genenal_divimg[i].style.visibility = "hidden";
  }

  for (var i = 0; i < genenal_secondimg[3].length; i++) {
    if (genenal_secondimg[3][0] == "") break;
    genenal_divimg[i].style.visibility = "visible";
    genenal_minimg[i].src = genenal_secondimg[3][i];
  }

  genenal_table(thead, tbody[3]);

  scrolltop();
  page[0].style.display = "none";
}

genenal_im05.onclick = function(){
  genenal_model.style.display = "inline-block";

  genenal_bigimg.src = genenal_img5.src;
  genenal_title.innerHTML = genenal_txt5.innerHTML;
  genenal_explanation.innerHTML = explanation[4];

  for (var i = 0; i < 4; i++) {
    genenal_divimg[i].style.visibility = "hidden";
  }

  for (var i = 0; i < genenal_secondimg[4].length; i++) {
    if (genenal_secondimg[4][0] == "") break;
    genenal_divimg[i].style.visibility = "visible";
    genenal_minimg[i].src = genenal_secondimg[4][i];
  }

  genenal_table(thead, tbody[4]);

  scrolltop();
  page[0].style.display = "none";
}

genenal_im06.onclick = function(){
  genenal_model.style.display = "inline-block";

  genenal_bigimg.src = genenal_img6.src;
  genenal_title.innerHTML = genenal_txt6.innerHTML;
  genenal_explanation.innerHTML = explanation[5];

  for (var i = 0; i < 4; i++) {
    genenal_divimg[i].style.visibility = "hidden";
  }

  for (var i = 0; i < genenal_secondimg[5].length; i++) {
    if (genenal_secondimg[5][0] == "") break;
    genenal_divimg[i].style.visibility = "visible";
    genenal_minimg[i].src = genenal_secondimg[5][i];
  }

  genenal_table(thead, tbody[5]);

  scrolltop();
  page[0].style.display = "none";
}

genenal_im07.onclick = function(){
  genenal_model.style.display = "inline-block";

  genenal_bigimg.src = genenal_img7.src;
  genenal_title.innerHTML = genenal_txt7.innerHTML;
  genenal_explanation.innerHTML = explanation[6];

  for (var i = 0; i < 4; i++) {
    genenal_divimg[i].style.visibility = "hidden";
  }

  for (var i = 0; i < genenal_secondimg[6].length; i++) {
    if (genenal_secondimg[6][0] == "") break;
    genenal_divimg[i].style.visibility = "visible";
    genenal_minimg[i].src = genenal_secondimg[6][i];
  }

  genenal_table(thead, tbody[6]);

  scrolltop();
  page[0].style.display = "none";
}

genenal_im08.onclick = function(){
  genenal_model.style.display = "inline-block";

  genenal_bigimg.src = genenal_img8.src;
  genenal_title.innerHTML = genenal_txt8.innerHTML;
  genenal_explanation.innerHTML = explanation[7];

  for (var i = 0; i < 4; i++) {
    genenal_divimg[i].style.visibility = "hidden";
  }

  for (var i = 0; i < genenal_secondimg[7].length; i++) {
    if (genenal_secondimg[7][0] == "") break;
    genenal_divimg[i].style.visibility = "visible";
    genenal_minimg[i].src = genenal_secondimg[7][i];
  }

  genenal_table(thead, tbody[7]);

  scrolltop();
  page[0].style.display = "none";
}

function genenal_one(){
  $('#genenal_one').contents().unwrap().wrap('<strong id = "genenal_one" onclick = "genenal_one()"></strong>');
  $('#genenal_two').contents().unwrap().wrap('<a id = "genenal_two" onclick = "genenal_two()"></a>');
  $('#genenal_three').contents().unwrap().wrap('<a id = "genenal_three" onclick = "genenal_three()"></a>');
  $('#genenal_four').contents().unwrap().wrap('<a id = "genenal_four" onclick = "genenal_four()"></a>');

  genenal_im01.style.visibility = "visible";
  genenal_im02.style.visibility = "visible";
  genenal_im03.style.visibility = "visible";
  genenal_im04.style.visibility = "visible";
  genenal_im05.style.visibility = "visible";
  genenal_im06.style.visibility = "visible";
  genenal_im07.style.visibility = "visible";
  genenal_im08.style.visibility = "visible";

  genenal_img1.src = "../image/일반기기류/작업대1.png";
  genenal_txt1.innerHTML = "작업대";
  genenal_img2.src = "../image/일반기기류/작업대하부찬장1.png";
  genenal_txt2.innerHTML = "작업대/하부찬장";
  genenal_img3.src = "../image/일반기기류/이동식작업대1.png";
  genenal_txt3.innerHTML = "이동식작업대";
  genenal_img4.src = "../image/일반기기류/1조세정대1.png";
  genenal_txt4.innerHTML = "1조세정대";
  genenal_img5.src = "../image/일반기기류/2조세정대1.png";
  genenal_txt5.innerHTML = "2조세정대";
  genenal_img6.src = "../image/일반기기류/3조세정대1.png";
  genenal_txt6.innerHTML = "3조세정대";
  genenal_img7.src = "../image/일반기기류/담금세정대1.png";
  genenal_txt7.innerHTML = "담금세정대";
  genenal_img8.src = "../image/일반기기류/이동식세정대1.png";
  genenal_txt8.innerHTML = "이동식세정대";

  genenal_secondimg = [["../image/일반기기류/작업대1.png", "../image/일반기기류/작업대2.png", "../image/일반기기류/작업대3.png"],
                     ["../image/일반기기류/작업대하부찬장1.png", "../image/일반기기류/작업대하부찬장2.png", "../image/일반기기류/작업대하부찬장3.png"],
                     ["../image/일반기기류/이동식작업대1.png", "../image/일반기기류/이동식작업대2.png"],
                     ["../image/일반기기류/1조세정대1.png", "../image/일반기기류/1조세정대2.png"],
                     ["../image/일반기기류/2조세정대1.png", "../image/일반기기류/2조세정대2.png", "../image/일반기기류/2조세정대3.png"],
                     ["../image/일반기기류/3조세정대1.png", "../image/일반기기류/3조세정대2.png"],
                     ["../image/일반기기류/담금세정대1.png", "../image/일반기기류/담금세정대2.png"],
                     ["../image/일반기기류/이동식세정대1.png", "../image/일반기기류/이동식세정대2.png"]];

  tbody = [[["ECT-97", "900*750*850"],
              ["ECT-127", "1200*750*850"],
              ["ECT-157", "1500*750*850"],
              ["ECT-187", "1800*750*850"]],

             [["ECTC-97", "900*750*850"],
              ["ECTC-127", "1200*750*850"],
              ["ECTC-157", "1500*750*850"],
              ["ECTC-187", "1800*750*850"]],

             [["ECTM-97", "900*750*850"],
              ["ECTM-127", "1200*750*850"],
              ["ECTM-157", "1500*750*850"]],

             [["EC1S-97", "900*750*850"],
              ["EC1S-127", "1200*750*850"],
              ["EC1S-157", "1500*750*850"],
              ["EC1S-187", "1800*750*850"]],

             [["EC2S-127", "1200*750*850"],
              ["EC2S-157", "1500*750*850"],
              ["EC2S-187", "1800*750*850"],
              ["EC2S-217", "2100*750*850"]],

             [["EC3S-157", "1500*750*850"],
              ["EC3S-187", "1800*750*850"],
              ["EC3S-217", "2100*750*850"],
              ["EC3S-247", "2400*750*850"]],

             [["ECDS-189", "1800*900*850"],
              ["ECDS-219", "2100*900*850"]],

             [["ECSM-900", "900*750*850"],
              ["ECSM-1200", "1200*750*850"],
              ["ECSM-1500", "1500*750*850"]]];

  explanation = ["주방에서 이루어지는 가장 기본적인 작업인 식자재다듬기, 집기류 정리등의 작업을 하는데 사용된다.<br>\
                  상판은 평면의 판에 전면과 좌우 및 후면은 2회 이상의 직각 절곡을 하여 견고성을 높인다.<br>\
                  상판의 하부에는 휨을 방지하기 위하여 다리부착부와 중앙의 가로방향으로 보강을 부착한다.<br>\
                  하부가 선반타입일 경우 잔넬과 평판타입등 원하는대로 제작이 가능하다.",

                  "전처리, 조리실등에 야채, 육류, 생선등을 절단, 조리하는 작업대로 하부는 수납보관찬장으로 사용된다.<br>\
                  평면의 상판에 전후면 및 좌우측면은 직각 밴딩을 하여 견고성을 높인다.<br>\
                  문짝은 하부에 호차를 부착하여 잘 열리도록 한다.<br>\
                  상판, 중간선반, 몸체하부에는 보강을 부착하여 휨의 방지 및 뒤틀림이 없도록 한다.<br>\
                  조절식발은 경사면에 수평으로 적응할수 있도록 높낮이 조절이 가능하도록 한다.",

                  "주방내에서 작업시 한쪽으로 편중되어 작업이 이루어질 때 이동하여 일반작업대와 같은 기능을 할 수 있는 이동형의 작업대이다.<br>\
                  상판은 평면의 판에 전면과 좌우 및 후면은 2회 이상의 직각 절곡을 하여 견고성을 높인다.<br>\
                  상판의 하부에는 휨을 방지하기 위하여 다리부착부와 중앙의 가로방향으로 보강을 부착한다.<br>\
                  하부가 선반타입일 경우 잔넬과 평판타입등 원하는대로 제작이 가능하다.<br>\
                  이동을 용이하게 하기 위하여 바퀴를 부착한다.",

                  "전처리, 조리실등에 야채, 육류, 생선류등을 세척하는데 사용한다.<br>\
                  싱크볼은 1개로 누수가 없도록 제작한다.<br>\
                  싱크볼바닥면에 배수구를 설치하고 후면에 오버플로우를 부착하여 물이 넘쳐 바닥으로 흐르는 것을 방지한다.<br>\
                  좌.우 전면에 치마를 부착하여 싱크볼 몸체가 보이지 않도록 하며 또한 보강 역할을 할 수 있도록 제작한다.<br>\
                  다리는 파이프로 견고하게 조립하고 조절식발을 부착하여 수평을 조절할 수 있도록 한다.<br>\
                  하부가 선반타입일 경우 잔넬과 평판타입등 원하는대로 제작이 가능하다.",

                  "전처리, 조리실등에 야채, 육류, 생선류등을 세척하는데 사용한다.<br>\
                  싱크볼은 2개로 누수가 없도록 제작한다.<br>\
                  싱크볼바닥면에 배수구를 설치하고 후면에 오버플로우를 부착하여 물이 넘쳐 바닥으로 흐르는 것을 방지한다.<br>\
                  좌.우 전면에 치마를 부착하여 싱크볼 몸체가 보이지 않도록 하며 또한 보강 역할을 할 수 있도록 제작한다.<br>\
                  다리는 파이프로 견고하게 조립하고 조절식발을 부착하여 수평을 조절할 수 있도록 한다.<br>\
                  하부가 선반타입일 경우 잔넬과 평판타입등 원하는대로 제작이 가능하다.",

                  "전처리, 조리실등에 야채, 육류, 생선류등을 세척하는데 사용한다.<br>\
                  싱크볼은 3개로 누수가 없도록 제작한다.<br>\
                  싱크볼바닥면에 배수구를 설치하고 후면에 오버플로우를 부착하여 물이 넘쳐 바닥으로 흐르는 것을 방지한다.<br>\
                  좌.우 전면에 치마를 부착하여 싱크볼 몸체가 보이지 않도록 하며 또한 보강 역할을 할 수 있도록 제작한다.<br>\
                  다리는 파이프로 견고하게 조립하고 조절식발을 부착하여 수평을 조절할 수 있도록 한다.<br>\
                  하부가 선반타입이 경우 잔넬과 평판타입등 원하는대로 제작이 가능하다.",

                  "식사후 반납되어 온 식기류를 불림하는 세정대로 사용한다.<br>\
                  싱크볼은 1개로 누수가 없도록 제작한다.<br>\
                  싱크볼바닥면에 대형배수구를 설치한다.<br>\
                  좌.우 전면에 치마를 부착하여 싱크볼 몸체가 보이지 않도록 하며 또한 보강 역할을 할 수 있도록 제작한다.<br>\
                  다리는 파이프로 견고하게 조립하고 조절식발을 부착하여 수평을 조절할 수 있도록 한다.<br>\
                  배수구는 레버식으로 제작하여 사용이 편리하도록 한다.",

                  "이동식세정대로서 필요공간에서의 세정작업 및 물기가 많은 야채류등을 운반시 사용한다.<br>\
                  배수구는 레버식으로 제작하여 사용이 편리하도록 한다.<br>\
                  이동을 용이하게 하기 위하여 바퀴를 부착한다."];
}

function genenal_two(){
  $('#genenal_one').contents().unwrap().wrap('<a id = "genenal_one" onclick = "genenal_one()"></a>');
  $('#genenal_two').contents().unwrap().wrap('<strong id = "genenal_two" onclick = "genenal_two()"></strong>');
  $('#genenal_three').contents().unwrap().wrap('<a id = "genenal_three" onclick = "genenal_three()"></a>');
  $('#genenal_four').contents().unwrap().wrap('<a id = "genenal_four" onclick = "genenal_four()"></a>');

  genenal_im01.style.visibility = "visible";
  genenal_im02.style.visibility = "visible";
  genenal_im03.style.visibility = "visible";
  genenal_im04.style.visibility = "visible";
  genenal_im05.style.visibility = "visible";
  genenal_im06.style.visibility = "visible";
  genenal_im07.style.visibility = "visible";
  genenal_im08.style.visibility = "visible";

  genenal_img1.src = "../image/일반기기류/잔반처리대1.png";
  genenal_txt1.innerHTML = "잔반처리대";
  genenal_img2.src = "../image/일반기기류/이중잔반통.png";
  genenal_txt2.innerHTML = "이중잔반통";
  genenal_img3.src = "../image/일반기기류/다단식선반1.png";
  genenal_txt3.innerHTML = "다단식선반";
  genenal_img4.src = "../image/일반기기류/식기찬장1.png";
  genenal_txt4.innerHTML = "식기찬장";
  genenal_img5.src = "../image/일반기기류/벽찬장1.png";
  genenal_txt5.innerHTML = "벽찬장";
  genenal_img6.src = "../image/일반기기류/벽오픈찬장1.png";
  genenal_txt6.innerHTML = "벽오픈찬장";
  genenal_img7.src = "../image/일반기기류/벽선반.png";
  genenal_txt7.innerHTML = "벽선반";
  genenal_img8.src = "../image/일반기기류/상부선반.png";
  genenal_txt8.innerHTML = "상부선반";

  genenal_secondimg = [["../image/일반기기류/잔반처리대1.png", "../image/일반기기류/잔반처리대2.png", "../image/일반기기류/잔반처리대3.png", "../image/일반기기류/잔반처리대4.png"],
                     [],
                     ["../image/일반기기류/다단식선반1.png", "../image/일반기기류/다단식선반2.png", "../image/일반기기류/다단식선반3.png", "../image/일반기기류/다단식선반4.png"],
                     ["../image/일반기기류/식기찬장1.png", "../image/일반기기류/식기찬장2.png"],
                     ["../image/일반기기류/벽찬장1.png", "../image/일반기기류/벽찬장2.png"],
                     ["../image/일반기기류/벽오픈찬장1.png", "../image/일반기기류/벽오픈찬장2.png"],
                     [],
                     []];

  tbody = [[["ECJ-750", "750*750*850"],
              ["ECJ-1200", "1200*750*850"],
              ["ECJ-1500", "1500*750*850"]],

             [["대", "Ø490*590"],
              ["중", "Ø440*540"],
              ["소", "Ø380*550"]],

             [["ECDS-97", "900*750*1800"],
              ["ECDS-127", "1200*750*1800"],
              ["ECDS-157", "1500*750*1800"],
              ["ECDS-187", "1800*750*1800"]],

             [["ECDC-127", "1200*750*1800"],
              ["ECDC-157", "1500*750*1800"],
              ["ECDC-187", "1800*750*1800"]],

             [["ECWC-900", "900*350*600"],
              ["ECWC-1200", "1200*350*600"],
              ["ECWC-1500", "1500*350*600"],
              ["ECWC-1800", "1800*350*600"]],

             [["ECWOC-900", "900*350*600"],
              ["ECWOC-1200", "1200*350*600"],
              ["ECWOC-1500", "1500*350*600"],
              ["ECWOC-1800", "1800*350*600"]],

             [["ECWS-900", "900*350*1단(2단)"],
              ["ECWS-1200", "1200*350*1단(2단)"],
              ["ECWS-1500", "1500*350*1단(2단)"],
              ["ECWS-1800", "1800*350*1단(2단)"]],

             [["ECSS-902", "900*400*700(2단)"],
              ["ECSS-1202", "1200*400*700(2단)"],
              ["ECSS-1502", "1500*400*700(2단)"]]];

  explanation = ["퇴식 되어온 식기류 및 식판의 음식 찌꺼기를 처리하고 세척전 식기류를 분류 처리하는데 사용한다.<br>\
                  홀에 설치할경우 깔끔하게 문짝을 부착하고 이동이 용이하도록 바퀴를 부착할수도 있다.",

                  "퇴식시 발생하는 잔반을 수거하여 처리하는 운반차이다.",

                  "조리실, 냉장실, 세척실, 창고등 모든 부분의 주방에서 사용되며 식자재, 조리용집기, 식판 및 식기류등을 정리 보관하여 사용한다.<br>\
                  선반은 잔넬형과 평판타입이 있으며 원하는대로 제작이 가능하다.<br>\
                  필요에 따라 선반의 단수는 조정이 가능하다.",

                  "식기류 및 주방용의 집기류를 위생적으로 밀폐 보관하는데 사용한다.<br>\
                  몸체는 사각박스형의 찬장에 상하부 등분하여 미닫이문을 부착한다.<br>\
                  내부에는 선반을 설치하여 용도별로 보관이 용이하도록 되어 있다.<br>\
                  상부, 중간선반, 중간판, 하부에는 무거운 중량에 휘지 않도록 가로 방향으로 보강을 용접부착한다.<br>\
                  미닫이문은 착탈식으로 조립되어있다.<br>\
                  하부의 다리는 경사면에 수평적응하여 설치될 수 있도록 높낮이 조절식으로 한다.",

                  "소도구의 보관및 사용이 빈번한곳에서 벽면 상부의 공간 활용을 위하여 사용되는 찬장으로서 위생적인 보관을 위하여 미닫이문을 부착한다.<br>\
                  사용자의 편의에 따라 1단 또는 2단으로 제작가능하다.",

                  "소도구의 보관및 사용이 빈번한곳에서 벽면 상부의 공간 활용을 위하여 사용되는 찬장으로서 문이 없는 오픈찬장으로 사용한다.<br>\
                  사용자의 편의에 따라 1단 또는 2단으로 제작가능하다.",

                  "작업대, 세정대등의 벽면 상부에 설치하여 소도구류의 주방 집기류를 정리하는데 사용한다.<br>\
                  사용자의 편의에 따라 1단 또는 2단으로 제작가능하다.",

                  "작업대의 중앙상부에 설치하여 조리작업시 주방기구 및 기물을 정리하는데 사용한다.<br>\
                  사용자의 편의에 따라 1단 또는 2단으로 제작가능하다."];
}

function genenal_three(){
  $('#genenal_one').contents().unwrap().wrap('<a id = "genenal_one" onclick = "genenal_one()"></a>');
  $('#genenal_two').contents().unwrap().wrap('<a id = "genenal_two" onclick = "genenal_two()"></a>');
  $('#genenal_three').contents().unwrap().wrap('<strong id = "genenal_three" onclick = "genenal_three()"></strong>');
  $('#genenal_four').contents().unwrap().wrap('<a id = "genenal_four" onclick = "genenal_four()"></a>');

  genenal_im01.style.visibility = "visible";
  genenal_im02.style.visibility = "visible";
  genenal_im03.style.visibility = "visible";
  genenal_im04.style.visibility = "visible";
  genenal_im05.style.visibility = "visible";
  genenal_im06.style.visibility = "visible";
  genenal_im07.style.visibility = "visible";
  genenal_im08.style.visibility = "visible";
  
  genenal_img1.src = "../image/일반기기류/이동식기건조대.png";
  genenal_txt1.innerHTML = "이동식기건조대";
  genenal_img2.src = "../image/일반기기류/엘형운반차.png";
  genenal_txt2.innerHTML = "엘형운반차";
  genenal_img3.src = "../image/일반기기류/이동양념무침기.png";
  genenal_txt3.innerHTML = "이동양념무침기";
  genenal_img4.src = "../image/일반기기류/서비스운반차1.png";
  genenal_txt4.innerHTML = "서비스운반차";
  genenal_img5.src = "../image/일반기기류/소쿠리운반차.png";
  genenal_txt5.innerHTML = "소쿠리운반차";
  genenal_img6.src = "../image/일반기기류/튀김운반차.png";
  genenal_txt6.innerHTML = "튀김운반차";
  genenal_img7.src = "../image/일반기기류/수저분회수차1.png";
  genenal_txt7.innerHTML = "수저분회수차";
  genenal_img8.src = "../image/일반기기류/수저식판배분대1.png";
  genenal_txt8.innerHTML = "수저식판배분대";

  genenal_secondimg = [[],
                     [],
                     [],
                     ["../image/일반기기류/서비스운반차1.png", "../image/일반기기류/서비스운반차2.png"],
                     [],
                     [],
                     ["../image/일반기기류/수저분회수차1.png", "../image/일반기기류/수저분회수차2.png"],
                     ["../image/일반기기류/수저식판배분대1.png", "../image/일반기기류/수저식판배분대2.png"]];

  tbody = [[["ECDTM-97", "900*750*850"],
              ["ECDTM-127", "1200*750*850"],
              ["ECDTM-157", "1500*750*850"]],

             [["ECLC-900", "900*600*850"]],

             [["-", "1200*750*850"],
              ["-", "1500*750*850"]],

             [["EC3C-901", "900*600*850"]],

             [["ECSC-601", "Ø600*700"]],

             [["ECFC-601", "Ø600*700"]],

             [["ECSR-700", "700*600*850"]],

             [["ECSS-600", "600*600*1100"],
              ["ECSS-900", "900*600*1100"]]];

  explanation = ["세척기에서 세척되어 나온 식기류를 받아서 이동하여 정리 보관하는 작업에 사용한다.<br>\
                  이동을 용이하게 하기 위하여 바퀴를 부착한다.",

                  "식자재 반입시 운반이나 주방내에서 집기류등을 운반시 사용한다.<br>\
                  손잡이는 측면에 위방향으로 세우고 윗부분은 30도 경사를 주어 사용이 용이하도록 한다.<br>\
                  손잡이 기둥의 하단부에는 물품이 떨어지지 않도록 안전판을 부착한다.<br>\
                  몸체의 코너에는 건축물과의 충돌시 파손을 방지하기 위한 고무범퍼를 부착한다.<br>\
                  상판부 하단에는 보강을 하여 중량에 견딜수 있게 한다.<br>\
                  이동을 용이하게 하기 위하여 바퀴를 부착한다.",

                  "야채등을 손질하여 버무릴때 사용한다.<br>\
                  이동을 용이하게 하기 위하여 바퀴를 부착한다.<br>\
                  주문제작",

                  "가공 정리된 식자재, 조리완료된 음식을 운반하는데 사용한다.<br>\
                  스테인리스로 제작되어 녹이 슬지 않으며 위생적이다.<br>\
                  이동을 용이하게 하기 위하여 바퀴를 부착한다.<br>\
                  2단, 3단 원하는대로 제작이 가능하다.",

                  "상부링에 소쿠리를 받쳐 기물, 잔반, 야채류등을 운반하는데 사용한다.<br>\
                  스테인리스로 제작되어 녹이 슬지 않으며 위생적이다.<br>\
                  받침대 하단에 바퀴가 부착되어 있어 이동이 편리하다.<br>\
                  내부에는 P.V.C 소쿠리를 끼워 사용한다.",

                  "상부링에 소쿠리를 받쳐 튀김류를 운반하는데 사용한다.<br>\
                  스테인리스로 제작되어 녹이 슬지 않으며 위생적이다.<br>\
                  받침대 하단에 바퀴가 부착되어 있어 이동이 편리합니다.<br>\
                  내부에는 소쿠리를 끼워 사용합니다.",

                  "퇴식시 사용한 수저를 반납받아 세척부로 운반 처리시 사용한다.<br>\
                  이동을 용이하게 하기 위하여 바퀴를 부착한다.",

                  "배식시 식판과 수저를 정리 보관하며 급식자로 하여금 신속하고 편리하게 사용할 수 있도록 보관한다.<br>\
                  상부에는 수저를 분할 보관할 수 있게 구멍을 내어 수저통을 꽂아 사용한다.<br>\
                  몸체는 좌우, 뒷면을 막아 식판이 떨어지지 않도록 제작한다.<br>\
                  하부에는 식판을 놓을 수 있도록 수평으로 제작한다.<br>\
                  이동을 용이하게 하기 위하여 바퀴를 부착한다."];
}

function genenal_four(){
  $('#genenal_one').contents().unwrap().wrap('<a id = "genenal_one" onclick = "genenal_one()"></a>');
  $('#genenal_two').contents().unwrap().wrap('<a id = "genenal_two" onclick = "genenal_two()"></a>');
  $('#genenal_three').contents().unwrap().wrap('<a id = "genenal_three" onclick = "genenal_three()"></a>');
  $('#genenal_four').contents().unwrap().wrap('<strong id = "genenal_four" onclick = "genenal_four()"></strong>');

  genenal_im01.style.visibility = "visible";
  genenal_im02.style.visibility = "visible";
  genenal_im03.style.visibility = "visible";
  genenal_im04.style.visibility = "visible";
  genenal_im05.style.visibility = "visible";
  genenal_im06.style.visibility = "visible";
  genenal_im07.style.visibility = "hidden";
  genenal_im08.style.visibility = "hidden";

  genenal_img1.src = "../image/일반기기류/식기디스펜서1.png";
  genenal_txt1.innerHTML = "식기디스펜서";
  genenal_img2.src = "../image/일반기기류/전기식국보온운반차1.png";
  genenal_txt2.innerHTML = "전기식국보온운반차";
  genenal_img3.src = "../image/일반기기류/국배식대.png";
  genenal_txt3.innerHTML = "국배식대";
  genenal_img4.src = "../image/일반기기류/컵회수차1.png";
  genenal_txt4.innerHTML = "컵회수차";
  genenal_img5.src = "../image/일반기기류/학급배식차.png";
  genenal_txt5.innerHTML = "학급배식차";
  genenal_img6.src = "../image/일반기기류/배식&퇴식운반차1.png";
  genenal_txt6.innerHTML = "배식&퇴식운반차";

  genenal_secondimg = [["../image/일반기기류/식기디스펜서1.png", "../image/일반기기류/식기디스펜서2.png"],
                     ["../image/일반기기류/전기식국보온운반차1.png", "../image/일반기기류/전기식국보온운반차2.png", "../image/일반기기류/전기식국보온운반차3.png", "../image/일반기기류/전기식국보온운반차4.png"],
                     [],
                     ["../image/일반기기류/컵회수차1.png", "../image/일반기기류/컵회수차2.png", "../image/일반기기류/컵회수차3.png"],
                     [],
                     ["../image/일반기기류/배식&퇴식운반차1.png", "../image/일반기기류/배식&퇴식운반차2.png", "../image/일반기기류/배식&퇴식운반차3.png"],
                     [],
                     []];

  tbody = [[["ECSD-600", "600*600*850"]],

             [["ECKC-601(E)", "600*600*850"]],

             [["-", "1200*650*850"]],

             [["ECCR-601", "600*600*850"]],

             [["ESSC-900", "900*450*850"],
              ["ESSC-1100", "1100*450*850"]],

             [["주문제작", ""]],

             [],

             []];

  explanation = ["그릇류를 다량 엎어놓고 배식하는데 사용한다.<br>\
                  내부판은 상하로 이동이 되도록 사면에 이동식 스프링에 고정한다.<br>\
                  이동을 용이하게 하기 위하여 바퀴를 부착한다.",

                  "조리완료된 국을 다량씩 배식부로 안전하게 운반하며 국을 배식하는데 사용한다.<br>\
                  몸체 외부는 사각형으로 하고 내부는 원형으로 제작한다.<br>\
                  몸체는 2중으로 제작하고 내부에 보온재를 넣어 장시간 보온이 되도록 한다.<br>\
                  사용후 세척이 용이하도록 배수구를 부착한다.<br>\
                  전기컨트롤 판넬을 부착하여 조작이 용이하게 한다.<br>\
                  운반의 편리를 위하여 핸들을 부착한다.<br>\
                  이동을 용이하게 하기 위하여 바퀴를 부착한다.",

                  "국을 배식시 국대접을 다량 엎어놓고 좌측손으로 편리하게 잡아서 국을 배식하는데 사용한다.",

                  "사용한 컵을 관류식통에 회수하여 세척부까지 다량씩 운반하는데 사용한다.<br>\
                  상판에 구멍을 내어 관류식통을 넣고 뺄 수 있도록 제작한다.<br>\
                  관류식통은 스테인리스파이프로 제작하며 탈부착이 용이하도록 한다.<br>\
                  이동을 용이하게 하기 위하여 바퀴를 부착한다.",

                  "조리완료된 음식을 학급별로 운반하는데 사용한다.<br>\
                  상판좌우에는 음식담은 그릇을 올려놓을 수 있도록 상판위로 접을 수 있는 판을 부착하되 접철식으로 제작하여 부착한다.<br>\
                  하부에는 선반을 부착하여 다리가 비틀림이 없도록하고 기물등을 올려놓을 수 있도록 한다.<br>\
                  이동을 용이하게 하기 위하여 바퀴를 부착한다.<br>\
                  주문제작",

                    "",

                    "",

                    ""];
}

genenal_divimg[0].onclick = function(){
  genenal_bigimg.src = genenal_minimg[0].src;
}

genenal_divimg[1].onclick = function(){
  genenal_bigimg.src = genenal_minimg[1].src;
}

genenal_divimg[2].onclick = function(){
  genenal_bigimg.src = genenal_minimg[2].src;
}

genenal_divimg[3].onclick = function(){
  genenal_bigimg.src = genenal_minimg[3].src;
}
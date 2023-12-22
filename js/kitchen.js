var page = document.getElementsByClassName('pt-page-current');

/*************
  8. 취반기구/냉온정수기/배기후드
**************/

var kitchen_modal = document.getElementById("kitchen");

var kitchen_bigimg = document.getElementById("kitchen_bigimg");

var kitchen_title = document.getElementById("kitchen_title");
var kitchen_explanation = document.getElementById("kitchen_explanation");

var kitchen_biglittleimgs = document.getElementById("kitchen_biglittleimgs");

var kitchen_divimg1 = document.getElementById("kitchen_divimg1");
var kitchen_minimg1 = document.getElementById("kitchen_minimg1");

var kitchen_divimg2 = document.getElementById("kitchen_divimg2");
var kitchen_minimg2 = document.getElementById("kitchen_minimg2");

var kitchen_divimg3 = document.getElementById("kitchen_divimg3");
var kitchen_minimg3 = document.getElementById("kitchen_minimg3");

var kitchen_divimg4 = document.getElementById("kitchen_divimg4");
var kitchen_minimg4 = document.getElementById("kitchen_minimg4");

var kitchen_thead = document.getElementById("kitchen_thead");
var kitchen_tbody = document.getElementById("kitchen_tbody");

var kitchen_im01 = document.getElementById("kitchen_im01");
var kitchen_im02 = document.getElementById("kitchen_im02");
var kitchen_im03 = document.getElementById("kitchen_im03");
var kitchen_im04 = document.getElementById("kitchen_im04");

var kitchen_img1 = document.getElementById("kitchen_img1");
var kitchen_img2 = document.getElementById("kitchen_img2");
var kitchen_img3 = document.getElementById("kitchen_img3");
var kitchen_img4 = document.getElementById("kitchen_img4");

var kitchen_txt1 = document.getElementById("kitchen_txt1");
var kitchen_txt2 = document.getElementById("kitchen_txt2");
var kitchen_txt3 = document.getElementById("kitchen_txt3");
var kitchen_txt4 = document.getElementById("kitchen_txt4");

kitchen_im01.onclick = function(){
	kitchen_modal.style.display = "inline-block";

	kitchen_bigimg.src = kitchen_img1.src;
	kitchen_title.innerHTML = kitchen_txt1.innerHTML;
	kitchen_explanation.innerHTML = "대용량 정수기로 식수 공급시 사용된다.<br>\
									냉수, 온수 수량은 원하는대로 제작 가능하다.<br>\
									상부 컵찬장도 주문에 따라 달라진다.<br>\
									주문제작";
	
	kitchen_divimg1.style.visibility = "visible";
	kitchen_divimg2.style.visibility = "visible";
	kitchen_divimg3.style.visibility = "visible";
	kitchen_divimg4.style.visibility = "visible";

	var thead = ["모델", "규격"];
	var tbody = [["EGWF-1200", "1200*750*1800"],
				["EGWF-1500", "1500*750*1800"],
				["EGWF-1800", "1800*750*1800"],
				["EGWF-2100", "2100*750*1800"]];

	kitchen_table(thead, tbody);

	scrolltop();
	page[0].style.display = "none";
}

kitchen_im02.onclick = function(){
	kitchen_modal.style.display = "inline-block";

	kitchen_bigimg.src = kitchen_img2.src;
	kitchen_title.innerHTML = kitchen_txt2.innerHTML;
	kitchen_explanation.innerHTML = "수량의 쌀을 세미하기에 편리하다.<br>\
									원통의 몸체에 하부는 원뿔형의 깔데기 모양으로 하고 상부테두리는 턱을 주어 오버플로우 기능을 할 수 있도록 한다.<br>\
									세미관은 중앙에 세우며 쌀과 물의 혼합이 원만한 간격을 유지하도록 하며 좌.우로 회전할 수 있도록 한다.<br>\
									전기선이 필요없어 설치가 편리하다.";
	
	kitchen_divimg1.style.visibility = "hidden";
	kitchen_divimg2.style.visibility = "hidden";
	kitchen_divimg3.style.visibility = "hidden";
	kitchen_divimg4.style.visibility = "hidden";

	var thead = ["모델", "용량", "규격"];
	var tbody = [["ECR-40", "40㎏", "Ø590*1250"]];

	kitchen_table(thead, tbody);

	scrolltop();
	page[0].style.display = "none";
}

var kitchens_modal = document.getElementById("kitchens");

var kitchens_bigimg = document.getElementById("kitchens_bigimg");

var kitchens_title = document.getElementById("kitchens_title");
var kitchens_explanation = document.getElementById("kitchens_explanation");

var kitchens_biglittleimgs = document.getElementById("kitchens_biglittleimgs");

var kitchens_divimg1 = document.getElementById("kitchens_divimg1");
var kitchens_minimg1 = document.getElementById("kitchens_minimg1");

var kitchens_divimg2 = document.getElementById("kitchens_divimg2");
var kitchens_minimg2 = document.getElementById("kitchens_minimg2");

var kitchens_divimg3 = document.getElementById("kitchens_divimg3");
var kitchens_minimg3 = document.getElementById("kitchens_minimg3");

var kitchens_divimg4 = document.getElementById("kitchens_divimg4");
var kitchens_minimg4 = document.getElementById("kitchens_minimg4");

var kitchens_divimg5 = document.getElementById("kitchens_divimg5");
var kitchens_buton = document.getElementById("kitchens_buton");

kitchen_im03.onclick = function(){
	kitchens_modal.style.display = "inline-block";

	kitchens_bigimg.src = kitchen_img3.src;
	kitchens_title.innerHTML = kitchen_txt3.innerHTML;
	kitchens_explanation.innerHTML = "현장여건에 따라 주문제작합니다.";
	
	kitchens_divimg4.style.visibility = "visible";
	kitchens_divimg5.style.visibility = "hidden";

	kitchens_minimg1.src = "../image/8-취반기기&냉온음수대&배기후드/배기후드1.png";
	kitchens_minimg2.src = "../image/8-취반기기&냉온음수대&배기후드/배기후드2.png";
	kitchens_minimg3.src = "../image/8-취반기기&냉온음수대&배기후드/배기후드3.png";
	kitchens_minimg4.src = "../image/8-취반기기&냉온음수대&배기후드/배기후드4.png";

	scrolltop();
	page[0].style.display = "none";
}

kitchen_im04.onclick = function(){
	kitchens_modal.style.display = "inline-block";

	kitchens_bigimg.src = kitchen_img4.src;
	kitchens_title.innerHTML = kitchen_txt4.innerHTML;
	kitchens_explanation.innerHTML = "현장여건에 따라 주문제작합니다.";
	
	kitchens_divimg4.style.visibility = "hidden";
	kitchens_divimg5.style.visibility = "visible";

	kitchens_minimg1.src = "../image/8-취반기기&냉온음수대&배기후드/주방환기 모듈 천장시스템1.png";
	kitchens_minimg2.src = "../image/8-취반기기&냉온음수대&배기후드/주방환기 모듈 천장시스템2.png";
	kitchens_minimg3.src = "../image/8-취반기기&냉온음수대&배기후드/주방환기 모듈 천장시스템3.png";

	scrolltop();
	page[0].style.display = "none";
}

kitchen_divimg1.onclick = function(){
  kitchen_bigimg.src = kitchen_minimg1.src;
}

kitchen_divimg2.onclick = function(){
  kitchen_bigimg.src = kitchen_minimg2.src;
}

kitchen_divimg3.onclick = function(){
  kitchen_bigimg.src = kitchen_minimg3.src;
}

kitchen_divimg4.onclick = function(){
  kitchen_bigimg.src = kitchen_minimg4.src;
}


kitchens_divimg1.onclick = function(){
  kitchens_bigimg.src = kitchens_minimg1.src;
}

kitchens_divimg2.onclick = function(){
  kitchens_bigimg.src = kitchens_minimg2.src;
}

kitchens_divimg3.onclick = function(){
  kitchens_bigimg.src = kitchens_minimg3.src;
}

kitchens_divimg4.onclick = function(){
  kitchens_bigimg.src = kitchens_minimg4.src;
}
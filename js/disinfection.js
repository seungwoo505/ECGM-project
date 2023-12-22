var page = document.getElementsByClassName('pt-page-current');

/*************
  6.소독기기
**************/

var disinfection_modal = document.getElementById("disinfection");

var disinfection_bigimg = document.getElementById("disinfection_bigimg");

var disinfection_title = document.getElementById("disinfection_title");
var disinfection_explanation = document.getElementById("disinfection_explanation");

var disinfection_biglittleimgs = document.getElementById("disinfection_biglittleimgs");

var disinfection_divimg1 = document.getElementById("disinfection_divimg1");
var disinfection_minimg1 = document.getElementById("disinfection_minimg1");

var disinfection_divimg2 = document.getElementById("disinfection_divimg2");
var disinfection_minimg2 = document.getElementById("disinfection_minimg2");

var disinfection_divimg3 = document.getElementById("disinfection_divimg3");
var disinfection_minimg3 = document.getElementById("disinfection_minimg3");

var disinfection_divimg4 = document.getElementById("disinfection_divimg4");
var disinfection_minimg4 = document.getElementById("disinfection_minimg4");

var disinfection_thead = document.getElementById("disinfection_thead");
var disinfection_tbody = document.getElementById("disinfection_tbody");

var disinfection_im01 = document.getElementById("disinfection_im01");
var disinfection_im02 = document.getElementById("disinfection_im02");
var disinfection_im03 = document.getElementById("disinfection_im03");

var disinfection_img1 = document.getElementById("disinfection_img1");
var disinfection_img2 = document.getElementById("disinfection_img2");
var disinfection_img3 = document.getElementById("disinfection_img3");

var disinfection_txt1 = document.getElementById("disinfection_txt1");
var disinfection_txt2 = document.getElementById("disinfection_txt2");
var disinfection_txt3 = document.getElementById("disinfection_txt3");

disinfection_im01.onclick =function(){
	disinfection_modal.style.display = "inline-block";

	disinfection_bigimg.src = disinfection_img1.src;
	disinfection_title.innerHTML = disinfection_txt1.innerHTML;
	disinfection_explanation.innerHTML = "세척완료된 식기류를 건조하여 위생적으로 소독, 보관하는데 사용한다.<br>\
										몸체는 내.외부 이중구조로 하며 그 사이에는 밀도높은 단열재로 밀폐시켜 열손실을 줄일 수 있도록한다.<br>\
										문은 여닫이식으로 하며 문에 패킹을 부착하고 손잡이형 캐치를 부착한다.<br>\
										전기히터는 좌, 우 벽면에 설치하여 보호 칸막이를 부착하여 공기유통의 덕트역할을 할수 있도록 한다.<br>\
										상부 중앙에 공기의 순환을 위하여 팬을 설치하여 고내의 온도가 균일하게 한다.<br>\
										전기장치는 몸체의 상부쪽에 설치하고 누전차단기를 장착한다.";
	
	disinfection_divimg1.style.visibility = "visible";
	disinfection_divimg2.style.visibility = "visible";
	disinfection_divimg3.style.visibility = "visible";
	disinfection_divimg4.style.visibility = "visible";

	var thead = ["모델", "규격", "전원"];
	var tbody = [["ECES-901", "900*750*1950", "1P 220V"],
				["ECES-1201", "1200*750*1950", "3P 380V"],
				["ECES-1501", "1500*750*1950", "3P 380V"],
				["ECES-1801", "1800*750*1950", "3P 380V"],
				["ECES-2101", "2100*750*1950", "3P 380V"]];

	disinfection_table(thead, tbody);

	scrolltop();
	page[0].style.display = "none";
}

disinfection_im02.onclick =function(){
	disinfection_modal.style.display = "inline-block";

	disinfection_bigimg.src = disinfection_img2.src;
	disinfection_title.innerHTML = disinfection_txt2.innerHTML;
	disinfection_explanation.innerHTML = "페달식, 전자감응식 타입으로 제작가능하다.";
	
	disinfection_divimg1.style.visibility = "hidden";
	disinfection_divimg2.style.visibility = "hidden";
	disinfection_divimg3.style.visibility = "hidden";
	disinfection_divimg4.style.visibility = "hidden";

	var thead = ["모델", "규격"];
	var tbody = [["1인용", "450*450*850"]];

	disinfection_table(thead, tbody);

	scrolltop();
	page[0].style.display = "none";
}

var disinfections_modal = document.getElementById("disinfections");

var disinfections_title = document.getElementById("disinfections_title");

var disinfections_minimg1 = document.getElementById("disinfections_minimg1");
var disinfections_minimg2 = document.getElementById("disinfections_minimg2");
var disinfections_minimg3 = document.getElementById("disinfections_minimg3");
var disinfections_minimg4 = document.getElementById("disinfections_minimg4");
var disinfections_minimg5 = document.getElementById("disinfections_minimg5");
var disinfections_minimg6 = document.getElementById("disinfections_minimg6");
var disinfections_minimg7 = document.getElementById("disinfections_minimg7");
var disinfections_minimg8 = document.getElementById("disinfections_minimg8");
var disinfections_minimg9 = document.getElementById("disinfections_minimg9");

disinfection_im03.onclick = function(){
	disinfections_modal.style.display = "inline-block";

	disinfections_title.innerHTML = disinfection_txt3.innerHTML + " 제품";

	scrolltop();
	page[0].style.display = "none";
}

disinfection_divimg1.onclick = function(){
  disinfection_bigimg.src = disinfection_minimg1.src;
}

disinfection_divimg2.onclick = function(){
  disinfection_bigimg.src = disinfection_minimg2.src;
}

disinfection_divimg3.onclick = function(){
  disinfection_bigimg.src = disinfection_minimg3.src;
}

disinfection_divimg4.onclick = function(){
  disinfection_bigimg.src = disinfection_minimg4.src;
}
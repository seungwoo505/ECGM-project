var page = document.getElementsByClassName('pt-page-current');

/*************
  3.자율배식대/일반배식대
**************/

var distribution_modal = document.getElementById("distribution");

var distribution_bigimg = document.getElementById("distribution_bigimg");

var distribution_title = document.getElementById("distribution_title");
var distribution_explanation = document.getElementById("distribution_explanation");

var distribution_biglittleimgs = document.getElementById("distribution_biglittleimgs");

var distribution_divimg1 = document.getElementById("distribution_divimg1");
var distribution_minimg1 = document.getElementById("distribution_minimg1");

var distribution_divimg2 = document.getElementById("distribution_divimg2");
var distribution_minimg2 = document.getElementById("distribution_minimg2");

var distribution_divimg3 = document.getElementById("distribution_divimg3");
var distribution_minimg3 = document.getElementById("distribution_minimg3");

var distribution_thead = document.getElementById("distribution_thead");
var distribution_tbody = document.getElementById("distribution_tbody");

var distribution_im01 = document.getElementById("distribution_im01");
var distribution_im02 = document.getElementById("distribution_im02");
var distribution_im03 = document.getElementById("distribution_im03");
var distribution_im04 = document.getElementById("distribution_im04");

var distribution_img1 = document.getElementById("distribution_img1");
var distribution_img2 = document.getElementById("distribution_img2");
var distribution_img3 = document.getElementById("distribution_img3");
var distribution_img4 = document.getElementById("distribution_img4");

var distribution_txt1 = document.getElementById("distribution_txt1");
var distribution_txt2 = document.getElementById("distribution_txt2");
var distribution_txt3 = document.getElementById("distribution_txt3");
var distribution_txt4 = document.getElementById("distribution_txt4");

distribution_im01.onclick = function(){
	distribution_modal.style.display = "inline-block";

	distribution_bigimg.src = distribution_img1.src;
	distribution_title.innerHTML = distribution_txt1.innerHTML;
	distribution_explanation.innerHTML = "밥을 배식하는 배식대로 사용하며 상판을 밥솥의 깊이 만큼 턱을 주어야하며 밥솥을 편리하게 넣을 수 있도록 전면은 터지게 한다.<br>\
										상판, 몸체등 모든부위를 STS-304 27종으로 제작한다.<br>\
										주문제작이 가능하며 주문에 따라 보온, 비보온으로 제작한다.";

	distribution_divimg3.style.visibility = "hidden";

	distribution_minimg1.src = "../image/3-자율배식대일반배식대류/밥배식대1.png";
	distribution_minimg2.src = "../image/3-자율배식대일반배식대류/밥배식대2.png";

	var thead = ["모델", "규격"];
	var tbody = [["-", "650*650*850"]];

	distribution_table(thead, tbody);

	scrolltop();
	page[0].style.display = "none";
}

distribution_im02.onclick = function(){
	distribution_modal.style.display = "inline-block";

	distribution_bigimg.src = distribution_img2.src;
	distribution_title.innerHTML = distribution_txt2.innerHTML;
	distribution_explanation.innerHTML = "조리된 음식을 받드에 담아 상부에 거치하여 배식이 용이하도록 사용하며 용도에 따라 보온기능, 보냉기능을 추가하여 제작할 수 있다.<br>\
										상부는 홈을내어 받드를 거치할 수 있도록 홈을 내어 제작한다.<br>\
										하부는 찬장 또는 오픈찬장으로 제작하여 받드나 기물등을 보관할 수 있도록 한다.<br>\
										상판, 몸체등 모든 부위를 STS-304 27종으로 제작한다.<br>\
										주문제작이 가능하며 주문에 따라 보온, 비보온, 보냉으로 제작한다.";
	
	distribution_divimg3.style.visibility = "visible";

	distribution_minimg1.src = "../image/3-자율배식대일반배식대류/반찬배식대1.png";
	distribution_minimg2.src = "../image/3-자율배식대일반배식대류/반찬배식대2.png";

	var thead = ["규격", "사양"];
	var tbody = [["900*650*850", "2구"],
				 ["1200*650*850", "3구"],
				 ["1500*650*850", "4구"]];

	distribution_table(thead, tbody);

	scrolltop();
	page[0].style.display = "none";
}

var distributions_modal = document.getElementById("distributions");

var distributions_bigimg = document.getElementById("distributions_bigimg");

var distributions_title = document.getElementById("distributions_title");
var distributions_explanation = document.getElementById("distributions_explanation");

var distributions_biglittleimgs = document.getElementById("distributions_biglittleimgs");

var distributions_divimg1 = document.getElementById("distributions_divimg1");
var distributions_minimg1 = document.getElementById("distributions_minimg1");

var distributions_divimg2 = document.getElementById("distributions_divimg2");
var distributions_minimg2 = document.getElementById("distributions_minimg2");

var distributions_divimg3 = document.getElementById("distributions_divimg3");
var distributions_minimg3 = document.getElementById("distributions_minimg3");

var distributions_divimg4 = document.getElementById("distributions_divimg4");
var distributions_minimg4 = document.getElementById("distributions_minimg4");

var distributions_divimg5 = document.getElementById("distributions_divimg5");
var distributions_buton = document.getElementById("distributions_buton");

distribution_im03.onclick = function(){
	distributions_modal.style.display = "inline-block";

	distributions_bigimg.src = distribution_img3.src;
	distributions_title.innerHTML = distribution_txt3.innerHTML;
	distributions_explanation.innerHTML = "식당에 설치하여 사용하는 배식대이며, 자율적으로 배식을 하는데 사용한다.<br>\
										주문제작";
	
	distributions_divimg5.style.visibility = "visible";

	distributions_minimg1.src = "../image/3-자율배식대일반배식대류/자율배식대1.png";
	distributions_minimg2.src = "../image/3-자율배식대일반배식대류/자율배식대2.png";
	distributions_minimg3.src = "../image/3-자율배식대일반배식대류/자율배식대3.png";
	distributions_minimg4.src = "../image/3-자율배식대일반배식대류/자율배식대4.png";

	scrolltop();
	page[0].style.display = "none";
}

distribution_im04.onclick = function(){
	distributions_modal.style.display = "inline-block";

	distributions_bigimg.src = distribution_img4.src;
	distributions_title.innerHTML = distribution_txt4.innerHTML;
	distributions_explanation.innerHTML = "짧은 시간에 많은 인원의 식사를 제공시 주방 종사원의 인력절감과 식사하는 사람의 퇴식을 편리하게 처리하는데 사용한다.<br>\
										주문제작";
	
	distributions_divimg5.style.visibility = "hidden";

	distributions_minimg1.src = "../image/3-자율배식대일반배식대류/콘베어1.png";
	distributions_minimg2.src = "../image/3-자율배식대일반배식대류/콘베어2.png";
	distributions_minimg3.src = "../image/3-자율배식대일반배식대류/콘베어3.png";
	distributions_minimg4.src = "../image/3-자율배식대일반배식대류/콘베어4.png";

	scrolltop();
	page[0].style.display = "none";
}

distribution_divimg1.onclick = function(){
  distribution_bigimg.src = distribution_minimg1.src;
}

distribution_divimg2.onclick = function(){
  distribution_bigimg.src = distribution_minimg2.src;
}

distribution_divimg3.onclick = function(){
  distribution_bigimg.src = distribution_minimg3.src;
}

distributions_divimg1.onclick = function(){
  distributions_bigimg.src = distributions_minimg1.src;
}

distributions_divimg2.onclick = function(){
  distributions_bigimg.src = distributions_minimg2.src;
}

distributions_divimg3.onclick = function(){
  distributions_bigimg.src = distributions_minimg3.src;
}

distributions_divimg4.onclick = function(){
  distributions_bigimg.src = distributions_minimg4.src;
}
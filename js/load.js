$minbar = $('#minbar');
var current = localStorage.getItem("current");
var number;
(localStorage.getItem("number") == null) ? number = 0 : number = localStorage.getItem("number");

window.onload = function(){
	if (current == 0) {
		$minbar.attr("src", "../image/소개바/일반기기.jpg");
	}else if(current == 1){
		$minbar.attr("src", "../image/소개바/열조리기기.jpg");
	}else if(current == 2){
		$minbar.attr("src", "../image/소개바/자율배식대.jpg");
	}else if(current == 3){
		$minbar.attr("src", "../image/소개바/냉장기기.jpg");
	}else if(current == 4){
		$minbar.attr("src", "../image/소개바/세척기기.jpg");
	}else if(current == 5){
		$minbar.attr("src", "../image/소개바/소독기기.jpg");
	}else if(current == 6){
		$minbar.attr("src", "../image/소개바/식품가공기기.jpg");
	}else if(current == 7){
		$minbar.attr("src", "../image/소개바/취반기기.jpg");
	}else if(current == 8){
		$minbar.attr("src", "../image/소개바/기타기기.jpg");
	}else if(current == 9){
		$minbar.attr("src", "../image/소개바/협력사.jpg");
	}

	if (number == 1) {
		kitchen_modal.style.display = "inline-block";

		kitchen_bigimg.src = kitchen_img1.src;
		kitchen_title.innerHTML = kitchen_txt1.innerHTML;
		kitchen_explanation.innerHTML = "대용량 정수기로 식수 공급시 사용된다.<br>\
										냉수, 온수 수량은 원하는대로 제작 가능하다.<br>\
										상부 컵찬장도 주문에 따라 달라진다.<br>\
										주문제작 가능하다.";
		
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
	}else if(number == 2){

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
	}else if(number == 3){
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
	}else if(number == 4){
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
	}else if(number == 5){
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
    	scrolltop();
  		page[0].style.display = "none";
	}else if(number == 6){
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
	}else if(number == 7){
		disinfection_modal.style.display = "inline-block";

		disinfection_bigimg.src = disinfection_img1.src;
		disinfection_title.innerHTML = disinfection_txt1.innerHTML;
		disinfection_explanation.innerHTML = "세척완료된 식기류를 건조하여 위생적으로 소독 보관하는데 사용한다.<br>\
											몸체는 내.외부 이중구조로 하며 그 사이에는 밀도높은 단열재로 밀폐시켜 열손실을 줄일 수 있도록한다.<br>\
											문은 여닫이식으로 하며 문에 패킹을 부착하고 손잡이형 캐치를 부착한다.<br>\
											전기히터는 좌,우 벽면에 설치하여 보호 칸막이를 부착하여 공기유통의 덕트역할을 할 수 있도록 한다.<br>\
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
	}else if(number == 8){
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

	}else if(number == 9){
		genenal_four();

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

  		var thead = ["모델", "규격"];

  		var tbody = [[["ECSD-600", "600*600*850"]],

             [["ECKC-601(E)", "600*600*850"]],

             [["-", "1200*650*850"]],

             [["ECCR-601", "600*600*850"]],

             [["ESSC-900", "900*450*850"],
              ["ESSC-1100", "1100*450*850"]],

             [["주문제작", ""]],

             [],

             []];
		
  		genenal_table(thead, tbody[1]);
		
  		scrolltop();
  		page[0].style.display = "none";

	}else if(number == 10){
		kitchen_modal.style.display = "inline-block";

		kitchen_bigimg.src = kitchen_img2.src;
		kitchen_title.innerHTML = kitchen_txt2.innerHTML;
		kitchen_explanation.innerHTML = "수량의 쌀을 세미하기에 편리하다.<br>\
										원통의 몸체에 하부는 원뿔형의 깔데기 모양으로 하고 상부테두리는 턱을 주어 오버플로우 기능을 할 수 있도록 한다.<br>\
										세미관은 중앙에 세우며 쌀과 물의 혼합이 원만한 간격을 유지하도록 하며 좌.우로 회전할 수 있도록 한다.<br>\
										전기선이 필요 없어 설치가 편리하다.";
		
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

	localStorage.removeItem('number');
}
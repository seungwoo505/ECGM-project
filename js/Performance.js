//사진 확대하는 부분을 의미
var modal = document.getElementById("myModal");

function scrolltop(){
  $('html, body').animate({scrollTop: $('.pt-triggers').offset().top}, 400);
}

//사진 및 글씨를 클릭했을때 사진이 확대되는부분이 나오게 하기
var modalImg = document.getElementById("bigimg");
var modaltxt = document.getElementById("explanation");

var img01 = document.getElementById("im01");
var img01_change = document.getElementById("img1");
img01.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img01_change.src;
  scrolltop();
}

var img02 = document.getElementById("im02");
var img02_change = document.getElementById("img2");
img02.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img02_change.src;
  scrolltop();
}

var img03 = document.getElementById("im03");
var img03_change = document.getElementById("img3");
img03.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img03_change.src;
  scrolltop();
}

var img04 = document.getElementById("im04");
var img04_change = document.getElementById("img4");
img04.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img04_change.src;
  scrolltop();
}

var img05 = document.getElementById("im05");
var img05_change = document.getElementById("img5");
img05.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img05_change.src;
  scrolltop();
}

var img06 = document.getElementById("im06");
var img06_change = document.getElementById("img6");
img06.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img06_change.src;
  scrolltop();
}

var img07 = document.getElementById("im07");
var img07_change = document.getElementById("img7");
img07.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img07_change.src;
  scrolltop();
}

var img08 = document.getElementById("im08");
var img08_change = document.getElementById("img8");
img08.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img08_change.src;
  scrolltop();
}


var img09 = document.getElementById("im09");
var img09_change = document.getElementById("img9");
img09.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img09_change.src;
  scrolltop();
}

var img10 = document.getElementById("im10");
var img10_change = document.getElementById("img10");
img10.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img10_change.src;
  scrolltop();
}

var img11 = document.getElementById("im11");
var img11_change = document.getElementById("img11");
img11.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img11_change.src;
  scrolltop();
}

var img12 = document.getElementById("im12");
var img12_change = document.getElementById("img12");
img12.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img12_change.src;
  scrolltop();
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

function one(){
  $('#one').contents().unwrap().wrap('<strong id = "one" onclick = "one()"></strong>');
  $('#two').contents().unwrap().wrap('<a id = "two" onclick = "two()"></a>');
  $('#three').contents().unwrap().wrap('<a id = "three" onclick = "three()"></a>');
  $('#four').contents().unwrap().wrap('<a id = "four" onclick = "four()"></a>');
  $('#five').contents().unwrap().wrap('<a id = "five" onclick = "five()"></a>');

  img01_change.src = "../image/시공사진/시공사진13.jpg";
  img02_change.src = "../image/시공사진/시공사진14.jpg";
  img03_change.src = "../image/시공사진/시공사진15.jpg";
  img04_change.src = "../image/시공사진/시공사진16.jpg";
  img05_change.src = "../image/시공사진/시공사진17.jpg";
  img06_change.src = "../image/시공사진/시공사진18.jpg";
  img07_change.src = "../image/시공사진/시공사진19.jpg";
  img08_change.src = "../image/시공사진/시공사진20.jpg";
  img09_change.src = "../image/시공사진/시공사진21.jpg";
  img10_change.src = "../image/시공사진/시공사진22.jpg";
  img11_change.src = "../image/시공사진/시공사진23.jpg";
  img12_change.src = "../image/시공사진/시공사진24.jpg";
}

function two(){
  $('#one').contents().unwrap().wrap('<a id = "one" onclick = "one()"></a>');
  $('#two').contents().unwrap().wrap('<strong id = "two" onclick = "two()"></strong>');
  $('#three').contents().unwrap().wrap('<a id = "three" onclick = "three()"></a>');
  $('#four').contents().unwrap().wrap('<a id = "four" onclick = "four()"></a>');
  $('#five').contents().unwrap().wrap('<a id = "five" onclick = "five()"></a>');

  img01_change.src = "../image/시공사진/시공사진25.jpg";
  img02_change.src = "../image/시공사진/시공사진26.jpg";
  img03_change.src = "../image/시공사진/시공사진27.jpg";
  img04_change.src = "../image/시공사진/시공사진28.jpg";
  img05_change.src = "../image/시공사진/시공사진29.jpg";
  img06_change.src = "../image/시공사진/시공사진30.jpg";
  img07_change.src = "../image/시공사진/시공사진31.jpg";
  img08_change.src = "../image/시공사진/시공사진32.jpg";
  img09_change.src = "../image/시공사진/시공사진33.jpg";
  img10_change.src = "../image/시공사진/시공사진34.jpg";
  img11_change.src = "../image/시공사진/시공사진35.jpg";
  img12_change.src = "../image/시공사진/시공사진36.jpg";
}

function three(){
  $('#one').contents().unwrap().wrap('<a id = "one" onclick = "one()"></a>');
  $('#two').contents().unwrap().wrap('<a id = "two" onclick = "two()"></a>');
  $('#three').contents().unwrap().wrap('<strong id = "three" onclick = "three()"></strong>');
  $('#four').contents().unwrap().wrap('<a id = "four" onclick = "four()"></a>');
  $('#five').contents().unwrap().wrap('<a id = "five" onclick = "five()"></a>');

  img01_change.src = "../image/시공사진/시공사진37.jpg";
  img02_change.src = "../image/시공사진/시공사진38.jpg";
  img03_change.src = "../image/시공사진/시공사진39.jpg";
  img04_change.src = "../image/시공사진/시공사진40.jpg";
  img05_change.src = "../image/시공사진/시공사진41.jpg";
  img06_change.src = "../image/시공사진/시공사진42.jpg";
  img07_change.src = "../image/시공사진/시공사진43.jpg";
  img08_change.src = "../image/시공사진/시공사진44.jpg";
  img09_change.src = "../image/시공사진/시공사진45.jpg";
  img10_change.src = "../image/시공사진/시공사진46.jpg";
  img11_change.src = "../image/시공사진/시공사진47.jpg";
  img12_change.src = "../image/시공사진/시공사진48.jpg";
}

function four(){
  $('#one').contents().unwrap().wrap('<a id = "one" onclick = "one()"></a>');
  $('#two').contents().unwrap().wrap('<a id = "two" onclick = "two()"></a>');
  $('#three').contents().unwrap().wrap('<a id = "three" onclick = "three()"></a>');
  $('#four').contents().unwrap().wrap('<strong id = "four" onclick = "four()"></strong>');
  $('#five').contents().unwrap().wrap('<a id = "five" onclick = "five()"></a>');

  img01_change.src = "../image/시공사진/시공사진49.jpg";
  img02_change.src = "../image/시공사진/시공사진50.jpg";
  img03_change.src = "../image/시공사진/시공사진51.jpg";
  img04_change.src = "../image/시공사진/시공사진52.jpg";
  img05_change.src = "../image/시공사진/시공사진53.jpg";
  img06_change.src = "../image/시공사진/시공사진54.jpg";
  img07_change.src = "../image/시공사진/시공사진55.jpg";
  img08_change.src = "../image/시공사진/시공사진56.jpg";
  img09_change.src = "../image/시공사진/시공사진57.jpg";
  img10_change.src = "../image/시공사진/시공사진58.jpg";
  img11_change.src = "../image/시공사진/시공사진59.jpg";
  img12_change.src = "../image/시공사진/시공사진60.jpg";
}

function five(){
  $('#one').contents().unwrap().wrap('<a id = "one" onclick = "one()"></a>');
  $('#two').contents().unwrap().wrap('<a id = "two" onclick = "two()"></a>');
  $('#three').contents().unwrap().wrap('<a id = "three" onclick = "three()"></a>');
  $('#four').contents().unwrap().wrap('<a id = "four" onclick = "four()"></a>');
  $('#five').contents().unwrap().wrap('<strong id = "five" onclick = "five()"></strong>');

  img01_change.src = "../image/시공사진/시공사진61.jpg";
  img02_change.src = "../image/시공사진/시공사진62.jpg";
  img03_change.src = "../image/시공사진/시공사진63.jpg";
  img04_change.src = "../image/시공사진/시공사진64.jpg";
  img05_change.src = "../image/시공사진/시공사진65.jpg";
  img06_change.src = "../image/시공사진/시공사진66.jpg";
  img07_change.src = "../image/시공사진/시공사진67.jpg";
  img08_change.src = "../image/시공사진/시공사진68.jpeg";
  img09_change.src = "../image/시공사진/시공사진69.jpeg";
  img10_change.src = "../image/시공사진/시공사진70.jpg";
  img11_change.src = "../image/시공사진/시공사진71.jpg";
  img12_change.src = "../image/시공사진/시공사진72.jpg";
}
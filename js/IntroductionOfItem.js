var page = document.getElementsByClassName('pt-page-current');

/*************
  통합 공통 부분
**************/

// Get the <span> element that closes the modal
var process_close = document.getElementById("process_close");
var second_process_close = document.getElementById("second_process_close");
var refrigerator_close = document.getElementById("refrigerator_close");
var genenal_close = document.getElementById("genenal_close");
var washing_close = document.getElementById("washing_close");
var second_washing_close = document.getElementById("second_washing_close");
var gas_close = document.getElementById("gas_close");
var gass_close = document.getElementById("gass_close");
var distribution_close = document.getElementById("distribution_close");
var distributions_close = document.getElementById("distributions_close");
var disinfection_close = document.getElementById("disinfection_close");
var disinfections_close = document.getElementById("disinfections_close");
var kitchen_close = document.getElementById("kitchen_close");
var kitchens_close = document.getElementById("kitchens_close");

// When the user clicks on <span> (x), close the modal
process_close.onclick = function() {
  process_modal.style.display = "none";
  page[0].style.display = "inline-block";
}

second_process_close.onclick = function(){
  second_process_modal.style.display = "none";
  page[0].style.display = "inline-block";
}

refrigerator_close.onclick = function(){
  refrigerator_model.style.display = "none";
  page[0].style.display = "inline-block";
}

genenal_close.onclick = function(){
  genenal_model.style.display = "none";
  page[0].style.display = "inline-block";
}

washing_close.onclick = function(){
  washing_modal.style.display = "none";
  page[0].style.display = "inline-block";
}

second_washing_close.onclick = function(){
  second_washing_modal.style.display = "none";
  page[0].style.display = "inline-block";
}

gas_close.onclick = function(){
  gas_modal.style.display = "none";
  page[0].style.display = "inline-block";
}

gass_close.onclick = function(){
  gass_modal.style.display = "none";
  page[0].style.display = "inline-block";
}

distribution_close.onclick = function(){
  distribution_modal.style.display = "none";
  page[0].style.display = "inline-block";
}

distributions_close.onclick = function(){
  distributions_modal.style.display = "none";
  page[0].style.display = "inline-block";
}

disinfection_close.onclick = function(){
  disinfection_modal.style.display = "none";
  page[0].style.display = "inline-block";
}

disinfections_close.onclick = function(){
  disinfections_modal.style.display = "none";
  page[0].style.display = "inline-block";
}

kitchen_close.onclick = function(){
  kitchen_modal.style.display = "none";
  page[0].style.display = "inline-block";
}

kitchens_close.onclick = function(){
  kitchens_modal.style.display = "none";
  page[0].style.display = "inline-block";
}


function scrolltop(){
  $('html, body').animate({scrollTop: $('.pt-triggers').offset().top}, 400);
}

function second_process_table(thead, tbody){
  remove_table(second_process_thead, second_process_tbody);

  var thead_row = second_process_thead.insertRow(second_process_thead.rows.length);

  for (var i = 0; thead.length > i; i++) {
    thead_row.insertCell(i).innerHTML = thead[i];
  }

  for (var i = 0; tbody.length > i; i++) {
    var tbody_row = second_process_tbody.insertRow(second_process_tbody.rows.length);
    for (var j = 0; tbody[i].length > j; j++) {
      tbody_row.insertCell(j).innerHTML = tbody[i][j];
    }
  }
}

function genenal_table(thead, tbody){
  remove_table(genenal_thead, genenal_tbody);

  var thead_row = genenal_thead.insertRow(genenal_thead.rows.length);

  for (var i = 0; thead.length > i; i++) thead_row.insertCell(i).innerHTML = thead[i];

  for (var i = 0; tbody.length > i; i++){
    var tbody_row = genenal_tbody.insertRow(genenal_tbody.rows.length);
    for (var j = 0; tbody[i].length > j; j++) tbody_row.insertCell(j).innerHTML = tbody[i][j];
  }
}

/* 
 * 
 * 같은 값이 있는 열을 병합함
 * 
 * 사용법 : $('#테이블 ID').rowspan(0);
 * 
 */    
$.fn.rowspan = function(colIdx, isStats) {       
    return this.each(function(){      
        var that;     
        $('tr', this).each(function(row) {      
            $('td:eq('+colIdx+')', this).filter(':visible').each(function(col) {
                 
                if ($(this).html() == $(that).html()
                    && (!isStats 
                            || isStats && $(this).prev().html() == $(that).prev().html()
                            )
                    ) {            
                    rowspan = $(that).attr("rowspan") || 1;
                    rowspan = Number(rowspan)+1;
 
                    $(that).attr("rowspan",rowspan);
                     
                    // do your action for the colspan cell here            
                    $(this).hide();
                     
                    //$(this).remove(); 
                    // do your action for the old cell here
                     
                } else {            
                    that = this;         
                }          
                 
                // set the that if not already set
                that = (that == null) ? this : that;      
            });     
        });    
    });  
}; 
 
 
/* 
 * 
 * 같은 값이 있는 행을 병합함
 * 
 * 사용법 : $('#테이블 ID').colspan (0);
 * 
 */  
$.fn.colspan = function(rowIdx) {
    return this.each(function(){
         
        var that;
        $('tr', this).filter(":eq("+rowIdx+")").each(function(row) {
            $(this).find('td').filter(':visible').each(function(col) {
                if ($(this).html() == $(that).html()) {
                    colspan = $(that).attr("colSpan") || 1;
                    colspan = Number(colspan)+1;
                     
                    $(that).attr("colSpan",colspan);
                    $(this).hide(); // .remove();
                } else {
                    that = this;
                }
                 
                // set the that if not already set
                that = (that == null) ? this : that;
                 
            });
        });
    });
};

function second_washing_table(thead){
  remove_table(0, second_washing_thead);
  for (var i = 0; thead.length > i; i++){
    var thead_row = second_washing_thead.insertRow(second_washing_thead.rows.length);
    for (var j = 0; thead[i].length > j; j++) thead_row.insertCell(j).innerHTML = thead[i][j];
  }

  $('#second_washing_table tbody tr:visible').each(function(row) {
    $('#second_washing_table').colspan(row);
  });

  $('#second_washing_table tbody tr:visible').each(function(cols){
    $('#second_washing_table').rowspan(cols);
  });
}

function gas_table(thead, tbody){
  remove_table(gas_thead, gas_tbody);

  var thead_row = gas_thead.insertRow(gas_thead.rows.length);

  for (var i = 0; thead.length > i; i++) thead_row.insertCell(i).innerHTML = thead[i];

  for (var i = 0; tbody.length > i; i++){
    var tbody_row = gas_tbody.insertRow(gas_tbody.rows.length);
    for (var j = 0; tbody[i].length > j; j++) tbody_row.insertCell(j).innerHTML = tbody[i][j];
  }
}

function distribution_table(thead, tbody){
  remove_table(distribution_thead, distribution_tbody);

  var thead_row = distribution_thead.insertRow(distribution_thead.rows.length);

  for (var i = 0; thead.length > i; i++) thead_row.insertCell(i).innerHTML = thead[i];

  for (var i = 0; tbody.length > i; i++){
    var tbody_row = distribution_tbody.insertRow(distribution_tbody.rows.length);
    for (var j = 0; tbody[i].length > j; j++) tbody_row.insertCell(j).innerHTML = tbody[i][j];
  }
}

function disinfection_table(thead, tbody){
  remove_table(disinfection_thead, disinfection_tbody);

  var thead_row = disinfection_thead.insertRow(disinfection_thead.rows.length);

  for (var i = 0; thead.length > i; i++) thead_row.insertCell(i).innerHTML = thead[i];

  for (var i = 0; tbody.length > i; i++){
    var tbody_row = disinfection_tbody.insertRow(disinfection_tbody.rows.length);
    for (var j = 0; tbody[i].length > j; j++) tbody_row.insertCell(j).innerHTML = tbody[i][j];
  }
}

function kitchen_table(thead, tbody){
  remove_table(kitchen_thead, kitchen_tbody);

  var thead_row = kitchen_thead.insertRow(kitchen_thead.rows.length);

  for (var i = 0; thead.length > i; i++) thead_row.insertCell(i).innerHTML = thead[i];

  for (var i = 0; tbody.length > i; i++){
    var tbody_row = kitchen_tbody.insertRow(kitchen_tbody.rows.length);
    for (var j = 0; tbody[i].length > j; j++) tbody_row.insertCell(j).innerHTML = tbody[i][j];
  }
}

function remove_table(thead, tbody){
  if (thead != 0) thead.deleteRow(thead.rows.length - 1);

  while(tbody.rows.length > 0){
    tbody.deleteRow(tbody.rows.length - 1);
  }
}

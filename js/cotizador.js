/*
Al presionar en el botón calcular.. deberá aparecer en la parte de resumen
el detalle de los boletos seleccionados:
Ej;

3 x Pase por día
5 x Todos los días
3 x Pase viernes y sábado

así como también el monto total en la parte de total..
Deberán Subir su archivo final tanto a sus carpetas por ftp como así en un repositorio remoto en github
Fecha de entrega 7/11
*/
var paseDia = document.getElementById('pase_dia');
var paseCompleto = document.getElementById('pase_completo');
var paseDosDias = document.getElementById('pase_dosdias');
var button = document.getElementById('calcular');
var contenedor = document.getElementById('lista-productos');



var oneSingle = ' Pase por día'
var oneMultiple = ' Pases por día';
var twoSingle = ' Pase para todos los días';
var twoMultiple = ' Pases para todos los días';
var threeSingle = ' Pase por dos días (Viernes y Sábado)';
var threeMultiple = ' Pases por dos días (Viernes y Sábado)';

button.addEventListener('click', check);

function check(event) {
var total = document.getElementById('suma-total');

var oneS = paseDia.value + oneSingle;
var oneM = paseDia.value + oneMultiple;
var twoS = paseDia.value + twoSingle;
var twoM = paseDia.value + twoMultiple;
var threeS = paseDia.value + threeSingle;
var threeM = paseDia.value + threeMultiple;
var granTotal = (paseDia.value*30)+(paseDosDias.value*50)+(paseCompleto.value*45);

total.textContent = '$'+granTotal;

    if (paseDia.value > 1){
    contenedor.innerHTML += '<p class="mystyle">'+paseDia.value + oneMultiple+'</p>';
 }  if (paseDia.value == 1){
    contenedor.innerHTML += '<p class="mystyle">'+paseDia.value + oneSingle+'</p>';
}   if (paseDosDias.value > 1){
    contenedor.innerHTML += '<p class="mystyle">'+paseDosDias.value + twoMultiple+'</p>';
 }  if (paseDosDias.value == 1){
    contenedor.innerHTML += '<p class="mystyle">'+paseDosDias.value + twoSingle+'</p>';
}if (paseCompleto.value > 1){
    contenedor.innerHTML += '<p class="mystyle">'+paseCompleto.value + threeMultiple+'</p>';
 }  if (paseCompleto.value == 1){
    contenedor.innerHTML += '<p class="mystyle">'+paseCompleto.value + threeSingle+'</p>';
}
}

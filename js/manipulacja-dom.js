'use strict';
$(document).ready(function (){
    /*do zmiennej tekstPierwzsegoParagrafu wstawienie tesktu z paragrafu #paragraf*/
    var tekstPierwzsegoParagrafu = $('#paragraf').text();
    console.log(tekstPierwzsegoParagrafu);

/*dodanie tekstu */
$(".paragraf").text(tekstPierwzsegoParagrafu);
/*dodanie html*/
$('.paragrafnext').html('to jest <strong> paragraf </strong> trzeci');
    /*dodanie tresci na koncu  selektora */
$('.paragrafnext').append('trzesc na koncu selektowa');
    /*dodanie tresci za selektoren */
$('.paragrafnext').after('teks za selektorem');
    /*usuwanie elementu i jego zawartosci */
$('strong').remove();
   /*usuwanie zawartosci paragrafu*/ 
$('.paragraf').empty();   
    /*dodanei css na elemencie*/
$('.paragrafnext').css({'fontSize': '30px', 'color': 'blue'});
    /*dodanie klasy(class) do elementu*/
$('h1').addClass('blue');
  /*  dodanie atrybutu do elementu*/
$('h1').attr('imie', 'marcin');
    
})
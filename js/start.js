/*$(document).ready(function(){} )*/
    //wykonaj jak strona jest zaladowana w pelni
//skrócona wersja:
'use strict';
$(function(){
    //alert('test');
    /*zmien kolor tekstu i beckgraud w obiekcjie o id #first*/
    $('#first').css({color: 'red',backgroundColor:'blue'})
        .hide(2000) /*ukrywaj przez 2s  */
        .show(3000); /*pokazuj przez 3s*/                         
}
 )


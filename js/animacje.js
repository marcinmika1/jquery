'use strict';
$(function() {
    
    $('p').hide(3000).show(3000);
    
    $('h1').fadeOut(3000).fadeIn(3000);
    
    $('h2').slideUp(3000).slideDown(3000);
    
    function animacja(){
        console.log('zakoczyla sie animacja');
        $('h3').animate({'font-size': '1em', 'margin-left': '0px'},3000)
    }
    /* wywolania animacja   zwieszenie fonata, przesuniecie marign potem dlugosc animacji, wywolanie nowej animacji*/
    $('h3').animate({'font-size': '3em', 'margin-left': '100px'},3000, animacja)
    
})
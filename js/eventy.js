'use strict';
$(function(){
    /*po kliknieciu zmien kolor*/
    $('p').click(function(){
        $(this).css({'color': 'red'});
    });
    /*po kliknieciu w napis zminia kolor*/
    $('h1').on({
        'click': function(){
            $(this).css('color', 'blue');
        },/*zmienai kolor po zjechaniu z napisu myszki*/
        'mouseleave': function(){
            $(this).css('color', 'orange');
        }
    
        
    })
})
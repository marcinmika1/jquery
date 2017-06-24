    'use strict';
    $(function() {

        /* pobierz element p o indekcie (1) i zmien kolor na red*/
        $('body').find('p').eq(1).css({
            'color': 'red'});
        /*dodanie class i nazwanie paragraf + numer indeksu na ktorym jest tera robiona zmiana*/
        $('p').each(function(index){
            $(this).addClass('paragraf-' + index);
            console.log($(this));
        })
    })


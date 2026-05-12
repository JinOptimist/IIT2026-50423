$(document).ready(function(){
    
    $('.gallery-cell').click(function(){
        $('.gallery-cell').toggleClass('open');
    });


        
    $('.image-block').click(function(){
        $('.image-block img').toggleClass('second-image');
    });

});
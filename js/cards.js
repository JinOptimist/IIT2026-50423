$(document).ready(function(){
    
    $('.card').click(function(){
        const card = $(this);
        card.addClass('move-part-1');

        // Run after 2s 
        setTimeout(() => {
            card.addClass('move-part-2');
        }, 2000);
    });

});
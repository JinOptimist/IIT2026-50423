$(document).ready(function(){
    // run once after page is loaded

    $('.box').click(function(){
        // call only after click
        $('.red').css('width', 500);
        $('.green').css('width', 0);
    })

});
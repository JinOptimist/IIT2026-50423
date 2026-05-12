$(document).ready(function(){
    // run once after page is loaded
    const DEFAULT_WIDTH = 1000;
    init();

    function init(){
        $('.box').css('width', DEFAULT_WIDTH);
        $('.container .box:first-child').css('width', 0);
    }

    $('.green').click(function(){
        // call only after click
        $('.red').css('width', DEFAULT_WIDTH);
        $('.green').css('width', 0);
    });

    $('.red').click(function(){
        // call only after click
        $('.red').css('width', 0);
        $('.green').css('width', DEFAULT_WIDTH);
    });

});
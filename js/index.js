$(document).ready(function(){
    // run once after page is loaded

    $('.container').click(function(){
        // call only after click
        $('.container')
            .toggleClass('red-is-open');
    });

});
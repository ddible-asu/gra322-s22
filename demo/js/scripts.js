$(document).ready(function(){
    //hiding nav element 
    $('nav').hide();

    // click function
    $('.menu-button').click(function(){
        $('nav').slideToggle();
    });
});
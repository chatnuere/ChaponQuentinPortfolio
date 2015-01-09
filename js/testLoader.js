/**
 * Created by ChatNoir on 05/01/15.
 */
var timeout
initLoader = function(){

};

resetSquare = function(){
    $('#shrapnel h1').fadeOut(200)
    $('.button').html('Eplode!!!!');
    $('#shrapnel').toggleClass('exploded');
    $('.square').toggleClass('exploded')
    timeout = setTimeout(function(){ $('#shrapnel').css({'background-color': '#000'}); }, 500)

};

explodeSquare = function(){
    clearTimeout(timeout);
    $('.button').html('Reset')
    $('#shrapnel').toggleClass('exploded').css({'background-color': 'transparent'});
    $('#shrapnel h1').delay(400).fadeIn(600)
    $('.square').toggleClass('exploded')
};



$('.button').on('click', function(){

    $('#shrapnel').hasClass('exploded')? resetSquare() : explodeSquare()


});

$('.menuButton').on('click', function(){

    $('#menu').toggleClass('expanded');
    $('main').toggleClass('expanded');



});
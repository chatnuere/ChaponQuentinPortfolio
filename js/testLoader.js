/**
 * Created by ChatNoir on 05/01/15.
 */
var timeout
initLoader = function(){

};

resetSquare = function(){
    $('.button').html('Eplode!!!!');
    $('#shrapnel').toggleClass('exploded');
    timeout = setTimeout(function(){ $('#shrapnel').css({'background-color': '#000'}); }, 1000)
};

explodeSquare = function(){
    clearTimeout(timeout);
    $('.button').html('Reset')
    $('#shrapnel').toggleClass('exploded').css({'background-color': 'transparent'});
};



$('.button').on('click', function(){

    $('#shrapnel').hasClass('exploded')? resetSquare() : explodeSquare()


});
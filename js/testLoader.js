/**
 * Created by ChatNoir on 05/01/15.
 */
initLoader = function(){

};

resetSquare = function(){

    $('.button').html('Eplode!!!!');
    $('#shrapnel').toggleClass('exploded');
    setTimeout(function(){ $('#shrapnel').css({'background-color': '#000'}); }, 1000)
};

explodeSquare = function(){
    $('.button').html('Reset')
    $('#shrapnel').toggleClass('exploded').css({'background-color': 'transparent'});
};



$('.button').on('click', function(){

    $('#shrapnel').hasClass('exploded')? resetSquare() : explodeSquare()


});
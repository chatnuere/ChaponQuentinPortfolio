/**
 * Created by ChatNoir on 05/01/15.
 */
initLoader = function(){

};

resetSquare = function(){

    $('.button').html('Eplode!!!!');
    $('#shrapnel').toggleClass('exploded');
};

explodeSquare = function(){
    $('.button').html('Reset')
    $('#shrapnel').toggleClass('exploded');
};



$('.button').on('click', function(){

    $('#shrapnel').hasClass('exploded')? resetSquare() : explodeSquare()


});
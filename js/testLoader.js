/**
 * Created by ChatNoir on 05/01/15.
 */
initLoader = function(){

};

resetSquare = function(){

    $('.button').html('Eplode!!!!');
    $('#shrapnel').toggleClass('exploded');
<<<<<<< HEAD
=======
    setTimeout(function(){ $('#shrapnel').css({'background-color': '#000'}); }, 1000)
>>>>>>> b7ec60b5d6e32acef456f4fd830443d33e53b238
};

explodeSquare = function(){
    $('.button').html('Reset')
<<<<<<< HEAD
    $('#shrapnel').toggleClass('exploded');
=======
    $('#shrapnel').toggleClass('exploded').css({'background-color': 'transparent'});
>>>>>>> b7ec60b5d6e32acef456f4fd830443d33e53b238
};



$('.button').on('click', function(){

    $('#shrapnel').hasClass('exploded')? resetSquare() : explodeSquare()


});
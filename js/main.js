/**
 * Created by ChatNoir on 17/11/14.
 */
var oSquare
$( document ).ready(function() {
    var aArray = {
        oObject       : $('#square'),
        oShrapnel     : $('#shrapnel'),
        sCurrentState : 'home',
        iloadingtime  : 3000,
        loaderSettings: {
            delayBeforeLaunch : 1500,
            loadingTime       : 3000
        }
    }
    oSquare = new Square(aArray);

    oGlitch = new Glitch();

});


$('#menu a').on('click', function(){

    $(this).toggleClass('rotated');
    $('#menu').toggleClass('expanded');
    $('main').toggleClass('expanded');

    setTimeout(function(){

        oSquare.resetSquare(200,500);


    } , 1000);

});

/**
 * Created by ChatNoir on 05/01/15.
 */
var timeout
initLoader = function(){

    launchRuleBottom()
    $('.loadbar').delay(500).animate({height: "200px"}, 3000)



};

launchRuleBottom = function(){
    $('.rule.bottom > div').css({width:'100%'});
    annimatedRules( $('.rule.bottom  > p'),  $('.loadbar').parent().width(), 800 , 0 , 2, 'px')
}

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

$('.loadbar').on('reseize', function(){

    $('.rule.right  > p').html(($(this).width()/2)+'%')
    $('.rule.right  > div').css( "width", $(this).width() );

});

annimatedRules = function(_obect, _width, _duration, _i , _iteration , _legend){

    if (_i < _width) {

        setTimeout(function(){

            _obect.html((_i+_iteration)+_legend);
            annimatedRules(_obect, _width, _duration,_i+2, _iteration , _legend);
            console.log(_width)
        },_duration/_width);
    }


};
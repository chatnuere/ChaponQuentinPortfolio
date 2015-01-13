/**
 * Created by ChatNoir on 11/01/15.
 */
/*

 debut plugin

 */





/**
 * Lance la construction du square.
 * @constructor
 * @param {object} _params - Comprend un objet JSON avec les parramètres optionnels de l'objet.
 */
var Square = function( _params){

    var jDefault = {

        oObject       : $('#square'),
        oShrapnel     : $('#shrapnel'),
        sCurrentState : 'home',
        iloadingtime  : 3000,
        loaderSettings: {
            delayBeforeLaunch : 1500,
            loadingTime       : 3000
        }

    };


    for ( var key in _params ) {

        jDefault[key] = _params[key];

    }



    this.aOption              = jDefault;
    this.oObject              = this.aOption.oObject;
    this.oShrapnel            = this.aOption.oShrapnel;
    this.sCurrentState        = this.aOption.sCurrentState;
    this.iloadingtime         = this.aOption.iloadingtime;
    this.loaderSettings       = this.aOption.loaderSettings;




    /** déclaration des globales nécessaires **/

    this.oTimeout 			= 0;

    /** configs **/
    this.bIsReady            = false;


    switch(this.sCurrentState ) {
        case 'home':
            this.init();
        break;

        default:
            this.init();
    }



};



/**
 * initialisation du square
 */
Square.prototype.init = function(){

    var self = this;

    self.beforeLoad()

    setTimeout(function(){

        self.loading()

    } , self.loaderSettings.delayBeforeLaunch);

    setTimeout(function(){

        self.afterLoad()

    } , (self.loaderSettings.delayBeforeLaunch + self.loaderSettings.loadingTime));

};



/**
 * initialisation du loader
 */
Square.prototype.startLoader = function(){

    var self = this;

};



/**
 * Action avant le chargement du loader
 */
Square.prototype.beforeLoad = function(){
    var self = this;

    $('#menuBtn').fadeOut(0)
    $('.rule.bottom > div').css({width:'100%'});;
    self.annimatedRules( $('.rule.bottom  > p'),  200, 2 , 0 , 5, 'px')
};


/**
 * Chargement du loader
 */
Square.prototype.loading = function(){
    var self = this;

    $('.rule.right').fadeIn(300);
    self.annimatedRules($('.rule.right > p'), 100, 30, 0 , 1 , '%')
    $('.loadbar').animate({height: "200px"}, self.loaderSettings.loadingTime);
    $('.rule.right  > div').animate({height: "200px"}, self.loaderSettings.loadingTime).css('overflow', 'visible'); ;
};



/**
 * Action après le chargement du loader
 */
Square.prototype.afterLoad = function(){

    var self = this;

    $('.rule').delay(600).fadeOut(300);

    setTimeout(function(){

        $('#shrapnel').fadeIn(0)

        $('#loader').fadeOut(0)


        self.explodeSquare(400,600);

    } , 1500);

};
/**
 * animation des règles autour du loader
 * @param {String|String} product
 */
Square.prototype.annimatedRules = function(_obect, _width, _duration, _i , _iteration , _legend){
    var self = this
    if (_i < _width) {

        setTimeout(function(){

            _obect.html((_i+_iteration)+_legend);
            self.annimatedRules(_obect, _width, _duration,_i+1, _iteration , _legend);
        },_duration);
    }else{

        _obect.html((_width)+_legend);
    }


};


/**
 * Animation de reconstruction du square
 * @param {String|String} - temps du fade poiur la disparition du h1, temsp d'apparitiondu background qui dissimule les fissures
 */
Square.prototype.resetSquare = function(_fadeDuration, _backgroundAparitionDuration ){
    var self = this;

    self.oShrapnel.find('h1').fadeOut(200);
    self.oShrapnel.toggleClass('exploded');
    self.oObject.toggleClass('exploded');
    self.oTimeout = setTimeout(function(){ self.oShrapnel.css({'background-color': '#000'}); }, _backgroundAparitionDuration);

};


/**
 * Animation d'explosion du square
 * @param {String|String} - delai des fade
 */
Square.prototype.explodeSquare = function(_delayBeforeFadeIn, _fadeDuration){
    var self = this;

    clearTimeout(self.oTimeout);
    self.oShrapnel.toggleClass('exploded').css({'background-color': 'transparent'});
    self.oShrapnel.find('h1').delay(_delayBeforeFadeIn).fadeIn(_fadeDuration)
    self.oObject.toggleClass('exploded')


    $('#menuBtn').delay(500).fadeIn(300)
};
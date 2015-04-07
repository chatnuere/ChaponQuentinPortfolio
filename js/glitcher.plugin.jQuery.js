/**
 * Created by ChatNoir on 11/01/15.
 */
/*

 debut plugin

 */





/**
 * Lance la construction du glitch.
 * @constructor
 * @param {object} _params - Comprend un objet JSON avec les parramètres optionnels de l'objet.
 */
var Glitch = function( _params){

    var jDefault = {

        oObject       : $('#glitch'),
        sText         : $('#glitch').html(),
        iFps          : 60
    };


    for ( var key in _params ) {

        jDefault[key] = _params[key];

    }



    this.aOption     = jDefault;
    this.oObject     = this.aOption.oObject;
    this.sText       = this.aOption.sText;
    this.iFps        = this.aOption.iFps;

    this.timeout = null;
    this.init();



};



/**
 * initialisation du square
 */
Glitch.prototype.init = function(){
    this.fillContent();
    this.startGlitch();



};


/**
 * initialisation du square
 */
Glitch.prototype.fillContent = function(){
    this.oObject.html('<div class="line"></div><span class="red">'+this.sText +'</span><span class="green">'+this.sText +'</span><span class="blue">'+this.sText+'</span>');
};


/**
 * initialisation du square
 */
Glitch.prototype.startGlitch = function(){
    var self = this;
    var i = 0
    this.timeout = setInterval(function(){
        self.oObject.find('.green').css({left: ((Math.random()) - 0.5 )+'%'})
        self.oObject.find('.blue').css({left: ((Math.random()) - 0.5 )+'%'})
        self.oObject.find('.line').css({display: 'none'})
        if(i%(self.iFps/5) == 0) {
            self.oObject.find('.line').css({top: Math.floor((Math.random() * 70) + 1) + '%', display: 'block'})
        }

        i++;
    }, 1000/self.iFps);
};
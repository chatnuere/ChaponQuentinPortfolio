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
        self.oObject.find('.red').css({left: ((Math.random()) - 0.5 )+'%'})
        self.oObject.find('.blue').css({left: ((Math.random()) - 0.5 )+'%'})
        self.oObject.find('.line').css({display: 'none'})




        if(i%(self.iFps/5) == 0) {
            self.oObject.find('.line').css({top: Math.floor((Math.random() * 70) + 1) + '%', display: 'block'})
        }
        if(i%(Math.floor(self.iFps/ (Math.random()* 2))) == 0) {
            self.oObject.find('.red').css({left: ((Math.random()*10) - 5  )+'%'})
            self.oObject.find('.blue').css({left: ((Math.random()* 8) -4)+'%'})
            self.oObject.find('.green').css({left: ((Math.random()* 8) -4)+'%'})
            self.oObject.css({opacity: ((70 + Math.floor(Math.random()*30))/100)+''});

        }
        if(i%(Math.floor(self.iFps/ 4)) == 0){
            self.oObject.css({opacity: ((90 + Math.floor(Math.random()*10))/100)+''});
        }
        if(i%(Math.floor(self.iFps/ (Math.random()* 0.5))) == 0) {
            self.oObject.find('.red').css({left: ((Math.random()*10) - 5  )+'%'})
        }
        if(i%(Math.floor(self.iFps/ (Math.random()* 0.5))) == 0) {
            self.oObject.find('.blue').css({left: ((Math.random()* 8) -4)+'%'})
        }
        if(i%(Math.floor(self.iFps/ (Math.random()* 0.5))) == 0) {
            self.oObject.find('.green').css({left: ((Math.random()* 8) -4)+'%'})
        }

        i++;
    }, 1000/self.iFps);
};

/**
 * initialisation du square
 */
Glitch.prototype.updateContent = function(newContent){
    this.oObject.find('span').html(newContent)
};
/**
 * Created by ChatNoir on 17/11/14.
 */
initHoverButtons = function(){
    var settings = {};
    settings.animDuration = 500;


    $('.styledButton').on('mouseenter', function(e){

        setWidth($(this), settings);

    });

    $('.styledButton').on('mouseleave', function(e){

        resetWidth($(this), settings);

    });
};



annimateAddNumbers = function(_obect, _width, _duration, _i){

    if (_i < _width) {

        setTimeout(function(){

            _obect.html(_i+'px');
            annimateAddNumbers(_obect, _width, _duration,_i+1);

        },_duration/_width);
    }
};


annimateRemoveNumbers = function(_obect, _width, _duration, _i){

    if (_i > -1) {

        setTimeout(function(){

            _obect.html(_i+'px');
            annimateRemoveNumbers(_obect, _width, _duration,_i-1);

        },_duration/_width);
    }
};

setWidth= function(_this, _settings){


    _this.find('.rule.top > div').css({width:'100%'});
    _this.find('.rule.right > div').css({height:'100%'});

    annimateAddNumbers(_this.find('.rule.top > p'), _this.width(),_settings.animDuration , 0)
    annimateAddNumbers(_this.find('.rule.right > p'), _this.parent().height(),_settings.animDuration , 0)
}

resetWidth= function(_this, _settings){


    _this.find('.rule.top > div').css({width:'0px'});
    _this.find('.rule.right > div').css({height:'0px'});

    annimateRemoveNumbers(_this.find('.rule.top > p'), _this.width(),_settings.animDuration , _this.width())
    annimateRemoveNumbers(_this.find('.rule.right > p'), _this.parent().height(),_settings.animDuration , _this.parent().height())
}
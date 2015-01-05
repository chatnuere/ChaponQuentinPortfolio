<<<<<<< HEAD
initLoader=function(){},resetSquare=function(){$(".button").html("Eplode!!!!"),$("#shrapnel").toggleClass("exploded")},explodeSquare=function(){$(".button").html("Reset"),$("#shrapnel").toggleClass("exploded")},$(".button").on("click",function(){$("#shrapnel").hasClass("exploded")?resetSquare():explodeSquare()});
=======
initLoader=function(){},resetSquare=function(){$(".button").html("Eplode!!!!"),$("#shrapnel").toggleClass("exploded"),setTimeout(function(){$("#shrapnel").css({"background-color":"#000"})},1e3)},explodeSquare=function(){$(".button").html("Reset"),$("#shrapnel").toggleClass("exploded").css({"background-color":"transparent"})},$(".button").on("click",function(){$("#shrapnel").hasClass("exploded")?resetSquare():explodeSquare()});
>>>>>>> b7ec60b5d6e32acef456f4fd830443d33e53b238

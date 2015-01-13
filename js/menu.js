/**
 * Created by ChatNoir on 12/01/15.
 */

$('#menuBtn').on('click', function(){

    $(this).toggleClass('rotated');
    $('#menu').toggleClass('expanded');
    $('main').toggleClass('expanded');

});

$(document).ready(function(){


  $('.sim-thumb').on('click', function() {
    $('#main-product-image').attr('src', $(this).data('image'));
  });

  $('.sim-thumb2').on('click', function() {
    $('#main-product-image2').attr('src', $(this).data('image'));
  });

  $('.mobilek').mouseover(function(){
       $('.mobileul').css('display','flex');

  });
  $('.mobilek').mouseout(function(){
	$('.mobileul').css('display','none');

});



});


function widen(t){
	$("#ab"+t).css("width","90%");
}
function shrink(t){
	$("#ab"+t).css("width","0em");
}


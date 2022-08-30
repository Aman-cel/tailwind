/*banner slider jquery */

$('#banner_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
dots: true,
  speed:1000,
  arrows: false,
  autoplay:true

});





/*       why choose us counter jquery */  
jQuery(document).ready(function( $ ) {
$('.counter').counterUp({
 delay: 30,
 time: 1000
});
});




// toogle class method forphone

$(".toggle_bars").click(function(){
$("body").toggleClass("opennav");
});





$('.service_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
draggable: false,
  arrows: false,
  autoplay: true,
autoplaySpeed: 1000,

});










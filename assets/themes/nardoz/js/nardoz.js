
$(function() {

  var featuredSlider = $('#slider').unslider({
    speed: 500,
    delay: 5000,
    keys: true,
    dots: false,
    fluid: false
  });

  $('.unslider-arrow').click(function() {
    var fn = this.className.split(' ')[1];
    featuredSlider.data('unslider')[fn]();
  });

});

if($('.container-narrow').hasClass('home')) {

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 200) {
      $("#navigation").addClass("dark");
    } else {
      $("#navigation").removeClass("dark");
    }
  });

} else {
  $("#navigation").css('-webkit-transition', 'none').addClass("dark");
}

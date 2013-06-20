
$(function() {

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


  if($('#projects').length > 0) {

    $('#projects').fisotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',
        getSortData: {
        title: function ($elem) {
          return $elem.find('h2').text();
        }
      },
      default_facet_operator: {
        tags:'and'
      }
    });

  }

});

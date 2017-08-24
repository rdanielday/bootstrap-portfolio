$(document).ready(function() {
  var offset = $('#about').offset().top;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.navbar-fixed-top').addClass('opaque');
    }
    else {
      $('.navbar-fixed-top').removeClass('opaque');
    }
  });
})

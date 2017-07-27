$(document).ready(function() {
  var pressed = [];
  var secret = 'ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, b, a, ';
  $('body').on('keydown', function(event) {
    /* Act on the event */
    pressed.push(event.key);
    if (pressed.join(", ").includes(secret)) {
      $('.header').css('display', 'none');
      $('.footer p:first-child').css('display', 'block');
      $('.footer p:last-child').css('display', 'none');
      $('#video-background').css('display', 'block');
      $('#video-background').html('<source src="video/Scroll.mp4" type="video/mp4">');
      $('body').unbind('keydown');
    }
    console.log(pressed.join(", "));
  });
});

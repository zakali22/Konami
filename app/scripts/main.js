$(document).ready(function() {
  var pressed = [];
  var secret = 'ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, b, a, ';
  $('body').on('keydown', function(event) {
    /* Act on the event */
    pressed.push(event.key);
    if (pressed.join(", ").includes(secret)) {
      console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEY");
      pressed = [];
    }
    console.log(pressed.join(", "));
  });
});

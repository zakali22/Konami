$(document).ready(function() {
  window.on('keydown', function(event) {
    event.preventDefault();
    /* Act on the event */
    console.log(event.key);
  });
});

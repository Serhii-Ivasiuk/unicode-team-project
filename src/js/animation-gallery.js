$(document).ready(function () {
  $('#slide1_controls').on('click', 'span', function () {
    $('#slide1_images').css(
      'transform',
      'translateX(' + $(this).index() * -1013 + 'px)'
    );
    $('#slide1_controls span').removeClass('selected');
    $(this).addClass('selected');
  });
});

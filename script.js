$('.username').on('click', function() {
  $(this).addClass('active');
  $('.password').removeClass('active');
});

$('.password').on('click', function() {
  $(this).addClass('active');
  $('.username').removeClass('active');
});



$('.username').on('click', function() {
  $(this).addClass('active');
  $('.password').removeClass('active');
});

$('.password').on('click', function() {
  $(this).addClass('active');
  $('.username').removeClass('active');
});

$('.username-med').on('click', function() {
  $(this).addClass('active');
  $('.password-med').removeClass('active');
});

$('.password-med').on('click', function() {
  $(this).addClass('active');
  $('.username-med').removeClass('active');
});

$('.username-small').on('click', function() {
  $(this).addClass('active');
  $('.password-small').removeClass('active');
});

$('.password-small').on('click', function() {
  $(this).addClass('active');
  $('.username-small').removeClass('active');
});

$(document).ready(function(){
  $('.sidenav').sidenav();
});


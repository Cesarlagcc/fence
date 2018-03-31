$(document).ready(function(){
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 141) {
      $('.flex-container').addClass('navbar-fixed');
      $('body').css("margin-top","50px")
    }
    if ($(window).scrollTop() < 144) {
      $('.flex-container').removeClass('navbar-fixed');
      $('body').css("margin-top","0")
    }
  });
});
$(document).ready(function() {
    
  $("img").hover(function(){
      $(this).addClass("grow");
  });
  
  $(window).scroll(function() {
    
    if ($(window).scrollTop() > 50) {
      $('#disappear').addClass('scrolled');
    } else {
      $('#disappear').removeClass('scrolled');
    };
      
    if ($(window).scrollTop() > 100) {
      $('.nav').addClass('scrolled');
    } else {
      $('.nav').removeClass('scrolled');
    };
  });
});
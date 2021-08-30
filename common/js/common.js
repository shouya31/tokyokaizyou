$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 700;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  
    var topBtn = $('#fix_btn');
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 800) {
        topBtn.stop().animate({
          'right': '30px'
        }, 600, 'swing');
      } else {
        topBtn.stop().animate({
          'right': '-100px'
        }, 150, 'swing');
      }
    });
  
    $(function(){
    $('.hamburger').click(function(){
      $('.hamburger').toggleClass('active');
      $('.menu').toggleClass('open');
      });
   }); 
  });

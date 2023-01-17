$(document).ready(function (event) {
   $('.header__burger').click(function (event) {
     $('.header, .header__burger, .menu').toggleClass('active');
     $('body').toggleClass('lock');
   });
   $('.menu__item').click(function (event) {
      $('.header, .header__burger, .menu').removeClass('active');
      $('body').removeClass('lock');
   });  
   $('.allnews__more').click(function (event) {
    $(this).parent().prev().find('.hide').removeClass('hide');
  });  
      $('.main').slick({
          arrows: false,
          dots: true,
          autoplay:false,
          infinite:true,
          slidesToShow: 1,
          speed: 800,      
      }); 

 
});    

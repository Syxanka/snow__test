//клик меню
$(document).ready(function(){
    $('.menu__touch').click(function(){
        $('.menu ul').slideToggle();
    });
  


//подключение карусели блок .rev  
      $('.rev').slick({
          dots: true,
          adaptiveHeight: true,
      });


//подключение карусели блок .img__slider
      $('.img__slider').slick({
          slidesToShow: 5,
          slidesToScroll: 7,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 2500,
      });
    
//плавный скрол якоря: стрелочка
    $("a.main__a").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 900 );
      return false;
    });
    
//плавный скрол якоря: about
    $("ul li a").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 900 );
      return false;
    });
    
      });


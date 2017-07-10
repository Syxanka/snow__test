//подключение плагина шапки меню

$(document).ready(function(){
			var touch = $('.menu'); 
		    var menu = $('.menu');
		 
		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 760 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
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
    
//плавный скрол якоря
    $("a.main__a").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 900 );
      return false;
    });
  });



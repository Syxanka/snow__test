//клик меню
$(document).ready(function(){
    $('.menu__touch').click(function(){
        $('.menu ul').slideToggle();
    });
    
//клик подменю(portfolio.html)
    $('.presintation__menu').click(function(){
        $('.presintation ul').slideToggle();
        
    });
    
////скрытие подменю по клику за пределами его области    
//    $(document).mouseup(function (e){ // событие клика по веб-документу
//		var div = $(".presintation ul"); // тут указываем ID элемента
//		if (!div.is(e.target) // если клик был не по нашему блоку
//		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
//			div.hide(); // скрываем его
//		}
//	});

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
    
//плавный скролл якоря: стрелочка
    $("a.main__a").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 900 );
      return false;
    });
    
//плавный скролл якоря: about
    $("ul li a").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 900 );
      return false;
    });
    
//плавный скролл якоря: contact     
    $("ul li a").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 900 );
      return false;
    });
    
//плавный скролл portfolio.html , блок more   
 $(".more a").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 900 );
      return false;
    });    
    
      });


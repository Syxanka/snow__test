//подключение плагина шапки меню

$(document).ready(function(){
			var touch = $('#touch-menu'); 
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
		});

//подключение карусели блок .rev  
$(document).ready(function(){
      $('.rev').slick({
          dots: true,
          adaptiveHeight: true,
          
      });
    });

//подкючение карусели блок .img
$(document).ready(function(){
    $('.img__pic').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: true,
        adaptiveHeight: true,
    });
});




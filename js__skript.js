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


//подключение карусели блок .img__slider
$(document).ready(function(){
      $('.img__slider').slick({
          slidesToShow: 5,
          slidesToScroll: 7,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 2500,
      });
    });

function animate(elem){
    var effect = elem.data("effect");
    if(!effect || elem.hasClass(effect)) return false;
    elem.addClass(effect);
    setTimeout( function(){
        elem.removeClass(effect);
    }, 1000);
}
 
$(".animated").mouseenter(function() {
    animate($(this));
});


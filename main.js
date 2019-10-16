$(document).ready(function () {

	$('.menu-toggler').on('click', function(){
     $(this).toggleClass('open');
     $('.top-nav').toggleClass('open');
	});

   $('.top-nav .nav-link').on('click', function(){
     $('.menu-toggler').removeClass('open');
     $('.top-nav').removeClass('open');
	});
   
   $('nav a[href*="#"]').on('click', function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
     , options:2000});
	});
   $('.up').on('click', function(){
      $('html, body').animate({
      scrollTop: 0
     , options:2000});
	});

   AOS.init({
   	 easing: 'ease',
   	 duraction: 1800,
     once: true
   });
    
    // var desc = $.map($('.element'), function(el) { return $(el).text(); });

    // let nombre = $.map($('.nombre'), function(el) { return $(el).text(); });
    // $(".nombre").typed({
    //     strings: nombre,
    //     typeSpeed: 30,
    //     contentType: 'html',
    //     showCursor: false,
    //     loop: false,
    //     loopCount: true,
    // });
    
    let desc = $.map($('.element'), function(el) { return $(el).text(); });
    // $(".element").typed({
    //     strings: ['Tu página web en manos de un profesional', 'Creacion en WordPress de Temas y Plugins', 'Creacion de aplicaciones para Android', 'Diseño y Desarrollo de Sitios Web'],
    //     typeSpeed: 30,
    //     contentType: 'html',
    //     showCursor: false,
    //     loop: false,
    //      cursorChar: '_',
    //     loopCount: true,
    // });


  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },2000);
  });

});
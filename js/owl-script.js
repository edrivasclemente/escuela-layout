//CAROUSEL OWL===========
//inicializando la clase========

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  //finalizando la clase========
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:2800,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,            
        }
    }
  })
  //FIN CAROUSEL OWL===========
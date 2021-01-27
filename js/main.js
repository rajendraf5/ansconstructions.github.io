jQuery(document).ready(function( $ ) {

  
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

// $('.page-scroll').click(function(e){
//   e.preventDefault();
//   var target = $($(this).attr('href'));
//   if(target.length){
//     var scrollTo = target.offset().top -100;
//     $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
//   }
// });
   

    $('.page-scroll').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

   // stickey menu
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop(),
            mainHeader = $('#sticky-header'),
            mainHeaderHeight = mainHeader.innerHeight();
        
        // console.log(mainHeader.innerHeight());
        if (scroll > 1) {
            $("#sticky-header").addClass("sticky");
        }else{
            $("#sticky-header").removeClass("sticky");
        }
    });
  

  // Intro carousel
  // var introCarousel = $(".carousel");
  // var introCarouselIndicators = $(".carousel-indicators");
  // introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
  //   (index === 0) ?
  //   introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
  //   introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");

  //   $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') +"')");
  //   $(this).children('.carousel-background').remove();
  // });

  // $(".carousel").swipe({
  //   swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
  //     if (direction == 'left') $(this).carousel('next');
  //     if (direction == 'right') $(this).carousel('prev');
  //   },
  //   allowPageScroll:"vertical"
  // });

 
  // Clients carousel (uses the Owl Carousel library)
  // $(".activity-carousel").owlCarousel({
  //   autoplay: false,
  //   nav: true,
  //   dots: false,
  //   loop: true,
  //   navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
  //   responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 4 }
  //   }
  // });


  /* - Expand Panel * */
    $("#slideit").on ("click", function() {
      $("#slidepanel").slideDown(1000);
      $("html").animate({ scrollTop: 0 }, 1000);
    }); 

    /* Collapse Panel * */
    $("#closeit").on("click", function() {
      $("#slidepanel").slideUp("slow");
      $("html").animate({ scrollTop: 0 }, 1000);
    }); 
    
    /* Switch buttons from "Log In | Register" to "Close Panel" on click * */
    $("#toggle a").on("click", function() {
      $("#toggle a").toggle();
    }); 




  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonial-carousel").owlCarousel({
   autoplay: true,
    nav: true,
    dots: true,
    loop: true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 1 }
    }
  });

  // news carousel (uses the Owl Carousel library)
  $(".news-carousel").owlCarousel({
   autoplay: true,
    nav: true,
    dots: false,
    loop: true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 2 }
    }
  });

   // choose carousel (uses the Owl Carousel library)
  $(".choose-carousel").owlCarousel({
   autoplay: true,
    nav: true,
    dots: false,
    loop: true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 3 }
    }
  });

    // Clients carousel (uses the Owl Carousel library)
  $(".hair-carousel").owlCarousel({
    autoplay: true,
    nav: false,
    dots: true,
    loop: true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 3 }, 900: { items: 4 }
    }
  });


    // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    nav: false,
    dots: true,
    loop: true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 2 }, 768: { items: 3 }, 900: { items: 6 }
    }
  });

   // jQuery counterUp (used in Facts section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

   // timeline carousel (uses the Owl Carousel library)
  $(".team-carousel").owlCarousel({
   autoplay: true,
    nav: true,
    dots: true,
    loop: true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 3 }
    }
  });
});

 // stickey menu
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop(),
            mainHeader = $('#sticky-header'),
            mainHeaderHeight = mainHeader.innerHeight();
        
        // console.log(mainHeader.innerHeight());
        if (scroll > 1) {
            $("#sticky-header").addClass("sticky");
        }else{
            $("#sticky-header").removeClass("sticky");
        }
    });

!function(a) {
    //"use strict";
    a(".page-scroll").bind("click", function(b) {
        var c = a(this);
        a("html, body").stop().animate({
            scrollTop: a(c.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), b.preventDefault();
    });
}(jQuery);

$(document).ready(function () {
  // Navigation
  // HUMBERGAR
  $(".mobile__bar").click(function () {
    $(this).toggleClass("active");
    $(".header_nav").slideToggle(400);
  });
  $('.main_menu li a').click(function () {
    $('.mobile__bar').removeClass('active');
    $('.header_nav').slideUp(400);
  })

  // Navigation
  $('.reviews__slider').owlCarousel({
   
    loop: true,
    margin: 10,
    items: 3,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
   
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      900: {
        items: 1,
        
        dots: true
      },
      1000: {
        items: 2,
      },
      1300: {
        items: 3,
      }
    },
    onChanged: handleSlideChange 
  });
  function handleSlideChange(event) {
    if($('.owl-item.active').length != 0){
      $('.reviews__card.active').removeClass('active');
      $($('.owl-item')[event.item.index]).find('.reviews__card').addClass('active');
    }
  }




  // Show the first content by default
  $(".faq__title:first").addClass("active").find("i").addClass("rotate");
  $(".faq__body:first").slideDown();

  $(".faq__title").click(function () {
    var content = $(this).next(".faq__body");
    if (content.is(":hidden")) {
      $(".faq__body").slideUp();
      $(".faq__title").removeClass("active").find("i").removeClass("rotate");
      $(this).addClass("active").find("i").addClass("rotate");
      content.slideDown();
    } else {
      $(this).removeClass("active").find("i").removeClass("rotate");
      content.slideUp();
    }
  });



});

$(document).ready(function () {
  // Navigation
  // HUMBERGAR
  $(".mobile__bar").click(function () {
    $(this).toggleClass("active");
    $(".header_nav").slideToggle(400);
  });
  $('.main_menu li a').click(function () {
    $('.mobile__bar').removeClass('active');
    $('.active_movile_menu').slideUp(400);
  });
  // Add mobile menu separate class when window screen in mobile 
  const addMobileAciveClass = (width)=>{
    if(width <= 991){
      $('.header_nav').addClass('active_movile_menu')
    }else{
      if($('.header_nav').hasClass('active_movile_menu')){
        $('.header_nav').removeClass('active_movile_menu');
      }
    }
    // if(width <=767){
    //   $('#messanger_button').html('Chat');
    // }
    // else{
    //   $('#messanger_button').html('Chat with us');
    // }
  }
  addMobileAciveClass($(window).width());
  $(window).on('resize', function(e) {
    addMobileAciveClass(e.delegateTarget.innerWidth);
  });
;

  // Navigation
  $('.reviews__slider').owlCarousel({
   
    loop: true,
    margin: 10,
    items: 3,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
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

$(document).ready(function () {
  
  $('.reviews__slider').owlCarousel({
    loop: true,
    margin: 10,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  })
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

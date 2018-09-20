$('.carousel').carousel({
    interval: 3000,
    pause: "false"
})

$('body').scrollspy({ target: '#mainNav', offset:260 });

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('#mainNav').addClass('shrink');
    } else {
      $('#mainNav').removeClass('shrink');
    }
});

$(".hamburger").on("click", function(e) {
  $(this).toggleClass("is-active");
  // $('body').toggleClass("overflow-hidden");
});

$("a.nav-link").on("click", function(){
  if($('.hamburger').css('display') == 'inline-block'){
    console.log("toggle");
    $(".hamburger").toggleClass("is-active");
  }
 
  // $('body').toggleClass("overflow-hidden");
});

// $('.menu').masonry({
//   itemSelector: '.menu-category', // use a separate class for itemSelector, other than .col-
//   columnWidth: '.grid-sizer',
//   percentPosition: true
// });

$(document).ready(function() {

  // $('.both-navs').addClass('hide');

  
  
  $('.nav-global').hover(			
    function () {
      $('.both-navs').removeClass("hide");
    }, 
    function () {
      $('.both-navs').addClass("hide");
    }
 );

  $('#reserve-link, #reserve-link-2').on('click', function(){
    $("html, body").animate({ scrollTop: 0});
    $('#replace-me').addClass('hidden');
    $('section#reserve').removeClass('hidden');
    $('section#menus').addClass('hidden');
    reserve = true;
  });

  // $('#menus-link').on('click', function(){
  //   console.log("menus clicked");
  //   $("html, body").animate({ scrollTop: 0});
  //   $('#replace-me').addClass('hidden');
  //   $('section#reserve').addClass('hidden');
  //   $('section#menus').removeClass('hidden');
  //   menus = true;
  // });

  $('.scroll-to-bottom').on('click', function(){
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });


  $("#mercato .nav-link, #catering .nav-link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 150
      }, 800, function(){
        window.location.hash = hash;
      });
  
    }
  });

  
  // $('.both-navs').removeClass("hide");

  setTimeout(function(){
    $('.both-navs').addClass("hide");
  }, 2000);

});
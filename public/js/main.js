(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    mobileNavigation();
    toggleNashville();
    toggleBridesmaids();
    toggleGroomsmen();
    toggleParty();
    smoothScroll();
    stickyNav();
  }

  function smoothScroll() {
    $('.smooth-scroll a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 500, 'swing', function () {
          window.location.hash = target;
      });
    });
  };

	function stickyNav() {
  	// initiate headroom script
  	$(".headroom-nav").headroom({
	    // vertical offset in px before element is first unpinned
	    offset : 0,
	    // scroll tolerance in px before state changes
	    tolerance : 0
	    // or you can specify tolerance individually for up/down scroll
	    // tolerance : {
      //     up : 10,
      //     down : 10
	    // }
   	});
  };

  function mobileNavigation() {

    // Toggle the mobile nav on click
    $('.js-toggle-menu').on('click', function(e) {
      // Only prevent default actions for the close button
      if($(e.currentTarget).hasClass('close')) {
        e.preventDefault();
      }

      $('header').find('.navigation-panel').toggleClass('opened');
      $('header').find('.user-links ul li').toggleClass('opened');

    });
  };

  function toggleNashville() {
    $("#where a").click(function(){
      if(!$(this).hasClass('active')) {
        $('#where a.active').removeClass('active');
        $(this).toggleClass('active');
      };
    })
  };

  function toggleBridesmaids(){
    $("#who a").click(function(){
      if(!$(this).hasClass('active')) {
        $('#who a.active').removeClass('active');
        $(this).toggleClass('active');
      };
    })
  };

  function toggleGroomsmen(){
    $("#him a").click(function(){
      if(!$(this).hasClass('active')) {
        $('#him a.active').removeClass('active');
        $(this).toggleClass('active');
      };
    })
  };

  function toggleParty(){
    $('#when a').click(function(){
      if(!$(this).hasClass('active')) {
        $('#when a.active').removeClass('active');
        $(this).toggleClass('active');
      };
    })
  };
})();

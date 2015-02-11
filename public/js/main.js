(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    mobileNavigation();
    toggleNashville();
    toggleBridesmaids();
    toggleGroomsmen();
    toggleParty();
  }

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

  toggle();

  function toggleNashville() {
    $("#where a").click(function(){
      $('#where a.active').not(this).removeClass('active');
      $(this).toggleClass('active');
    })
  };

  function toggleBridesmaids(){
    $("#who a").click(function(){
      $('#who a.active').not(this).removeClass('active');
      $(this).toggleClass('active');
    })
  };

  function toggleGroomsmen(){
    $("#him a").click(function(){
      $('#him a.active').not(this).removeClass('active');
      $(this).toggleClass('active');
    })
  };

  function toggleParty(){
    $('#when a').click(function(){
      $('#when a.active').not(this).removeClass('active');
      $(this).toggleClass('active');
    })
  };
})();

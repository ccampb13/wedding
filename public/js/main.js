(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    mobileNavigation();
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
})();

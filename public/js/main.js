(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    mobileNavigation();
  }

  function mobileNavigation() {
    //
    // // Stupid scope losing jQuery...
    // var self = this;

    // Toggle the mobile nav on click
    $('.js-toggle-menu').on('click', function(e) {
      alert('hey');
      // Only prevent default actions for the close button
      // if($(e.currentTarget).hasClass('close')) {
      //   e.preventDefault();
      // }

      // $(self.elems.mobile).find('.navigation-panel').toggleClass('opened');

    });
  };
})();

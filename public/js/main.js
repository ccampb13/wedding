(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    // mobileNavigation();
    $('#eat').click(getEats);
    $('#drink').click(getDrinks);
    $('#fun').click(getFun);
  }

  // function mobileNavigation() {
  //   //
  //   // // Stupid scope losing jQuery...
  //   // var self = this;
  //
  //   // Toggle the mobile nav on click
  //   $('.js-toggle-menu').on('click', function(e) {
  //     // Only prevent default actions for the close button
  //     // if($(e.currentTarget).hasClass('close')) {
  //     //   e.preventDefault();
  //     // }
  //
  //     // $(self.elems.mobile).find('.navigation-panel').toggleClass('opened');
  //
  //   });
  // };

  function getEats(e){
    $.ajax({
      url:'/eats',
      type: 'get',
      success: function (res) {
        $('#content-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getDrinks(e){
    $.ajax({
      url:'/drinks',
      type: 'get',
      success: function (res) {
        $('#content-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getFun(e){
    $.ajax({
      url:'/fun',
      type: 'get',
      success: function (res) {
        $('#content-container').empty().append(res);
      }
    });

    e.preventDefault();
  }
})();

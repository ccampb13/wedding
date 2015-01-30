(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#eat').click(getEats);
    $('#drink').click(getDrinks);
    $('#fun').click(getFun);
    $('#know').click(getKnow);
  }

  function getEats(e){
    $.ajax({
      url:'/eat',
      type: 'get',
      success: function (res) {
        $('#content-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getDrinks(e){
    $.ajax({
      url:'/drink',
      type: 'get',
      success: function (res) {
        $('#content-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getFun(e){
    $.ajax({
      url:'/do',
      type: 'get',
      success: function (res) {
        $('#content-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getKnow(e){
    $.ajax({
      url:'/know',
      type: 'get',
      success: function (res) {
        $('#content-container').empty().append(res);
      }
    });

    e.preventDefault();
  }
})();

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#welcome').click(getWelcome);
    $('#ceremony').click(getCeremony);
    $('#reception').click(getReception);
  }

  function getWelcome(e){
    $.ajax({
      url:'/welcome',
      type: 'get',
      success: function (res) {
        $('#party-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getCeremony(e){
    $.ajax({
      url:'/ceremony',
      type: 'get',
      success: function (res) {
        $('#party-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getReception(e){
    $.ajax({
      url:'/reception',
      type: 'get',
      success: function (res) {
        $('#party-container').empty().append(res);
      }
    });

    e.preventDefault();
  }
})();

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#kim').click(getKim);
    $('#betsy').click(getBetsy);
    $('#jenny').click(getJenny);
    $('#megann').click(getMegann);
    $('#emily').click(getEmily);
    $('#drew').click(getDrew);
    $('#travis').click(getTravis);
    $('#blake').click(getBlake);
    $('#marty').click(getMarty);
    $('#sam').click(getSam);
  }

  function getKim(e){
    $.ajax({
      url:'/kim',
      type: 'get',
      success: function (res) {
        $('#bridesmaids-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getBetsy(e){
    $.ajax({
      url:'/betsy',
      type: 'get',
      success: function (res) {
        $('#bridesmaids-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getJenny(e){
    $.ajax({
      url:'/jenny',
      type: 'get',
      success: function (res) {
        $('#bridesmaids-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getMegann(e){
    $.ajax({
      url:'/megann',
      type: 'get',
      success: function (res) {
        $('#bridesmaids-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getEmily(e){
    $.ajax({
      url:'/emily',
      type: 'get',
      success: function (res) {
        $('#bridesmaids-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getDrew(e){
    $.ajax({
      url:'/drew',
      type: 'get',
      success: function (res) {
        $('#groomsmen-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getTravis(e){
    $.ajax({
      url:'/travis',
      type: 'get',
      success: function (res) {
        $('#groomsmen-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getBlake(e){
    $.ajax({
      url:'/blake',
      type: 'get',
      success: function (res) {
        $('#groomsmen-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getMarty(e){
    $.ajax({
      url:'/marty',
      type: 'get',
      success: function (res) {
        $('#groomsmen-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

  function getSam(e){
    $.ajax({
      url:'/sam',
      type: 'get',
      success: function (res) {
        $('#groomsmen-container').empty().append(res);
      }
    });

    e.preventDefault();
  }

})();

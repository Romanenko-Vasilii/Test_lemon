$(document).ready(function(){
  // var arr = [
  //   'Республика Адыгея-1', 'Республика Адыгея-2', 'Республика Адыгея-3'
  // ];
  // var text = '';
  // for(var i=0; i < arr.length; i++) {
  //   text = text + '<option>' + arr[i] + '</option>';
  // };
  // $('#qwe').append(text);
  $.ajax({
    url: "http://api.limon.agency/public/api/regions",
    dataType: 'json',
    success: function(response){
      var text = '';
      for(var i=0; i < response['regions'].length; i++) {
        text = text + '<option value="'+ response['regions'][i].id +'">' + response['regions'][i].name + '</option>';
      };
      $('#qwe').append(text);
    }
  });


  var modal = $('.modal');
      modalBtn = $('.add');
      closeBtn = $('.modal__close');
      body = $('.body')

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
    body.toggleClass('stop-scroll'); //убирает скролл body
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
    body.toggleClass('stop-scroll'); //включает скролл body
  });

   
  function press(event) {
    if(event.keyCode == '27') {
      modal.removeClass('modal--visible');
      body.removeClass('stop-scroll'); //включает скролл body
    }
  }
  window.addEventListener('keydown', press, false);

});


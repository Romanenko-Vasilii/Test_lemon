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
      var arr = [''];
      for(var i=0; i < response['regions'].length; i++) {
        arr.push(response['regions'][i].name);
      };
      const select_reg = new CustomSelect('#select_region', {
        // текст (значение) по умолчанию
        defaultValue: 'Кемеровская область',
       // опции
        data: arr,
      });

      // var text = '';
      // for(var i=0; i < response['regions'].length; i++) {
      //   text = text + '<option value="'+ response['regions'][i].id +'">' + response['regions'][i].name + '</option>';
      // };
      // $('#sel').append(text);
      
    }
  });


  var modal = $('.modal');
      addBtn = $('.add');
      closeBtn = $('.modal__close');
      body = $('.body')
      modalBtn = $('.modal__button')
      bgc = $('.bgc')

  addBtn.on('click', function () {
    modal.addClass('modal--visible');
    body.addClass('stop-scroll'); //убирает скролл body
    bgc.addClass('bgc--visible')
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
    body.toggleClass('stop-scroll'); //включает скролл body
    bgc.removeClass('bgc--visible');
  });
  modalBtn.on('click', function(){
    modal.removeClass('modal--visible');
    bgc.removeClass('bgc--visible');
  });

   
  function press(event) {
    if(event.keyCode == '27') {
      modal.removeClass('modal--visible');
      body.removeClass('stop-scroll'); //включает скролл body
    }
  }
  window.addEventListener('keydown', press, false);


});


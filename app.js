$(document).ready(function(){

var h = window.innerHeight;
var w = window.innerWidth;
var squares = Math.round((h*w)/2250);

  $('.mainContainer').html(function(){
    for (var i = 0; i < squares ; i++) {
      $('.mainContainer').append('<div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div>');
    }
  });

  $('#colors a').on('click', function(){
    if(this.id === 'reset'){
      $('.mainContainer > div').attr('class', 'box');
    } else {
      currentColor = this.id;
    }
  });

  $('.mainContainer')
    .mousedown(function(){
      $('.mainContainer div').on('mouseenter', function(){ //bind
        $(this).addClass(currentColor);
      });
    })
    .mouseup(function(){
      $('.mainContainer div').off('mouseenter'); //unbind
    });
});

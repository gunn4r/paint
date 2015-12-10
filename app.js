$(document).ready(function(){

var h = window.innerHeight;
var w = window.innerWidth;
var squares = Math.round((h*w)/225);

  $('.mainContainer').html(function(){
    for (var i = 0; i < squares ; i++) {
      $('.mainContainer').append('<div class="box"></div>');
    }
  });


  $('#colors').click(function(event){
    if(event.target.id === "reset"){
      $('.mainContainer > div').attr('class', 'box');
    } else {
      currentColor = event.target.id;
    }
  });

  $('.mainContainer')
    .mouseup(function(){
      $('.mainContainer div').unbind('mouseenter');
    })
    .mousedown(function(){
      $('.mainContainer div').bind('mouseenter', function(){
        $(this).attr('class', currentColor);

      });
    });


  // while($('.mainContainer').mousedown()){
  //   $('.mainContainer div').mouseenter(function(event){
  //     $(event.target).attr('class', currentColor);
  //   });
  // }

  // $('.mainContainer').children().click(function(event){
  //   $(event.target).attr('class', currentColor);
  // });
});

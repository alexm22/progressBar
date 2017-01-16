/*$(function(){
  const btnGet = document.getElementById('btn');

  btnGet.addEventListener('click', () => {
    $('#steps').children().hide().next().show();
    $('#progressbar li').animate({width: '25%'}, 900);

  });
  // basic selector that finds all li's turns them red
  //$('li').css('color', 'red');
  //$('#steps li:first').hide(500);
});

$( "#progressbar" ).progressbar({
  value: 37
});*/

const $steps = $('#steps li');
let $addOn = $('.active');

$('#btn').click(function() {
  var $next = $steps.filter('.active').removeClass('active').next('#steps li');
    if (!$next.length) $next = $steps.first();
    $next.addClass('active');
    $('#progressbar li').addClass('active').animate({width: '+=25%'}, 900);


  //$('#progressbar').children[0]().width(addOn + '25%');
    //$('#progressbar li').animate({width: '25%'}, 900);
});

$('.steps__card').hover(function() {
  $(this).animate({padding: '1% 0.5%'}, 300);
});

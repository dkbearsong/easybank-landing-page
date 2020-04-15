windowSize();
$(document).ready(function(){
  $(window).resize(function(){
    windowSize();
  });
});

$('#menu-burger').click(function(){
  fadeO('#menu-burger');
  fadeI('#menu-close');
  fadeI('.menu-container');
  fadeI('#background-fade');
})

$('#menu-close').click(function(){
  fadeI('#menu-burger');
  fadeO('#menu-close');
  fadeO('.menu-container');
  fadeO('#background-fade');
})

function fadeI(element) {
  $(element).fadeIn(500);
}

function fadeO(element) {
  if ($(element).hasClass('menu-hide') === true) {
    $(element).removeClass('menu-hide');
  }
  setTimeout(function(){
    $(element).fadeOut(500);
  }, 10);
}

function windowSize() {
  if ($(window).width() > 1440){
    $('.menu-container').removeClass('menu-hide');
    $('#menu-burger').addClass('menu-hide');
    $('#menu-request').removeClass('menu-hide');
    $('#bg-splash').attr("src", "images/bg-intro-desktop.svg");
  } else {
    $('.menu-container').addClass('menu-hide');
    $('#menu-burger').removeClass('menu-hide');
    $('#menu-request').addClass('menu-hide');
    $('#bg-splash').attr("src", "images/bg-intro-mobile.svg");
  }
}

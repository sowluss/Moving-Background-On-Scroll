$(window).scroll(function(){
  let scrollPosition = $(window).scrollTop()/2;
  $('section').css({'background-position-x': - scrollPosition + 'px',
})
})
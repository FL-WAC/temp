$(window).on('load scroll', function(){
  const elem = $('[data-animation]')
  elem.each(function () {
    const elemOffset = $(this).offset().top;
    const scrollPos = $(window).scrollTop();
    const wh = $(window).height();
    const dh = $(document).height()
    const se = scrollPos + wh
    if(scrollPos > elemOffset - wh + (wh / 4) || dh <= (se + 100)){
      const classes = $(this).data('animation')
      $(this).addClass('animate__animated ' + classes)
    }
  });
});

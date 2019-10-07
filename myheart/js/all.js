document.getElementById('s13_bg').onload = function () {
  all();
};
function all() {
  window.sr = ScrollReveal({ reset: false, delay: 200, viewFactor: 0.8 });
  sr.reveal('.s1_slogan,.s5_title', { interval: 250, scale: 0.5, beforeReveal: rubberBand, });
  sr.reveal('.revealFade', { interval: 250, distance: '80px' });
  sr.reveal('.pop', { interval: 150, beforeReveal: bounceIn });
  sr.reveal('.s13_ban', { interval: 100, delay: 400, afterReveal: bounce });
  sr.reveal('.s13_qa', { interval: 100, delay: 0, viewFactor: 0.1 });
  function rubberBand(el) {
    $(el).addClass('rubberBand');
  }
  function bounceIn(el) {
    $(el).addClass('bounceIn');
  }
  function bounce(el) {
    $(el).addClass('bounce');
  }
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // [錨點]--// 判斷滑動位置
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var targetTop = $(target).offset().top - 50;
    $('html, body').stop().animate({
      scrollTop: targetTop
    }, 300);
  });
}

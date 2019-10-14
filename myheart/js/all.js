document.getElementById('s13_bg').onload = function () {
  setTimeout(function () {
    $('.loading_mask').remove();
    all();
  }, 300)
};

function all() {
  window.sr = ScrollReveal({ reset: false, viewFactor: 1 });
  sr.reveal('.s1_slogan,.s5_title', { interval: 350, scale: 0.5, beforeReveal: rubberBand, });
  sr.reveal('.revealFade', { interval: 300, distance: '80px', viewFactor: 0.2 });
  sr.reveal('.pop', { interval: 150, beforeReveal: bounceIn });
  sr.reveal('.s13_ban', { interval: 300, delay: 400, afterReveal: bounce });
  sr.reveal('.fadein', { interval: 300, delay: 500, viewFactor: 0.3 });
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
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var targetTop = $(target).offset().top - 50;
    $('html, body').stop().animate({
      scrollTop: targetTop
    }, 400);
  });
}
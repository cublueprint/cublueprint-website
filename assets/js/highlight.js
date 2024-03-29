$(() => {
  $(document).scroll(() => {
    var $nav = $(".my-navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

ScrollReveal().watch = function (target, onEnter, onExit) {

  onExit = onExit || function () {}

  if (typeof onEnter === 'function' && typeof onExit === 'function') {
      var noEffect = {
          delay:    0,
          distance: 0,
          duration: 0,
          scale:    1,
          opacity:  null,
          rotate:   { x: 0, y: 0, z: 0, },

          reset: true,
          beforeReset: onExit,
          beforeReveal: onEnter,
      }
      this.reveal(target, noEffect)
  } else {
      throw new Error('Watch received invalid arguments.')
  }
}

ScrollReveal().watch('.underline',
    function onEnter (el) {
        el.classList.add('underline-animation')
    },
)
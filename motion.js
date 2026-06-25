// Shared scroll-reveal + magnetic-button motion. Call NTMotion.init() on mount.
window.NTMotion = {
  init: function () {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // scroll reveals
    try {
      var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
      els.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(26px)';
        el.style.transition = 'opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)';
      });
      var show = function (el) { el.style.opacity = '1'; el.style.transform = 'none'; };
      if (reduce) { els.forEach(show); }
      else {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
        }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
        els.forEach(function (el) { io.observe(el); });
        setTimeout(function () { els.forEach(show); }, 2600);
      }
    } catch (e) {}
    // magnetic buttons
    try {
      if (!reduce && window.matchMedia('(pointer:fine)').matches) {
        document.querySelectorAll('[data-magnetic]').forEach(function (btn) {
          btn.style.willChange = 'transform';
          btn.addEventListener('mousemove', function (ev) {
            var r = btn.getBoundingClientRect();
            var x = ev.clientX - r.left - r.width / 2;
            var y = ev.clientY - r.top - r.height / 2;
            btn.style.transform = 'translate(' + x * 0.22 + 'px,' + y * 0.3 + 'px)';
          });
          btn.addEventListener('mouseleave', function () { btn.style.transform = 'translate(0,0)'; });
        });
      }
    } catch (e) {}
  }
};

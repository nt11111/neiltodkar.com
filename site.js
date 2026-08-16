// ============================================================
//  Shared behaviour: theme toggle, nav/footer, reveals, magnetic
//  buttons, hero canvas. Loaded on every page after data.js.
// ============================================================
(function () {
  var D = window.SITE_DATA || {};
  var P = D.profile || {};
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- helpers ----------
  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  window.NT = { el: el, esc: esc };

  // ---------- theme ----------
  // (initial theme is applied inline in <head> to avoid a flash; this just wires the toggle)
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('nt-theme', t); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#0b0b0d' : '#f6f5f2');
    document.querySelectorAll('.theme-toggle').forEach(function (b) {
      b.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      b.setAttribute('title', t === 'dark' ? 'Light mode' : 'Dark mode');
    });
  }
  function toggleTheme() {
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  }

  // ---------- nav ----------
  var pages = [
    ['index.html', 'Home'],
    ['projects.html', 'Work'],
    ['writing.html', 'Writing'],
    ['about.html', 'About'],
  ];
  function currentPage() {
    var p = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    return p === '' ? 'index.html' : p;
  }
  function renderNav() {
    var cur = currentPage();
    var links = pages.map(function (pg) {
      var isCur = pg[0] === cur;
      return '<a href="' + pg[0] + '"' + (isCur ? ' aria-current="page"' : '') + '>' + pg[1] + '</a>';
    }).join('');
    var sun = '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
    var moon = '<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    var burger = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    var nav = el(
      '<header class="nav">' +
        '<div class="nav-inner">' +
          '<a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true"></span>' + esc(P.name || 'Neil Todkar') + '</a>' +
          '<nav class="nav-links" aria-label="Primary">' + links +
            '<a class="btn btn-primary btn-sm" href="contact.html">Contact</a>' +
          '</nav>' +
          '<div class="nav-actions">' +
            '<button class="theme-toggle" type="button">' + sun + moon + '</button>' +
            '<button class="menu-btn" type="button" aria-label="Menu" aria-expanded="false">' + burger + '</button>' +
          '</div>' +
        '</div>' +
      '</header>'
    );
    document.body.insertBefore(nav, document.body.firstChild);
    nav.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
    var mb = nav.querySelector('.menu-btn');
    mb.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      mb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    setTheme(root.getAttribute('data-theme') || 'light');
  }

  // ---------- footer ----------
  function renderFooter() {
    var year = new Date().getFullYear();
    var f = el(
      '<footer class="footer"><div class="wrap footer-inner">' +
        '<div>&copy; ' + year + ' ' + esc(P.name || '') + ' &middot; ' + esc(P.location || '') + '</div>' +
        '<nav aria-label="Footer">' +
          '<a href="mailto:' + esc(P.email) + '">Email</a>' +
          '<a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>' +
          '<a href="' + esc(P.arxiv) + '" target="_blank" rel="noopener">arXiv</a>' +
          '<a href="writing.html">Writing</a>' +
        '</nav>' +
      '</div></footer>'
    );
    document.body.appendChild(f);
  }

  // ---------- reveals ----------
  function initReveal() {
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    if (!els.length) return;
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (e) { io.observe(e); });
    setTimeout(function () { els.forEach(function (e) { e.classList.add('in'); }); }, 2600);
  }

  // ---------- magnetic buttons ----------
  function initMagnetic() {
    if (reduce || !window.matchMedia('(pointer:fine)').matches) return;
    document.querySelectorAll('[data-magnetic]').forEach(function (btn) {
      btn.addEventListener('mousemove', function (ev) {
        var r = btn.getBoundingClientRect();
        var x = ev.clientX - r.left - r.width / 2;
        var y = ev.clientY - r.top - r.height / 2;
        btn.style.transform = 'translate(' + x * 0.2 + 'px,' + y * 0.28 + 'px)';
      });
      btn.addEventListener('mouseleave', function () { btn.style.transform = 'translate(0,0)'; });
    });
  }

  // ---------- hero canvas: dot grid that reacts to the cursor ----------
  function initHeroCanvas() {
    var canvas = document.querySelector('[data-hero-canvas]');
    if (!canvas) return;
    var header = canvas.closest('.hero') || canvas.parentElement;
    var glow = header.querySelector('.hero-glow');
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0, h = 0, dots = [], gap = 38, t = 0, raf;
    var mouse = { x: -9999, y: -9999 };

    function accent() {
      var c = getComputedStyle(root).getPropertyValue('--dot').trim();
      var m = c.match(/rgba?\(([^)]+)\)/);
      return m ? m[1].split(',').slice(0, 3).map(function (v) { return v.trim(); }).join(',') : '255,59,59';
    }
    var rgb = accent();
    var obs = new MutationObserver(function () { rgb = accent(); });
    obs.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

    function build() {
      var r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (var x = gap / 2; x < w; x += gap)
        for (var y = gap / 2; y < h; y += gap)
          dots.push({ bx: x, by: y, ph: Math.random() * Math.PI * 2 });
    }
    build();
    window.addEventListener('resize', build);

    header.addEventListener('mousemove', function (e) {
      var r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
      if (glow && !reduce) glow.style.transform = 'translate(' + (mouse.x - 100) + 'px,' + (mouse.y - 100) + 'px)';
    });
    header.addEventListener('mouseleave', function () { mouse.x = -9999; mouse.y = -9999; });

    var isDark = function () { return root.getAttribute('data-theme') === 'dark'; };
    function draw() {
      t += 0.012;
      ctx.clearRect(0, 0, w, h);
      var base = isDark() ? 0.06 : 0.09;
      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        var dx = mouse.x - d.bx, dy = mouse.y - d.by;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var near = Math.max(0, 1 - dist / 170);
        var ang = Math.atan2(dy, dx);
        var push = near * 10;
        var x = d.bx - Math.cos(ang) * push, y = d.by - Math.sin(ang) * push;
        var pulse = 0.5 + 0.5 * Math.sin(t + d.ph);
        var a = base + pulse * 0.05 + near * 0.6;
        ctx.beginPath();
        ctx.arc(x, y, 1 + near * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + rgb + ',' + a + ')';
        ctx.fill();
        if (near > 0.15) {
          ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = 'rgba(' + rgb + ',' + near * 0.12 + ')'; ctx.lineWidth = 1; ctx.stroke();
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    }
    draw();
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) draw();
    });
  }

  // ---------- boot ----------
  function boot() {
    renderNav();
    if (typeof window.renderPage === 'function') { try { window.renderPage(D); } catch (e) { console.error(e); } }
    renderFooter();
    initReveal();
    initMagnetic();
    initHeroCanvas();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();

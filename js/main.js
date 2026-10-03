/* 瞳伴展示页交互 */

(function () {
  'use strict';

  /* ---------- 顶栏滚动状态 ---------- */
  var topbar = document.getElementById('topbar');
  var onScroll = function () {
    if (!topbar) return;
    topbar.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 移动端导航 ---------- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- 入场动画 ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- 近视率柱状图动画 ---------- */
  var chart = document.getElementById('myopiaChart');
  if (chart) {
    var bars = Array.prototype.slice.call(chart.querySelectorAll('.bar__fill'));
    var draw = function () {
      bars.forEach(function (bar, i) {
        var h = Number(bar.getAttribute('data-h')) || 0;
        window.setTimeout(function () {
          bar.style.height = 'calc(' + h + '% - 44px)';
        }, 90 * i);
      });
    };
    if ('IntersectionObserver' in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { draw(); cio.disconnect(); }
        });
      }, { threshold: 0.35 });
      cio.observe(chart);
    } else {
      draw();
    }
  }

  /* ---------- 锚点平滑滚动（补偿顶栏高度） ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a) return;
    var id = a.getAttribute('href');
    if (!id || id === '#') return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    var top = target.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top: top, behavior: 'smooth' });
    history.replaceState(null, '', id);
  });

  /* ---------- 幻灯片页专用 ---------- */
  var stage = document.getElementById('slideStage');
  if (!stage || !window.DECK) return;

  var deck = window.DECK;
  var current = 0;
  var progress = document.getElementById('deckProgress');
  var counter = document.getElementById('deckCounter');
  var thumbs = document.getElementById('deckThumbs');
  var thumbPanel = document.getElementById('thumbPanel');

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderCover(s) {
    return '' +
      '<div class="sl sl--cover">' +
        '<div class="sl__coverbar"></div>' +
        '<div class="sl__coverbody">' +
          '<div class="sl__brandline">' + esc(s.brand) + '</div>' +
          '<h2 class="sl__covertitle">' + esc(s.title) + '</h2>' +
          '<p class="sl__coversub">' + esc(s.sub) + '</p>' +
          '<div class="sl__covermeta">' + s.meta.map(function (m) { return '<span>' + esc(m) + '</span>'; }).join('') + '</div>' +
        '</div>' +
      '</div>';
  }

  function renderToc(s) {
    return '' +
      '<div class="sl sl--toc">' +
        '<div class="sl__head"><h2>' + esc(s.title) + '</h2><p>' + esc(s.sub) + '</p></div>' +
        '<div class="sl__tocgrid">' +
          s.items.map(function (it) {
            return '<div class="toccard"><span class="toccard__num">' + esc(it.num) + '</span>' +
              '<div><div class="toccard__cn">' + esc(it.cn) + '</div>' +
              '<div class="toccard__en">' + esc(it.en) + '</div></div></div>';
          }).join('') +
        '</div>' +
      '</div>';
  }

  function renderPart(s) {
    return '' +
      '<div class="sl sl--part">' +
        '<div class="sl__partnum">' + esc(s.part) + '</div>' +
        '<h2 class="sl__parttitle">' + esc(s.title) + '</h2>' +
        '<p class="sl__parten">' + esc(s.en) + '</p>' +
      '</div>';
  }

  function renderContent(s) {
    var cols = s.items.length <= 4 ? s.items.length : 3;
    var body = s.items.map(function (it, i) {
      return '<div class="slcard">' +
        '<span class="slcard__num">' + esc(it.num != null ? it.num : ('0' + (i + 1)).slice(-2)) + '</span>' +
        '<h4>' + esc(it.title) + '</h4>' +
        '<p>' + esc(it.text) + '</p>' +
        (it.note ? '<p class="slcard__note">' + esc(it.note) + '</p>' : '') +
        '</div>';
    }).join('');
    var extra = s.chart ? s.chart : (s.figure ? '<figure class="slfigure"><img src="' + esc(s.figure.src) + '" alt="' + esc(s.figure.alt) + '"><figcaption>' + esc(s.figure.caption) + '</figcaption></figure>' : '');
    return '' +
      '<div class="sl sl--content">' +
        '<div class="sl__head">' +
          '<span class="sl__kicker">' + esc(s.kicker || '') + '</span>' +
          '<h2>' + esc(s.title) + '</h2>' +
          (s.sub ? '<p>' + esc(s.sub) + '</p>' : '') +
        '</div>' +
        extra +
        '<div class="sl__cards cols-' + cols + '">' + body + '</div>' +
        (s.note ? '<p class="sl__note">' + esc(s.note) + '</p>' : '') +
      '</div>';
  }

  function render(i) {
    var s = deck[i];
    var html;
    if (s.layout === 'cover') html = renderCover(s);
    else if (s.layout === 'toc') html = renderToc(s);
    else if (s.layout === 'part') html = renderPart(s);
    else html = renderContent(s);
    stage.innerHTML = html;
    stage.classList.remove('is-anim');
    void stage.offsetWidth;
    stage.classList.add('is-anim');
  }

  function update() {
    if (counter) counter.textContent = (current + 1) + ' / ' + deck.length;
    if (progress) progress.style.width = ((current + 1) / deck.length * 100) + '%';
    if (thumbs) {
      var active = thumbs.querySelector('.is-active');
      if (active) active.classList.remove('is-active');
      var item = thumbs.querySelector('[data-i="' + current + '"]');
      if (item) {
        item.classList.add('is-active');
        item.scrollIntoView({ block: 'nearest', inline: 'center' });
      }
    }
    if (location.hash !== '#' + (current + 1)) {
      history.replaceState(null, '', '#' + (current + 1));
    }
  }

  function go(i) {
    current = Math.max(0, Math.min(deck.length - 1, i));
    render(current);
    update();
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); go(current + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(current - 1); }
    else if (e.key === 'Home') { e.preventDefault(); go(0); }
    else if (e.key === 'End') { e.preventDefault(); go(deck.length - 1); }
    else if (e.key === 'f' || e.key === 'F') { toggleFull(); }
  });

  var prev = document.getElementById('deckPrev');
  var next = document.getElementById('deckNext');
  if (prev) prev.addEventListener('click', function () { go(current - 1); });
  if (next) next.addEventListener('click', function () { go(current + 1); });

  var thumbBtn = document.getElementById('thumbToggle');
  if (thumbBtn && thumbPanel) {
    thumbBtn.addEventListener('click', function () {
      var open = thumbPanel.classList.toggle('is-open');
      thumbBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function toggleFull() {
    var el = document.getElementById('stageWrap') || stage;
    if (!document.fullscreenElement) {
      if (el.requestFullscreen) el.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  var fullBtn = document.getElementById('deckFull');
  if (fullBtn) fullBtn.addEventListener('click', toggleFull);

  /* 缩略图 */
  if (thumbs) {
    deck.forEach(function (s, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'thumb';
      b.setAttribute('data-i', i);
      b.innerHTML = '<span class="thumb__i">' + (i + 1) + '</span><span class="thumb__t">' + esc(s.title || s.sub || '') + '</span>';
      b.addEventListener('click', function () { go(i); });
      thumbs.appendChild(b);
    });
  }

  /* 触摸滑动 */
  var startX = 0, startY = 0;
  stage.addEventListener('touchstart', function (e) {
    startX = e.changedTouches[0].clientX;
    startY = e.changedTouches[0].clientY;
  }, { passive: true });
  stage.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - startX;
    var dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 54 && Math.abs(dx) > Math.abs(dy)) go(current + (dx < 0 ? 1 : -1));
  }, { passive: true });

  var initial = parseInt((location.hash || '').replace('#', ''), 10);
  go(isNaN(initial) ? 0 : initial - 1);
})();

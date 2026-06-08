(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Scroll-reveal ────────────────────────────────────────────
  // Types auto-assigned to elements matching these selectors.
  // Manually placed [data-animate] attributes always win.
  var AUTO = [
    ['.section-label',   'fade-in'],
    ['.section-title',   'fade-up'],
    ['.divider',         'scale-x'],
    ['.card',            'fade-up'],
    ['.timeline-item',   'slide-left'],
    ['.bear-card',       'fade-up'],
    ['.info-item',       'fade-up'],
    ['.contact-card',    'fade-up'],
    ['blockquote',       'fade-up'],
    ['.g-rating-bar',    'fade-up'],
    ['.status-banner',   'fade-up'],
    ['.menu-note',       'fade-up'],
  ];

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -28px 0px' });

  function observe(el) {
    if (!el.classList.contains('visible')) revealObserver.observe(el);
  }

  // Assign types and observe
  AUTO.forEach(function (pair) {
    var sel = pair[0], type = pair[1];
    document.querySelectorAll(sel).forEach(function (el) {
      if (!el.hasAttribute('data-animate')) el.setAttribute('data-animate', type);
      observe(el);
    });
  });

  // Stagger siblings within grid containers
  document.querySelectorAll('.grid-auto, .grid-3, .grid-4').forEach(function (grid) {
    Array.from(grid.children).forEach(function (child, i) {
      if (!child.hasAttribute('data-animate')) child.setAttribute('data-animate', 'fade-up');
      if (i > 0) child.setAttribute('data-delay', String(Math.min(i, 5)));
      observe(child);
    });
  });

  // Stagger info-items
  document.querySelectorAll('.info-grid').forEach(function (grid) {
    Array.from(grid.children).forEach(function (child, i) {
      if (i > 0) child.setAttribute('data-delay', String(Math.min(i, 5)));
    });
  });

  // Catch any manually placed [data-animate] not yet observed
  document.querySelectorAll('[data-animate]:not(.visible)').forEach(observe);

  // ── Hero parallax ────────────────────────────────────────────
  if (!reducedMotion) {
    var heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      var hero = heroBg.closest('.hero');
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          var rect = hero.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            var progress = -rect.top / (rect.height + window.innerHeight);
            heroBg.style.transform = 'translateY(' + (progress * 70) + 'px)';
          }
          ticking = false;
        });
      }, { passive: true });
    }
  }

  // ── Icon pulse on info-item hover ─────────────────────────────
  document.querySelectorAll('.info-item').forEach(function (item) {
    var svg = item.querySelector('.icon svg');
    if (!svg) return;
    item.addEventListener('mouseenter', function () {
      svg.style.animation = 'none';
      void svg.offsetHeight;
      svg.style.animation = 'iconPulse .45s ease forwards';
    });
  });

  // ── Floating badge on hero ────────────────────────────────────
  if (!reducedMotion) {
    var badge = document.querySelector('.hero-badge');
    if (badge) badge.style.animation = 'heroBadgeSlide .55s .05s both ease-out, heroBadgeFloat 3s 1s ease-in-out infinite';
  }

})();

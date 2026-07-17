/* Site behavior: theme toggle, nav, modals, scroll button, reveal animations,
   publication filters/search, BibTeX copy, abstract toggles. */
(function () {
  'use strict';

  /* ---------- Theme toggle ---------- */
  var themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ---------- Mobile navigation ---------- */
  var navMenu = document.getElementById('nav-menu');
  var navToggle = document.querySelector('.nav-toggle');
  if (navMenu && navToggle) {
    var mobileQuery = window.matchMedia('(max-width: 768px)');

    var closeMenu = function () {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.removeEventListener('click', onOutsideClick);
      document.removeEventListener('keydown', onMenuKeydown);
    };
    var openMenu = function () {
      navMenu.classList.add('is-open');
      navToggle.setAttribute('aria-expanded', 'true');
      document.addEventListener('click', onOutsideClick);
      document.addEventListener('keydown', onMenuKeydown);
    };
    var onOutsideClick = function (event) {
      if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) closeMenu();
    };
    var onMenuKeydown = function (event) {
      if (event.key === 'Escape') closeMenu();
    };

    navToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      if (navMenu.classList.contains('is-open')) closeMenu();
      else openMenu();
    });
    navMenu.querySelectorAll('a.page-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (mobileQuery.matches) closeMenu();
      });
    });
    mobileQuery.addEventListener('change', function () {
      if (!mobileQuery.matches) closeMenu();
    });
  }

  /* ---------- Generic modal handling ---------- */
  var openModal, closeModal;
  (function () {
    var activeModal = null;
    var lastFocused = null;

    var onKeydown = function (event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
      } else if (event.key === 'Tab' && activeModal) {
        var focusables = activeModal.querySelectorAll('a[href], button:not([disabled]), iframe, input, [tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    openModal = function (modal) {
      if (!modal) return;
      lastFocused = document.activeElement;
      activeModal = modal;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      var closeBtn = modal.querySelector('[data-modal-close]');
      if (closeBtn) closeBtn.focus({ preventScroll: true });
      document.addEventListener('keydown', onKeydown);
    };

    closeModal = function () {
      if (!activeModal) return;
      activeModal.classList.remove('is-open');
      activeModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      var iframe = activeModal.querySelector('iframe');
      if (iframe) iframe.src = '';
      document.removeEventListener('keydown', onKeydown);
      activeModal = null;
      if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus({ preventScroll: true });
      }
    };

    document.querySelectorAll('.modal').forEach(function (modal) {
      modal.addEventListener('click', function (event) {
        if (event.target === modal) closeModal();
      });
      modal.querySelectorAll('[data-modal-close]').forEach(function (btn) {
        btn.addEventListener('click', closeModal);
      });
    });
  })();

  /* Resume modal */
  document.querySelectorAll('.resume-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var modal = document.getElementById('resume-modal');
      var iframe = document.getElementById('resume-frame');
      if (iframe && trigger.dataset.resumeSrc) iframe.src = trigger.dataset.resumeSrc;
      openModal(modal);
    });
  });

  /* Contact modal */
  document.querySelectorAll('.contact-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      openModal(document.getElementById('contact-modal'));
    });
  });

  /* Biography "Read more" modal (home page) */
  var readMore = document.getElementById('hero-read-more');
  if (readMore) {
    readMore.addEventListener('click', function (event) {
      event.preventDefault();
      openModal(document.getElementById('hero-description-modal'));
    });
  }

  /* ---------- Scroll to top/bottom button ---------- */
  var scrollButton = document.getElementById('scrollButton');
  if (scrollButton) {
    var updateArrow = function () {
      scrollButton.innerHTML = window.pageYOffset === 0 ? '&#8595;' : '&#8593;';
    };
    scrollButton.addEventListener('click', function () {
      if (window.pageYOffset === 0) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    window.addEventListener('scroll', updateArrow, { passive: true });
    updateArrow();
  }

  /* ---------- Reveal-on-scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Publications: filters + search ---------- */
  var pubCards = Array.prototype.slice.call(document.querySelectorAll('.pub-card'));
  if (pubCards.length) {
    var typeChips = document.querySelectorAll('.filter-chip[data-filter-type]');
    var yearChips = document.querySelectorAll('.filter-chip[data-filter-year]');
    var searchInput = document.getElementById('pub-search');
    var emptyNote = document.querySelector('.pub-empty');
    var activeType = 'all';
    var activeYear = 'all';

    var applyFilters = function () {
      var query = searchInput ? searchInput.value.trim().toLowerCase() : '';
      var visible = 0;
      pubCards.forEach(function (card) {
        var matchesType = activeType === 'all' || card.dataset.type === activeType;
        var matchesYear = activeYear === 'all' || card.dataset.year === activeYear;
        var matchesQuery = !query || (card.dataset.search || '').indexOf(query) !== -1;
        var show = matchesType && matchesYear && matchesQuery;
        card.classList.toggle('is-hidden', !show);
        if (show) visible++;
      });
      document.querySelectorAll('.pub-year-group').forEach(function (group) {
        var any = group.querySelector('.pub-card:not(.is-hidden)');
        group.style.display = any ? '' : 'none';
      });
      if (emptyNote) emptyNote.style.display = visible ? 'none' : 'block';
    };

    typeChips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        activeType = chip.dataset.filterType;
        typeChips.forEach(function (c) { c.classList.toggle('is-active', c === chip); });
        applyFilters();
      });
    });
    yearChips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        activeYear = chip.dataset.filterYear;
        yearChips.forEach(function (c) { c.classList.toggle('is-active', c === chip); });
        applyFilters();
      });
    });
    if (searchInput) searchInput.addEventListener('input', applyFilters);
  }

  /* ---------- Abstract toggles ---------- */
  document.querySelectorAll('.abstract-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.pub-card');
      var abstract = card && card.querySelector('.pub-card__abstract');
      if (!abstract) return;
      var isHidden = abstract.hasAttribute('hidden');
      if (isHidden) abstract.removeAttribute('hidden');
      else abstract.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', String(isHidden));
      btn.textContent = isHidden ? 'Hide Abstract' : 'Abstract';
    });
  });

  /* ---------- BibTeX copy + toggle ---------- */
  document.querySelectorAll('.bibtex-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pre = document.getElementById(btn.dataset.bibtexTarget);
      if (!pre) return;
      if (pre.hasAttribute('hidden')) pre.removeAttribute('hidden');
      var text = pre.textContent;
      var done = function () {
        var original = 'Copy BibTeX';
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = original; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(done);
      } else {
        var ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        done();
      }
    });
  });
})();

/* Research updates: year tabs */
(function () {
  var tabs = document.querySelectorAll('.news-tab');
  if (!tabs.length) return;
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var year = tab.getAttribute('data-news-year');
      tabs.forEach(function (t) {
        var active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-pressed', String(active));
      });
      document.querySelectorAll('.news-flow__group').forEach(function (g) {
        g.hidden = g.getAttribute('data-year') !== year;
      });
    });
  });
})();

/* Hero: rotating portrait stack */
(function () {
  var stack = document.querySelector('.portrait-stack');
  if (!stack) return;
  var imgs = stack.querySelectorAll('.portrait-stack__img');
  if (imgs.length < 2) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var i = 0;
  setInterval(function () {
    if (reduce.matches || document.hidden) return;
    imgs[i].classList.remove('is-active');
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('is-active');
  }, 5000);
})();

/* Awards carousel arrows */
(function () {
  var track = document.getElementById('awards-track');
  if (!track) return;
  var prev = document.querySelector('.awards-nav--prev');
  var next = document.querySelector('.awards-nav--next');
  if (!prev || !next) return;
  var step = function () {
    var card = track.querySelector('.award-card');
    return card ? card.getBoundingClientRect().width + 16 : 260;
  };
  var update = function () {
    prev.hidden = track.scrollLeft <= 4;
    next.hidden = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
  };
  prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
  next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
})();

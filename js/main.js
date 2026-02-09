// DDV Website — main.js

(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Set active nav link based on current page
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Testimonial slider
  var slider = document.querySelector('.testimonial-slider');
  if (slider) {
    var track = slider.querySelector('.testimonial-track');
    var slides = slider.querySelectorAll('.testimonial');
    var prevBtn = slider.querySelector('.slider-prev');
    var nextBtn = slider.querySelector('.slider-next');
    var dotsContainer = slider.querySelector('.slider-dots');
    var currentSlide = 0;
    var slidesPerView = getSlidesPerView();

    function getSlidesPerView() {
      if (window.innerWidth < 768) return 1;
      return 2;
    }

    function totalPages() {
      return Math.ceil(slides.length / slidesPerView);
    }

    function buildDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      for (var i = 0; i < totalPages(); i++) {
        var dot = document.createElement('button');
        dot.className = 'slider-dot' + (i === currentSlide ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        dot.addEventListener('click', (function (index) {
          return function () { goToSlide(index); };
        })(i));
        dotsContainer.appendChild(dot);
      }
    }

    function updateSlider() {
      var gap = 24;
      var slideWidth = (track.offsetWidth - gap * (slidesPerView - 1)) / slidesPerView;
      var offset = currentSlide * (slideWidth + gap) * slidesPerView;
      track.style.transform = 'translateX(-' + offset + 'px)';

      // Update dots
      if (dotsContainer) {
        dotsContainer.querySelectorAll('.slider-dot').forEach(function (dot, i) {
          dot.classList.toggle('active', i === currentSlide);
        });
      }

      // Update buttons
      if (prevBtn) prevBtn.disabled = currentSlide === 0;
      if (nextBtn) nextBtn.disabled = currentSlide >= totalPages() - 1;
    }

    function goToSlide(index) {
      currentSlide = Math.max(0, Math.min(index, totalPages() - 1));
      updateSlider();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        goToSlide(currentSlide - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        goToSlide(currentSlide + 1);
      });
    }

    // Touch/swipe support
    var touchStartX = 0;
    var touchEndX = 0;

    track.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(currentSlide + 1);
        else goToSlide(currentSlide - 1);
      }
    }, { passive: true });

    // Handle resize
    window.addEventListener('resize', function () {
      var newPerView = getSlidesPerView();
      if (newPerView !== slidesPerView) {
        slidesPerView = newPerView;
        currentSlide = 0;
        buildDots();
      }
      updateSlider();
    });

    buildDots();
    updateSlider();
  }

  // Course tier tabs
  var tiers = document.querySelectorAll('.course-tier[data-tier]');
  var panels = document.querySelectorAll('.tier-panel');

  if (tiers.length && panels.length) {
    tiers.forEach(function (tier) {
      tier.addEventListener('click', function () {
        var target = this.getAttribute('data-tier');

        // Update active tier
        tiers.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');

        // Update active panel
        panels.forEach(function (p) { p.classList.remove('active'); });
        var targetPanel = document.getElementById('tier-' + target);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });
  }
})();

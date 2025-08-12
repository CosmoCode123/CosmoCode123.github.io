
    $(document).ready(function() {
      // Hero banner click scrolls to projects
      $('.hero-banner').on('click', function() {
        const $target = $('#projects');
        if ($target.length) {
          $('html, body').animate({ scrollTop: $target.offset().top }, 700);
        }
      });
      // Fade-in animation on load and scroll
      function checkVisibility() {
        $('.fade-in').each(function() {
          const rect = this.getBoundingClientRect();
          if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0) {
            $(this).addClass('visible');
          }
        });
      }

      checkVisibility();
      $(window).on('scroll', checkVisibility);

      // Initialize skill progress bars with animation
      setTimeout(function() {
        $('.skill-progress-bar').each(function() {
          const width = $(this).css('width');
          $(this).css('width', '0').animate({ width: width }, 1000);
        });
      }, 500);

      // 切換 About 區塊的 tab
      $('.about-sidebar .nav-link').on('click', function(e) {
        e.preventDefault();
        $('.about-sidebar .nav-link').removeClass('active');
        $(this).addClass('active');
        var target = $(this).attr('href');
        $('.tab-pane').removeClass('show active');
        $(target).addClass('show active');
        
        // 如果切換到學習進度標籤，初始化進度條動畫
        if(target === '#about-learning') {
          initLearningProgress();
        }
      });
      
      // Smooth scrolling for navigation links
      $('.scroll-trigger').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 70
          }, 800, 'swing');
          
          // Close mobile menu if open
          if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-toggler').click();
          }
        }
      });
      
      // Add active class to nav items when scrolling
      $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop() + 100;
        
        // Add active class to nav item when section is in viewport
        $('section').each(function() {
          if ($(this).offset().top <= scrollDistance) {
            $('.navbar-nav .nav-link').removeClass('active');
            $('.navbar-nav .nav-link[href="#' + $(this).attr('id') + '"]').addClass('active');
          }
        });
        
        // Add background to navbar when scrolled
        if ($(window).scrollTop() > 50) {
          $('#topNav').addClass('navbar-scrolled');
        } else {
          $('#topNav').removeClass('navbar-scrolled');
        }
      });
      
      // Hover effects for cards
      $('.enhanced-card').hover(
        function() {
          $(this).find('.card-header').addClass('pulse');
        },
        function() {
          $(this).find('.card-header').removeClass('pulse');
        }
      );
      
      // Initialize tooltips
      var tooltipTriggerList = $('[data-bs-toggle="tooltip"]').toArray();
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
      
      // Animate skill tags on hover
      $('.skill-tag').hover(
        function() {
          $(this).addClass('animated');
        },
        function() {
          $(this).removeClass('animated');
        }
      );
      
      // Add parallax effect to gradient backgrounds
      $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        $('.gradient-bg').css('background-position', '0 ' + (scrollPosition * 0.05) + 'px');
      });
      
      // 初始化學習進度功能
      function initLearningProgress() {
        // 進度條動畫
        $('.progress-bar').each(function() {
          const width = $(this).attr('aria-valuenow') + '%';
          $(this).css('width', '0').animate({
            width: width
          }, 1000);
        });
        
        // 里程碑項目的懸停效果
        $('.milestone').hover(
          function() {
            $(this).css('background-color', '#f8f9fa');
          },
          function() {
            $(this).css('background-color', 'transparent');
          }
        );
        
        // 學習卡片的懸停效果
        $('.learning-session').hover(
          function() {
            $(this).css('transform', 'translateY(-5px)');
            $(this).css('box-shadow', '0 8px 25px rgba(107, 72, 255, 0.15)');
          },
          function() {
            $(this).css('transform', 'translateY(0)');
            $(this).css('box-shadow', '0 5px 15px rgba(0, 0, 0, 0.05)');
          }
        );
      }
      
      // 如果頁面載入時已經在學習進度標籤，初始化進度條
      if(window.location.hash === '#about-learning') {
        $('.about-sidebar .nav-link[href="#about-learning"]').click();
      }
    });
    
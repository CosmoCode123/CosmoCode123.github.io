$(document).ready(function() {
  // 切換 About 區塊的 tab
  $('.about-sidebar .nav-link').on('click', function(e) {
    e.preventDefault();
    $('.about-sidebar .nav-link').removeClass('active');
    $(this).addClass('active');
    var target = $(this).attr('href');
    $('.tab-pane').removeClass('show active');
    $(target).addClass('show active');
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
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
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
});

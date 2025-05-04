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
});

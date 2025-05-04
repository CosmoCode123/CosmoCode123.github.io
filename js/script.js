
document.addEventListener('DOMContentLoaded', function() {
      const scrollTriggers = document.querySelectorAll('.scroll-trigger');
      scrollTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });
    });
    
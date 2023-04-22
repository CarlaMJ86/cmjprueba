$(document).ready(function () {
    var $root = $('html, body');
    $('a[href^="#"]').click(function () {
      $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
      }, 500);
      return false;
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });
    
      $(function () {
        $('[data-toggle="popover"]').popover();
      });
    
      $(function () {
        $(window).scroll(function () {
          var navegador = $(".navbar");
          if ($(this).scrollTop() > 100) {
            navegador.css("background", "#328998");
          } else {
            navegador.css("background", "none");
          }
        });
      });
      
});
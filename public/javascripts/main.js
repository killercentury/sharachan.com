(function($) {
  'use strict';

  $(function() {

    $('#btn-portfolio-grid').click(function() {
      $(this).removeClass('btn-default');
      $(this).addClass('btn-primary');
      $('#btn-portfolio-slide').removeClass('btn-primary');
      $('#btn-portfolio-slide').addClass('btn-default');
      $('#carousel-portfolio').hide();
      $('#thumbnails-portfolio').show();
    });

    $('#btn-portfolio-slide').click(function() {
      $(this).removeClass('btn-default');
      $(this).addClass('btn-primary');
      $('#btn-portfolio-grid').removeClass('btn-primary');
      $('#btn-portfolio-grid').addClass('btn-default');
      $('#thumbnails-portfolio').hide();
      $('#carousel-portfolio').show();
    });

    $("a.thumbnail").fancybox({
      helpers: {
        title : {
          type : 'float'
        }
      }
    });

  });
})(jQuery);

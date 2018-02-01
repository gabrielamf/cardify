(function($) { 
  $.fn.extend({
    cardify: function() {
      return this.each(() => {
        $(this).find('img').each((index, element) => {
          $(element).wrap('<figure></figure>');
          let width = $(element).width();
          let height = $(element).height();
          let text = $(element).attr('alt');
          $(element).css({
            width: width,
          });
          $(element).after(`<figcaption>${text}</figcaption>`);
          $(element).next().addClass('figcaption').css({
            width: width,
            height: height,
            'line-height': (`${height}px`)
          }).hide();
          $(element).parent().addClass('figure').css({
            width: width,
            height: height
          }).mouseover(() => {
            $(element).hide();
            $(element).next().show();
          }).mouseout(() => {
            $(element).show();
            $(element).next().hide();
          });
        });
      });
    }
  });
})(jQuery);

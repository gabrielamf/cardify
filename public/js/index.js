'use strict';

(function ($) {
  $.fn.extend({
    cardify: function cardify() {
      var _this = this;

      return this.each(function () {
        $(_this).find('img').each(function (index, element) {
          $(element).wrap('<figure></figure>');
          var width = $(element).width();
          var height = $(element).height();
          var text = $(element).attr('alt');
          $(element).css({
            width: width
          });
          $(element).after('<figcaption>' + text + '</figcaption>');
          $(element).next().addClass('figcaption').css({
            width: width,
            height: height,
            'line-height': height + 'px'
          }).hide();
          $(element).parent().addClass('figure').css({
            width: width,
            height: height
          }).mouseenter(function () {
            $(element).fadeOut('fast');
            $(element).next().show('slow');
          }).mouseleave(function () {
            $(element).fadeIn('slow');
            $(element).next().hide('slow');
          });
        });
      });
    }
  });
})(jQuery);
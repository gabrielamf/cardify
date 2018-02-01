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
          }).mouseover(function () {
            $(element).hide();
            $(element).next().show();
          }).mouseout(function () {
            $(element).show();
            $(element).next().hide();
          });
        });
      });
    }
  });
})(jQuery);
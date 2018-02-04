'use strict';

(function ($) {
  $.fn.extend({
    cardify: function cardify() {
      var _this = this;

      return this.each(function () {
          $(_this).find('img').each(function (index, element) {
            $(element).wrap('<figure class="he-wrap tpl6"></figure>');
            var width = $(element).width();
            var height = $(element).height();
            var text = $(element).attr('alt');
            $(element).css({
              width: width
            });
          $(element).after('<figcaption>' + text + '</figcaption>');
          $(element).next().after('<a href="https://www.pinterest.com/" target="_blank"><span><i class="fab fa-pinterest fa-lg"></i></span></a>');
          $(element).next().next().after('<span class="fa-layers fa-fw"><i class="fas fa-bookmark"></i><i class="fa-inverse fas fa-heart" data-fa-transform="shrink-10 up-2"></i></span>');
          $(element).next().addClass('figcaption').css({
            width: width,
            height: height,
            'line-height': height + 'px'
          }).hide();
          $(element).next().next().addClass('ancor').hide();
          $(element).next().next().next().addClass('heart');
          $(element).parent().addClass('figure').css({
           width: width,
           height: height
          }).mouseenter(function () {
    
            $(element).fadeOut('fast');
            $(element).next().show('slow');
            $(element).next().next().show('slow');
            $(element).next().next().next().addClass('heart-show');
            
          }).mouseleave(function () {
            $(element).fadeIn('slow');
            $(element).next().hide('slow');
            $(element).next().next().hide();
            $(element).next().next().next().removeClass('heart-show');
          })
          
          $(element).parent().find('span.fa-layers').on('click',function(){
             $(this).css('font-size','2.5rem');
             $(this).find('.fa-heart').css({'color':'#fff',"fontSize":"2.5rem"});
    
          })  
        });
      });
    }
  });
})(jQuery);
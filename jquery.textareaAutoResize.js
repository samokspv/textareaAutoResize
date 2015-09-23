/**
 * Automatically resizes a textarea to content.
 * @author samokspv
 * @version 0.1
 */
(function($) {
  $.fn.textareaAutoResize = function(options) {
    return this.each(function() {
      $.each($(this), function(el) {
          var offset = this.offsetHeight - this.clientHeight;
          var resizeTextarea = function(el) {
              $(el)
                .css('height', 'auto')
                .css('height', el.scrollHeight + offset);
          };
          $(this)
            .on('keyup input', function() {
              resizeTextarea(this);
            })
      });
    });
  };
})(jQuery);
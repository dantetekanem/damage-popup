(function($){
  $.fn.damage = function(damage, options){
    var settings = $.extend({
      delay: 100,
      duration: 100,
      bounce: 1.25, // 25% of relative height
      letterWidth: 20,
      letterHeight: 20,
      fontSize: 24,
      color: '#000'
    }, options || {});

  	var getRandomInt = function(min, max) {
	  	return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		var letterElement = function(letter, left, top) {
			var element = $('<div />');
			return $('<div>').css({
				position: 'absolute',
				width: settings.letterWidth,
				height: settings.letterHeight,
				fontSize: settings.fontSize,
				color: settings.color,
				left: left,
				top: top
			}).text(letter);
		}

    var letters = damage.toString().split('');
    var offset = this.offset();
    if (offset == undefined) {
    	offset = { top: 0, left: 0 }
    }
    var positions = {
    	horizontal: getRandomInt(offset.left, offset.left + this.width()),
    	vertical: getRandomInt(offset.top, offset.top + this.height())
    };

    for (var i = 0; i < letters.length; ++i) {
    	var letter = letters[i];
    	var horizontal = positions.horizontal + (i * Math.floor(settings.fontSize/2));
    	var vertical = positions.vertical;
    	var element = letterElement(letter, horizontal, vertical);
    	var delay = settings.delay * i;

    	$('body').append(element);
    }
  };
})(jQuery);
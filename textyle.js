(function($){  
	$.fn.textyle = function(options){
		var target = this;
		var targetTxt = target.contents();
		var defaults = {
					duration : 400,
					delay : 100,
					easing : 'swing',
					callback : null
				};
		var setting = $.extend(defaults, options);
        
		targetTxt.each(function(){
			var texts = $(this);
			if(this.nodeType === 3){
				mkspn(texts);
			}
		});
		function mkspn(texts){
            texts.replaceWith(texts.text().replace(/(\S)/g,'<span>$1</span>'));
		}
        
		return this.each(function(){
			var len = target.children().length;
			target.css('opacity',1);
			for (var i = 0; i < len; i++) {
				target.children('span:eq('+i+')')
				.delay(setting.delay*i)
				.animate({
					opacity : 1,
					top : 0,
					left : 0,
				},setting.duration,setting.easing,setting.callback);
			};
		});
	};
}( jQuery ));

$(window).on('load',function(){
//////code to call//////
  $('#myname').textyle();
  $('#job').textyle({
    duration : 600,
    delay : 200,
    easing : 'easeInCubic',
    callback : function(){
      $(this).css({
        color : '#708090',
        transition : '0.8s',
      });
      $('.desc').css('opacity',1);
    }
  });
});
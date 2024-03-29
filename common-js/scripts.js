(function ($) {

    "use strict";

	$('a[href="#"]').on('click', function() {
		return;
	});

	$('a').on('click', function(event) {
		var target = event.target.hash;
		doScrolling(target, 300);
	})

	countdownTime();
	
	$('[data-nav-menu]').on('click', toggleVisible);
	$('#main-menu>li>a').on('click', function() {
		$('#main-menu').removeClass('visible');
	});
	
})(jQuery);

function doScrolling(element, duration) { 
	var startingY = window.pageYOffset;
	var elementY = getElementY(element);
	var diff = elementY - startingY;
	var start;
  
	// Bootstrap our animation - it will get called right before next frame shall be rendered.
	window.requestAnimationFrame(function step(timestamp) {
	  if (!start) start = timestamp;
	  // Elapsed milliseconds since start of scrolling.
	  var time = timestamp - start;
	  // Get percent of completion in range [0, 1].
	  var percent = Math.min(time / duration, 1);
  
	  window.scrollTo(0, startingY + diff * percent);
  
	  // Proceed with animation as long as we wanted it to.
	  if (time < duration) {
		window.requestAnimationFrame(step);
	  }
	})
}

function getElementY(query) {
	if (query === '#' || query === '') return 0;
	return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
  }

function toggleVisible() {
	$($(this).data('nav-menu')).toggleClass('visible');
}

function countdownTime(){
	if(isExists('#clock')){
		$('#clock').countdown('2022/04/23', function(event){
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-sec"><span class="title">%D</span> nap </div>'
				+ '<div class="time-sec"><span class="title">%H</span> óra </div>'
				+ '<div class="time-sec"><span class="title">%M</span> perc </div>'
				+ '<div class="time-sec"><span class="title">%S</span> másodperc </div>'));
		});
	}
}

function isExists(elem) {
	return $(elem).length > 0;
}

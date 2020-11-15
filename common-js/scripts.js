(function ($) {

    "use strict";

	$('a[href="#"]').on('click', function() {
		return;
	});

	countdownTime();
	
	$('[data-nav-menu]').on('click', toggleVisible);
	$('#main-menu>li>a').on('click', function() {
		$('#main-menu').removeClass('visible');
	});
	
})(jQuery);

function toggleVisible() {
	$($(this).data('nav-menu')).toggleClass('visible');
}

function countdownTime(){
	if(isExists('#clock')){
		$('#clock').countdown('2021/04/17', function(event){
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

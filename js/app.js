$(function() {
            $('#header').floatThead();
        });

        $(function() {
                    $('#footer').floatThead();
                });

                $(document).ready(function(){
                  $('a.left').on('click',function (e) {
                    e.preventDefault();

                    var target = this.hash;
                    var $target = $(target);

                    $('html, body').stop().animate({
                        'scrollLeft': $target.offset().left
                    }, 1500, 'swing', function () {
                        window.location.hash = target;
                    });
                  });
                });

                $(function() {
      	$('ul.nav a').bind('click',function(event){
      		var $anchor = $(this);
      		/*
      		if you want to use one of the easing effects:
      		$('html, body').stop().animate({
      			scrollLeft: $($anchor.attr('href')).offset().left
      		}, 1500,'easeInOutExpo');
      		 */
      		$('html, body').stop().animate({
      			scrollLeft: $($anchor.attr('href')).offset().left
      		}, 1000);
      		event.preventDefault();
      	});
      });

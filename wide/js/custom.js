/* =========================================================
****************************Sticky**************************
============================================================ */
jQuery(document).ready(function(){
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 0) {
				jQuery('.top-head').addClass('sticky-header');
			} else {
				jQuery('.top-head').removeClass('sticky-header');
			}
		});
	});

});

/* ========================================================= */
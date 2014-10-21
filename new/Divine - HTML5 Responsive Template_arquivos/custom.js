/**
 *   0- Preloader
 *   1- Main menu
 *   2- Mobile menu
 *   3- Video wrapper
 *   4- Flex slider
 *   5- Owl Carousel
 *   6- Color Box
 *   7- Scroll to top
 *   8- Bootstrap Collapse
 *   9- NiceScroll
 *   10- Masonry
 *   11- Portfolio Filter
 *   12- Google Map
 *   13- Validate Form
     14- Single-author-Filter
     15- Fraction Slider
     16- Fix css ie8
     17- Wow.js
 *-----------------------------------------------------------------
 **/
 

"use strict";

/* =========================================================
0. Preloader
============================================================ */


jQuery(document).ready(function(){

var kopa_variable = {
    "contact": {
        "address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "marker": "/url image"
    },
    "i18n": {
        "VIEW": "View",
        "VIEWS": "Views",
        "validate": {
            "form": {
                "SUBMIT": "Submit",
                "SENDING": "Sending..."
            },
            "name": {
                "REQUIRED": "Please enter your name",
                "MINLENGTH": "At least {0} characters required"
            },
            "email": {
                "REQUIRED": "Please enter your email",
                "EMAIL": "Please enter a valid email"
            },
            "url": {
                "REQUIRED": "Please enter your url",
                "URL": "Please enter a valid url"
            },
            "message": {
                "REQUIRED": "Please enter a message",
                "MINLENGTH": "At least {0} characters required"
            }
        },
        "tweets": {
            "failed": "Sorry, twitter is currently unavailable for this user.",
            "loading": "Loading tweets..."
        }
    },
    "url": {
        "template_directory_uri":""
    }
};
var map;



/* =========================================================
1. Main Menu
============================================================ */

Modernizr.load([
  {
    load: kopa_variable.url.template_directory_uri + 'js/superfish.js',
    complete: function () {

        //Main menu
        jQuery('.main-menu').superfish({
          cssArrows: true
        });

    }
  }
]);

Modernizr.load([
  {
    load: kopa_variable.url.template_directory_uri + 'js/superfish.js',
    complete: function () {

        //Main menu
        jQuery('.secondary-menu').superfish({
          cssArrows: false
        });

    }
  }
]);

/* ============================================
2. Mobile-menu
=============================================== */
    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/jquery.navgoco.js'],
        complete: function () {
            jQuery(".main-menu-mobile").navgoco({
                accordion: true
            });
            jQuery(".main-nav-mobile > .pull").click(function () {
                jQuery(".main-menu-mobile").slideToggle("slow");
            });
            jQuery(".caret").removeClass("caret");
        }
    }]);

/* =========================================================
3. Video wrapper
============================================================ */

if (jQuery(".video-wrapper").length > 0) {
    Modernizr.load([{
        load: kopa_variable.url.template_directory_uri + '/js/fitvids.js',
        complete: function () {
            jQuery(".video-wrapper").fitVids();
        }
    }]);
};


/* =========================================================
4. Flex slider
============================================================ */

Modernizr.load([
  {
    load: kopa_variable.url.template_directory_uri + 'js/jquery.flexslider.js',
    complete: function () {
      jQuery('.kopa-home-slider').flexslider({
        animation: "slide",
        controlNav: false,
        slideshow: false,
        smoothHeight: true,
        prevText: "",
        nextText: "",
        start: function(slider){
          jQuery(".loading").hide();      
          jQuery('.total-slides').text(slider.count);
          jQuery('.current-slide').text(slider.currentSlide + 1);      
        },
        after: function(slider) {
          jQuery('.current-slide').text(slider.currentSlide + 1);
        }
      });
    }
  }
]);


/* =========================================================
5. Owl Carousel
============================================================ */

    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/owl.carousel.js'],
        complete: function () {

            jQuery('.kopa-testimonial-carousel').owlCarousel({
                items : 1,
                itemsDesktop : [1120,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false,
                autoPlay: true
            });  

            
            var owl1 = jQuery(".owl-carousel-1");
            owl1.owlCarousel({
                singleItem: true,
                pagination: false,
                slideSpeed: 600,
                transitionStyle : "fade",
                navigationText: false,
                navigation: true,
                afterInit: function(){
                   jQuery(".loading").hide();    
                }
            });
            
            var owl2 = jQuery(".owl-carousel-2");
            owl2.owlCarousel({
                singleItem: true,
                pagination: true,
                autoPlay: 5000,
                slideSpeed: 1000,
                transitionStyle : "fade",
                navigation: false
            }); 

            var owl3 = jQuery(".owl-carousel-3");
            owl3.owlCarousel({
                singleItem: true,
                pagination: true,
                autoPlay: 5000,
                slideSpeed: 1000,
                transitionStyle : "fade",
                navigation: false
            }); 

            var owl4 = jQuery(".owl-carousel-4");
            owl4.owlCarousel({
                items: 4,
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });

            var owl5 = jQuery(".owl-carousel-5");
            owl5.owlCarousel({
                singleItem: true,
                pagination: true,
                slideSpeed: 1000,
                transitionStyle : "backSlide",
                navigation: false
            });

            var owl6 = jQuery(".owl-carousel-6");
            owl6.owlCarousel({
                singleItem: true,
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });

            var owl7 = jQuery(".owl-carousel-7");
            owl7.owlCarousel({
                items: 4,
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });

            var owl8 = jQuery(".owl-carousel-8");
            owl8.owlCarousel({
                items: 3,
                itemsDesktop: [1024, 3],
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });

            var owl9 = jQuery(".owl-carousel-9");
            owl9.owlCarousel({
                singleItem: true,
                pagination: false,
                slideSpeed: 600,
                navigationText: false,
                navigation: true
            });

            jQuery('.owl-prev').addClass('fa fa-angle-left');
            jQuery('.owl-next').addClass('fa fa-angle-right');
            jQuery('.owl-carousel-1 .owl-prev').removeClass('fa-angle-left').addClass('fa-caret-left');
            jQuery('.owl-carousel-1 .owl-next').removeClass('fa-angle-right').addClass('fa-caret-right');
        }
    }])



/* =========================================================
6. Color Box
============================================================ */

Modernizr.load([
{
  load: kopa_variable.url.template_directory_uri + 'js/jquery.colorbox.js',
  complete: function () {
    jQuery(".group1").colorbox({rel:'group1'});
    jQuery(".group2").colorbox({rel:'group2'});
    jQuery(".group3").colorbox({rel:'group3'});
    jQuery(".group4").colorbox({rel:'group4'});
    jQuery(".group5").colorbox({rel:'group5'});
    jQuery(".group6").colorbox({rel:'group6'});
    jQuery(".group7").colorbox({rel:'group7'});
    jQuery(".group8").colorbox({rel:'group8'});
    jQuery(".group9").colorbox({rel:'group9'});
    jQuery(".group10").colorbox({rel:'group10'});
    jQuery(".group11").colorbox({rel:'group11'});
    jQuery(".group12").colorbox({rel:'group12'});
  }
}
]);

/* =========================================================
7. Scroll to top
============================================================ */

    // hide #back-top first
    jQuery("#back-top").hide();
    
    // fade in #back-top
    jQuery(function () {
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 200) {
                jQuery('#back-top').fadeIn();
            } else {
                jQuery('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        jQuery('#back-top a').click(function () {
            jQuery('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

/* =========================================================
8. BOOTSTRAP COLLAPSE
============================================================ */

var panel_titles = jQuery('.panel-title a');
    panel_titles.addClass("collapsed");
    jQuery('.panel-heading.active').find(panel_titles).removeClass("collapsed");
    if (panel_titles.length > 0) {
        panel_titles.click(function() {
            parent = jQuery(this).attr('data-parent');
            //ACCORDION
            if (undefined !== parent) {
                var obj_actived = jQuery(parent).find('.panel-heading.active');
                obj_actived.removeClass('active');
                obj_actived.find('span.b-collapse').html('+');
                if (jQuery(this).hasClass('collapsed')) {
                    jQuery(this).parents('.panel-heading').addClass('active');
                    jQuery(this).find('span.b-collapse').html('-');
                } else {
                    jQuery(this).parents('.panel-heading').removeClass('active');
                    jQuery(this).find('span.b-collapse').html('+');
                }
            } else {
            //TOGGLE
                parent = jQuery(this).parents('.panel-heading');
                if (parent.hasClass('active')) {
                    parent.removeClass('active');
                    jQuery(this).find('span.b-collapse').html('+');
                } else {
                    parent.addClass('active');
                    jQuery(this).find('span.b-collapse').html('-');
                }
            }
        });
    }

 /* =========================================================
Toggle
============================================================ */
 
 jQuery('#toggle .collapse').collapse({
  toggle: false
});  



    /* =========================================================
10. masonry
============================================================ */

    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/masonry.pkgd.js', kopa_variable.url.template_directory_uri + 'js/imagesloaded.js'],
        complete: function () {
            var jQuerymasonry1 = jQuery('.kopa-blog-masonry-widget > ul');
            imagesLoaded(jQuerymasonry1, function () {
                jQuerymasonry1.masonry({
                    columnWidth: 1,
                    itemSelector: '.ms-item1'
                });
                jQuerymasonry1.masonry('bindResize')
            });
        }
    }]);

   /* =========================================================
11. Portfolio Filter
============================================================ */

    

   /* =========================================================
11. Portfolio Filter
============================================================ */

    Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/jquery.imagesloaded.js',kopa_variable.url.template_directory_uri + 'js/jquery.wookmark.js'],
        complete: function () {
                jQuery('.portfolio-list-item').imagesLoaded(function() {
                // Prepare layout options.
                var options = {
                  autoResize: true, // This will auto-update the layout when the browser window is resized.
                  container: jQuery('.portfolio-container'), // Optional, used for some extra CSS styling
                  offset: 0, // Optional, the distance between grid items
                  fillEmptySpace: true // Optional, fill the bottom of each column with widths of flexible height
                };

                // Get a reference to your grid items.
                var handler = jQuery('.portfolio-list-item li'),
                    filters = jQuery('.filters-options li');

                // Call the layout function.
                handler.wookmark(options);

                /**
                 * When a filter is clicked, toggle it's active state and refresh.
                 */
                var onClickFilter = function(event) {
                  var item = jQuery(event.currentTarget),
                      activeFilters = [];

                  if (!item.hasClass('active')) {
                    filters.removeClass('active');
                  }
                  item.toggleClass('active');

                  // Filter by the currently selected filter
                  if (item.hasClass('active')) {
                    activeFilters.push(item.data('filter'));
                  }

                  handler.wookmarkInstance.filter(activeFilters);
                }

                // Capture filter click events.
                filters.click(onClickFilter);
              });


            jQuery('.portfolio-list').imagesLoaded(function() {
                // Prepare layout options.
                var options = {
                  autoResize: true, // This will auto-update the layout when the browser window is resized.
                  container: jQuery('.portfolio-container2'), // Optional, used for some extra CSS styling
                  offset: 0, // Optional, the distance between grid items
                  fillEmptySpace: true // Optional, fill the bottom of each column with widths of flexible height
                };

                // Get a reference to your grid items.
                var handler = jQuery('.portfolio-list > li'),
                    filters = jQuery('.filters-options2 li');

                // Call the layout function.
                handler.wookmark(options);

                /**
                 * When a filter is clicked, toggle it's active state and refresh.
                 */
                var onClickFilter = function(event) {
                  var item = jQuery(event.currentTarget),
                      activeFilters = [];

                  if (!item.hasClass('active')) {
                    filters.removeClass('active');
                  }
                  item.toggleClass('active');

                  // Filter by the currently selected filter
                  if (item.hasClass('active')) {
                    activeFilters.push(item.data('filter'));
                  }

                  handler.wookmarkInstance.filter(activeFilters);
                }

                // Capture filter click events.
                filters.click(onClickFilter);
              });
        }
    }]);

/* =========================================================
12. Google Map
============================================================ */

var map;
if (jQuery('.kopa-map').length > 0) {
    Modernizr.load([{
        load: ['js/gmaps.js'],
            complete: function () {
          var id_map = jQuery('.kopa-map').attr('id');
          var lat = parseFloat(jQuery('.kopa-map').attr('data-latitude'));
          var lng = parseFloat(jQuery('.kopa-map').attr('data-longitude'));
          var place = jQuery('.kopa-map').attr('data-place');

      map = new GMaps({
          el: '#'+id_map,
          lat: lat,
          lng: lng,
          zoomControl : true,
          zoomControlOpt: {
              style : 'SMALL',
              position: 'TOP_LEFT'
          },
          panControl : false,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false
        });
        map.addMarker({
          lat: lat,
            lng: lng,
          title: place
        });
        }
    }]);
};

/* =========================================================
13. Validate Form
============================================================ */

    if (jQuery('.contact-form').length >0) {
        Modernizr.load([
          {
            load:['js/jquery.form.js','js/jquery.validate.js'],
            complete: function () {
                jQuery('.contact-form').validate({
                    // Add requirements to each of the fields
                    rules: {
                        name: {
                            required: true,
                            minlength: 2
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        phone: {
                            required: true,
                            phone: true
                        },
                        message: {
                            required: true,
                            minlength: 10
                        }
                    },
                    // Specify what error messages to display
                    // when the user does something horrid
                    messages: {
                        name: {
                            required: "Please enter your name.",
                            minlength: jQuery.format("At least {0} characters required.")
                        },
                        email: {
                            required: "Please enter your email.",
                            email: "Please enter a valid email."
                        },
                        phone: {
                            required: "Please enter your phone.",
                            url: "Please enter a valid phone."
                        },
                        message: {
                            required: "Please enter a message.",
                            minlength: jQuery.format("At least {0} characters required.")
                        }
                    },
                    // Use Ajax to send everything to processForm.php
                    submitHandler: function(form) {
                        jQuery("#input-submit").attr("value", "Sending...");
                        jQuery(form).ajaxSubmit({
                            success: function(responseText, statusText, xhr, jQueryform) {
                                jQuery("#response").html(responseText).hide().slideDown("fast");
                                jQuery("#input-submit").attr("value", "Submit");
                            }
                        });
                        return false;
                    }
                });
            }
          }
        ]);
    };
    /*** comment form ***/
    if (jQuery('#comments-form').length >0) {
        Modernizr.load([
          {
            load:['js/jquery.form.js','js/jquery.validate.js'],
            complete: function () {
                jQuery('#comments-form').validate({
                    // Add requirements to each of the fields
                    rules: {
                        name: {
                            required: true,
                            minlength: 2
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        phone: {
                            required: true,
                            phone: true
                        },
                        message: {
                            required: true,
                            minlength: 10
                        }
                    },
                    // Specify what error messages to display
                    // when the user does something horrid
                    messages: {
                        name: {
                            required: "Please enter your name.",
                            minlength: jQuery.format("At least {0} characters required.")
                        },
                        email: {
                            required: "Please enter your email.",
                            email: "Please enter a valid email."
                        },
                        phone: {
                            required: "Please enter your phone.",
                            url: "Please enter a valid phone."
                        },
                        message: {
                            required: "Please enter a message.",
                            minlength: jQuery.format("At least {0} characters required.")
                        }
                    },
                    // Use Ajax to send everything to processForm.php
                    submitHandler: function(form) {
                        jQuery("#input-submit").attr("value", "Sending...");
                        jQuery(form).ajaxSubmit({
                            success: function(responseText, statusText, xhr, jQueryform) {
                                jQuery("#response").html(responseText).hide().slideDown("fast");
                                jQuery("#input-submit").attr("value", "Submit");
                            }
                        });
                        return false;
                    }
                });
            }
          }
        ]);
    };

/* ============================================
14. Single-author-Filter
=============================================== */

    jQuery('.social-filter > div span').click(function () {
        if (jQuery(".social-filter ul").is(":hidden")) {
            jQuery(".social-filter ul").slideDown("slow");
        } else {
            jQuery(".social-filter ul").slideUp();
        }
    });
  
/* ============================================
15. Fraction Slider
=============================================== */

      Modernizr.load([{
        load: [kopa_variable.url.template_directory_uri + 'js/jquery.fractionslider.js'],
        complete: function () {
            var fr1 = jQuery('.kopa-home-slider-3-widget .slider');
            fr1.fractionSlider({
                'fullWidth':            true,
                'controls':             true, 
                'pager':                true,
                'responsive':           true, 
                'dimensions':           "1366,453",
                'increase':             false,
                'pauseOnHover':         true,
                'slideEndAnimation':    true,
                'slideTransitionSpeed' : 400,
                'backgroundSpeed' : 400,
                'timeout' : 400
            });

            var fr2 = jQuery('.kopa-home-slider-4-widget .slider');
            fr2.fractionSlider({
                'fullWidth':            false,
                'controls':             true, 
                'pager':                true,
                'responsive':           true, 
                'dimensions':           "1150,434",
                'increase':             false,
                'pauseOnHover':         true,
                'slideEndAnimation':    true,
                'slideTransitionSpeed' : 400,
                'backgroundSpeed' : 400,
                'timeout' : 400
            });

            var fr3 = jQuery('.kopa-home-slider-5-widget .slider');
            fr3.fractionSlider({
                'fullWidth':            false,
                'controls':             true, 
                'pager':                true,
                'responsive':           true, 
                'dimensions':           "1366,434",
                'increase':             false,
                'pauseOnHover':         true,
                'slideEndAnimation':    true,
                'slideTransitionSpeed' : 400,
                'backgroundSpeed' : 400,
                'timeout' : 400
            });

            jQuery('.fraction-slider .prev').addClass('fa fa-angle-left');
            jQuery('.fraction-slider .next').addClass('fa fa-angle-right');
        }
    }]);

/* =========================================================
16. Fix css ie8
============================================================ */
    jQuery(".e-heading p:last-child").css("margin-bottom", "0");
    jQuery(".kopa-area-1 .widget:last-child.parallax, .kopa-area-2 .widget:last-child.parallax, .kopa-area-2 .widget:last-child.kopa-portfolio-2-widget, .article-list-3 > ul > li:last-child").css("margin-bottom", "0 !important");
    jQuery(".kopa-parallax-2-widget .ms-item1:nth-child(2)").css("background", "url(images/background/bg/6.png);");

/* =========================================================
17. Wow
============================================================ */
function mobilecheck() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return false;
    }
    return true;
}
Modernizr.load([
{
  load: 'js/jquery.wow.js',
  complete: function () {
    if (mobilecheck()) {
        //Wow js animation
        new WOW().init();
        jQuery("wow").addClass("animated");
    }
  }
}
]);



/* =========================================================
18. Sticky menu
============================================================ */ 

var sticky = document.querySelector('.kopa-header-bottom ');
var origOffsetY = sticky.offsetTop;

function onScroll(e) {
    window.scrollY >= origOffsetY ? sticky.classList.add('fixed') :
        sticky.classList.remove('fixed');
}

document.addEventListener('scroll', onScroll);


});
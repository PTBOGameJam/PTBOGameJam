/*
Name: 			Theme Initializer
Written by: 	JanXcode Themes - (http://www.janxcode.com)
Version: 		1.0
*/

(function() {

	"use strict";

	var Theme = {

		initialized: false,

		initialize: function() {

			if (this.initialized) return;
			this.initialized = true;

			this.build();
			this.events();

		},

		build: function() {

			//Items on ready
			this.onReady();

			//Items on load
			this.onLoad();

			// Animation
			this.animation();

			// Tabs
			//this.tabs();

			// Lightbox
			this.prettyPhoto();

			// Parallax
			this.parallax();

			//Bouncy
			this.bouncy();

		},

		events: function() {



		},


		//Items on Ready
		onReady: function(){

			// Menu Active
			var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
				 jQuery(".menu > li").each(function(){
					  if(jQuery(this).find("a").attr("href") == pgurl || jQuery(this).find("a").attr("href") == '' )
					  jQuery(this).addClass("active");
				 });


		},
		//Items on windows load
		onLoad: function(){

			jQuery(window).on("load",function(){
				jQuery('.gj-parallax-fullwidth').css({'height':((jQuery(window).height()))+'px'});
			});

			jQuery(window).resize(function(){ // On resize
				jQuery('.gj-parallax-fullwidth').css({'height':((jQuery(window).height()))+'px'});

			});

		},

		animation:function(){

			// Animation Appear
			$("[data-appear-animation]").each(function() {

				var $this = $(this);

				$this.addClass("appear-animation");

				if(!$("html").hasClass("no-csstransitions") && $(window).width() > 767) {

					$this.appear(function() {

						var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);

						if(delay > 1) $this.css("animation-delay", delay + "ms");
						$this.addClass($this.attr("data-appear-animation"));

						setTimeout(function() {
							$this.addClass("appear-animation-visible");
						}, delay);

					}, {accX: 0, accY: -150});

				} else {

					$this.addClass("appear-animation-visible");

				}

			});


			//Sill Bar
			// Animation Progress Bars
			$("[data-progress-animate]").each(function() {

				var $this = $(this);

				$this.appear(function() {

					var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);

					if(delay > 1) $this.css("animation-delay", delay + "ms");
					$this.addClass($this.attr("data-appear-animation"));

					setTimeout(function() {

						$this.animate(
						{
							width: $this.attr("data-progress-animate")
						}, 1500, "easeOutQuad", function() {
							$this.find(".percenttext").animate({opacity: 1,left:$this.attr("data-progress-animate")}, 500, "easeOutQuad");
						});

					}, delay);

				}, {accX: 0, accY: -50});

			});


			//circle Progressbar
			jQuery('.circliful').appear();

		},

		tabs:function(){


		 jQuery('#Day').easyResponsiveTabs({
			type: 'horizontal', //Types: default, vertical, accordion
			width: 'auto', //auto or any width like 600px
			fit: true, // 100% fit in a container
			closed: 'accordion', // Start closed if in accordion view
			tabidentify: 'parenttab_1'

		 });

		 jQuery('#ChildTab-1').easyResponsiveTabs({
			type: 'horizontal', //Types: default, vertical, accordion
			width: 'auto', //auto or any width like 600px
			fit: true, // 100% fit in a container
			tabidentify: 'childtab_1'

		 });

		 jQuery('#ChildTab-2').easyResponsiveTabs({
			type: 'horizontal', //Types: default, vertical, accordion
			width: 'auto', //auto or any width like 600px
			fit: true, // 100% fit in a container
			tabidentify: 'childtab_1'

		 });

		 jQuery('#ChildTab-3').easyResponsiveTabs({
			type: 'horizontal', //Types: default, vertical, accordion
			width: 'auto', //auto or any width like 600px
			fit: true, // 100% fit in a container
			tabidentify: 'childtab_1'

		 });



		},
		prettyPhoto: function(){

			var prettyPhoto_parameters = {
					animation_speed: 'fast',
					slideshow: false, /* false OR interval time in ms */
					theme:'dark_square',
					opacity: 1,
					show_title:true, /* true/false */
					allow_resize: true, /* Resize the photos bigger than viewport. true/false */
					default_width: 920,
					default_height: 540,
				  counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
					hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
					wmode: 'opaque', /* Set the flash wmode attribute */
					autoplay: true, /* Automatically start videos: True/False */
					modal: false, /* If set to true, only the close button will close the window */
					overlay_gallery: true,
					social_tools: ''
				};

				jQuery('a[data-rel^="prettyPhoto"]').prettyPhoto(prettyPhoto_parameters); //prettyPhoto_parameters

		},

		parallax: function(){

		jQuery('.parallax,.gj-page-header-parallax').scrolly({bgParallax: true});

		},

		bouncy: function(){
			checkScrolling($('.cd-pricing-body'));
			$(window).on('resize', function(){
				window.requestAnimationFrame(function(){checkScrolling($('.cd-pricing-body'))});
			});
			$('.cd-pricing-body').on('scroll', function(){
				var selected = $(this);
				window.requestAnimationFrame(function(){checkScrolling(selected)});
			});

			function checkScrolling(tables){
				tables.each(function(){
					var table= $(this),
						totalTableWidth = parseInt(table.children('.cd-pricing-features').width()),
						tableViewport = parseInt(table.width());
					if( table.scrollLeft() >= totalTableWidth - tableViewport -1 ) {
						table.parent('li').addClass('is-ended');
					} else {
						table.parent('li').removeClass('is-ended');
					}
				});
			}

			//switch from monthly to annual pricing tables
			bouncy_filter($('.gj-pricing-container'));

			function bouncy_filter(container) {
				container.each(function(){
					var pricing_table = $(this);
					var filter_list_container = pricing_table.children('.gj-pricing-switcher'),
						filter_radios = filter_list_container.find('input[type="radio"]'),
						pricing_table_wrapper = pricing_table.find('.gj-pricing-wrapper');

					//store pricing table items
					var table_elements = {};
					filter_radios.each(function(){
						var filter_type = $(this).val();
						table_elements[filter_type] = pricing_table_wrapper.find('li[data-type="'+filter_type+'"]');
					});

					//detect input change event
					filter_radios.on('change', function(event){
						event.preventDefault();
						//detect which radio input item was checked
						var selected_filter = $(event.target).val();

						//give higher z-index to the pricing table items selected by the radio input
						show_selected_items(table_elements[selected_filter]);

						//rotate each gj-pricing-wrapper
						//at the end of the animation hide the not-selected pricing tables and rotate back the .gj-pricing-wrapper

						if( !Modernizr.cssanimations ) {
							hide_not_selected_items(table_elements, selected_filter);
							pricing_table_wrapper.removeClass('is-switched');
						} else {
							pricing_table_wrapper.addClass('is-switched').eq(0).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
								hide_not_selected_items(table_elements, selected_filter);
								pricing_table_wrapper.removeClass('is-switched');
								//change rotation direction if .gj-pricing-list has the .gj-bounce-invert class
								if(pricing_table.find('.gj-pricing-list').hasClass('gj-bounce-invert')) pricing_table_wrapper.toggleClass('reverse-animation');
							});
						}
					});
				});
			}
			function show_selected_items(selected_elements) {
				selected_elements.addClass('is-selected');
			}

			function hide_not_selected_items(table_containers, filter) {
				$.each(table_containers, function(key, value){
					if ( key != filter ) {
						$(this).removeClass('is-visible is-selected').addClass('is-hidden');

					} else {
						$(this).addClass('is-visible').removeClass('is-hidden is-selected');
					}
				});
			}
		},
	};

	Theme.initialize();

})();

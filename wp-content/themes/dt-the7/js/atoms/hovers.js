
/* #Images Styling & Hovers
================================================== */
	/* !Append tag </i> to rolovers*/
	$.fn.addRollover = function() {
		return this.each(function() {
			var $this = $(this);
			if ($this.hasClass("this-ready")) {
				return;
			}

			$this.append("<i></i>");
			if($this.find(".rollover-thumbnails").length){
				$this.addClass("rollover-thumbnails-on");
			}
			if($this.parent().find(".links-container").length){
				$this.addClass("rollover-buttons-on");
			}

			$this.addClass("this-ready");
		});
	};
	$(".rollover, .rollover-video, .post-rollover, .rollover-project .show-content, .vc-item .vc-inner > a").addRollover();

	/* !- Grayscale */
	$(".filter-grayscale .slider-masonry").on("mouseenter tap", function(e) {
		if(e.type == "tap") {
			e.stopPropagation();
		};
		$(this).addClass("dt-hovered");
	});

	$(".filter-grayscale .slider-masonry").on("mouseleave", function(e) {
		$(this).removeClass("dt-hovered");
	});


	/* #Hover layouts
	================================================== */

	/*!-Scale in hover*/
	$.fn.scaleInHover = function() {
		return this.each(function() {

			var $this = $(this);
			if ($this.hasClass("scale-ready")) {
				return;
			}
			var $img = $this.find("img.preload-me"),
				imgWidth = parseInt($img.attr('width')),
				imgHeight = parseInt($img.attr('height')),
				imgRatio = imgWidth/imgHeight;
			if(imgRatio < 2 && imgRatio >= 1.5){
				$this.addClass("ratio_3-2");
			}else if(imgRatio < 1.5 && imgRatio >= 1){
				$this.addClass("ratio_4-3");
			}else if(imgRatio < 1 && imgRatio >= 0.75){
				$this.addClass("ratio_3-4");
			}else if(imgRatio < 0.75 && imgRatio >= 0.6){
				$this.addClass("ratio_2-3");
			}else{
				$this.removeClass("ratio_2-3").removeClass("ratio_3-2").removeClass("ratio-2").removeClass("ratio_4-3").removeClass("ratio_3-4");
			};
			if(imgRatio >= 2){
				$this.addClass("ratio-2");
			};
			if(imgRatio == 1){
				$this.removeClass("ratio_2-3").removeClass("ratio-2").removeClass("ratio_3-2").removeClass("ratio_4-3").removeClass("ratio_3-4");
			};

			$this.addClass("scale-ready");
		});
	};
	$(".hover-scale .rollover-project, .hover-scale article.post").scaleInHover();
	/*TOUCH DEVICE*/
	/*!Description on hover show content on click(albums projects touch device)*/

	$(".mobile-false .albums .rollover-content a:not(.portfolio-categories a), .mobile-false .media .rollover-content, .mobile-false .dt-gallery-container .rollover-content").on("click", function(e){
		if ( $(e.target).is("a") ) {return true};
		$(this).siblings("a.dt-pswp-item").first().click();
	});

	$.fn.touchNewHover = function() {
		return this.each(function() {
			var $this = $(this);
			if ($this.hasClass("this-ready")) {
				return;
			}

			if( $(".rollover-content", this).length > 0 || $(".woocom-rollover-content", this).length > 0){
				$body.on("touchend", function(e) {
					$(".mobile-true .rollover-content, .mobile-true .rollover-project, .mobile-true .woocom-rollover-content, .mobile-true .woocom-project").removeClass("is-clicked");
				});
				
				$this.on("touchstart", function(e) {
					origY = e.originalEvent.touches[0].pageY;
					origX = e.originalEvent.touches[0].pageX;
				});
				$this.on("touchend", function(e) {
					var touchEX = e.originalEvent.changedTouches[0].pageX,
						touchEY = e.originalEvent.changedTouches[0].pageY;
					if( origY == touchEY || origX == touchEX ){
			
						if ($this.hasClass("is-clicked")) {
							if($this.find(".dt-gallery-container").length > 0){
								$this.find(".rollover-content").on("click.dtAlbums", function(e){
									$this.find(".rollover-content").off("click.dtAlbums");
									$(this).find("a.dt-gallery-pspw, .dt-trigger-first-pspw, .dt-pswp-item").first().trigger('click');
								});
							}
							if($(this).find(".rollover-click-target.go-to").length > 0){
								window.location.href = $(this).find(".rollover-click-target.go-to").attr('href');
							}else if($(this).hasClass("woocom-project")){
								if ( $(e.target).is(".add_to_cart_button") ) {
									return true
								}else{
									window.location.href = $(this).find(" > a").attr('href');
								}
							}
						} else {

							$('.links-container > a', $this).on('touchend', function(e) {
								e.stopPropagation();
								$this.addClass("is-clicked");
							});
							e.preventDefault();
							$(".mobile-true .rollover-content, .mobile-true .rollover-project, .mobile-true .woocom-rollover-content, .mobile-true .woocom-project").removeClass("is-clicked");
							$this.addClass("is-clicked");
							$this.find(".rollover-content").addClass("is-clicked");
							$this.find(".woocom-rollover-content").addClass("is-clicked");
							return false;
						};
					};
				});
			};

			$this.addClass("this-ready");
		});
	};
	$(".mobile-true .rollover-project, .mobile-true .woocom-project").touchNewHover();


	$.fn.touchWooHoverImage = function() {
		return this.each(function() {
			var $img = $(this);
			if ($img.hasClass("woo-ready")) {
				return;
			}

			$body.on("touchend", function(e) {
				$(".mobile-true .cart-btn-on-hover .woo-buttons-on-img").removeClass("is-clicked");
			});
			var $this = $(this);
			$this.on("touchstart", function(e) { 
				origY = e.originalEvent.touches[0].pageY;
				origX = e.originalEvent.touches[0].pageX;
			});
			$this.on("touchend", function(e) {
				var touchEX = e.originalEvent.changedTouches[0].pageX,
					touchEY = e.originalEvent.changedTouches[0].pageY;
				if( origY == touchEY || origX == touchEX ){
					if ($this.hasClass("is-clicked")) {
						if(!$(e.target).parent().hasClass("woo-buttons")){
							if($(e.target).parent().hasClass("woo-buttons-on-img")){								
								$(e.target).trigger('click');
							}else{
								window.location.href = $this.find("a").first().attr("href");
							}
						}
					} else {
						if(!$(e.target).parent().hasClass("woo-buttons")){
							e.preventDefault();
							$(".mobile-true .cart-btn-on-hover .woo-buttons-on-img").removeClass("is-clicked");
							$this.addClass("is-clicked");
							return false;
						}
					};
				};
			});

			$img.addClass("woo-ready");
		});
	};
	$(".mobile-true .cart-btn-on-hover .woo-buttons-on-img").touchWooHoverImage();
		

	$.fn.touchWooHoverBtn = function() {
		return this.each(function() {

			$body.on("touchend", function(e) {
				$(".mobile-true .cart-btn-on-img .woo-buttons").removeClass("is-clicked");
			});

			var $this = $(this);
			if ($this.hasClass("woo-ready")) {
				return;
			}
			$this.on("touchstart", function(e) { 
				origY = e.originalEvent.touches[0].pageY;
				origX = e.originalEvent.touches[0].pageX;
			});
			$this.on("touchend", function(e) {
				var touchEX = e.originalEvent.changedTouches[0].pageX,
					touchEY = e.originalEvent.changedTouches[0].pageY;
				if( origY == touchEY || origX == touchEX ){
					if ($this.hasClass("is-clicked") || $this.find("a.added_to_cart").length > 0) {
						if($(e.target).parent().hasClass("woo-buttons")){								
							$(e.target).trigger('click');
						}else{
							window.location.href = $this.find("a").first().attr("href");
						}
					} else {
						e.preventDefault();
						$(".mobile-true .cart-btn-on-img .woo-buttons").removeClass("is-clicked");
						$this.addClass("is-clicked");
						return false;
					};
				};
			});

			$this.addClass("woo-ready");
		});
	};
	$(".mobile-true .cart-btn-on-img .woo-buttons").touchWooHoverBtn();

	/*!Trigger post click for blog Overlay (background)/Overlay (gradient) layouts */
    $.fn.triggerPostClick = function() {
        return this.each(function() {
            var $this = $(this);
            if ($this.hasClass("post-ready")) {
                return;
            }

            var $thisSingleLink = $this.find(".post-thumbnail-rollover").first(),
                $thisCategory = $this.find(".entry-meta a, .fancy-date a, .fancy-categories a");

            if( $thisSingleLink.length > 0 ){
                $thisSingleLink.on("click", function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                     if ($thisSingleLink.parents(".ts-wrap").hasClass("ts-interceptClicks")) return;
                });

                var alreadyTriggered = false;

                $this.on("click", function(){

                    if ($this.parents(".ts-wrap").hasClass("ts-interceptClicks")) return;

                    if ( !alreadyTriggered ) {
                        alreadyTriggered = true;

                       // $thisSingleLink.trigger("click");
                         window.location.href = $thisSingleLink.attr('href');
                        
                        alreadyTriggered = false;
                    }
                    return false;
                })
                $this.find($thisCategory).click(function(e) {

                     e.stopPropagation();
                    window.location.href = $thisCategory.attr('href');
                });
            }
            $this.addClass("post-ready");
        });
    };
    $(".mobile-false .content-rollover-layout-list:not(.portfolio-shortcode) .post, .mobile-false .gradient-overlay-layout-list:not(.portfolio-shortcode) .post").triggerPostClick();

   $.fn.touchTriggerPostClick = function() {
        return this.each(function() {
            var $this = $(this);
            if ($this.hasClass("touch-post-ready")) {
                return;
            }
            var $thisSingleLink = $this.find(".post-thumbnail-rollover").first(),
			    $thisCategory = $this.find(".entry-meta a, .fancy-date a, .fancy-categories a"),
			    $thisOfTop = $this.find(".entry-excerpt").height() + $this.find(".post-details").height();

            $body.on("touchend", function(e) {
                $(".mobile-true .post").removeClass("is-clicked");
            });
          
            $this.on("touchstart", function(e) { 
                origY = e.originalEvent.touches[0].pageY;
                origX = e.originalEvent.touches[0].pageX;
            });
            $this.on("touchend", function(e) {
                var touchEX = e.originalEvent.changedTouches[0].pageX,
                    touchEY = e.originalEvent.changedTouches[0].pageY;
                if( origY == touchEY || origX == touchEX ){
                	if($this.parents().hasClass("disable-layout-hover")){
                		if(e.target.tagName.toLowerCase() === 'a'){
                			$(e.target).trigger("click");
                		}else{
                			window.location.href = $thisSingleLink.attr('href');
                		}
                	}else {
						 if ($this.hasClass("is-clicked")) {
	                            window.location.href = $thisSingleLink.attr('href');
	                    } else {
	                        e.preventDefault();
	                       	if(e.target.tagName.toLowerCase() === 'a'){
	                			$(e.target).trigger("click");
	                		}
	                        $(".mobile-ture .post").removeClass("is-clicked");
	                        $this.addClass("is-clicked");
	                        $this.parent().siblings().find(".post").removeClass("is-clicked");
	                        return false;
	                    };
	                };
                };
            });

            $this.addClass("touch-post-ready");
        });
    };
    $(".mobile-true .content-rollover-layout-list:not(.portfolio-shortcode) .post, .mobile-true .gradient-overlay-layout-list:not(.portfolio-shortcode) .post").touchTriggerPostClick();
	
    //Gradient overlap layout
	 $.fn.triggerPostClickOnBefore = function() {
        return this.each(function() {
            var $this = $(this),
            	$thisPar = $this.parents(".post");
            if ($this.hasClass("post-before-ready")) {
                return;
            }

            var $thisSingleLink = $thisPar.find(".post-thumbnail-rollover").first(),
                $thisCategory = $thisPar.find(".entry-meta a, .fancy-date a, .fancy-categories a");

            if( $thisSingleLink.length > 0 ){
                $thisSingleLink.on("click", function(event) {
                    // event.preventDefault();
                    // event.stopPropagation();
                     if ($thisSingleLink.parents(".ts-wrap").hasClass("ts-interceptClicks")) return;
                });

                var alreadyTriggered = false;
                $this.on("mouseenter mousemove", function(e){
                	var elOfTop = $this.offset().top,
                		origY = e.pageY;
                	if((elOfTop - 10) <= origY && (elOfTop + 125) >= (origY)){
                		if(!$thisPar.hasClass("on-hover")){
                			$thisPar.addClass("on-hover");
                		}
                	}else{
                		$thisPar.removeClass("on-hover");
                	}
                });
                
                $this.on("mouseleave", function(e) {
                	var elOfTop = $this.offset().top,
                		origY = e.pageY;
                	$thisPar.removeClass("on-hover");
                });

                $this.on("click", function(){

                   if($thisPar.hasClass("on-hover")){
	                    if ( !alreadyTriggered ) {
	                        alreadyTriggered = true;
	                         window.location.href = $thisSingleLink.attr('href');
	                        
	                        alreadyTriggered = false;
	                    }
	                    return false;
	                }
                })
                $this.find($thisCategory).click(function(e) {
                	if($thisPar.hasClass("on-hover")){
	                    e.stopPropagation();
	                    window.location.href = $thisCategory.attr('href');
	                }
                });
            }
            $this.addClass("post-before-ready");
        });
    };
    
    $(".mobile-false .gradient-overlap-layout-list:not(.portfolio-shortcode) .post-entry-content").triggerPostClickOnBefore();

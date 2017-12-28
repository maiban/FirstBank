var App = {
		
    handleSidebarSlider: function() {
        "use strict";
        $('#sidebar-slides').flexslider({
            animation: "slide",
	        directionNav: false
        });
        $(function() { 
            var resizeEnd;
            $(window).on('resize', function() {
                clearTimeout(resizeEnd);
                resizeEnd = setTimeout(function() {
                    flexsliderResize();
                }, 250);
            });
        });

        $('#landing-slides').flexslider({
            animation: "slide",
			prevText:"",
			nextText:""
        });
        $(function() { 
            var resizeEnd;
            $(window).on('resize', function() {
                clearTimeout(resizeEnd);
                resizeEnd = setTimeout(function() {
                    flexsliderResize();
                }, 250);
            });
        });

        function flexsliderResize(){ 
            if ($('#sidebar-slides').length > 0) {
                $('#sidebar-slides').data('flexslider').resize();
            }
		
            if ($('#landing-slides').length > 0) {
                $('#landing-slides').data('flexslider').resize();
            }
        }
			
    },

    handlePopupSearch: function() {
        "use strict";
        $('.search-trigger').magnificPopup({
            type: 'inline',
            closeOnContentClick: false,
            closeBtnInside: true,
            alignTop: true,
            midClick: false,
            fixedContentPos: true,
            removalDelay: 300,
            mainClass: 'mfp-fade',
            overflowY: "auto",
            closeOnBgClick: false,
            enableEscapeKey: true,
            callbacks: {
                beforeOpen: function() {
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            preloader: false
        });
    },

    handlePopupIframe: function() {
        "use strict";
        $('.iframe-popup-link').magnificPopup({
            type: 'iframe',
            closeOnContentClick: false,
            alignTop: false,
            midClick: false,
            fixedContentPos: true,
            removalDelay: 300,
            mainClass: 'mfp-fade',
            overflowY: "auto",
            closeOnBgClick: true,
            enableEscapeKey: true,
            callbacks: {
                beforeOpen: function() {
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            preloader: false
        });
        $('.ajax-popup-link').magnificPopup({
            type: 'ajax',
            closeOnContentClick: false,
            alignTop: false,
            midClick: false,
            fixedContentPos: true,
            removalDelay: 300,
            mainClass: 'mfp-fade',
            overflowY: "auto",
            closeOnBgClick: true,
            enableEscapeKey: true,
            callbacks: {
                beforeOpen: function() {
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            preloader: false
        });
    },

    handleGoTop: function() {
        "use strict";
        $(window).scroll(function() {
            if ($(this).scrollTop() > 10) {
                $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
            }
        });
        $('.go-top').click(function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 300);
        });
    },
	
    handleParallaxBanner: function() {
        "use strict";
        $(window).scroll(function() {
            var scrolledY = $(window).scrollTop();
            $('.banner-container').css('background-position', 'center ' + ((scrolledY) * 0.73) + 'px');
        });
    },
	
    handleTabHashTag: function() {
        "use strict";
        if (location.hash !== '') {
            $('.nav-tabs a[href="' + location.hash.replace('tab_','') + '"]').tab('show');
        } else {
            $('.nav-tabs a:first').tab('show');
        }

        $('.nav-tabs a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            window.location.hash = 'tab_'+  e.target.hash.substr(1) ; 
            return false;
        });
    },

    handleSearchFilter: function() {
        "use strict";
        var $content = $(".content-search-filter").hide();
        $(".content-search-filter-trigger").on("click", function(){
            $(this).toggleClass("expanded");
            $content.slideToggle();
        });
    },

    handleModalVerticalCenter: function() {
        "use strict";
        function reposition() {
            var modal = $(this),
                dialog = modal.find('.modal-dialog');
            modal.css('display', 'block');
            dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
        }
        $('.modal').on('show.bs.modal', reposition);
        $(window).on('resize', function() {
            $('.modal:visible').each(reposition);
        });
    },

    handleStyleRadioCheck: function() {
        "use strict";
        $('input').iCheck({
          checkboxClass: 'icheckbox_square-green',
          radioClass: 'iradio_square-green',
          increaseArea: '20%'
        });
    },
	
    handleCSTransform: function() {
        "use strict";
        $(window).scroll(function() {
            if ($(document).scrollTop() > 10) {
                $(".cs-holder").addClass("onscroll");
            } else {
                $(".cs-holder").removeClass("onscroll");
            }
        });
    },
	
    handleTabScroll: function() {
        "use strict";
      $('#location-tab.tabs-left > li').on('click', function(){
        $('html, body').animate({
                scrollTop: 600
            }, 300);
      }); 
      $('#content-tab.tabs-left > li').on('click', function(){
        $('html, body').animate({
                scrollTop: 360
            }, 300);
      }); 
      $('#nested-tab.tabs-left > li').on('click', function(){
        $('html, body').animate({
                scrollTop: 360
            }, 300);
      }); 
      $('#nested-tab-2.tabs-left > li').on('click', function(){
        $('html, body').animate({
                scrollTop: 360
            }, 300);
      }); 
      $('.btn-content-search').on('click', function(){
        $('html, body').animate({
                scrollTop: 560
            }, 600);
      }); 
    },
	
    handleDropdownLink: function() {
        "use strict";
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('.page-nav .dropdown-toggle').click(function() {
			var lt = /</g, 
			    gt = />/g, 
			    ap = /'/g, 
			    ic = /"/g;
            var url = $(this).attr('data-Id');
			url = document.getElementById(url).value;
			url = url.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;").replace("script", "");

			if(url.indexOf("?") >= 0){
				window.location = window.location.protocol + "//" + window.location.host + url;
			}else{
				//alert(window.location.protocol + "," + window.location.host + "," + window.location.port + "," + url.split(window.location.protocol + "//" + window.location.host)[1]);
				window.location.href = window.location.protocol + "//" 
								+ window.location.host + url.split(window.location.protocol + "//" + window.location.host)[1];
			}
            return false;
        });
        }
    },
	
    handleTooltip: function() {
        "use strict";
        $(function () {
          $('[data-toggle="tooltip"]').tooltip();
		  $('[data-toggle="popover"]').popover(); 
        });
    },

    handleRandomBackground: function() {
        "use strict";
        $(".banner-about").RandBG({
          ClassPrefix: "bg-about",
          count: 5
        });
        $(".banner-personal").RandBG({
          ClassPrefix: "bg-personal",
          count: 10
        });
        $(".banner-corporate").RandBG({
          ClassPrefix: "bg-corporate",
          count: 10
        });
        $(".banner-digital").RandBG({
          ClassPrefix: "bg-digital",
          count: 10
        });
        $(".banner-exchange").RandBG({
          ClassPrefix: "bg-exchange",
          count: 5
        });
        $(".banner-service").RandBG({
          ClassPrefix: "bg-service",
          count: 5
        });
        $(".banner-real-estate").RandBG({
          ClassPrefix: "bg-real-estate",
          count: 3
        });
        $(".banner-news").RandBG({
          ClassPrefix: "bg-news",
          count: 5
        });
        $(".banner-info").RandBG({
          ClassPrefix: "bg-info",
          count: 5
        });
    },
	
    handleYearSelectDropdown: function() {
        "use strict";
		$('#yearTab').hide();
        $('#yearSelect').on('change', function () {
           $('#yearTab li a').eq($(this).val()).tab('show'); 
        });
    },
	
	handleMatchHeight: function() {
        "use strict";
        $(function() {
            $('.feature-wells .well .col-sm-9').matchHeight();
            $('.product-panel .panel-image').matchHeight();
            $('.product-panel .panel-content').matchHeight();
        });
    },

    init: function() {
        "use strict";
		this.handleSidebarSlider();
        this.handlePopupSearch();
        this.handlePopupIframe();
        this.handleGoTop();
        /*this.handleParallaxBanner();*/
		this.handleTabHashTag();
        this.handleSearchFilter();
        this.handleModalVerticalCenter();
		this.handleCSTransform();
        this.handleStyleRadioCheck();
		this.handleTabScroll();
		this.handleDropdownLink();
		this.handleTooltip();
		this.handleRandomBackground();
		this.handleYearSelectDropdown();
		this.handleMatchHeight();
    }

};
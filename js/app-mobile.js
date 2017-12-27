var AppMobile = {

    checkTouchScreen: function() {
        "use strict";
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('body').addClass('touch-screen');
            return true;
        } else {
            $('body').removeClass('touch-screen');
            return false;
        }
    },

    handleFastClick: function() {
        "use strict";
        window.addEventListener('load', function() {
            FastClick.attach(document.body);
        }, false);
    },
  
    handleHeaderTransform: function() {
        "use strict";
        $(window).scroll(function() {
            if ($(document).scrollTop() > 20) {
                $("#header").removeClass("full-height").addClass("compact-height");
            } else {
                $("#header").removeClass("compact-height").addClass("full-height");
            }
        });
    },

    handleBreadcrumbFixedTop: function() {
        "use strict";
        $(window).scroll(function() {
            if ($(this).scrollTop() > 338) {
                $('#sticky').addClass('fixed');
            } else {
                $('#sticky').removeClass('fixed');
            }
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 420) {
                $('#sticky.branch').addClass('fixed');
            } else {
                $('#sticky.branch').removeClass('fixed');
            }
        });
		
        $(window).scroll(function() {
            if ($(this).scrollTop() > 520) {
                $('#sticky.section-landing').addClass('fixed');
            } else {
                $('#sticky.section-landing').removeClass('fixed');
            }
        });
		
    },
	
    handleTabCollapse: function() {
        "use strict";
	    $('#content-tab').tabCollapse({
    	    tabsClass: 'hidden-xs',
    	    accordionClass: 'visible-xs'
	    });
	    $('#location-tab').tabCollapse({
    	    tabsClass: 'hidden-xs',
    	    accordionClass: 'visible-xs'
	    });
	    $('#nested-tab').tabCollapse({
    	    tabsClass: 'hidden-xs',
    	    accordionClass: 'visible-xs'
	    });
	    $('#nested-tab-2').tabCollapse({
    	    tabsClass: 'hidden-xs',
    	    accordionClass: 'visible-xs'
	    });
	    $('.inner-tabs').tabCollapse({
    	    tabsClass: 'hidden-xs',
    	    accordionClass: 'visible-xs'
	    });
    },

    handleResponsiveTable: function() {
        "use strict";
         $("#table-card").cardtable();
         $("#table-card-2").cardtable();
         $("#table-card-3").cardtable();
         $("#table-card-4").cardtable();
         $("#table-card-5").cardtable();
         $("#table-card-6").cardtable();
         $("#table-card-7").cardtable();
         $("#table-card-8").cardtable();
         $("#table-card-9").cardtable();
         $("#table-card-10").cardtable();
         $("#table-card-11").cardtable();
         $("#table-card-12").cardtable();
         $("#table-card-13").cardtable();
         $("#table-card-14").cardtable();
         $("#table-card-15").cardtable();
         $("#table-card-16").cardtable();
         $("#table-card-17").cardtable();
         $("#table-card-18").cardtable();
         $("#table-card-19").cardtable();
         $("#table-card-20").cardtable();
         $("#table-card-21").cardtable();
         $("#table-card-22").cardtable();
    },
	
    handleOffCanvasMenu: function() {
        "use strict";
        $("#main-menu").mmenu({
			screenReader: {
               "aria": true,
			   "text": true
            },
			keyboardNavigation: {
               "enable" : "default",
			   "enhance": true
            },
			setSelected: true,
			selectedClass: "active",
            /*"navbars": [{
                "position": "top",
                "content": [
                    "searchfield"
                ]
            }],*/
            "navbar": {
                "title": "選單"
            },
            "extensions": [
                "theme-dark",
                "effect-panels-slide-100",
                "pageshadow"
            ],
            "searchfield": {
                "placeholder": "搜尋選單",
                "noResults": "沒有找到您要找的項目",
                "add": true
            },
            "offCanvas": {
                "position": "right"
            },
            "autoHeight": true,
            "dividers": true,
            "slidingSubmenus": true,
            "sectionIndexer": true,
        }, {
         classNames: {
			selected: "active"
         }
        });
    },


    init: function() {
        "use strict";
		this.checkTouchScreen();
        this.handleFastClick();
        this.handleHeaderTransform();
        this.handleBreadcrumbFixedTop();
        this.handleTabCollapse();
		this.handleResponsiveTable();
        this.handleOffCanvasMenu();
    }

};
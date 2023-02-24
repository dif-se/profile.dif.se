$( document ).ready(function() {

/***** Top navigation mobile behaviour *****/
	// When clicked toggle navigation
	$( "#top-nav-toggle" ).click(function() {
		// Target the navigation and toggles it with slide animation 
		$( ".top-nav-links" ).fadeToggle( "fast", function() { 
		});
	});

	$("#menu-toggle").click(function() {
		// Target the navigation and toggles it with slide animation 
		$(".menu").fadeToggle( "fast");
		$('.menu').toggleClass('hide');
	});
	
	if ($('.menu').hasClass('hide')) {
		$("#menu-icon").attr("src","img/global/menu-icon.svg");
	} else {
		$("#menu-icon").attr("src","img/global/menu-close.svg");
	}


/***** Fixed side navigation when scrolled to certain position *****/
	var sideNavDistance = $('.nav-side-bg').offset().top - 0;
    $window = $(window);

	$window.scroll(function() {
	    if ($window.scrollTop() >= sideNavDistance) {
	    	$('.nav-side-bg').css({
			'position': 'fixed',
			'top': '0'
			});
			$('.nav-side').css({
			'padding-top': '125px'
			});
		} else if ($window.scrollTop() <= sideNavDistance){
			$('.nav-side-bg').css({
			'position': 'absolute',
			'top': 'auto'
			});
			$('.nav-side').css({
			'padding-top': '50px'
			});
		}
	});

/***** Scrollspy on side navigation *****/

	// Cache selectors
	var lastId,
	    topMenu = $(".nav-side"),
	    topMenuHeight = 87,
	    
	    // All list items
	    menuItems = topMenu.find("a"),
	    
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+50;
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 1000); //Animation Speed
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       console.log(id);
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }                   
	});

/***** Hide show sub-levels on side navigation when active 
	$(window).on("load scroll",function(e){
		$('.nav-side ul').each(function(){
			console.log(this);
		    if($(this).prev('li').hasClass('active') || $(this).children('li').hasClass('active')) {
		    	$(this).show();
		    } else {
		    	$(this).hide();
		    }
		}); 
	});
*****/
































});
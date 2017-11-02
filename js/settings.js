
	(function() {
		"use strict";
	// ----------------  01. Preloader     ----------------------------
	// ----------------------------------------------------------------
	$(window).load(function() {
		$("#loader").fadeOut();
		$("#mask").delay(1000).fadeOut("slow");
	});
	// ----------------  02. Scroll To Top   --------------------------
	// ----------------------------------------------------------------
		$('a[href*=#]:not([href=#])').on('click',function() {
			$('.menu-cont li a').parent().removeClass('active');
			$(this).parent().addClass('active');
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
	
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
	});
	
	// ---------   03. Adding fixed position to header   -------------- 
	// ----------------------------------------------------------------
	
	$(document).on('scroll',function() {
		 var header_area = $('.header-area');
		 if ($(document).scrollTop() >= 1) {
		   header_area.addClass('navbar-fixed-top');
		 } else {
		   header_area.removeClass('navbar-fixed-top');
		 }
	 });
	
	// -------------   04. Menu Side Panel   --------------------------
	// ----------------------------------------------------------------
  		var menuwidth  = 240; // pixel value for sliding menu width
  		var menuspeed  = 400; // milliseconds for sliding menu animation time
  
  		var $bdy       = $('body');
  		var $container = $('body');
  		var $burger    = $('#side-panel-menu');
 	 	var negwidth   = "-"+menuwidth+"px";
  		var poswidth   = menuwidth+"px";
  
  		$('.mob-icon').on('click',function(e){
    	if($bdy.hasClass('openmenu')) {
      	jsAnimateMenu('close');
    	} else {
      	jsAnimateMenu('open');
    	}
  	 });
  
 	 $('.overlay').on('click', function(e){
    		if($bdy.hasClass('openmenu')) {
     		jsAnimateMenu('close');
   			}
  	 });
  
  	 $('a[href$="#"]').on('click', function(e){
    		e.preventDefault();
  	 });
  
  	 function jsAnimateMenu(tog) {
   	 	if(tog == 'open') {
      		$bdy.addClass('openmenu');
      
      		$container.animate({marginRight: negwidth, marginLeft: poswidth}, menuspeed);
     	 	$burger.animate({width: poswidth}, menuspeed);
      		$('.overlay').animate({left: poswidth}, menuspeed);
    		}
    
     if(tog == 'close') {
      		$bdy.removeClass('openmenu');
      
     	 	$container.animate({marginRight: "0", marginLeft: "0"}, menuspeed);
      		$burger.animate({width: "0"}, menuspeed);
      		$('.overlay').animate({left: "0"}, menuspeed);
   		 }
  		}
   	 
	// -----------  05. Banner Settings (flex-slider) -----------------
	// ----------------------------------------------------------------
	
	 $('.flexslider').flexslider({
        animation: "fade",
		autoplay: "false"
      });
	

	 
    // -------------------- 06. Mini Grid -----------------------------
	// ----------------------------------------------------------------

       	 function grid() {
          minigrid({
            container: '.mini-grid-area ',
            item: '.mini-grid-area > div ',
            gutter:3
          });
       	 }

         window.addEventListener('resize', function(){
          	grid();
         });
         grid();
	 // -------------------- 07. Tabs Settings -------------------------
	 // ----------------------------------------------------------------

    $(".tab-content").hide();
    $(".tab-content:first").show();

  	/* if in tab mode */
    $(".tab-menu li").on('click',function() {
		
      $(".tab-content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $(".tab-menu li").removeClass("active");
      $(this).addClass("active");

	  $(".tab-heading").removeClass("current-item");
	  $(".tab-heading[rel^='"+activeTab+"']").addClass("current-item");
	  
    });
	/* if in drawer mode */
	$(".tab-heading").on('click',function() {
      
      $(".tab-content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab-heading").removeClass("current-item");
      $(this).addClass("current-item");
	  
	  $(".tab-menu li").removeClass("active");
	  $(".tab-menu li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	// -------------------- 08. Accordion Settings --------------------
	// ----------------------------------------------------------------
	
    //  Accordion Panels
    $(".accordion div").show();
    setTimeout("$('.accordion div').slideToggle('slow');", 1000);
    $(".accordion .tab").on('click',function() {
        $(this).next(".accordion-panel").slideToggle("slow").siblings(".accordion-panel:visible").slideUp("slow");
        $(this).toggleClass("current");
        $(this).siblings(".tab").removeClass("current");
    });

	//-------------  Accordion Auto  ---------------------------------
	
	$("#accordion-auto div").first().css('display', 'block');
	
	// Get all the links.
	var link = $("#accordion-auto a");
	
	// On clicking of the links do something.
	link.on('click', function(e) {
    e.preventDefault();
    var a = $(this).attr("href");
    $(a).slideDown('slow');
	
    //$(a).slideToggle('fast');
    $("#accordion-auto div").not(a).slideUp('slow');
	});
	
	
	// -------------------- 09. Browse File Settings --------------------
	// ------------------------------------------------------------------

	$('#browse-file').change(function(){
		$('#browse-path').val($(this).val());
	});
	$('#browse-photo').change(function(){
		$('#browse-path').val($(this).val());
	});
	
	/* 
	$(window).scroll(function(){
			if($(window).scrollTop()>650){
				$('.footer-area').show();
				$('.slider').removeClass('fixed');
				$('.search-bar').css('width', '45%');
			}
			else {
				$('.footer-area').hide();
			}
		})
 */
 
})(jQuery);



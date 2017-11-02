
	$(document).ready(function() {
 
  	$("#job-slider").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      pagination : false,
      singleItem:true
      });
     
    });
	$(document).ready(function() {
     
      var owl = $("#owl-demo-testimonial");
     
      owl.owlCarousel({
         
          itemsCustom : [
            [0, 1],
            [480,1],
            [600, 2],
            [700, 2],
            [1000, 2],
            [1200, 2],
            [1400, 2],
            [1600, 2]
          ],
          navigation : true,
		  autoPlay : true,
        stopOnHover : true
     
      });
     
    });





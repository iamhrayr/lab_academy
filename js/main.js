// $(function(){

// 	// init controller
// 	var controller = new ScrollMagic.Controller();

// 	// create a scene
// 	var scene = new ScrollMagic.Scene({
// 		duration: 100,	// the scne should last for a scroll distance of 100px
// 		offset: 50		// start this scene after scrolling for 50px
// 	})
// 	scene.setPin(".lab-svg") // pins the element for the the scene's duration
// 		.addTo(controller); // assign the scene to the controller

// });





$(function() {

  // var controller = new ScrollMagic.Controller();

  // var blockTween = new TweenMax.to('.lab-svg', 1.5, {
  //   backgroundColor: 'red'
  // });

  // var containerScene = new ScrollMagic.Scene({
  //     triggerElement: '.scroll-down-icon'
  //   })
  //   .setTween(blockTween)
  //   .addIndicators()
  //   .addTo(controller);


	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({
		triggerElement: "#intro", 
		triggerHook: "onLeave",
		duration: 900
	})
	.setPin("#intro")
	.addIndicators()
	.addTo(controller);


});
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
    var controller = new ScrollMagic.Controller();

    var tl = new TimelineMax();
    tl.to('#intro-logo', 1.5, {width: '250px'})
        .to('#intro-text', .5, {scale: 1.3, opacity: 0}, '0');


    // freeze top section
	var scene = new ScrollMagic.Scene({
		triggerElement: '#intro', 
		triggerHook: 'onLeave',
		duration: 800
	})
	.setPin("#intro")
    .setTween(tl)
	.addIndicators()
	.addTo(controller);


    // // tweenmax of svg
    // var tm = new TweenMax();
    // tm.to('.lab-svg', 1.5, {width: '250px'})

    // // svg animation
    // var scene = new ScrollMagic.Scene({
    //     triggerElement: '#intro-logo',
    //     triggerHook: 'onLeave',
    //     duration: 400
    // })
    // .setPin(".lab-svg")
    // // .setTween(tm)
    // .addIndicators()
    // .addTo(controller);



});
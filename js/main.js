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

    



    // intro scene
    var tl = new TimelineMax();
    tl.to('#intro-logo', .5, {autoAlpha: .8, y: '-100px'})
        .to('#intro-text', .5, {scale: 1.3, autoAlpha: 0}, '0')
        .fromTo('.lab-svg-wrapper', .7, {y: -30, autoAlpha: 0, scale: .9}, {y: 0, autoAlpha: 1, scale: 1});

	var scene = new ScrollMagic.Scene({
		// triggerElement: '#intro', 
		triggerHook: 'onLeave',
		duration: 800,

	})
	.setPin("#intro")
    .setTween(tl)
	.addIndicators()
	.addTo(controller);

	var scene = new ScrollMagic.Scene({
		// triggerElement: '#intro', 
		offset: 800,
		triggerHook: 'onLeave',
		duration: 800,

	})
	.setPin("#intro")
    // .setTween(tl)
	.addIndicators()
	.addTo(controller);


	// svg & mouse scene
	// var tm = TweenMax.to('.scroll-down-btn', .7, {opacity: 0}) 
	// var scene = new ScrollMagic.Scene({
	// 	offset: 810,
	// 	duration: 200
	// })
	// .setPin('.lab-svg-wrapper')
	// .setTween(tm)
	// .addIndicators()
	// .addTo(controller);

	// svg element scene
	
	// var tm = TweenMax.fromTo('.lab-svg-wrapper', .7, {x: 0}, {x: '50%'}) 
	// var scene = new ScrollMagic.Scene({
	// 	offset: 1200,
	// 	duration: 0
	// })
	// .setPin('.lab-svg-wrapper')
	// .setTween(tm)
	// .addIndicators()
	// .addTo(controller);







});
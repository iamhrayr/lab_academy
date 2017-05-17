$(function() {

    // smooth wheel scroll
    // var $window = $(window);
    // var scrollTime = .5;
    // var scrollDistance = 170;

    // $window.on("mousewheel DOMMouseScroll", function(event){
    //     event.preventDefault(); 
    //     var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    //     var scrollTop = $window.scrollTop();
    //     var finalScroll = scrollTop - parseInt(delta*scrollDistance);
    //     TweenMax.to($window, scrollTime, {
    //         scrollTo : { y: finalScroll, autoKill:true },
    //             ease: Power1.easeOut,
    //             overwrite: 5                            
    //         }
    //     );
    // });



    // ScrollMagic inits
    var controller = new ScrollMagic.Controller();



    // intro scene
    var tl = new TimelineMax()
        .to('#intro-logo', .5, {autoAlpha: .8, y: '-100px'})
        .to('#intro-text', .5, {scale: 1.3, autoAlpha: 0}, '0')
        .fromTo('.lab-svg-wrapper', .7, {y: -30, autoAlpha: 0, scale: .9}, {y: 0, autoAlpha: 1, scale: 1});

    var scene = new ScrollMagic.Scene({
        // triggerElement: '#intro', 
        triggerHook: 'onLeave',
        duration: 800,
    }).setPin("#intro")
        .setTween(tl)
        .addIndicators()
        .addTo(controller);


    var tl = new TimelineMax()
        .to('#intro-logo', 1, {autoAlpha: .8, y: '-700'})
        .to('.lab-svg-wrapper', 1, {y: -470}, '0.1')
        .to('.scroll-down-btn', .5, {scale: 1.5, opacity: 0});

    var scene = new ScrollMagic.Scene({
        // triggerElement: '#intro', 
        offset: 800,
        triggerHook: 'onLeave',
        duration: 1000
    }).setPin("#intro")
        .setTween(tl)
        .addIndicators()
        .addTo(controller);


    var scene = new ScrollMagic.Scene({
        // triggerElement: '#intro', 
        offset: 1800,
        // triggerHook: 'onLeave',
        duration: 0
    }).setPin(".lab-svg-wrapper")
        // .setPin(".about-project")
        // .setTween(tl)
        // .on('end', function(){
        //     new TimelineMax().to('#line, #listen, #analyze, #become', 1, {autoAlpha: .2})
        // })
        .addIndicators()
        .addTo(controller);




   






});
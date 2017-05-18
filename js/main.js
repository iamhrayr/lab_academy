$(function() {

    // smooth wheel scroll
    var $window = $(window);
    var scrollTime = .3;
    var scrollDistance = 200;

    $window.on("mousewheel DOMMouseScroll", function(event){
        event.preventDefault(); 
        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);
        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                overwrite: 5
            }
        );
    });



    // ScrollMagic inits
    var controller = new ScrollMagic.Controller();



    // intro scene
    var tl = new TimelineMax()
        .to('#intro-logo', .5, {autoAlpha: .8, scale: .7, y: '-70px'})
        .to('#intro-text', .5, {scale: 1.3, autoAlpha: 0}, '0')
        .fromTo('.lab-svg-wrapper', .7, {y: -30, autoAlpha: 0, scale: .9}, {y: 0, autoAlpha: 1, scale: '1․5'});

    var scene = new ScrollMagic.Scene({
        // triggerElement: '#intro', 
        triggerHook: 'onLeave',
        duration: 800,
    }).setPin("#intro")
        .setTween(tl)
        // .addIndicators()
        .addTo(controller);


    // var tl = new TimelineMax()
    //     .to('#intro-logo', 2, {autoAlpha: .8, y: '-700'})
    //     .to('.lab-svg-wrapper', 1, {y: -470}, '1')
    //     .to('.scroll-down-btn', .5, {scale: 1.5, opacity: 0});

    // var scene = new ScrollMagic.Scene({
    //     // triggerElement: '#intro', 
    //     offset: 800,
    //     triggerHook: 'onLeave',
    //     duration: 1000
    // })
    //     .setPin("#intro")
    //     .setTween(tl)
    //     .addIndicators()
    //     .addTo(controller);


    // reveal items
    // var tl = new TimelineMax()
    //     .staggerFromTo('.reveal.fade-in', 1.8, {opacity: 0}, {opacity: 1}, .2, '0')
    //     .staggerFromTo('.reveal.fade-down', 1.2, {y: -30, opacity: 0}, {y: 0, opacity: 1}, .2, '0')
    //     .staggerFromTo('.reveal.fade-up', 1.2, {y: 30, opacity: 0}, {y: 0, opacity: 1}, .2, '0');

    // var scene = new ScrollMagic.Scene({
    //     triggerElement: '.reveal',
    //     reverse: false
    // })
    // .setTween(tl)
    // .addTo(controller);



    // var waypoint = new Waypoint({
    //     element: document.querySelector('reveal'),
    //     handler: function(direction) {
    //         console.log('Scrolled to waypoint!')
    //     }
    // })

    // var waypoints = $('#popo').waypoint({
    //     handler: function(direction) {
    //         console.log('asdasd')
    //         // notify(this.element.id + ' hit')
    //     }
    // }, {
    //     offset: 'bottom-in-view'
    // })



    // init wow
    new WOW().init();

   






});
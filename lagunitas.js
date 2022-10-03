const tl = gsap.timeline();

tl.from(" .nav ",{
    y:"-100%",
    ease: "expo.inOut",
    duration :1.5 

})

tl.to(" #mm ",{
    scrollTrigger:{
        trigger:" #mm",
        scroller:"body",
        start:"top 50%",
        scrub:2,

    },
    rotation:-15,
    top:"60%",
    ease: "expo.inOut",
    duration : 2 

})
tl.to(" #mm ",{
    scrollTrigger:{
        trigger:" #mm",
        scroller:"body",
        start:"120% -285%",
        end:"93% 100%",
        scrub:5,
        // markers:true
    },
    scale:.5,
    opacity:0,
    ease: "expo.inOut   1s",
    duration : 2

})
tl.from(" .page2 .left ",{
    scrollTrigger:{
        trigger:" .page2 .left",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:true,
        // markers:true
    },
    y:"20",
    opacity:0,
    ease: "expo.inOut",
    duration:2

})
tl.from(" .page2 .right ",{
    scrollTrigger:{
        trigger:" .page2 .right",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:true,
        // markers:true
    },
    y:"20",
    opacity:0,
    ease: "expo.inOut",
    duration:2

})
tl.from(" .page3 .left",{
    scrollTrigger:{
        trigger:" .page3 .left",
        scroller:"body",
        start:"top 90%",
        end:"top 30%",
        scrub:true,
        // markers:true
    },
    scale:0,
    opacity:0,
    ease: "expo.inOut",
    duration:1

})
tl.from(" .page3 .right",{
    scrollTrigger:{
        trigger:" .page3 .right",
        scroller:"body",
        start:"top 90%",
        end:"top 30%",
        scrub:true,
        // markers:true
    },
    scale:0,
    opacity:0,
    ease: "expo.inOut",
    duration:1

})
tl.from(" .page4 ",{
    scrollTrigger:{
        trigger:" .page4",
        scroller:"body",
        start:"top 100%",
        end:"top 20%",
        scrub:true,
        // markers:true
    },
    scale:0,
    opacity:0,
    ease: "expo.inOut",
    duration:1

})
tl.to(" .page5 .bottles ",{
    scrollTrigger:{
        trigger:" .page5 .bottles",
        scroller:"body",
        start:"top 90%",
        end:"top 10%",
        scrub:true,
        // markers:true
    },
    top:"35%",
    ease: "expo.inOut",
    duration:1

})
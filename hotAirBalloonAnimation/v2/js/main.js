document.addEventListener('DOMContentLoaded', function(){
    console.log(('loaded'));

    gsap.to(".balloon", {
        duration: 10, 
        motionPath:{
            path:[
                {left: -160, top: -50, scale: .2},
                {left: 380, scale: .3},
                {left: 65, top: 20, scale: +1}
            ]
        }
    });
    gsap.to(".sun", {duration: 12, scale: .2, scale: 1,
        motionPath:{
            path:[
                {scale: .10},
                {scale: 1},
                {scale: .10},
                {scale: 1}
            ]
        }});
    gsap.to(".top-mountains", {duration: 1, bottom: 80});
    gsap.to(".mountains", {duration: 1, bottom: 36});
    gsap.to(".left-tree", {duration: 1, bottom: 35});
    gsap.to(".right-tree", {duration: 1, bottom: 35});
    gsap.to(".bottom", {duration: 1, bottom: -10});
});
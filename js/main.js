import $ from 'jquery'
import Typed from 'typed.js'
import Rellax from 'rellax'
import anime from 'animejs'

/* Function called once page is loaded */
$(document).ready(() => {
    // Fade in page on page load
    $("body").fadeIn(1000)

    // Arrow animation at beginning
    $('#arrow').hide()

    // Console intro
    consoleType()

    // Call functions on scroll
    $(window).scroll(() => {
        colorNav()
        canvas()
    })

    // Load Parallax Views
    parallaxViews()
})

/* Opaque BG at First Project */
var colorNav = () => {
    let pos = $(window).scrollTop()
    let pj1Pos = $('.pj1').position()
    if (pos >= (pj1Pos.top - 56)) {
        $('.navbar').css('backgroundColor', 'rgba(0,0,0,0.2')
        $('.name-rmdr').hide(300)
    } else {
        $('.navbar').css('backgroundColor', 'transparent')
        $('.name-rmdr').show(300)
    }
}
/* Parallax Views */
var parallaxViews = () => {
    new Rellax('.pj1 .parallax-img', {
        speed: 4,
        center: true
    })

    new Rellax('.pj2 .parallax-img:first-child', {
        speed: 7,
        center: true
    })

    new Rellax('.pj2 .parallax-img:nth-child(2)', {
        speed: 2,
        center: true
    })
}

var drawConsole = () => {
    anime({
        targets: '.draw',
        strokeDashoffset: [anime.setDashoffset, 20],
        easing: 'easeInOutSine',
        duration: 3000,
        delay: 1000,
        direction: 'alternate',
        loop: false,
        update: (anim) => {
            let a = Math.round(anim.progress) / 100
            console.log(a)

            $('.name:eq(0)').css({
                color: `rgba(76, 175, 80,${a})`
            })
            $('.typed-cursor:eq(0)').css({
                backgroundColor: `rgba(255, 255, 255,${a})`
            })

            $('.draw').css({
                fill: `rgba(0, 4, 44,${a})`
            })
            $('.st1').css({
                fill: `rgba(243, 190, 78,${a})`
            })

            $('.st2').css({
                fill: `rgba(235, 104, 93,${a})`
            })

            $('.st3').css({
                fill: `rgba(98, 198, 84,${a})`
            })
        }
    })
}

/* Console Intro */
var consoleType = () => {

    new Typed('.ny', {
        strings: ['<h2 id="intro-title-1">Born in New York</h2>'],
        typeSpeed: 20,
        backSpeed: 20,
        startDelay: 4000,
        cursorChar: '',
        onComplete: (self) => {
            $('.typed-cursor:eq(0)').hide()
            $('.name:eq(1)').show()
            $('.typed-cursor:eq(1)').show()
        }
    })

    new Typed('.sd', {
        strings: ['<h2 id="intro-title-2">Raised in San Diego</h2>'],
        typeSpeed: 20,
        backSpeed: 20,
        startDelay: 5000,
        cursorChar: '',
        onComplete: (self) => {
            $('.typed-cursor:eq(1)').hide()
            $('.name:eq(2)').show()
            $('.typed-cursor:eq(2)').show()
        }
    })

    new Typed('.title', {
        strings: ['<h2 id="intro-title-3">Full Stack Web &amp; Mobile App Developer</h2>'],
        typeSpeed: 20,
        backSpeed: 20,
        startDelay: 6000,
        cursorChar: '',
        onComplete: (self) => {
            $('#arrow').fadeIn(500)
        }
    })
}

var canvas = () => {
    let pos = $(window).scrollTop()
    let pj1Pos = $('.pj1').position()
    let pj2Pos = $('.pj2').position()
    if (pos >= (pj1Pos.top - 56)) {
        anime({
            targets: '.pj1 .project-video',
            translateX: 1000,
            easing: 'spring(1,50,10,5)'
        })

        anime({
            targets: '.pj1 .project-description p',
            translateX: -1000,
            easing: 'spring(1,50,10,5)'
        })
    }
    if (pos >= (pj2Pos.top - 56)) {
        anime({
            targets: '.pj2 .project-video',
            translateX: -1000,
            easing: 'spring(1,50,10,5)'
        })

        anime({
            targets: '.pj2 .project-description p',
            translateX: 1000,
            easing: 'spring(1,50,10,5)'
        })
    }
}

// const $this = $(this),
//     flag = $this.data("clickflag")
// if (!flag) {
//     $('.nav-links-mobile').css('display', 'inline-block')
//     $('.nav-links-mobile').animate({
//         height: '100%'
//     }, 500)
//     $('#top').animate({}, {
//         duration: 500,
//         start: function (always) {
//             $(this).css({
//                 transition: 'ease-in .3s',
//                 transform: 'rotate(45deg) translateY(.7em)'
//             })
//             $('#mid').fadeToggle(200)
//         }
//     })
//     $('#bot').animate({}, {
//         duration: 500,
//         start: function (always) {
//             $(this).css({
//                 transition: 'ease-in .3s',
//                 transform: 'rotate(-45deg) translateY(-.7em)',
//             })
//         }
//     })
// } else {
//     $('.nav-links-mobile').animate({
//         height: 0
//     }, 500, () => {
//         $('.nav-links-mobile').css('display', 'none')
//     })
//     $('#top').animate({}, {
//         duration: 500,
//         start: function (always) {
//             $(this).css({
//                 transition: 'ease-in .3s',
//                 transform: 'rotate(0) translateY(0)'
//             })
//             $('#mid').fadeToggle(500)
//         }
//     })
//     $('#bot').animate({}, {
//         duration: 500,
//         start: function (always) {
//             $(this).css({
//                 transition: 'ease-in .3s',
//                 transform: 'rotate(0) translateY(0)',
//             })
//         }
//     })
// }
// $this.data("clickflag", !flag)
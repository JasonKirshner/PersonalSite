//history.scrollRestoration = "manual"

// FLAGS
var drawn = false
var projectsRevealed = false
var navRevealed = false

/* Function Called Once Page is Loaded */
$(document).ready(() => {
    // Fade In Page On Page Load
    $("body").fadeIn(1000)

    VanillaTilt.init(document.querySelectorAll(".project-video"), {
        max: 1.5,
        speed: 1000,
        scale: 1.01
    })

    typeTitle()

    // Reveals Projects When In View
    $(window).scroll(() => {
        let pos = $(window).scrollTop()
        $('.intro-wrapper').css({
            top: -(pos * .3) + 'px'
        })
        if (!projectsRevealed)
            revealProjects(pos)
        //if (!navRevealed)
        //revealNav(pos)
    })

})

/* Dropdown Navbar Once Projects Fully In View */
var revealNav = () => {
    let pj1Pos = $('#pj1').position()
    // if (pos > pj1Pos.top) {

    $('.navbar').addClass('drop')

    // Draw The Logo SVG
    if (!drawn) {
        drawLogo()
        drawn = true
    }
    navRevealed = true
    //}
}

/* Add Title Divider On Scroll and Fade In */
var revealProjects = (pos) => {
    let pj1Pos = $('#pj1').position()
    let pj2Pos = $('#pj2').position()

    if (pos >= (pj1Pos.top - 170)) {
        $('#pj1 .project-container').fadeIn(1000)
        $('#pj1 .project-title-line').addClass('widen')
    }

    if (pos >= pj2Pos.top - 170) {
        $('#pj2 .project-container').fadeIn(1000)
        $('#pj2 .project-title-line').addClass('widen')
        projectsRevealed = true
    }
}

var drawLogo = () => {
    anime({
        targets: '#j',
        strokeDashoffset: [anime.setDashoffset, 20],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: 500,
        direction: 'alternate',
        loop: false
    })
    anime({
        targets: '#k',
        strokeDashoffset: [anime.setDashoffset, 20],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: 1000,
        direction: 'alternate',
        loop: false
    })
}

var typeTitle = () => {
    new Typed('.intro-name h1', {
        strings: ["Jason Kirshner"],
        startDelay: 500,
        typeSpeed: 20,
        onStart: () => {
            $('.typed-cursor:eq(0)').show()
        },
        onComplete: () => {
            $('.typed-cursor:eq(0)').hide()
            new Typed('.intro-title h1', {
                strings: ["Full Stack Developer"],
                typeSpeed: 15,
                startDelay: 200,
                onComplete: () => {
                    $('#view').css({
                        bottom: 0,
                        opacity: 1
                    })

                    if (!navRevealed)
                        revealNav()
                }
            })
        }
    })
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
//history.scrollRestoration = "manual"

// FLAGS
var drawn = false

/* Function Called Once Page is Loaded */
$(document).ready(() => {
    // Fade In Page On Page Load
    $("body").fadeIn(1000)

    // Reveals Projects When In View
    $(window).scroll(() => {
        let pos = $(window).scrollTop()
        $('.intro-wrapper').css({
            top: -($(this).scrollTop() * 0.2) + 'px'
        })
        revealProjects(pos)
        revealNav(pos)
    })
})

/* Dropdown Navbar Once Projects Fully In View */
var revealNav = (pos) => {
    let pj1Pos = $('#pj1').position()
    if (pos > pj1Pos.top) {

        $('.navbar').addClass('drop')

        // Draw The Logo SVG
        if (!drawn) {
            drawLogo()
            drawn = true
        }
    }
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
    }

    if (pos === 0) {
        $('.project-container').hide()
        $('.project-title-line').removeClass('widen')
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
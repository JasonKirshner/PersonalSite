history.scrollRestoration = "manual"

// FLAGS
var drawn = false
var projectsRevealed = false

// Global Vars
var arrowTarget = '#foot'

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

        revealProjects(pos)

        navPosHighlight(pos)

        arrow(pos)

        navOpacity(pos)
    })

    navButtons()

    mobileMenu()
})

/* Dropdown Navbar Once Projects Fully In View */
var revealNav = () => {
    $('.navbar').addClass('drop')

    // Draw The Logo SVG
    if (!drawn) {
        drawLogo()
        drawn = true
    }
}

/* Add Title Divider On Scroll and Fade In */
var revealProjects = (pos) => {
    if (!projectsRevealed) {
        if (pos >= $('#pj1').position().top - 200) {
            $('#pj1 .project-container').fadeIn(500)
            $('#pj1 .project-title-line').addClass('widen')
        }

        if (pos >= $('#pj2').position().top - 200) {
            $('#pj2 .project-container').fadeIn(500)
            $('#pj2 .project-title-line').addClass('widen')
            projectsRevealed = true
        }
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
                    revealNav()
                }
            })
        }
    })
}

var arrow = (pos) => {
    if (pos >= $('#foot').position().top) {
        $('.nav-links svg').css({
            transform: 'rotate(-180deg)'
        })
        arrowTarget = '#'
    } else {
        $('.nav-links svg').css({
            transform: 'rotate(0deg)'
        })
        arrowTarget = '#foot'
    }
}

var navButtons = (pos) => {
    $('.logo').click(() => {
        location.reload()
    })
    $('.nav-links a:eq(0)').click(() => {
        $('html, body').animate({
            scrollTop: ($('#pj1').offset().top)
        }, 10)
    })

    $('.nav-links a:eq(1)').click(() => {
        $('html, body').animate({
            scrollTop: ($('#pj2').offset().top)
        }, 10)
    })

    $('.nav-links a:last-child').click(() => {
        var tgt
        if (arrowTarget === '#foot')
            tgt = $(arrowTarget).offset().top
        else
            tgt = 0

        $('html, body').animate({
            scrollTop: tgt
        }, 10)
    })
}

var navPosHighlight = (pos) => {
    let pj1Pos = $('#pj1').position().top
    let pj2Pos = $('#pj2').position().top
    let footerPos = $('#foot').position().top

    if (pos >= pj1Pos && pos < pj2Pos)
        $('.nav-links a:eq(0)').css({
            borderBottomColor: 'white'
        })
    else
        $('.nav-links a:eq(0)').css({
            borderBottomColor: ''
        })

    if (pos >= pj2Pos && pos < footerPos)
        $('.nav-links a:eq(1)').css({
            borderBottomColor: 'white'
        })
    else
        $('.nav-links a:eq(1)').css({
            borderBottomColor: ''
        })

    if (pos >= footerPos)
        $('.nav-links a:last-child').css({
            borderBottomColor: 'white'
        })
    else
        $('.nav-links a:last-child').css({
            borderBottomColor: ''
        })
}

var navOpacity = (pos) => {
    if (pos < 400)
        $('.navbar').css({
            backgroundColor: `rgba(0,0,0,${pos/500})`
        })
}

var mobileMenu = () => {
    $('.mobil-nav-menu').click()
}
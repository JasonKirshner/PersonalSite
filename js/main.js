history.scrollRestoration = "manual"

// FLAGS
var drawn = false
var projectsRevealed = false
var reverse

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

    new LazyLoad({
        elements_selector: ".project-video"
    })

    new LazyLoad({
        elements_selector: ".tech-img"
    })

    new LazyLoad({
        elements_selector: ".icon-img"
    })

    new LazyLoad({
        elements_selector: ".ref-img"
    })

    typeTitle()

    // Reveals Projects When In View
    $(window).scroll(() => {
        let pos = $(window).scrollTop()

        revealProjects(pos)

        navPosHighlight(pos)

        arrow(pos)

        navShadow(pos)
    })

    $('#view').click(() => {
        $('html, body').animate({
            scrollTop: ($('#pj1').offset().top - 40)
        }, 10)
    })

    navButtons()

    mobileMenu()

    mobileNavButtons()
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
            //$('#pj1 .project-container').show()
            $('#pj1 .project-title-line').addClass('widen')
        }

        if (pos >= $('#pj2').position().top - 300) {
            //$('#pj2 .project-container').show()
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

var navButtons = () => {
    $('.logo').click(() => {
        location.reload()
    })
    $('.nav-links a:eq(0)').click(() => {
        $('html, body').animate({
            scrollTop: ($('#pj1').offset().top - 40)
        }, 10)
    })

    $('.nav-links a:eq(1)').click(() => {
        $('html, body').animate({
            scrollTop: ($('#pj2').offset().top - 40)
        }, 10)
    })

    $('.nav-links a:last-child').click(() => {
        let tgt
        if (arrowTarget === '#foot')
            tgt = $(arrowTarget).offset().top
        else
            tgt = 0

        $('html, body').animate({
            scrollTop: tgt
        }, 10)
    })
}

var mobileNavButtons = () => {
    $('.nav-links-mobile a:first-child').click(() => {
        $('html, body').animate({
            scrollTop: 0
        }, 10)
        mobileMenuDisplay('hide')
        closeBurger()
    })

    $('.nav-links-mobile a:eq(1)').click(() => {
        $('html, body').animate({
            scrollTop: ($('#pj1').offset().top - 40)
        }, 10)
        mobileMenuDisplay('hide')
        closeBurger()
    })

    $('.nav-links-mobile a:eq(2)').click(() => {
        $('html, body').animate({
            scrollTop: ($('#pj2').offset().top - 40)
        }, 10)
        mobileMenuDisplay('hide')
        closeBurger()
    })

    $('.nav-links-mobile a:last-child').click(() => {
        $('html, body').animate({
            scrollTop: $(arrowTarget).offset().top
        }, 10)
        mobileMenuDisplay('hide')
        closeBurger()
    })
}

var navPosHighlight = (pos) => {
    let pj1Pos = $('#pj1').position().top
    let pj2Pos = $('#pj2').position().top
    let footerPos = $('#foot').position().top

    if (pos >= pj1Pos && pos < pj2Pos)
        $('.nav-links a:eq(0)').css({
            borderBottomColor: 'black'
        })
    else
        $('.nav-links a:eq(0)').css({
            borderBottomColor: ''
        })

    if (pos >= pj2Pos && pos < footerPos)
        $('.nav-links a:eq(1)').css({
            borderBottomColor: 'black'
        })
    else
        $('.nav-links a:eq(1)').css({
            borderBottomColor: ''
        })

    if (pos >= footerPos)
        $('.nav-links a:last-child').css({
            borderBottomColor: 'black'
        })
    else
        $('.nav-links a:last-child').css({
            borderBottomColor: ''
        })
}

var navShadow = (pos) => {
    if (pos > $('#pj1').position().top - 70)
        $('.navbar').css('box-shadow', '0 .2em .5em rgba(0, 0, 0, .2)')
    else
        $('.navbar').css('box-shadow', 'none')
}

var mobileMenu = () => {
    $('.mobile-nav-menu').click(() => {
        if (!$('#top').hasClass('open-top') && !$('#top').hasClass('close-top')) {
            $('#top').addClass('open-top')
            $('#bot').addClass('open-bot')
            reverse = true
            mobileMenuDisplay('show')
            setTimeout(() => {
                $('#mid').css('opacity', 0)
            }, 300)
        } else if (reverse) {
            closeBurger()
        } else {
            $('#top').removeClass('close-top').addClass('open-top')
            $('#bot').removeClass('close-bot').addClass('open-bot')
            reverse = true
            mobileMenuDisplay('show')
            setTimeout(() => {
                $('#mid').css('opacity', 0)
            }, 300)
        }
    })
}

var mobileMenuDisplay = (val) => {
    if (val == 'show')
        $('.nav-links-mobile').css('display', 'flex').animate({
            height: '100vh'
        }, 500, () => {
            $('body').css('overflow', 'hidden')
        })
    else
        $('.nav-links-mobile').animate({
            height: 0,
        }, 500, () => {
            $('.nav-links-mobile').css('display', 'none')
            $('body').css('overflow', 'visible')
        })
}

var closeBurger = () => {
    $('#top').removeClass('open-top').addClass('close-top')
    $('#bot').removeClass('open-bot').addClass('close-bot')
    reverse = false
    mobileMenuDisplay('hide')
    setTimeout(() => {
        $('#mid').css('opacity', 1)
    }, 300)
}
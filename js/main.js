history.scrollRestoration = "manual"

// FLAGS
var projectsRevealed = false
var reverse

// Global Vars
var arrowTarget = '#foot'

/* Function Called Once Page is Loaded */
$(document).ready(() => {
    drawLogo()

    setTimeout(() => {
        $('#site-load').fadeOut()
        $('.site').fadeIn(500)
        revealSite()
    }, 1500)
})

/* Called To Teveal Site Functionality */
var revealSite = () => {

    Particles.init({
        selector: '#bg',
        maxParticles: 180,
        color: "#ffffff"
    })

    new Granim({
        element: '#canvas-basic',
        direction: 'diagonal',
        states: {
            "default-state": {
                gradients: [
                    ['#F1632A', '#F0C419'],
                    ['#759F28', '#2D77D7'],
                    ['#C853A5', '#F1712A'],
                    ['#F0C419', '#4EBA6F'],
                    ['#2D95BF', '#955BA5']
                ],
                transitionSpeed: 5000
            }
        }
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

        if (!projectsRevealed)
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
}

/* Add Title Divider On Scroll and Fade In */
var revealProjects = (pos) => {
    if (pos >= $('#pj1').position().top - 200) {
        $('#pj1 .project-container').fadeIn(() => {
            $('#pj1 .project-title-line').addClass('widen')
        })
    }

    if (pos >= $('#pj2').position().top - 300) {
        $('#pj2 .project-container').fadeIn(() => {
            $('#pj2 .project-title-line').addClass('widen')
        })
        projectsRevealed = true
    }
}

var drawLogo = () => {
    $('#j').addClass('draw-letter')

    setTimeout(() => {
        $('#k').addClass('draw-letter')
    }, 500)
}

var typeTitle = () => {
    new Typed('.intro-name h1', {
        strings: ["Jason Kirshner"],
        startDelay: 500,
        typeSpeed: 20,
        showCursor: false,
        onComplete: () => {
            $('.typed-cursor:eq(0)').hide()
            new Typed('.intro-title h1', {
                strings: ["Full Stack Developer"],
                typeSpeed: 15,
                startDelay: 200,
                showCursor: false,
                onComplete: () => {
                    $('#view').css({
                        bottom: 0,
                        opacity: 1
                    })

                    $('.header-refs').css({
                        bottom: 0,
                        opacity: 1
                    })

                    $('.navbar').addClass('drop')
                    $('#canvas-basic').addClass('drop')
                }
            })
        }
    })
}

var arrow = (pos) => {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
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
    let pj1Pos = $('#pj1').position().top - 50
    let pj2Pos = $('#pj2').position().top - 50

    if (pos >= pj1Pos && pos < pj2Pos)
        $('.nav-links a:eq(0)').css({
            borderBottomColor: 'black'
        })
    else
        $('.nav-links a:eq(0)').css({
            borderBottomColor: ''
        })

    if (pos >= pj2Pos && !($(window).scrollTop() + $(window).height() == $(document).height()))
        $('.nav-links a:eq(1)').css({
            borderBottomColor: 'black'
        })
    else
        $('.nav-links a:eq(1)').css({
            borderBottomColor: ''
        })

    if ($(window).scrollTop() + $(window).height() == $(document).height())
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
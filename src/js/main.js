new Swiper(".topics-slider", {
    pagination: {
        el: ".topics-slider__pagination",
        clickable: true,
    },

    breakpoints: {
        1400: {
            slidesPerView: 4,
            slidesPerColumn: 3,
            slidesPerColumnFill: 'row',
            spaceBetween: 30,
            watchOverflow: true,
        },
        1200: {
            slidesPerView: 3,
            slidesPerColumn: 3,
            slidesPerColumnFill: 'row',
            spaceBetween: 30,

        },
        991: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            spaceBetween: 30,

        },
        767: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            spaceBetween: 30,

        },
        0: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'row',
            spaceBetween: 30,

        }

    }
})


new Swiper('.courses-slider', {
    direction: 'horizontal',
    loop: true,
    // autoplay: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.courses-slider__pagination',
        clickable: true,
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1
        }
    },
});

new Swiper('.speakers-slider', {
    direction: 'horizontal',
    loop: false,
    // autoplay: true,
    spaceBetween: 30,
    breakpoints: {
        1400: {
            slidesPerView: 4,
            watchOverflow: true,
        },
        991: {
            slidesPerView: 3,
            pagination: {
                el: '.speakers-slider__pagination',
                clickable: true,
            },
            watchOverflow: false,
        },
        767: {
            slidesPerView: 2,
            pagination: {
                el: '.speakers-slider__pagination',
                clickable: true,
            },
            watchOverflow: false,
        },
        0: {
            slidesPerView: 1,
            pagination: {
                el: '.speakers-slider__pagination',
                clickable: true,
            },
            watchOverflow: false,
        }
    },

});

new Swiper('.news-slider', {
    direction: 'horizontal',
    loop: true,
    // autoplay: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.news-slider__pagination',
        clickable: true,
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

new Swiper('.themes-slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 20,
    watchOverflow: true,
    setWrapperSize: true,
    navigation: {
        nextEl: '.themes-slider-button-next',
        prevEl: '.themes-slider-button-prev',
        clickable: true
    },
});

const menu = document.querySelector('.header__menu')

menu.addEventListener('click', function () {
    this.classList.toggle('open')

    const menuContent = document.querySelector('.menu__content')
    const body = document.querySelector('body')


    if (this.classList.contains('open')) {
        menuContent.classList.add('active')
        body.classList.add('no-scroll')
        this.classList.add('open')
    } else {
        menuContent.classList.remove('active')
        body.classList.remove('no-scroll')
        this.classList.remove('open')
    }
})

const footerAccordion = document.querySelectorAll('.footer__nav .list__title')

if (!footerAccordion.length) {

} else {
    footerAccordion.forEach(accordion => {
        accordion.addEventListener('click', function () {
            const accordionContent = this.nextElementSibling

            accordion.classList.toggle('open')

            if (accordion.classList.contains('open')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null

            }
        })
    })
}

const profileBtn = document.querySelectorAll('.profile')

if (!profileBtn.length) {

} else {
    profileBtn.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation()
            document.querySelector('.profile__menu').classList.toggle('open')
        })
    })
    document.querySelectorAll('.profile__menu li').forEach(list => {
        list.addEventListener('click', function (e) {
            e.stopPropagation()
        })
    })
    const body = document.querySelector('body')
    body.addEventListener('click', function (e) {
        if (!e.target.classList.contains('profile')) {
            document.querySelector('.profile__menu').classList.remove('open')

        }
    })
}

const lazyLoad = new LazyLoad({
    elements_selector: '.lazyload'
})


let player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('video', {
        videoId: 'mHBTY_zs6Po',
        playerVars: {
            'autoplay': 1,
            'autohide': 1,
            'showinfo': 0,
            'rel': 0,
            'loop': 1,
            'playsinline': 0,
            'fs': 0,
            'allowsInlineMediaPlayback': false,
            'controls': 0,
            'modestbranding': 0
        },
        events: {
            'onReady': function (e) {
                setTimeout(() => {
                    e.target.playVideo()
                }, 200)
            }
        }
    });
}

onYouTubePlayerAPIReady()

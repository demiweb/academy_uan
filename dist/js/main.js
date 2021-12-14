// new Swiper('.topics-mob-slider', {
//     direction: 'horizontal',
//     loop: true,
//     // autoplay: true,
//     slidesPerView: 3,
//     spaceBetween: 10,
//     pagination: {
//         el: '.topics-mob-slider__pagination',
//         clickable: true,
//     },
//
//     breakpoints: {
//         767: {
//             slidesPerView: 2,
//         },
//         0: {
//             slidesPerView: 1
//         }
//     },
// });
new Swiper(".topics-slider", {
    pagination: {
        el: ".topics-slider__pagination",
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
    spaceBetween: 20,
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
        nextEl: '.def-button-next',
        prevEl: '.def-button-prev',
    },
});

// let allLazyLoad = [...document.querySelectorAll('.lazyload')];
//
// function allLozadImg() {
//     allLazyLoad.forEach((el) => {
//         const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
//         observer.observe();
//         el.addEventListener('load', () => {
//             el.classList.add('is-loaded')
//         })
//         // if (el.loaded()) {
//         //     el.classList.add('is-loaded');
//         // }
//     })
// }
//
// allLozadImg();

const menu = document.querySelector('.header__menu')

menu.addEventListener('click', function () {
    this.classList.toggle('open')

    const menuContent = document.querySelector('.menu__content')
    const body = document.querySelector('body')


    if (this.classList.contains('open')) {
        menuContent.classList.add('active')
        body.classList.add('no-scroll')

    } else {
        menuContent.classList.remove('active')
        body.classList.remove('no-scroll')
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

const lazyLoad = new LazyLoad({
    elements_selector: '.lazyload'
})
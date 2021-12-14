new Swiper('.topics-mob-slider', {
    direction: 'horizontal',
    loop: true,
    // autoplay: true,
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: '.topics-mob-slider__pagination',
        clickable: true,
    },

    breakpoints: {
        767: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1
        }
    },
});

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

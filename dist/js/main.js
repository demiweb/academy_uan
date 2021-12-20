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
            spaceBetween: 0,
        }

    }
})

new Swiper('.courses-slider', {
    direction: 'horizontal',
    loop: false,
    autoplay: true,
    slidesPerView: 3,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.courses-slider__pagination',
        clickable: true,
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        }
    },
});

new Swiper('.speakers-slider', {
    direction: 'horizontal',
    loop: false,
    autoplay: true,
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
            spaceBetween: 0,
        }
    },

});

new Swiper('.news-slider', {
    direction: 'horizontal',
    loop: false,
    autoplay: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.news-slider__pagination',
        clickable: true,
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
            watchOverflow: true,
        },
        767: {
            slidesPerView: 2,
            watchOverflow: true,
        },
        0: {
            slidesPerView: 1,
            watchOverflow: true,
            spaceBetween: 0,
        },
    },
});

new Swiper('.themes-slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 20,
    setWrapperSize: true,
    navigation: {
        nextEl: '.themes-slider-button-next',
        prevEl: '.themes-slider-button-prev',
        clickable: true
    },

    breakpoints: {
        0: {
            watchOverflow: true,
        }
    }
});

new Swiper('.reviews-slider', {
    direction: 'horizontal',

    spaceBetween: 30,
    watchOverflow: true,
    pagination: {
        el: '.reviews-slider__pagination',
        clickable: true,
    },

    breakpoints: {
        991: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        }
    }
});

// Бургер меню в header
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

// Функция работы accordion
const accordion = document.querySelectorAll('.accordion')

if (!accordion.length) {

} else {
    accordion.forEach((accordion, idx) => {
        accordion.addEventListener('click', function (e) {
            this.querySelectorAll('li').forEach(list => {
                list.addEventListener('click', (e) => e.stopPropagation())
            })

            const accordionContent = this.querySelector('ul')

            accordion.classList.toggle('open')

            if (accordion.classList.contains('open')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null

            }
        })
    })
}

// Функция работы tabs
const tabs = document.querySelectorAll('.tabs__btn > a')

if (!tabs.length) {

} else {
    tabs.forEach(tab => {
        const id = tab.getAttribute('href').replace('#', '')
        const tabContent = document.querySelectorAll('.tabs__content .swiper')
        let quantity = tab.querySelector('.quantity')

        quantity.innerHTML = document.getElementById(id).querySelectorAll('.swiper-slide').length

        tab.addEventListener('click', function (event) {
            event.preventDefault()


            tabContent.forEach(content => content.classList.remove('open'))
            document.getElementById(id).classList.add('open')

            if (!tab.classList.contains('active')) {
                tabs.forEach(elem => elem.classList.remove('active'))
                tab.classList.add('active')
            }
        })
    })
}

// Выпадающий список в header
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

const animNum = document.querySelectorAll('.anim-num')

if (!animNum.length) {

} else {
    const time = 3000;

    function outNum(num, elem) {
        let step = 0;

        if (num < 200) {
            step = 1;
        } else {
            step = 10;
        }
        let n = 0
        let t = Math.round(time / (num / step));
        let interval = setInterval(() => {
            n = n + step;
            if (n === num) {
                clearInterval(interval)
            }
            elem.innerHTML = n + '+'
        }, t)

    }

    animNum.forEach(anim => {
        const number = Number(anim.dataset.num)

        // console.log(anim.dataset.num)
        outNum(number, anim)
    })
}

// Lazyload картинок
const lazyLoad = new LazyLoad({
    elements_selector: '.lazyload'
})


// // Youtube player
// let player;
//
// function onYouTubePlayerAPIReady() {
//     player = new YT.Player('video', {
//         videoId: 'mHBTY_zs6Po',
//         playerVars: {
//             'autoplay': 1,
//             'autohide': 1,
//             'showinfo': 0,
//             'rel': 0,
//             'loop': 1,
//             'playsinline': 0,
//             'fs': 0,
//             'allowsInlineMediaPlayback': false,
//             'controls': 0,
//             'modestbranding': 0
//         },
//         events: {
//             'onReady': function (e) {
//                 setTimeout(() => {
//                     e.target.playVideo()
//                 }, 200)
//             }
//         }
//     });
// }

// onYouTubePlayerAPIReady()

const circles = document.querySelectorAll('.progress')

if (!circles.length) {

} else {
    circles.forEach(circle => {
        const radius = circle.r.baseVal.value
        const circumference = 2 * Math.PI * radius
        const num = circle.dataset.percent

        circle.style.strokeDasharray = `${circumference} ${circumference}`
        circle.style.strokeDashoffset = circumference

        function setProgress(percent) {
            const offsetCircle = circumference - percent / 100 * circumference;
            circle.style.strokeDashoffset = offsetCircle;
            circle.parentElement.parentElement.querySelector('span').innerText = num + '%'
        }

        setProgress(num)
    })
}

const moduleSuccessBtn = document.querySelectorAll('button[data-description=complete-course]')

if (!moduleSuccessBtn.length) {

} else {
    moduleSuccessBtn.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.add('completed')
            this.innerHTML = `Completed 
<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="23" height="23" rx="11.5" fill="#38CD46"/>
    <path d="M16 8.75L10 14.25L7 11.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>`
        })
    })
}

// hero slider
if ($('.hero__slider').length) {
    const swiper = new Swiper('.hero__slider', {
        slidesPerView: 1,
        pagination: {
            el: '.hero__pagination',
            clickable: true
        },
        loop: true
    });
}


// home page message
if ($('.pop').length) {
    setTimeout(() => {
        $('.pop').addClass('hidden')
    }, 4000)
}




// input phone
if ($(".sub__form-phone-input input").length) {

    const item = document.querySelector('.sub__form-phone-input input')

    var maskOptions = {
        mask: '0000-0000000'
    };
    var mask = IMask(item, maskOptions);

    $(".sub__form-phone-input input").on('keyup', () => {
        if ($(".sub__form-phone-input input").val().length === 12) {
            $('.form-phone').removeClass('disabled')
        } else {
            $('.form-phone').addClass('disabled')
        }
    })




    var elements = document.querySelectorAll('.sub__form-pin-input input');
    elements.forEach((item, index) => {
        var maskOptions = {
            mask: '0'
        };
        var mask = IMask(item, maskOptions);
    })


    elements.forEach(function (item, index) {
        item.addEventListener('keyup', () => {
            if (index !== elements.length-1) {
                if (item.value.length === 1) {
                    elements[index+1].focus()
                }
            }
            if (index !== 0) {
                if (item.value.length === 0) {
                    elements[index-1].focus()
                }
            }
            if (elements[0].value === '4' && elements[1].value === '3' && elements[2].value === '2' && elements[3].value === '1') {
                $('.form-code').removeClass('disabled')
            } else {
                $('.form-code').addClass('disabled')
            }
        })
    })
}


// more button
if ($('.sub__more').length) {
    $('.sub__more-top').on('click', () => {
        $('.sub__more').toggleClass('active')
        if ($('.sub__more').hasClass('active')) {
            $('.sub__more span').text($('.sub__more').attr('data-less'))
            $('.sub__more-bottom').slideDown()
        } else {
            $('.sub__more span').text($('.sub__more').attr('data-more'))
            $('.sub__more-bottom').slideUp()
        }
    })
}

$('.form-phone').on('submit', (e) => {
    e.preventDefault()
    $('.sub__form').eq(0).removeClass('active')
    $('.sub__form').eq(1).addClass('active')
    $('.sub').addClass('pin')
})

$('.form-code').on('submit', (e) => {
    e.preventDefault()
    window.location = '/'
})

$('.sub-change').on('click', (e) => {
    e.preventDefault()
    $('.sub').removeClass('pin')
    $('.sub__form').eq(1).removeClass('active')
    $('.sub__form').eq(0).addClass('active')
    elements.forEach(function (item, index) {
        item.value = ''
    })
    $('.form-code').addClass('disabled')
})




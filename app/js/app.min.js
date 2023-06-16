
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

    // mask phone
    const item = document.querySelector('.sub__form-phone-input input')

    var maskOptions = {
        mask: '0000-0000000'
    };
    var mask = IMask(item, maskOptions);


    // input phone validation
    $(".sub__form-phone-input input").on('keyup', () => {
        if ($(".sub__form-phone-input input").val().length === 12) {
            $('.form-phone').removeClass('disabled')
        } else {
            $('.form-phone').addClass('disabled')
        }
    })



    // mask code inputs
    var elements = document.querySelectorAll('.sub__form-pin-input input');
    elements.forEach((item, index) => {
        var maskOptions = {
            mask: '0'
        };
        var mask = IMask(item, maskOptions);
    })


    // validation for code
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
            // VALIDATION CODE
            const validCode = '4321'
            if (elements[0].value === validCode[0] && elements[1].value === validCode[1] && elements[2].value === validCode[2] && elements[3].value === validCode[3]) {
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

// submit form phone
$('.form-phone').on('submit', (e) => {
    e.preventDefault()
    $('.sub__form').eq(0).removeClass('active')
    $('.sub__form').eq(1).addClass('active')
    $('.sub').addClass('pin')
})

// submit form code
$('.form-code').on('submit', (e) => {
    e.preventDefault()
    window.location = '/'
})

// change number event
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





$(function () {
    $('.visual_slide').slick({
        arrows: true,
        autoplay: true,
        pauseOnHover: false,


    });
    $('.tab_menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        console.log('내가 클릭한 것의 번호:', idx);
        $('.tab_content .content')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
    });

    $('.slogan_content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // $('.Slogan_visual .slogan_content').on('afterChange', function (e, s, c) {
    //     console.log(e, s, c); // c=0,1
    //     $('.Slogan_visual .right_dots li').removeClass('on');
    //     $('.Slogan_visual .right_dots li').eq(c).addClass('on');
    //     $('.Slogan_visual .num span').text('0' + (c + 1));

        
    });

















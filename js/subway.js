$(function () {

    ///////////////////// 모바일 스플래쉬 /////////////////////

    let ww = $(window).width();

    console.log(ww);

    function layout() {
        if (ww > 919) {
            $('#mobile_splash').hide();
        } else if (ww <= 919) {

            $('#mobile_splash').fadeIn(100);
            $('#mobile_splash').delay(2800).animate({
                opacity: 0,
            }, 700)
        }
    }


    layout();

    $(window).resize(function () {
        ww = $(window).width();
        layout();
    })



    ///////////////////// 섹션1 - 숨김메뉴 /////////////////////

    $('#hidemenu_btn').click(function () {
        $('#hidemenu_bg').css({
            display: 'block'
        });
    });

    $('#hidemenu_close').click(function () {
        $('#hidemenu_bg').css({
            display: 'none'
        });
    });


    ///////////////////// 섹션1 - 이벤트메뉴 슬라이드 /////////////////////


    var bg = ['transparent', 'transparent', 'transparent', 'transparent'];

    $('.eventmenu').css({
        backgroundColor: function (index) {
            return bg[index];
        },
    });

    var click = 0;
    $('#slide_next').click(function () {
        click++;
        if (click > 3) {
            click = 0;
        }
        //함수활용
        img_move();
    });

    $('#slide_prev').click(function () {
        click--;
        if (click < 0) {
            click = 3;
        }
        //함수활용
        img_move();
    });

    // 함수 기본틀
    // function 함수명(매개변수1, 매개변수2...){

    // }

    function img_move() {
        // 먼저 사라지게 해준다
        $('.eventmenu').fadeOut();
        // 그 후에 나타난다
        $('.eventmenu').eq(click).fadeIn();
    }
    //함수호출

    // 먼저 사라지게 해준다
    //$('.box').fadeOut();
    // 그 후에 나타난다
    //$('.box').eq(click).fadeIn();



    // ??????????????????????? 호버했을때 멈추도록 ??????????????????????? //

    //2초마다 next버튼이 클릭되도록

    function sec1Func() {

        sec1AutoSlide = setInterval(function () {
            $('#slide_next').trigger('click');
        }, 2000);
        //함수내부 => let 선언 => 지역변수
        //함수내부 => let 생략 => 전역변수
    }

    sec1Func();

    //마우스를 올리면 멈추고 다시 올리면 실행
    $('.eventmenu_slide_box').hover(function () {
        clearInterval(sec1AutoSlide);
    }, function () {
        //함수형태
        sec1Func();
    });
    $('#eventmenu_wrap').hover(function () {
        clearInterval(sec1AutoSlide);
    }, function () {
        sec1Func();
    })






    ///////////////////// 섹션2 - 메뉴팝업 /////////////////////


    $('.subway_menu').each(function (index) {

        $(this).attr('data-index', index);

    }).click(function () {

        i = $(this).attr('data-index');

        $('.menu_popup').css({
            display: 'none'
        });
        $('.menu_popup').eq(i).css({
            display: 'block'
        });

    });


    $('.menu_popup_close').click(function () {
        $('.menu_popup').css({
            display: 'none',
        });
    });



    ///////////////////// 섹션03 - 호버 확대 /////////////////////

    $('.sec03_box').hover(function () {
        $('.sec03_box').css({
            width: '32%',
        });
        $(this).css({
            width: '36%',
        });
        $(this).find('img').css({
            transform: 'scale(1.1)'
        });

    }, function () {
        $('.sec03_box').css({
            width: '33.33%',
        });
        $('.sec03_box').find('img').css({
            transform: 'scale(1)'
        });
    });

    $('.sec03_imgbox>img').hover(function () {
        $('.sec03_imgbox>img').css({
            opacity: '0.3',
        });
        $(this).css({
            opacity: '0.6',
        });
    }, function () {
        $('.sec03_imgbox>img').css({
            opacity: '0.3',
        });
    });



    ///////////////////// 섹션4 - 프랜차이즈 슬라이드 /////////////////////


    var bg = ['transparent', 'transparent', 'transparent'];

    $('.franchise_slide').css({
        backgroundColor: function (index) {
            return bg[index];
        },
    });

    var click2 = 0;
    $('#franchise_next').click(function () {
        click2++;
        if (click2 > 2) {
            click2 = 0;
        }
        //함수활용
        franchise_move();
    });

    $('#franchise_prev').click(function () {
        click2--;
        if (click2 < 0) {
            click2 = 2;
        }
        //함수활용
        franchise_move();
    });

    // 함수 기본틀
    // function 함수명(매개변수1, 매개변수2...){

    // }

    function franchise_move() {
        // 먼저 사라지게 해준다
        $('.franchise_slide').fadeOut();
        // 그 후에 나타난다
        $('.franchise_slide').eq(click2).fadeIn();
    }

    //함수호출

    // 먼저 사라지게 해준다
    //$('.box').fadeOut();
    // 그 후에 나타난다
    //$('.box').eq(click).fadeIn();


    //2초마다 next버튼이 클릭되도록

    function sec4Func() {

        sec4AutoSlide = setInterval(function () {
            $('#franchise_next').trigger('click');
        }, 2000);

    }

    sec4Func();

    //마우스를 올리면 멈추고 다시 올리면 실행
    $('#sec04_bottom_box').hover(function () {
        clearInterval(sec4AutoSlide);
    }, function () {
        //함수형태
        sec1Func();
    });
    $('#sec04_bottom_box').hover(function () {
        clearInterval(sec4AutoSlide);
    }, function () {
        sec4Func();
    })



}); //end 
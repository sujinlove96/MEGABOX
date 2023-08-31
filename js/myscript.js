// 문서 로드 이벤트
$(function(){
    // popup hide/show
    if($.cookie('popUp')=='no'){
        $('.popup').hide(0);
    }else{
        $('.popup').show(0);
    }

    //popup 닫기
    $('#btn-close').click(function(){
        $('.popup').hide(0);
        if($('#chkbox').is(':checked')){
            // 쿠키만들기
            $.cookie('popUp','no',{expires:3});
        }else{
            $.cookie('popUp','yes');
        }
    })

    // ad-top닫기
    $('.btn-close').click(function(){
        $('#ad-top').slideUp(300);
    })

    // 티켓버튼 이벤트
    $('#ticket').click(function(){
        let conF = confirm('로그인이 필요한 서비스입니다.\n로그인 페이지로 이동할가요?');
        if(conF){
            // 로그인페이지로 이동
            location.href='#';
        }else{
            alert('다음에 다시 만나요');
        }                
    })

    // 모바일 내비게이션 닫기 이벤트
    $('#btn-m-nav-close').click(function(){
        $('.m-nav').css('display','none');
    })
    // 모바일 내비게이션 열기 이벤트
    $('#btn-nav').click(function(){
        $('.m-nav').css('display','block');
    })

    // 윈도우 리사이즈 이벤트
    $(window).resize(function(){
        if($(window).width()>840){
            $('.m-nav').css('display','none');
        }
    })


    // box-office swiper slide
    const swiper = new Swiper('.box-office .swiper',{
        // 기본
        slidesPerView:4.5,
        spaceBetween:30,
        breakpoints:{
            360:{
                slidesPerView:1.5,
                spaceBetween:20,
            },
            768:{
                slidesPerView:2.5,
                spaceBetween:25,
            },
            941:{
                slidesPerView:3.5,
                spaceBetween:30,
            },
            1201:{
                slidesPerView:4.5,
            },
        }
    });

    // movie-exp swiper slide
    const swiper2 = new Swiper('.movie-exp .swiper',{
        // 기본
        slidesPerView:4.5,
        spaceBetween:30,
        breakpoints:{
            360:{
                slidesPerView:1.5,
                spaceBetween:20,
            },
            768:{
                slidesPerView:2.5,
                spaceBetween:25,
            },
            941:{
                slidesPerView:3.5,
                spaceBetween:30,
            },
            1201:{
                slidesPerView:4.5,
            },
        }
    });

    // film swiper slide
    const swiper3 = new Swiper('.film .swiper',{
        // 기본
        slidesPerView:4.5,
        spaceBetween:30,
        breakpoints:{
            360:{
                slidesPerView:1.5,
                spaceBetween:20,
            },
            768:{
                slidesPerView:2.5,
                spaceBetween:25,
            },
            941:{
                slidesPerView:3.5,
                spaceBetween:30,
            },
            1201:{
                slidesPerView:4.5,
            },
        }
    });
    
    // clasic swiper slide
    const swiper4 = new Swiper('.clasic .swiper',{
        // 기본
        slidesPerView:4.5,
        spaceBetween:30,
        breakpoints:{
            360:{
                slidesPerView:1.5,
                spaceBetween:20,
            },
            768:{
                slidesPerView:2.5,
                spaceBetween:25,
            },
            941:{
                slidesPerView:3.5,
                spaceBetween:30,
            },
            1201:{
                slidesPerView:4.5,
            },
        }
    });
    

    // 영화예매 내비게이션 이벤트
    $('#movie nav li').click(function(){
        $('#movie nav li').css({
            'background':'#fff',
            'color':'#000',
        })
        $(this).css({
            'background':'#000',
            'color':'#fff',
        })
        let idxNum = $(this).index();              
        $('.movie-div').css('display','none');
        $('.movie-div').eq(idxNum).css('display','block');
    })

    // 혜택 Swiper
    const benefit01 = new Swiper('.benefit-slider01 .swiper',{
        allowTouchMove:false,
        loop:true,
        effect:'fade',
        scrollbar:{
            el:'.swiper-myscrollbar'
        },
        navigation: {
            nextEl: '.swiper-mybutton-next',
            prevEl: '.swiper-mybutton-prev',
        },
        pagination: {
            el: '.swiper-mypagination',
            type: 'fraction',
        },
    });

    const benefit02 = new Swiper('.benefit-slider02 .swiper',{
        allowTouchMove:false,
        loop:true,
    });
   

    // 혜택 재생 버튼 이밴트
    $('.swiper-mystart').click(function(){
        benefit01.autoplay.start();
        $('.swiper-mypause').css('display','block');
        $(this).css('display','none');
    })
    
    // 혜택 멈춤 버튼 이밴트
    $('.swiper-mypause').click(function(){
        benefit01.autoplay.pause();
        $('.swiper-mystart').css('display','block');
        $(this).css('display','none');
    })

    benefit01.controller.control=benefit02;
    benefit02.controller.control=benefit01;

    benefit01.autoplay.start();


    // #curation
    const curation01 = new Swiper('.curation-container .swiper',{
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            360: {
            slidesPerView: 1.8,
            },
            // when window width is >= 480px
            769: {
            slidesPerView: 2.8,
            },
            // when window width is >= 640px
            1024: {
            slidesPerView: 3.8,
            },
            1200:{
                slidesPerView: 4,
            }
        }
    });

    
    
    $('.curation-posters img').click(function(){                
        $('.select-poster img').attr('src',$(this).attr('src'));                
    })

})
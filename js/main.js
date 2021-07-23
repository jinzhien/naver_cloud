// fullpage


// 헤더고정 & 탑버튼
$('button.page-scroll').bind('click', function(event) {
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

$(window).scroll(function(){
    var scrollTopPos = $(window).scrollTop();
        if(scrollTopPos > 0){ 
        $("body").addClass('scroll');
    }
        else{ 
        $("body").removeClass('scroll');
    }
});

//  gnb 클릭 시 밑줄 효과
$(document).ready(function(){
    $('#gnb>ul>li').on('click', function(){
        var gnb = $(this).index()
        $('#gnb>ul>li').removeClass('active');
        $('#gnb>ul>li').eq(gnb).addClass('active');
        $('#gnb>ul>li.outlink').removeClass('active')
    });
})

// lang_btn 클릭 시 lang_list 보이게
$(document).ready(function(){
    $('.lang_btn').on('click', function(){
        $('.lang_list').slideToggle('slow')
    });000000
}) 
 
// lang_list 클릭 시 언어 변경되게
$(document).ready(function(){
    $('.lang_menu ul li').on('click', function(){
        var lang_list = $(this).index()
        $('.lang_menu ul li a').removeClass('active');
        $('.lang_menu ul li a').eq(lang_list).addClass('active');
    });
})

// 패밀리사이트
$(document).ready(function(){
    $('.fam_site>a').on('click', function(){
        $('.fam_site>ul').toggleClass('on');
        $('.fam_site>a').toggleClass('on');
        $('.fam_site>a>i').toggleClass('on');
    });
})
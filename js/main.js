//  gnb 클릭 시 밑줄 효과
$('#gnb>ul>li').on('click', function(){
    var gnb = $(this).index()
    $('#gnb>ul>li').removeClass('active');
    $('#gnb>ul>li').eq(gnb).addClass('active');
    $('#gnb>ul>li.outlink').removeClass('active')
});

// lang_btn 클릭 시 lang_list 보이게
$(document).ready(function(){
    $('.lang_btn').on('click', function(){
        $('.lang_list').slideToggle('slow')
    });
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
        $('.fam_site>ul').slideToggle('fast');
        $('.fam_site>a').toggleClass('active');
        $('.fam_site>a>i').toggleClass('active');
    });
})


// 애니메이션
$(window).load(function(){
    var controller = new ScrollMagic.Controller();
    // 나무 아이콘
    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#section4",
        triggerHook: 0.5,
        reverse: false,
    })
        .setClassToggle("#section4", "active")
        .addTo(controller)

    // 타이틀 애니메이션
    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#section2", 
        triggerHook: 0.8,
        reverse: true,
    })
    .setClassToggle("#section2",  "effect")
    .addTo(controller)

    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#section3", 
        triggerHook: 0.8,
        reverse: true,
    })
    .setClassToggle("#section3",  "effect")
    .addTo(controller)

    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#section5",
        triggerHook: 0.8,
        reverse: true,
    })
        .setClassToggle("#section5", "effect")
        .addTo(controller)
});
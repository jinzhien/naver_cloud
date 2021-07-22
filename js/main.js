// fullpage
$(document).ready(function() {
/* 	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	}); */

	//methods
/* 	$.fn.fullpage.setAllowScrolling(false); */
});



//  gnb
$(document).ready(function(){
    $('#gnb>ul>li').on('click', function(){
        var gnb = $(this).index()
        $('#gnb>ul>li').removeClass('active');
        $('#gnb>ul>li').eq(gnb).addClass('active');
    });
})

// lang_btn
$(document).ready(function(){
    $('.lang_btn').on('click', function(){
        var lang = $(this).index()
        $('.lang_btn>ul').removeClass('active');
        $('.lang_btn>ul').eq(lang).addClass('active');
    });
})


// 헤더고정 & 탑버튼
$('a.page-scroll').bind('click', function(event) {
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


/* 패밀리사이트 */
$(document).ready(function(){
    $('.fam_site>a').on('click', function(){
        $('.fam_site>a>i').addClass('on');
        $('.fam_site ul').addClass('on');
    });
})
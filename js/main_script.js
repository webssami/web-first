$(function(){
    //pc
    $('#navi, #navi_bg').mouseenter(function(){
        $('#navi .sub_navi, #navi_bg').stop().slideDown('fast');
    }).mouseleave(function(){
        $('#navi .sub_navi, #navi_bg').stop().slideUp('fast');
    });
    //시간차 이용하는 이벤트는 mouseenter, mouseleave 사용

    // 모바일 메뉴 복제
    var naviClon = $('#navi').contents().clone(); //#navi 밑의 태그는 클래스로
    $('.mb_navi_wrap').append(naviClon);

    //모바일 햄버거 메뉴 클릭 시 메뉴 사용
    $('#mb_btn').click(function(){
        $('#mb_navi_bg, #mb_navi').stop().animate({
            right: 0
        }, 300);
        /* 열렸을 때 스크롤 바 제거 */
        $('body').css('overflow', 'hidden');
    }); // 열림
    $('#mb_navi_bg').click(function(){
        $('#mb_navi_bg, #mb_navi').stop().animate({
            right: '-100%'
        }, 300);
        /* 닫혔을 때 스크롤 바 생성 */
        $('body').css('overflow', 'auto');

        $('.mb_navi_wrap .main_navi > li .sub_navi').hide();
        $('.mb_navi_wrap .main_navi > li > a').removeClass('selected');
    }); // 닫기

    // 메인메뉴 클릭 시 서브메뉴 열리고 닫힘
    $('.mb_navi_wrap .main_navi > li > a').click(function(){
        $(this).toggleClass('selected');
        $('.mb_navi_wrap .main_navi > li > a').not(this).removeClass('selected');

        $(this).find('+.sub_navi').slideToggle('fast');
        $('.mb_navi_wrap .main_navi > li > a').not(this).find('+.sub_navi').slideUp('fast');

        return false;
    });

    $(window).resize(function(){
        if($(this).outerWidth() > 1000) {
            $('#mb_navi_bg, #mb_navi').css({right:'-100%'});
            $('.mb_navi_wrap .main_navi > li .sub_navi').hide();
            $('.mb_navi_wrap .main_navi > li > a').removeClass('selected');
        }
    });

    //cont1

    var imgLen = $("#cont1 #pc_img li").length;
    var cnt = 0;
    var setTime;

    var titleText = ['SPRING FLAVORS', 'SWEET MOMENT'];
    var pText = ['입안에서 피어나는 제주의 봄을 느껴보세요.', '상하목장 원유의 깊은 풍미에 초당옥수수의 달콤함이 더해지다.'];
    
    start();
     
    function start(){
        setTime = setInterval(function(){
            var n = cnt + 1;
            if(n==imgLen)n=0;

            if($(this).outerWidth() > 900) {
                $("#cont1 #pc_img li").eq(cnt).stop().fadeOut(600);
                $("#cont1 #pc_img li").eq(n).stop().fadeIn(600);       
            }else {
                $("#cont1 #mo_img li").eq(cnt).stop().fadeOut(600);
                $("#cont1 #mo_img li").eq(n).stop().fadeIn(600);   
            } 
            
            cnt = n;

            $('#cont1 #cont1_bar #p_bar').removeClass('on');
            $('#cont1 #cont1_bar #p_bar:last').addClass('on');
            $('#cont1 h1').text(titleText[n]);
            $('#cont1 p').text(pText[n]); //사진의 설명글이 텍스트로 보임
            $('#cont1 #cont1_bot .count').text(n+1);
        },5000);

    }
    
    $('#cont1 #cont1_bot .cont1_btn a').click(function(){
        $(this).toggleClass('on');
        $('#cont1 #cont1_bar #p_bar').removeClass('on');
        if($(this).hasClass('on')){ //정지
            clearInterval(setTime);
            $(this).text('재생');
        }else{ //재생
            start();
            $(this).text('정지');
            $('#cont1 #cont1_bar #p_bar').addClass('on');
        }
        return false;
    });

    //cont4

    // 라인 생성할 위치 선택자
    var $thumb = $('#cont4_l ul li');
    var visual = $('#cont4 #cont4_wrap ul li'); // 슬라이딩 되는 큰 이미지
    var cont4Title = ['시그니처 블렌드', '생두의 철저한 항온 항습 관리', '국내 로스팅 및 철저한 생산관리', '시그니처 블렌드의 다양한 맛과 향'];
    var cont4Text = ['제 4회 월드 바리스타 챔피언십 최연소 우승자 폴 바셋은 세계 커피 산지와 농장에서 해마다 최상급 생두를 직접 선별합니다.', '산지에서 국내로 입고되어 운송되는 생두가 외부의 영향을 최소한으로 받을 수 있도록 철저히 관리합니다. 국내에 입고된 생두는 온도, 습도 유지를 최적화한 창고에서 시스템으로 철저하게 관리합니다.', 'Paul Bassett 국내 전용 로스팅 팩토리에서 특유의 프로파일로 생두를 볶아 30분 이내 포장, 질소 충전하여 잔존 산소량을 1% 이하로 구현하는 철저한 생산관리 시스템 아래 관리되고 있습니다.', '엄선한 원두를 특유의 방법으로 로스팅 및 블렌딩하여 진하고 달콤한 초콜릿의 맛과 상큼한 신맛이 이루는 조화가 일품이며 우유와 함께 즐기셔도 그 풍미를 느낄 수 있습니다.'];

    $thumb.eq(0).addClass('act');

    $thumb.click(function(){ // 원하는 탭 항목 클릭

        if (cnt == i) return;

        var i = $(this).index(); // 선택한 순서번호

        $thumb.removeClass('act'); // 모든 탭 항목에 적용된 선택클래스를 제거
        $(this).addClass('act'); // 선택된 탭 항목 이름을 활성화 스타일 적용

        var cnt_img = visual.eq(cnt); //현재 보이는 이미지
        var next_img = visual.eq(i) //새로 보여질 이미지

        if(cnt > i) {
            cnt_img.css({left: 0}).stop().animate({left: '100%'});
            next_img.css({left: '-100%'}).stop().animate({left: 0});
        }; // 현재 번호가 새로 들어온 번호보다 크면 이전 이미지 방향전환
        if(cnt < i) {
            cnt_img.css({left: 0}).stop().animate({left: '-100%'});
            next_img.css({left: '100%'}).stop().animate({left: 0});
        }; // 현재 번호가 새로 들어온 번호보다 작으면 다음 이미지 방향전환

        $('#cont4_l h2').text(cont4Title[i]);
        $('#cont4_l p').text(cont4Text[i]);

        cnt = i;
    });

});
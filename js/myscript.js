$(function(){
    //footer에서 back to top 누르면 맨 위로 올라가게
    $('#back-top a').on("click",function(){
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    })

    // cases img
    const casesTitle = $('#cases .casesTitle');
    const casesImg = $('#cases .casesImg');

    casesImg.hide();
    
    casesTitle.eq(0).hover(function(){
        casesImg.eq(0).toggle(100);
        if(matchMedia("(max-width:576px").matches){
            // 디바이스 너비가 최대 576px일 때 이미지X
            casesImg.hide();
        }
    })
    casesTitle.eq(1).hover(function(){
        casesImg.eq(1).toggle(100);
        if(matchMedia("(max-width:576px").matches){
            // 디바이스 너비가 최대 576px일 때 이미지X
            casesImg.hide();
        }
    })
    casesTitle.eq(2).hover(function(){
        casesImg.eq(2).toggle(100);
        if(matchMedia("(max-width:576px").matches){
            // 디바이스 너비가 최대 576px일 때 이미지X
            casesImg.hide();
        }
    })

})
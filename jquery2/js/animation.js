$(document).ready(function(){
    $('button:eq(0)').click(function(){
        $('.m0').animate({left: 500}, "fast", "swing")
                .animate({left: 0}, "slow", "swing");
    });
    
    $('button:eq(1)').click(function(){
        $('.m1').animate({left: 500}, "fast", "swing")
               .animate({left: 0}, "slow", "swing", function(){
                // find()는 선택한 요소의 자식 요소를 선택함
                    $(this).find('span').animate({top: 10}, "fast");
               });
    });

    $('button:eq(2)').click(function(){
        $('.m2').animate({width: "toggle"}, "fast", "swing");
});

});

    

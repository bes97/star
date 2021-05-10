$(function(){

    slide = setInterval(function(){
        $('.notice_list li:first-child').animate({
            'margin-top':'-20px'},600,function(){
                $('.notice_list').append($('.notice_list li:first-child'));
                $('.notice_list li:last-child').css({'margin-top':0})
            
        });//animate end
    },2000);//setInterval end

 
   $('.all_menu').click(function(){
       $(this).addClass('on');
       $('#menu_box').fadeIn();
       $('.side_box').animate({right:0});
   })//all_menu click

   $('.side_box_close p').click(function(){
    $('#menu_box').fadeOut();
    $('.side_box').animate({right:-1920});
    $('.all_menu').removeClass('on');
   })//side_box_close p click


   $('.pop_close').click(function(){
       $('#pop').fadeOut(100);
   })


   $('.toTop_btn').hover(function(){      
       $('.toTop_btn span.toTop_btn_off').animate({'bottom':'50px'},300);
       $('.toTop_btn span.toTop_btn_on').animate({'bottom':'15px'},300);
   },function(){   
    $('.toTop_btn span.toTop_btn_off').animate({'bottom':'15px'},300);
    $('.toTop_btn span.toTop_btn_on').animate({'bottom':'-17px'},300);
   })







})//jq
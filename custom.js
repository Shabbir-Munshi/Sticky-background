  //  Sticky Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 40){
        $('.navbar').addClass('my_sticky_bg');
    }
    else {
         $('.navbar').removeClass('my_sticky_bg');
    }
    }); 
$(document).ready(function(){
    var lastScrollTop = 0;
    var delta = 5;
    var didScroll;
    var navbarHeight = $('header').outerHeight();

    

    $(window).scroll(function(event){
        didScroll = true;
    })

    setInterval(function(){
        if(didScroll){
            hasScrolled();
            didScroll = false;
        }
    },250);

    function hasScrolled(){
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
        return;

        if (st > lastScrollTop && st > navbarHeight){ 

           $('header').css('background','red')

        } else { 

            if(st + $(window).height() < $(document).height()) { 
                $('header').css('background','none')
            } 
        }

        lastScrollTop = st;
    }
})
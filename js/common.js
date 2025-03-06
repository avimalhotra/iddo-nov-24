$(function(){
    $("#portfolio .btn").click(function(){
        $("#portfolio .btn").removeClass("active");
        $(this).addClass("active");

        if( $(this).text()=="All" ){
            $(".all").fadeIn();
        }
        else if( $(this).text()=="Website" ){
            $(".all").fadeOut(0);
            $(".all.website").fadeIn();
        }
        else{
            $(".all").fadeOut(0);
            $(".all.brand").fadeIn();
        }
    });

    $("#portfolio .more").click(function(){
        $(this).children().toggleClass("fa-minus-circle");
        $(".all:nth-child(7),.all:nth-child(8),.all:nth-child(9)").slideToggle();
    });

    $("#about .more").click(function(){
        $(this).children().toggleClass("fa-minus-circle");
         $(".teamcol:nth-child(4),.teamcol:nth-child(5),.teamcol:nth-child(6)").slideToggle();
    });


    $(".accordion a").click(function(e){
        e.preventDefault();
        $(".accordion a").removeClass("active");
        $(this).addClass("active");
        $(".accordion p").slideUp();
        $(this).next("p").slideDown();
    });

    $(".top").click(function(){
        $("html,body").animate({scrollTop:0},1000);
    });

    $(".menu").click(function(){
        $(this).toggleClass("active");
        $(".collapse").slideToggle();
    })


    if(screen.width<768){
        $("nav a").click(function(){
            $(".collapse").slideUp();
            $(".menu").removeClass("active");
        })
    }


    $(".signup").on("click",function(){
        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popover"></div>`);
        $(".popover").append($(".form").html());
        $(".popover input:eq(0)").trigger("focus");
        $("body").css({"overflow-y":"hidden"});

        $(".popover .close").click(function(){
            $(".overlay,.popover").remove();
            $("body").css({"overflow-y":"auto"});
        });

        $(window).keydown(function(e){
            if(e.which==27){  $(".overlay,.popover").remove(); }
            $("body").css({"overflow-y":"auto"});
        })
    });

    $(".banner :is(button,a)").click(function(e){
        e.preventDefault();
        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popover"></div>`);
        $(".popover").append(` <button class="close fa fa-times" aria-label="Close"></button> <iframe width="720" height="405" src="https://www.youtube.com/embed/n0iBCQklw1A?si=Nk0KTVUD7aFtEf1W" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);


        $(".popover .close").click(function(){
            $(".overlay,.popover").remove();
        });

        
    });


    $(".reviews").bxSlider({
        controls:false,
        auto:true,
        pause:1000,
        autoHover:true
    });


});
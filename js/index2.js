$(document).ready(function(){
    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    })
    $("#sidebaricon").click(function(event){
        $("#lele").toggleClass("toggled");
        var right =$(".side-bar").css("right");
        if(right=="0px"){
            $(".side-bar").css({"right": "-17rem"});
            $(".layer").fadeOut();
        }else{
            $(".side-bar").css({"right": "0"});
            $(".layer").fadeIn();
        }
    });
    $(".layer").click(function(){
        $(".side-bar").css({"right":"-17rem"});
        $(".layer").fadeOut();
        
    })
    $(".searchicon").click(function(){
        $(this).toggleClass("open");
        if($(this).is(".open")){
            $(".searchbar").slideToggle("slow");
            $(".layer2").fadeIn();
        }else{
            $(".searchbar").slideToggle("slow");
            $(".layer2").fadeOut();
        }
    });
 

    $(".layer2").click(function(){
        $(".searchbar").slideToggle("slow");
        $(".layer2").fadeOut();
        $(".searchicon").removeClass("open");
    })
    
});
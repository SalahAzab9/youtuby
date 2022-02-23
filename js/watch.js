$("document").ready(function(){
    $("#more-btn").click(function(){
       read();
    });
    $(".reply-btn").click(function(){
        $(this).parents(".card-body").children(".channel-comment").toggle();
    });
    // توضيح هاااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااام
    //اول واحدة استخدمنا انه يروح لأب الزرار ده الكبير ويروح للإبن ده عشان نشتغل عليه
    //تاني طريقة ممكن نستخدمها وهي اننا نروح لأب الزرار برده بس اللي ليه اخ بردو اسمه اللي احنا تحكمنا فيه next
    // $(".reply-btn").click(function(){                                                                                                    
      //  $(this).parents(".row").next(".channel-comment").toggle();
    //}); 
   

});

function read(){
    var doto = document.getElementById("dots");
    var moretext = document.getElementById("more");
    var button = document.getElementById("more-btn")
    
    if (doto.style.display==="none"){
        doto.style.display="inline";
        button.innerHTML="عرض المزيد";
        moretext.style.display="none";
    }else {
        doto.style.display="none";
        button.innerHTML="عرض الاقل";
        moretext.style.display="inline";
    }
}

// function read(){
//     $("#dots").toggleClass("clear");
//     $("#more").toggle();

//     if($("#dots").is(".clear")){
//         $("#more-btn").text("عرض الاقل");
//     }else {
//         $("#more-btn").text("عرض المزيد");
//     }
//     // مينفعش نستخدم this
//     // مكان #more-btn 
//     // في حالة اننا استدعينا الدالة دي بالاسم 
// }

// حلللللللللللللللللللللللللللللللللللللللللللللللللللللللللللللللللللل اخر
$(document).on("scroll", function(){
    var document=$(document).scrollTop();
    if(topOfWindow>10){
        $(".ulnav").addClass("ulnav-white");
    }else{
        $(".ulnav").removeClass("lnav-white");
    }
});
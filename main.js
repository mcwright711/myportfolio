$(window).scroll(function(){
    if($(window).scrollTop() > 50){
    $(".ulnav").addclass(".scrolled");
}else{
    $(".ulnav").removeClass(".scrolled");
  }
 });
/*Toggle between adding and removing responsive class to ulnav when the user clicks on the icon*/
$(".ulnav a").click (function() {
    // $(this).find(".ulnav a.responsive").addclass(".active");
    $(this).find(".a.icon").addclass("active");
    $(this).siblings(".a").find("a.responsive").removeClass("active");
}); 
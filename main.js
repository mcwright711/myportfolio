$(document).ready(function(){
$(window).scroll(function(){
    if($(document).scrollTop() > 50){
    $("ulnav").addclass("scrolled");
}else{
    $("ulnav").removeClass("scrolled");
  }
 });
});
/*Toggle between adding and removing responsive class to ulnav when the user clicks on the icon*/
$(".ulnav a").click (function() {
    // $(this).find(".ulnav a.responsive").addclass(".active");
    $(this).find(".ulnav a.responsive.icon").addclass(".active");
    $(this).siblings(".ulnav a").find("ulnav a.responsive").removeClass(".active");
}); 
/*$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop()>0){
    $('.ulnav').toggleClass('scrolled');
}else{
    $('.ulnav').removeClass('scrolled');
  }
 });
});*/

/*Toggle between adding and removing responsive class to ulnav when the user clicks on the icon*/
$(document).ready(function(){
$('.icon').click(function(){
    $('.ulnav a').toggleClass('responsive');
});
});
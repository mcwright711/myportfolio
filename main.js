$(document).ready(function(){
$(window).scroll(function(){
    if($(document).scrollTop() > 50){
    $("ulnav").addclass("-scrolled");
}else{
    $("ulnav").removeClass("-scrolled");
  }
 });
});
/*Toggle between adding and removing responsive class to ulnav when the user clicks on the icon*/
function myFunction(){
    var x = document.getElementbyclass("icon");
    if (x.className === "ulnav a"){
        x.className +="responsive a";
    }else{
        x.Classname="ulnav a";
    }
}
 
$(function(){
  // 當瀏覽器有被 resize 時
  $(window).resize(function(){
    //視窗寬度小於500px,menu文字改變
    if ($(window).width() < 500) {
      changeText();
    }else{
      originalText();
    }
  }) 

  function changeText(){
    $('.menu-jiin a h3').text("JIIN");
    $('.menu-san a h3').text("13");
    $('.about a h3').text("About");
  }
  function originalText(){
    $('.menu-jiin a h3').text("JIIN's Works");
    $('.menu-san a h3').text("13's Works");
    $('.about a h3').text("About Us");
  }
});

(function($){

})($)

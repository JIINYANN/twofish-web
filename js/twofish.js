 
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
    $('.copyright p span').text("");
  }
  function originalText(){
    $('.menu-jiin a h3').text("JIIN's Works");
    $('.menu-san a h3').text("13's Works");
    $('.about a h3').text("About Us");
    $('.copyright p span').text("All rights reserved");
  }
  $(window).resize(function(){
     //視窗寬度小於750px,h1標籤改變為h2
     if($(window).width() < 750){
       $(".j-header .title h1").replaceWith("<h2>JIIN's &nbsp;Featured &nbsp;Works</h2>")
     }
     if($(window).width() < 750){
      $(".s-header .title h1").replaceWith("<h2>13's &nbsp;Weaving &nbsp;Works</h2>")
    }
  })

  // 點擊message開啟表單
  $(".email-item").click(function(){
    $(".msg-form,.gray-area").css("display","block");
   
  })
  //點擊close按鈕關閉表單
  $(".msg-form .close").click(function(){
    $(".msg-form,.gray-area").css("display","none");
  })
  //滑鼠移入作品畫面變暗
  //index頁面的部份
  $(".page1 .items").mouseenter(function(){
    $("img",this).css("Opacity","50%")
  })
  //jiin頁面的部份
  $(".works-area .js-items .img img").mouseenter(function(){
    $(this).css("Opacity","50%")
  })
  //滑鼠移出作品畫面變亮
   //index頁面的部份
  $(".page1 .items").mouseleave(function(){
    $("img",this).css("Opacity","100%")
  })
  //jiin頁面的部份
  $(".works-area .js-items .img img").mouseleave(function(){
    $(this).css("Opacity","100%")
  })
});

(function($){

})($)

$(document).ready(function(){
  $(".page-list ul li").hover(function(){
    $(this).fadeTo("slow", 0.25);
  }, function(){
      $(this).fadeTo("slow", 1.0);
  });

  $(".page-list ul li").click(function(){
    $(this).toggleClass("highlight");
          if ( $(this).text()===""){
              $(this).text("Clicked!");
              }
              else {
                $(this).text("");
              }
  });
});

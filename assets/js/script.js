/(function(){
  $("#firstName, #lastName").focus(function(){
    $("#firstName, #lastName").css("border", "3px solid green");
  });
  $("#firstName, #lastName").blur(function(){
    $("#firstName, #lastName").css("border", "3px solid red");
  });
});
/* 2 ème methode corection JP
$(function(){
  $('input').focus(function(){
    $(this).css('border', '3px solid green');
  });
  $('input').blur(function(){
    $(this).css('border', '3px solid red');
  });
  });
*/

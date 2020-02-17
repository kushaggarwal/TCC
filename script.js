$(() => {
  //setTimeout('$("#landing_page").hide()', 1000);
  $("#homePage").hide();
  $("#state").click(function() {
    console.log("rnning");
    $("#landing_page").hide();
    $("#homePage").show();
  });
});

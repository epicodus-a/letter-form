$().ready(function(){
  $("#form-letter").submit(function(event) {
    var name ="Dear, " + $("#name").val() + ",";
    $(".post-card-name").text(name);
    $(".post-card").show();
    $("#form-letter").hide();

    event.preventDefault();
  });

});

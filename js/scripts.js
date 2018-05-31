$(function(){
  $("#submitButton").click(function(event){
    var inputtedColor =
    parseInt($("#colorInput").val());
    var inputtedSat =
    parseInt($("#satInput").val());
    var inputtedExclamation =
    parseInt($("#exclamationInput").val());
    var inputtedAnimal =
    parseInt($("#animalInput").val());
    var inputtedUtensil =
    parseInt($("#utensilInput").val());

    var score = inputtedColor + inputtedSat + inputtedExclamation + inputtedAnimal + inputtedUtensil;

    $(".celebrity-match").hide();

    if(score <= 5){
      $("#fuschia").show();
    } else if(score <=10 && score >=6){
      $("#turquoise").show();
    } else {
      $("#crimson").show();
    }

    inputtedColor = "";
    inputtedSat = "";
    inputtedExclamation = "";
    inputtedAnimal = "";
    inputtedUtensil = "";

    event.preventDefault();
  });
});

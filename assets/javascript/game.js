
var log = console.log;

var wins=0;
var losses=0;
var randomNumber=0;

var redCrystal;
var blueCrystal;
var goldCrystal;
var greenCrystal;

var totalScore = 0;
var alert;

function generateRandomNumber() {
    randomNumber = 19 + Math.floor((Math.random() * 101) + 1);
    $(".number").html(randomNumber);
}

function randomizeCrystals() {
    
redCrystal = Math.floor((Math.random() * 12) + 1);
blueCrystal = Math.floor((Math.random() * 12) + 1);
goldCrystal = Math.floor((Math.random() * 12) + 1);
greenCrystal = Math.floor((Math.random() * 12) + 1); 

$(".red-crystal").attr("rand", ""+redCrystal);
$(".blue-crystal").attr("rand", ""+blueCrystal);
$(".gold-crystal").attr("rand", ""+goldCrystal);
$(".green-crystal").attr("rand", ""+greenCrystal);

}

function reset () {
        totalScore=0;
        $("#total-score").html(totalScore)
        generateRandomNumber();
        randomizeCrystals();
}

function winAlert() {
    alert= $("<div>");
    alert.addClass("alert alert-success text-center");
    alert.attr("role", "alert");
    alert.html("You Won!!");
    $(".col-lg-10").append(alert);

    setTimeout(function() {alert.remove();}, 3000);
    
}

function loseAlert() {
    alert= $("<div>");
    alert.addClass("alert alert-danger text-center");
    alert.attr("role", "alert");
    alert.html("You lost");
    $(".col-lg-10").append(alert);

    setTimeout(function() {alert.remove();}, 3000);

}


$(document).ready(function() {

    generateRandomNumber();
    randomizeCrystals();
   
    var crystalNumber;

    $("button").on("click", function() {
        crystalNumber = parseInt($(this).attr("rand"));

        totalScore += crystalNumber;
        $("#total-score").html(totalScore);

        if (totalScore === randomNumber) {
        wins++;
        $("#win").html(wins);
   
        winAlert();
        
        /*Reset after win*/
        reset();
    }

    if (totalScore > randomNumber) {
        losses++
        $("#loss").html(losses);
        
        loseAlert();
        
        /*Reset after loss*/
        reset();
    }
})

});




    




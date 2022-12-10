//var sound1=document.getElementById("swimAudio");
var sound1=new Audio("sounds/I can't swim Vine.mp3")
var sound2=new Audio("sounds/It's an Avocado !.mp3");
var sound3=new Audio("sounds/I Could've Dropped My Croissant (Vine).mp3");
var sound4=new Audio("sounds/Oh hell nah VINE.mp3");
var sound5=new Audio("sounds/Lebron James Vine.mp3");

function playing(sound){
    if(sound=='swim') sound1.play();
    if(sound=="avocado") sound2.play();
    if(sound=="croissant") sound3.play();
    if(sound=="ohnah") sound4.play();
    if(sound=="lebron") sound5.play();
}
function paused(sound){
    if(sound=='swim') sound1.pause();
    if(sound=="avocado") sound2.pause();
    if(sound=="croissant") sound3.pause();
    if(sound=="ohnah") sound4.pause();
    if(sound=="lebron") sound5.pause();
}
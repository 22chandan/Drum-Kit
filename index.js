// var size = document.querySelectorAll(".drum").length;
// for (var i = 0; i < size; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function click_effect() {
//         var music = "sound_drum_kit/" + "tom" + " - " + i + ".mp3";
//         var vid = document.getElementById("music");

//         function playVid() {
//             vid.play();
//         }
//     })
// }

//this is comment
var size = document.querySelectorAll(".drum").length;
for (var i = 0; i < size; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", 
    function() {
        var location_name = this.innerHTML;
        MakeSound(location_name);
        Annimation(location_name);
       }
       );
}
document.addEventListener("keypress", function (event) {
    MakeSound(event.key);
   Annimation(event.key);
})
   
function MakeSound(key) {
   {
       switch (key) {
           case "A":
            var playSound = new Audio('sound_drum_kit/tom-1.mp3');
            playSound.play();
               break;
           case "S":
            var playSound = new Audio('sound_drum_kit/tom-2.mp3');
            playSound.play();
               break;
           case "D":
            var playSound = new Audio('sound_drum_kit/tom-3.mp3');
            playSound.play();
               break;
           case "F":
            var playSound = new Audio('sound_drum_kit/tom-4.mp3');
            playSound.play();
               break;
           case "G":
            var playSound = new Audio('sound_drum_kit/crash.mp3');
            playSound.play();
               break;
           case "H":
            var playSound = new Audio('sound_drum_kit/kick-bass.mp3');
            playSound.play();
               break;
           case "J":
            var playSound = new Audio('sound_drum_kit/snare.mp3');
            playSound.play();
               break;
       
           default:
               break;
       }}

}
function Annimation(CurrentKey) {
    var name  = document.querySelector("." + CurrentKey);
    name.classList.add("pressed");

    setTimeout(function(){
        name.classList.remove("pressed");
    } , 300);
}
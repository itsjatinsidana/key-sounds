 
 {/* 
 
 document.querySelector("button").addEventListener('click',handleCliked) //only for first button

 function handleCliked(){
  alert("i got clicked");
  }
    for all the buttons


   var allnumber = document.querySelectorAll(".drum").length
   for(var i =0; i<allnumber;i++){
    document.querySelectorAll("button")[i].addEventListener('click',handleCliked);

   }
 

  */}
  // playing sounds

  
  var allnumber = document.querySelectorAll(".drum").length
   for(var i =0; i<allnumber;i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
       
    });

   }
       /*for keybord press key */
   document.addEventListener("keypress", function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
   })
   function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3")
             crash.play();
            break;
            case "a":
            var kick = new Audio("sounds/kick-bass.mp3")
             kick.play();
            break;
            case "s":
                var snare = new Audio("sounds/snare.mp3")
                 snare.play();
                break;
                case "d":
            var tom1 = new Audio("sounds/tom-1.mp3")
             tom1.play();
            break;
            case "j":
            var tom2 = new Audio("sounds/tom-2.mp3")
             tom2.play();
            break;
            case "k":
            var tom3 = new Audio("sounds/tom-3.mp3")
             tom3.play();
            break;
            case "l":
            var tom4 = new Audio("sounds/tom-4.mp3")
             tom4.play();
            break;
        default:console.log(buttonInnerHtml)
    }
   }
   /*add animation  */

   function buttonAnimation(currentKey){
 var active=  document.querySelector("."+currentKey);
 active.classList.add("pressed");
 setTimeout(function(){
    active.classList.remove("pressed")
 },200);//repsesent seconds
   }


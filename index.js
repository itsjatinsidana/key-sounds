 document.querySelector("button").addEventListener('click',handleCliked) //only for first button

 function handleCliked(){
  alert("i got clicked");
  }
   // for all the buttons


 //  var allnumber = document.querySelectorAll(".drum").length
  // for(var i =0; i<allnumber;i++){
   // document.querySelectorAll("button")[i].addEventListener('click',handleCliked);

  // }

  // playing sounds

  
  var allnumber = document.querySelectorAll(".drum").length
   for(var i =0; i<allnumber;i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',function(){
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play();
    });

   }
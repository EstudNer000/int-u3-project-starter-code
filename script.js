// Declare variables below to save the different divs of your story.


let audio = document.querySelector("audio");

document.addEventListener('click', function() {
    audio.play();
});





// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

let optionone = document.querySelector('.option-one')
let storyOpening = document.querySelector('.story-opening')
let optionOneScreen = document.querySelector('.option-one-screen')

let optionOneTwo = document.querySelector('.option-one-two')
let optionTwoTwo = document.querySelector('.option-two-two')








optionone.addEventListener('click', function(){
    storyOpening.style.display = "none"
    optionOneScreen.style.display = "block"
    optionone.style.display = 'none'
    optiontwo.style.display = 'none'

 });

let optiontwo = document.querySelector('.option-two')
let optionTwoScreen = document.querySelector('.option-two-screen')




optiontwo.addEventListener('click', function(){
    storyOpening.style.display = "none"
    optionone.style.display = 'none'
    optiontwo.style.display = 'none'
    optionTwoScreen.style.display = "block"
    optionOneTwo.style.display = 'block'
    optionTwoTwo.style.display = 'block'

 });

let optionThreeBadEnding = document.querySelector('.option-three-bad-ending')
let optionTwoEnd = document.querySelector('.option-two-end')

optionTwoTwo.addEventListener('click', function() {
    optionOneTwo.style.display = 'none'
    optionTwoTwo.style.display = 'none'
    optionTwoScreen.style.display = 'none'
    optionTwoEnd.style.display = 'block'
});

optionOneTwo.addEventListener('click', function() { 
    optionOneTwo.style.display = 'none'
    optionTwoTwo.style.display = 'none'
    optionTwoScreen.style.display = 'none'
    optionThreeBadEnding.style.display = 'block'
});
//.addEventListener('click', function(){

// });
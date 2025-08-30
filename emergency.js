
const heartCount = document.getElementById('heart-icon-number')
let iconButtons = document.getElementsByClassName('heart-icon-btn')
let currentNumber= 0;
    for(const iconButton of iconButtons){
        iconButton.addEventListener('click', function(){
         currentNumber++;  
         heartCount.innerText = currentNumber
         
    })
 }

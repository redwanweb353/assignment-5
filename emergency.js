
const heartCount = document.getElementById('heart-icon-number')
let iconButtons = document.getElementsByClassName('heart-icon-btn')
let currentNumber= 0;
    for(const iconButton of iconButtons){
        iconButton.addEventListener('click', function(){
         currentNumber++;  
         heartCount.innerText = currentNumber
         
    })
 }

 
const helplineCallButtons = document.getElementsByClassName('helpline-call-btn')
 

for ( let helplineCallButton of helplineCallButtons){
        helplineCallButton.addEventListener('click', function () {
        let totalCoin = parseInt(document.getElementById('coin-balance').innerText)
         if(totalCoin < 20){
                alert('Insuficiant balance')
                return;
            }
        totalAvailableCoin = totalCoin - 20;
        document.getElementById('coin-balance').innerText = totalAvailableCoin;
           
        const serviceTitle = helplineCallButton.parentNode.parentNode.childNodes[3].childNodes[3].innerText
        const serviceNumber = helplineCallButton.parentNode.parentNode.childNodes[3].childNodes[5].innerText
        alert(`📞 Calling ${ serviceTitle} ${serviceNumber} .... `)
        })
}
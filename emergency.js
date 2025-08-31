
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
                alert('❌ আপনার পর্যাপ্ত পরিমাণ কয়েন নেই। কল করার জন্য ২০ কয়েন লাগবে...')
                return;
            }
        totalAvailableCoin = totalCoin - 20;
        document.getElementById('coin-balance').innerText = totalAvailableCoin;
           
        const serviceHeadTitle = helplineCallButton.parentNode.parentNode.childNodes[3].childNodes[1].innerText
        const serviceTitle = helplineCallButton.parentNode.parentNode.childNodes[3].childNodes[3].innerText
        const serviceNumber = helplineCallButton.parentNode.parentNode.childNodes[3].childNodes[5].innerText
        alert(`📞 Calling ${ serviceTitle} ${serviceNumber} .... `); 
        

        const time = new Date().toLocaleTimeString()
        const historySection = document.getElementById("history-section")
        const newHistory = document.createElement("div")
        newHistory.innerHTML = `
             <div  class=" flex justify-between items-center bg-[#fafafa] p-4 rounded-[8px] mb-2"> 
                        <div>
                            <h2 class="font-semibold text-[20px] "> ${serviceHeadTitle}</h2>
                            <p class="text-[#5c5c5c] text-[18px]  ">${serviceNumber}</p>
                        </div>
                        <div>
                            <p class=" text-[18px]">${time}</p>
                        </div>
                
                    </div>
        `
            historySection.append(newHistory)

        })
}


document.getElementById("clear-btn").addEventListener('click',function(){
  let listOfHistory = document.getElementById('history-section')
  listOfHistory.innerHTML= " ";
})





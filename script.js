let myAccountBalance = parseInt(document.getElementById("myAccountBalance"));
 function sendMoney()
 { 
     var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value); 
    if (enterAmount > 80000) {
         alert("Amount entered should be less than 50000.")
     } 
    else { 
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount; 
        var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount; 
        document.getElementById("myAccountBalance").innerText = myAccountBalance 
        document.getElementById(findUserBankAccount).innerHTML = finalAmount; 
        alert(`Successful Transaction !! ₹${enterAmount} is sent to ${enterName}@email.com.`) 
        
        
        // transaction history 
        var createPTag = document.createElement("li"); 
        var textNode = document.createTextNode(`₹${enterAmount} is sent to recipient with Email-id ${enterName}@email.com on ${Date()}.`); 
        createPTag.appendChild(textNode); 
        var element = document.getElementById("transaction-history-body"); 
        element.insertBefore(createPTag, element.firstChild); 
    
    }
}
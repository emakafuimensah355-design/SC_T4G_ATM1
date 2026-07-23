//THE VISUAL ATM WORKFLOW

// These two links allow us to print our final results directly onto the webpage screen
const receiptTitle = document.getElementById("receipt-title");
const receiptText = document.getElementById("receipt-text");

// 1. SET THEINITIAL BALANCE & SECURITY DATA
let userPin = "5890"; // pin stored for the user
let userBalance = 2000;


// 2. ASK THE USER FOR INPUT (Runs automatically as soon as the page loads)
let enterPin = prompt("Welcome to student Bank ATM, Please enter your 4-digit pin:");


// 3. VALIDATE / CHECK THE PIN NUMBER
if(enteredPin === userPin){
    let withdrawalAmount = prompt(`PIN ACCEPTED! Your current Balance is ${userBalance}. Enter amount you wish to withdraw:`);
    //console.log(typeof(withdrawalAmount)); //string 
    withdrawalAmount = Number(withdrawalAmount); //reassigning the withdrawalAmount variables
    //console.log(typeof(withdrawalAmount)); //Number
    if(withdrawalAmount >= userBalance){

        let newUserBalance = userBalance - withdrawalAmount;
       // userBalance = userBalance - userAmount;
       
        receiptText.innerText = "TRANSACTION SUCCESSFUL";
        receiptText.innerText = `Dispensing cash ... You withdrew ${userAmount}.
        Your remaining balance is now ${userBalance - userAmount}`;  //${newUserBalance}
     } else{
        receiptText.innerText = "INSUFFICIENT FUNDS"
        receiptText.innerText =`Transaction decline ... You cannot withdraw ${userAmount} because your account Balance is ${userBalance}`
     }
} else{
    //prompt(`Enter the correct PIN`);
    receiptTitle.innerText = "ACCESS DENIED";
    receiptText.innerText =  "Invalid security PIN code entered. Account blocked for your protection";

}

    
    
    
    
    // 4. CHECK AVAILABILITY OF FUNDS
    
        
    
        

    
    // TASK 6: Handle the error layout if the PIN was completely wrong
    
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
    let userAmount = prompt(`PIN ACCEPTED! Your current Balance is ${userBalance}. Enter amount is to withdraw`);
    console.log(typeof(userAmount)); //string 
    userAmount = Number(userAmount);
    //console.log(typeof(userAmount)); //Number
    if(userBalance >= userAmount){
        let newUserBalance = userBalance - userAmount;
       // userBalance = userBalance - userAmount;
       
        receiptText.innerText = "TRANSACTION SUCCESSFUL";
     }
} else{
    prompt(`Enter the correct PIN`);
}

    
    
    
    
    // 4. CHECK AVAILABILITY OF FUNDS
    
        
    
        

    
    // TASK 6: Handle the error layout if the PIN was completely wrong
    
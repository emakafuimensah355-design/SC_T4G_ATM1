//THE VISUAL ATM WORKFLOW

// These two links allow us to print our final results directly onto the webpage screen
const receiptTitle = document.getElementById("receipt-title");
const receiptText = document.getElementById("receipt-text");

// 1. SET THE INITIAL BALANCE & SECURITY DATA
let userPin = "5890"; // pin stored for the user
let userBalance = 2000;


// 2. ASK THE USER FOR INPUT (Runs automatically as soon as the page loads)
let enteredPin = prompt("Welcome to student Bank ATM, Please enter your 4-digit pin:");


// 3. VALIDATE / CHECK THE PIN NUMBER
if (enteredPin === userPin) {
    let withdrawalAmount = prompt(`PIN ACCEPTED! Your current Balance is ${userBalance}. Enter amount you wish to withdraw:`);
    withdrawalAmount = Number(withdrawalAmount); //reassigning the withdrawalAmount variable to a number

    // 4. CHECK AVAILABILITY OF FUNDS
    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        receiptTitle.innerText = "INVALID AMOUNT";
        receiptText.innerText = "Please enter a valid positive number for your withdrawal.";
    } else if (withdrawalAmount <= userBalance) {
        // Enough funds available -> approve the withdrawal
        userBalance = userBalance - withdrawalAmount; // actually update the balance

        receiptTitle.innerText = "TRANSACTION SUCCESSFUL";
        receiptText.innerText = `Dispensing cash ... You withdrew ${withdrawalAmount}.
        Your remaining balance is now ${userBalance}`;
    } else {
        // Not enough funds
        receiptTitle.innerText = "INSUFFICIENT FUNDS";
        receiptText.innerText = `Transaction declined ... You cannot withdraw ${withdrawalAmount} because your account balance is ${userBalance}`;
    }
} else {
    // TASK 6: Handle the error layout if the PIN was completely wrong
    receiptTitle.innerText = "ACCESS DENIED";
    receiptText.innerText = "Invalid security PIN code entered. Account blocked for your protection";
}

/* ====================
deposit and withdraw
====================== */
/* function setBalace(inputId, outputId){
    // get value 
    const inputItem = document.getElementById(inputId);
    const inputAmount = inputItem.value;

    // set value 
    const outputItem = document.getElementById(outputId);
    outputItem.innerText = inputAmount;
    inputItem.value = '';
} */
// ============ ====0000=== ====================
/* ====================
deposit Function
====================== */
// set total balance 
const totalBalanceFeild = document.getElementById('balance-total');
const totalBalanceText = totalBalanceFeild.innerText;
let totalBalance = parseFloat(totalBalanceText);

// heandel deposit btn handaler function 
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get deposit value
    const depositInput = document.getElementById('deposit-feild');
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalText);

    // get deposit amount 
    const crentDepositAmount = newDepositAmount + previousDepositTotal;
    totalBalance += newDepositAmount;

    // set depositAmount 
    depositTotal.innerText = crentDepositAmount;
    totalBalanceFeild.innerText = totalBalance;


    depositInput.value = '';


});

/* ============== ===000000=== ==================== */

/* ====================
withdraw Function
====================== */

// heandel withdraw heandelar 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get withdraw Amount 
    const withdrawFeild = document.getElementById('withdraw-feild');
    const withdrawAmountText = withdrawFeild.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // get withdraw Total Amount 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountText = withdrawTotal.innerText;

    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);


    // set withdraw Amount 
    const withdrawTotalAmount = newWithdrawAmount + previousWithdrawAmount;
    totalBalance -= newWithdrawAmount;
    withdrawTotal.innerText = withdrawTotalAmount;
    totalBalanceFeild.innerText = totalBalance;

    // clear withdrawFeild
    withdrawFeild.value = "";
})





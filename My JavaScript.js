// Classwork 4-09-2025
const human = confirm("Are you human?")
console.log(human)

const name = prompt("What's your name?")
console.log(name)

let job = prompt("What's your job?")
console.log(job)

// Classwork 8-09-2025
const monthlyIncome = 1500;
console.log("Balance" + monthlyIncome);

let dailyExpenses = monthlyIncome - 1475;
console.log("Balance" + dailyExpenses);

let monthlyExpenses = dailyExpenses * 31;
console.log("Balance" + monthlyExpenses);

let spendings = monthlyExpenses + dailyExpenses;
console.log("Balance" + spendings);

let savings = monthlyIncome - spendings;
console.log("Balance" + savings);

let left = savings;
console.log("Balance" + left);

// Classwork 9-09-2025


// Homework 9-09-2025
// Accounts
let userAccount1 = {
    name: "Mariam",
    balance: 2500,
    currency: "EURO",
    type: "Checking",
    status: 2500
}

let userAccount2 = {
    name: "Mohammed",
    balance: 2000,
    currency: "USD",
    type: "Checking",
    status: 2000
}

let userAccount3 = {
    name: "Ahmed",
    balance: 1500,
    currency: "EURO",
    type: "Saving",
    status: 1500
}

let userAccount4 = {
    name: "Sara",
    balance: 1000,
    currency: "EURO",
    type: "Checking",
    status: 1000
}

// Deposit
userAccount1.balance += 500;
console.log(userAccount1.balance);

userAccount2.balance += 30;
console.log(userAccount2.balance);

// Withdrawal
let withdrawal = 1500;

if (userAccount3.balance >= withdrawal) {
  console.log("Withdrawal allowed for " + userAccount3.name);
} else {
  console.log("Withdrawal denied for " + userAccount3.name + " insufficient funds");
}

if (userAccount4.balance >= withdrawal) {
  console.log("Withdrawal allowed for " + userAccount4.name);
} else {
  console.log("Withdrawal denied for " + userAccount4.name + " insufficient funds");
}

// Transfer
if (userAccount2.currency == userAccount4.currency) {
  console.log("Transfer allowed for " + userAccount2.name);
} else {
  console.log("Transfer failed for " + userAccount2.name + " currency mismatch");
}

// Monthly maintenance
if (userAccount3.type == "Saving") {
  userAccount3.balance += userAccount3.balance * 0.02;
  console.log("2% interest added to " + userAccount3.name + "'s balance = " + userAccount3.balance);
}

if (userAccount2.type == "Checking") {
  userAccount2.balance -= 50;
  console.log("50 dollars deducted for fees from " + userAccount2.name + "'s balance = " + userAccount2.balance);
}


// Comparison
console.log("Account with the highest balance", userAccount1.name);

console.log("Account with the lowest balance", userAccount4.name);

/* Status
if (account.status > 0 → "Active") {
  console.log("Account active");
} else {
  console.log("Account overdrawn");
} else if (balance == 0 → "Empty") {
  console.log("Account empty");
} */

// Print
console.log("Name:", userAccount1.name, "Balance:", userAccount1.balance, "Currency:", userAccount1.currency, "Type:", userAccount1.type, "Status:", userAccount1.status);
console.log("Name:", userAccount2.name, "Balance:", userAccount2.balance, "Currency:", userAccount2.currency, "Type:", userAccount2.type, "Status:", userAccount2.status);
console.log("Name:", userAccount3.name, "Balance:", userAccount3.balance, "Currency:", userAccount3.currency, "Type:", userAccount3.type, "Status:", userAccount3.status);
console.log("Name:", userAccount4.name, "Balance:", userAccount4.balance, "Currency:", userAccount4.currency, "Type:", userAccount4.type, "Status:", userAccount4.status);

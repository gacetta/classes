let myAccount = {
    name: 'Michael Gacetta',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

// addIncome 

// resetAccount - resets everything to zero

// getAccountSummary
// Account for Andrew has $900.  $1000 in income.  $100 in expenses.

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.income = 0,
    account.expenses = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    console.log(`Account for ${account.name} has $${balance}.  $${account.income} in income.  $${account.expenses} in expenses.`)
}

addIncome(myAccount, 2600)
addExpense(myAccount, 1500)
addExpense(myAccount, 25)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)

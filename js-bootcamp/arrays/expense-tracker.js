const account = {
    name: 'Michael Gacetta',
    expenses: [],
    income: [],
    addExpense: function (text, amount) {
        const newExpense = {
            description: text,
            expense: amount
        }
        this.expenses.push(newExpense)
    },
    addIncome: function (text, amount) {
        const newIncome = {
            description: text,
            income: amount
        }
        this.income.push(newIncome)
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0

        this.expenses.forEach(function (entry, index){
            totalExpenses = totalExpenses + entry.expense
        })

        this.income.forEach(function(entry, index){
            totalIncome = totalIncome + entry.income
        })

        let balance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses`
    }
}


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary()) 

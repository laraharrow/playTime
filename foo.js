const account1 = {
  name: 'Jen',
  totalAmount: 5000,
  deductAmount: function(amount) {
    this.totalAmount -= amount;
    return 'Amount in account: ' + this.totalAmount;
  },
};
 
const account2 = {
  name: 'James',
  totalAmount: 8000,
};
 
const withdrawFromAccount = function(amount) {
  return account1.deductAmount.bind(account2, amount);
};
 
console.log(withdrawFromAccount(500)()); // 7500
console.log(withdrawFromAccount(200)()); // 7300
// the reason why we call withdrawFromAccount with its argument and then another ()
// is because on withdrawFromAccount we are returning a function and that function needs to be called
// the code: account1.deductAmount.bind(account2, amount); is equal to the method inside account1
// deductAmout and to be able to run that method we need to call it.
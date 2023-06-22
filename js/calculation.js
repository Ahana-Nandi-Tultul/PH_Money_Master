document.getElementById('btn-calculation').addEventListener('click', function(){
    const incomeValue = getInputFieldValueById('income-input-field');
    const foodExpenseValue = getInputFieldValueById('food-expense-field');
    const rentExpenseValue = getInputFieldValueById('rent-expense-field');
    const clothExpenseValue = getInputFieldValueById('cloth-expense-field');

    const totalExpanse = foodExpenseValue + rentExpenseValue + clothExpenseValue;
    setElementValueById('total-expense', totalExpanse);

    const newBalanceValue = incomeValue - totalExpanse;
    console.log(newBalanceValue);
    setElementValueById('total-balance', newBalanceValue);
});
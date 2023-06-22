
document.getElementById('btn-calculation').addEventListener('click', function(){
    const incomeValue = getInputFieldValueById('income-input-field');
    if(isNaN(incomeValue) || typeof incomeValue !== "number" || incomeValue < 0){
        emptyElement('total-expense');
        emptyElement('total-balance');
        alert('PLease provide a valid number as income.');
        return;
    }

    const foodExpenseValue = getInputFieldValueById('food-expense-field');
    if(isNaN(foodExpenseValue) || typeof foodExpenseValue !== "number" || foodExpenseValue < 0){
        emptyElement('total-expense');
        emptyElement('total-balance');
        alert('PLease provide a valid number as food expense.');
        return;
    }

    const rentExpenseValue = getInputFieldValueById('rent-expense-field');
    if(isNaN(rentExpenseValue) || typeof rentExpenseValue !== "number" || rentExpenseValue < 0){
        emptyElement('total-expense');
        emptyElement('total-balance');
        alert('PLease provide a valid number as rent expense.');
        return;
    }

    const clothExpenseValue = getInputFieldValueById('cloth-expense-field');
    if(isNaN(clothExpenseValue) || typeof clothExpenseValue !== "number" || clothExpenseValue < 0){
        emptyElement('total-expense');
        emptyElement('total-balance');
        alert('PLease provide a valid number as cloth expense.');
        return;
    }

    const totalExpanse = foodExpenseValue + rentExpenseValue + clothExpenseValue;
    if(incomeValue < totalExpanse){
        emptyElement('total-expense');
        emptyElement('total-balance');
        alert('Your expense cannot exceed your income');
        return;
    }
    const newBalanceValue = incomeValue - totalExpanse;
    setElementValueById('total-expense', totalExpanse);

    // console.log(newBalanceValue);
    setElementValueById('total-balance', newBalanceValue);
});
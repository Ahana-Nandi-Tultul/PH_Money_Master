document.getElementById('btn-save').addEventListener('click', function(){
    const savingPercentage = getInputFieldValueById('saving-percentage-field');
    const incomeValue = getInputFieldValueById('income-input-field');
    if(isNaN(incomeValue) || typeof incomeValue !== "number" || incomeValue < 0){
        emptyElement('total-expense');
        emptyElement('total-balance');
        emptyElement('saving-amount');
        emptyElement('remaining-balance');
        alert('PLease provide a valid number as income value.');
        return;
    }

    if(isNaN(savingPercentage) || typeof savingPercentage !== "number" || savingPercentage < 0 || savingPercentage > 100){
        emptyElement('saving-amount');
        emptyElement('remaining-balance');
        alert('PLease provide a valid number as saving percentage.');
        return;
    }

    const savingValue = (incomeValue * (savingPercentage / 100));
    

    setElementValueById('saving-amount', savingValue);
    const currentBalanceValue = getElementValueById('total-balance');
    // console.log(currentBalanceValue);
    if(currentBalanceValue > savingValue){
        const remainingBalance = currentBalanceValue - savingValue;
        setElementValueById('remaining-balance', remainingBalance);
    }
    else{
        emptyElement('saving-amount');
        emptyElement('remaining-balance');
        alert('you cannot save more than your balance.');
        return;
    }
})
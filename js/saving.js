document.getElementById('btn-save').addEventListener('click', function(){
    const savingPercentage = getInputFieldValueById('saving-percentage-field');
    const incomeValue = getInputFieldValueById('income-input-field');
    const savingValue = (incomeValue * (savingPercentage / 100));
    

    setElementValueById('saving-amount', savingValue);
    const currentBalanceValue = getElementValueById('total-balance');
    // console.log(currentBalanceValue);
    if(currentBalanceValue > savingValue){
        const remainingBalance = currentBalanceValue - savingValue;
        setElementValueById('remaining-balance', remainingBalance);
    }
})
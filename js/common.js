function getInputFieldValueById(inputId){
    const inputFieldElement = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputFieldElement.value);
    return inputFieldValue;
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}
function setElementValueById(elementId, newValue){
    const totalExpenseElemet = document.getElementById(elementId);
    totalExpenseElemet.innerText = newValue.toFixed(2);
}
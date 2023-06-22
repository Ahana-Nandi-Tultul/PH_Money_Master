function getInputFieldValueById(inputId){
    const inputFieldElement = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputFieldElement.value);
    return inputFieldValue;
}
function getElementById(){

}
function setElementValueById(elementId, newValue){
    const totalExpenseElemet = document.getElementById(elementId);
    totalExpenseElemet.innerText = newValue;
}
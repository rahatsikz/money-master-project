function getInputFieldValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  return inputValue;
}

function setTextElementValue(elementID, newValue) {
  const element = document.getElementById(elementID);
  element.innerText = newValue;
}

let balance;

document.getElementById("btn-calculate").addEventListener("click", function () {
  const income = getInputFieldValue("income-input");
  const foodCost = getInputFieldValue("food-input");
  const rentCost = getInputFieldValue("rent-input");
  const clothCost = getInputFieldValue("cloth-input");

  const totalExpense = foodCost + rentCost + clothCost;
  balance = income - totalExpense;

  setTextElementValue("expense-output", totalExpense);
  setTextElementValue("balance-output", balance);
});

document.getElementById("btn-save").addEventListener("click", function () {
  const income = getInputFieldValue("income-input");
  const savingPercent = getInputFieldValue("saving-input");
  const savings = income * (savingPercent / 100);
  setTextElementValue("saving-output", savings);

  const remainingBalance = balance - savings;
  // console.log(remainingBalance);
  setTextElementValue("remaining", remainingBalance);
});

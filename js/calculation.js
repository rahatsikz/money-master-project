function getInputFieldValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  if (isNaN(inputValue)) {
    alert("Please enter a number");
    return;
  }
  if (inputField.value.includes("-")) {
    alert("Please enter a positive number");
    return;
  }
  return inputValue;
}

function setTextElementValue(elementID, newValue) {
  const element = document.getElementById(elementID);
  element.innerText = newValue;
}

function clearInputField(inputId) {
  const inputField = document.getElementById(inputId);
  inputField.value = "";
}

let balance;

document.getElementById("btn-calculate").addEventListener("click", function () {
  const income = getInputFieldValue("income-input");
  const foodCost = getInputFieldValue("food-input");
  const rentCost = getInputFieldValue("rent-input");
  const clothCost = getInputFieldValue("cloth-input");

  const totalExpense = foodCost + rentCost + clothCost;
  balance = income - totalExpense;
  if (totalExpense > income) {
    alert("You can't expense more than income");
    return;
  } else {
    setTextElementValue("expense-output", totalExpense);
    setTextElementValue("balance-output", balance);
  }
  clearInputField("food-input");
  clearInputField("rent-input");
  clearInputField("cloth-input");
});

document.getElementById("btn-save").addEventListener("click", function () {
  const income = getInputFieldValue("income-input");
  const savingPercent = getInputFieldValue("saving-input");
  const savings = income * (savingPercent / 100);

  const remainingBalance = balance - savings;
  // console.log(remainingBalance);
  if (savingPercent > 100) {
    alert("Enter valid percentage");
    return;
  }
  if (savings > balance) {
    alert("You don't have enough balance");
    return;
  } else {
    setTextElementValue("saving-output", savings);
    setTextElementValue("remaining", remainingBalance);
  }
  clearInputField("income-input");
});

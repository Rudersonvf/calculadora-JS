
const inputNumber1 = document.querySelector('[name="number1"]');
inputNumber1.addEventListener('change', handleInputNumberChange);
inputNumber1.addEventListener('input', onlyNumbers);
const inputNumber2 = document.querySelector('[name="number2"]');
inputNumber2.addEventListener('change', handleInputNumberChange);
inputNumber2.addEventListener('input', onlyNumbers);
inputNumber2.classList.remove("input-error");

const btnClear = document.getElementById("btn-clear");
btnClear.addEventListener('click', handleBtnClearOnClick);

const btnTimes = document.getElementById("btn-times");
btnTimes.addEventListener('click', handleBtnTimesOnClick);

const btnPlus = document.getElementById("btn-plus");
btnPlus.addEventListener('click', handleBtnPlusOnClick)

function handleInputNumberChange(event) {
    if (isNumber(event.target.value) || event.target.value == "") {
        event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function handleBtnClearOnClick() {
    const fields = document.querySelectorAll('input');
    const listFields = [...fields];
    for (let i = 0; i < listFields.length; i++) {
        listFields[i].value = "";
    }
    document.getElementById("result-box")
        .innerHTML = 0;
}

function handleBtnTimesOnClick() {
    document.getElementById("result-box")
        .innerHTML = Number(inputNumber1.value) * Number(inputNumber2.value);
}

function handleBtnPlusOnClick() {
    document.getElementById("result-box")
        .innerHTML = Number(inputNumber1.value) + Number(inputNumber2.value);
}

//Evita que o usuario digite na caixa de texto um valor que nao seja um numero válido
      
function onlyNumbers(event) {
  const value = event.target.value;
  if (isNaN(value)) {
    event.target.value = '';
  }
};
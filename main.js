const keys = document.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-screen')
let placeHolder = " ";
let numArray = [];
let tally = 0;
let finalSum = 0;
let hasEqualsBeenClicked = false;
let method = " ";

const plus = () => {
    arrayStore();
}

const minus = () => {}

const division = () => {}

const multiplication = () => {}

const allClear = () => {
    display.innerHTML = 0;
    placeHolder = " ";
    tally = 0;
    finalSum = 0;
    hasEqualsBeenClicked = false;
}

const reset = () => {
    display.innerHTML = 0;
    placeHolder = " ";
}

const arrayStore = () => {
    let firstNumber = parseInt(store());
    console.log(firstNumber);
    numArray[tally] = firstNumber;
    reset();
    tally += 1;
}

const store = (value) => {
    let tempNumber = value;
    placeHolder += tempNumber;
    return placeHolder;
}

keys.addEventListener("click",e => {
    if (e.target.value === "+") {
        plus();
    } else if (e.target.value === "-") {
        minus();
        display.innerHTML += e.target.value;
    } else if (e.target.value === "/") {
        division();
        display.innerHTML += e.target.value;
    } else if (e.target.value === "*") {
        multiplication();
        display.innerHTML += e.target.value;
    } else if (e.target.value === "all-clear") {
        allClear();
    } else if (e.target.value === "") {

    } else {
        display.innerHTML += e.target.value;
        console.log(store(e.target.value));
    }
})
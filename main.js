const keys = document.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-screen')
let placeHolder = " ";
let numArray = [];
let tally = 0;
let finalSum = 0;
let hasEqualsBeenClicked = false;
let method = " ";

const plus = (clicked) => {
    arrayStore();
    if (hasEqualsBeenClicked === true) {
        finalSum = numArray.reduce(function (a, b) {
            return a + b;
        }, 0)
        display.innerHTML = finalSum
    }
}

const minus = () => {
    arrayStore()
    if (hasEqualsBeenClicked === true){
        finalSum = numArray[0] - numArray[1];
        display.innerHTML = finalSum;
    }
}

const division = () => {
    arrayStore();
    if(hasEqualsBeenClicked === true) {
        finalSum = numArray[0] / numArray[1]
        console.log(finalSum)
        display.innerHTML = finalSum;
    }
}

const multiplication = () => {
    arrayStore();
    if(hasEqualsBeenClicked === true){
        finalSum = numArray[0] * numArray[1];
        console.log(finalSum)
        display.innerHTML = finalSum;
    }
}

const allClear = () => {
    display.innerHTML = 0;
    placeHolder = " ";
    tally = 0;
    finalSum = 0;
    hasEqualsBeenClicked = false;
}

const equals = () => {
    hasEqualsBeenClicked = true;
    switch (method) {
        case "plus":
            plus();
            break;
        case "minus":
            minus();
            break;
        case "division":
            division();
            break;
        case "multiplication":
            multiplication();
            break;
    }
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
        method = "plus"
    } else if (e.target.value === "-") {
        minus();
        method = "minus"
    } else if (e.target.value === "/") {
        division();
        method = "division"
        display.innerHTML += e.target.value;
    } else if (e.target.value === "*") {
        multiplication();
        method = "multiplication"
        display.innerHTML += e.target.value;
    } else if (e.target.value === "all-clear") {
        allClear();
    } else if (e.target.value === "=") {
        equals();
    } else {
        display.innerHTML += e.target.value;
        console.log(store(e.target.value));
    }
})
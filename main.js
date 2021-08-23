const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator__keys')
const display = document.querySelector(".calculator__display")
let placeHolder = " ";
let numArray = [];
let tally = 0;
let finalSum = 0;
let hasEqualsBeenClicked = false;
let method = " ";

const plus = () => {
    if (hasEqualsBeenClicked === true){
        finalSum = numArray.reduce(function (a,b){
            return a+b;
        }, 0)
        display.innerHTML = finalSum
    } else {
        method = "plus"
        let firstNumber = parseInt(store());
        console.log(firstNumber)
        numArray[tally] = firstNumber
        reset()
        tally += 1;
    }
}

const minus = () => {
    if (hasEqualsBeenClicked === true) {
        finalSum = numArray[0] - numArray[1];
        display.innerHTML = finalSum
    } else {
        method = "minus"
        let firstNumber = parseInt(store());
        console.log(firstNumber)
        numArray[tally] = firstNumber
        reset();
        tally += 1;
    }
}

const multiplication = () => {
    if (hasEqualsBeenClicked === true) {
        finalSum = numArray[0] * numArray[1]
        console.log(finalSum)
        display.innerHTML = finalSum;
    } else {
        method = "multiplication"
        let firstNumber = parseInt(store());
        console.log(firstNumber);
        numArray[tally] = firstNumber;
        reset();
        tally += 1;
    }
}

const division = () => {
    if (hasEqualsBeenClicked === true) {
        finalSum = numArray[0] / numArray[1];
        display.innerHTML = finalSum;
    } else {
        method = "division"
        let firstNumber = parseInt(store());
        console.log(firstNumber);
        numArray[tally] = firstNumber;
        reset();
        tally += 1;
    }
}
const reset = () => {
   display.innerHTML = 0;
   placeHolder = " ";
}
const fullReset = () => {
    display.innerHTML = 0;
    placeHolder = " ";
    tally = 0;
    finalSum = 0;
    hasEqualsBeenClicked = false;
}
const equals = () => {
    hasEqualsBeenClicked = true
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
const store = (value) => {
 let tempNumber = value;
    placeHolder += tempNumber
   return placeHolder;
}

keys.addEventListener("click",e => {
    display.innerHTML += e.target.value;
  store(e.target.value);
})
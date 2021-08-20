const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')
let bitch = " ";
let numArray = [];
let tally = 0;
let sum = 0;
let hasEqualsBeenClicked = false;

const plus = () => {

    if (hasEqualsBeenClicked === true){
        sum = numArray.reduce(function (a,b){
            return a+b;
        }, 0)
        console.log(sum)
    } else {

        let firstNumber = parseInt(store());
        console.log(firstNumber)
        numArray[tally] = firstNumber
        reset()
        tally += 1;
    }
}

const minus = () => {return console.log("minus button works");}
const multiplication = () => {console.log("multiplication button works");}
const division = () => {console.log("divison works ");}
const reset = () => {
   display.innerHTML = 0;
   bitch = " ";
}
const equals = () => {
    hasEqualsBeenClicked = true
    plus()
}
const store = (value) => {
 let tempNumber = value;
    bitch += tempNumber
   return bitch;
}
keys.addEventListener("click",e => {
    display.innerHTML += e.target.value;
  store(e.target.value);
})
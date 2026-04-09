const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");
const input = document.querySelector("#input-field");
const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".num")

input.focus();
let num1,
    num2,
    operator;

function sum(a,b) {return a + b};
function difference(a,b) {return a - b};
function product(a,b) {return a * b};
function quotient(a,b) {return a / b};
function operate(a,b,operator) {
    let ans = 0;
    switch (operator) {
        case "+":
            ans = sum(a,b);
            break;
        case "-":
            ans = difference(a,b);
            break;
        case "*":
            ans = product(a,b);
            break;
        case "/":
            ans = quotient(a,b);
            break;
    }
    input.value = ans;
};

numbers.forEach((num) => {
    num.addEventListener("click", (e) => {
        input.value += e.target.value;
        num1 = e.target.value;
    })
})
const log = document.querySelector(".log")
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");
const backspace = document.querySelector(".backspace");
const input = document.querySelector("#input-field");
const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const debug = document.querySelector(".debug");

input.focus();
let hasDecimal = false,
    num1 = "",
    num2 = "",
    symbol = "",
    ans = "";

function sum(a,b) {return a + b};
function difference(a,b) {return a - b};
function product(a,b) {return a * b};
function quotient(a,b) {return a / b};

function operate(a,b,operator) {
    switch (operator) {
        case " + ":
            ans = sum(a,b);
            break;
        case " - ":
            ans = difference(a,b);
            break;
        case " × ":
            ans = product(a,b);
            break;
        case " ÷ ":
            b == 0? ans = "You cannot do that." : 
            ans = quotient(a,b);
            break;
    }
    input.value = ans;
    num1 = ans;
    num2 = num2;
    if (num1 % 1 != 0) hasDecimal = true;
};

numbers.forEach((num) => {
    num.addEventListener("click", (e) => { 
        if (!ans == "") reset();
        if (e.target.value == "." && hasDecimal) {
            // Do nothing;
        }
        else if (e.target.value == "." && !hasDecimal) {
            input.value += e.target.value;
            hasDecimal = true;
        }
        else {
            input.value += e.target.value;
        }
        if (symbol == "") {
                num1 = input.value;
            }
        else {
                num2 = input.value;
            }
    })
});

operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        if (num1 == "") {
            input.value = "";
        }
        else {
            hasDecimal = false;
            input.value = "";
            symbol = e.target.value;
            log.textContent = num1 + e.target.value;
            if (!symbol == "" && !num2 == "") {equal()}
        }
        
    })
});
const equal = function() {
    hasDecimal = false;
    log.textContent = num1 + symbol + num2;
    num1 = Number(num1);
    num2 = Number(num2);
    operate(num1,num2,symbol);
};

equals.addEventListener("click", () => {
    if (num1 == "" || symbol == "" || num2 == "") {
        input.value = "";
    }
    else {
        equal();
    }
});

backspace.addEventListener("click", (e) => {
    input.value = input.value.slice(0,-1);
});

clear.addEventListener("click", reset);

function reset() {
    input.value = "";
    log.textContent = "";
    num1 = "";
    num2 = "";
    symbol = "";
    ans = "";
}

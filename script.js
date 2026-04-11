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
const footer = document.querySelector(".copyright");

input.focus();
let hasDecimal = false,
    num1 = "",
    num2 = "",
    symbol = "",
    resetTrigger = false;
    

function operate(a,b,operator) {
    let ans = "";
    switch (operator) {
        case "+":
            ans = a + b;
            break;
        case "-":
            ans = a - b;
            break;
        case "*":
            ans = a * b;
            break;
        case "/":
            b == 0? ans = "oops!" : 
            ans = a / b;
            break;
    }
    ans = Math.round(ans * 100) / 100
    return ans;
};

decimal.addEventListener("click", decimalHandler);
function decimalHandler() {
    if (!hasDecimal) {
            input.textContent += ".";
            hasDecimal = true;
    }
};

function shorten() {                                //unfinished
    if (input.textContent.length == 14) {
        input.textContent.slice(0,-1);
    }
};

numbers.forEach((num) => {
    num.addEventListener("click", numberHandler);
});
function numberHandler(e) {
    if (resetTrigger) {reset(); resetTrigger = false;}
    if (input.textContent.length == 15) {return}
    let eventType;
    typeof e === "string" ? eventType = e: eventType = e.target.value;
    
    input.textContent += eventType;
    

    if (symbol == "") {
            num1 = input.textContent;
    }
    else {
            num2 = input.textContent;
    }
};

operators.forEach(operator => {
    operator.addEventListener("click", operatorHandler )
});
function operatorHandler(e) {
    let eventType;
    let logSymbol;
    typeof e === "string" ? eventType = e: eventType = e.target.value;

    if (num1 == "") {
        input.textContent = "";
    }
    else {
        hasDecimal = false;
        input.textContent = "";
        if (eventType == "*") {logSymbol = "×"}
        else if (eventType == "/") {logSymbol = "÷"}
        else {logSymbol = eventType};
        log.textContent = num1 + logSymbol;
        if (!symbol == "" && !num2 == "") {
            equal();
            operatorHandler(e);
        }
        symbol = eventType;
    }
    resetTrigger = false;
}

equals.addEventListener("click", equal);
function equal() {
    let logSym;
    if (num1 == "" || symbol == "" || num2 == "") {
        reset();
    }
    else {
        hasDecimal = false;
        if (symbol == "*") {logSym = "×"}
        else if (symbol == "/") {logSym = "÷"}
        else {logSym = symbol};
        log.textContent = num1 + logSym + num2;
        num1 = Number(num1);
        num2 = Number(num2);
        input.textContent = operate(num1,num2,symbol);
        num1 = input.textContent;
        num2 = "";
        symbol = "";
        resetTrigger = true;
        if (num1 % 1 != 0) hasDecimal = true;
        if (num1 == "oops!") alert("Cannot divide by Zero!");
    }
};


backspace.addEventListener("click", (e) => {
    input.textContent = input.textContent.slice(0,-1);
});

clear.addEventListener("click", reset);
function reset() {
    input.textContent = "";
    log.textContent = "";
    num1 = "";
    num2 = "";
    symbol = "";
    ans = "";
    hasDecimal = false;
};

// keyboard support
document.addEventListener("keydown", (e) => {
    e.preventDefault();
    let key = e.key;
    if (key === "Backspace") {input.textContent = input.textContent.slice(0,-1);}
    else if (key === "Enter") {equal()}
    else if (key === ".") {decimalHandler()}
    else if (["0","1","2","3","4","5","6","7","8","9",].includes(key)) {numberHandler(key)}
    else if (["+","-","*","/"].includes(key)) {operatorHandler(key)}
});

footer.textContent += " © " + new Date().getFullYear() ;
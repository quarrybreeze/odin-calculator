//functions for basic calculator operators

let firstNum = 0;
let calcOperator = "";
let secondNum = 0;
let displayClearStatus = true;

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate (operator,a,b) {
    if (operator == "add") {
        return add(a,b);
    } else if (operator == "subtract") {
        return subtract(a,b);
    } else if (operator == "divide") {
        return divide(a,b);
    } else if (operator == "multiply") {
        return multiply(a,b);
    }
}

const textDisplayed = document.querySelector(".topDisplay")
textDisplayed.textContent = "8888888"


//logic for buttons adding to displays:
const button7 = document.querySelector("#button7")
button7.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "7";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "7";
    }
});

const button8 = document.querySelector("#button8")
button8.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "8";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "8";
    }
});

const button9 = document.querySelector("#button9")
button9.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "9";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "9";
    }
});

const button4 = document.querySelector("#button4")
button4.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "4";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "4";
    }
});

const button5 = document.querySelector("#button5")
button5.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "5";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "5";
    }
});

const button6 = document.querySelector("#button6")
button6.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "6";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "6";
    }
});

const button1 = document.querySelector("#button1")
button1.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "1";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "1";
    }
});

const button2 = document.querySelector("#button2")
button2.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "2";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "2";
    }
});

const button3 = document.querySelector("#button3")
button3.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "3";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "3";
    }
});

//logic for operator buttons
const buttonAdd = document.querySelector("#buttonAdd")
buttonAdd.addEventListener("click", () => {
    displayClearStatus = true;
    firstNum = Number(textDisplayed.textContent);
    calcOperator = "add";
});

const buttonSubtract = document.querySelector("#buttonSubtract")
buttonSubtract.addEventListener("click", () => {
    displayClearStatus = true;
    firstNum = Number(textDisplayed.textContent);
    calcOperator = "subtract";
});

const buttonMultiply = document.querySelector("#buttonMultiply")
buttonMultiply.addEventListener("click", () => {
    displayClearStatus = true;
    firstNum = Number(textDisplayed.textContent);
    calcOperator = "multiply";
});

const buttonDivide = document.querySelector("#buttonDivide")
buttonDivide.addEventListener("click", () => {
    displayClearStatus = true;
    firstNum = Number(textDisplayed.textContent);
    calcOperator = "divide";
});

//logic for equals button
const buttonEquals = document.querySelector("#buttonEquals")
buttonEquals.addEventListener("click", () => {
    displayClearStatus = true;
    secondNum = Number(textDisplayed.textContent);
    textDisplayed.textContent = operate(calcOperator,firstNum,secondNum);
});



//testing the above functions
// let testAdd = add(2,5);
// console.log(testAdd);

// let testSubtract = subtract(2,5);
// console.log(testSubtract);

// let testMultiply = multiply(2,5);
// console.log(testMultiply);

// let testDivide = divide(2,5);
// console.log(testDivide);
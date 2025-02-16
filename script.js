//functions for basic calculator operators

let firstNum = 0;
let calcOperator = "";
let secondNum = 0;
let displayClearStatus = true;
let decimalStatus = false;
let calculatedStatus = false;

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
textDisplayed.textContent = ""


//logic for buttons adding to displays:
const button7 = document.querySelector("#button7")
button7.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "7";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "7";
    }
    secondNum = Number(textDisplayed.textContent);
});



const button8 = document.querySelector("#button8")
button8.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "8";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "8";
    }
    secondNum = Number(textDisplayed.textContent);
});

const button9 = document.querySelector("#button9")
button9.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "9";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "9";
    }
    secondNum = Number(textDisplayed.textContent);
});

const button0 = document.querySelector("#button0")
button0.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "0";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "0";
    }
    secondNum = Number(textDisplayed.textContent);
});

const button4 = document.querySelector("#button4")
button4.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "4";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "4";
    }
    secondNum = Number(textDisplayed.textContent);
});

const button5 = document.querySelector("#button5")
button5.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "5";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "5";
    }
    secondNum = Number(textDisplayed.textContent);
});

const button6 = document.querySelector("#button6")
button6.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "6";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "6";
    }
    secondNum = Number(textDisplayed.textContent);
});

const button1 = document.querySelector("#button1")
button1.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "1";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "1";
    }
    secondNum = Number(textDisplayed.textContent);
});

const button2 = document.querySelector("#button2")
button2.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "2";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "2";
    }
    secondNum = Number(textDisplayed.textContent);
});

const button3 = document.querySelector("#button3")
button3.addEventListener("click", () => {
    if (displayClearStatus == true) {
        textDisplayed.textContent = "3";
        displayClearStatus = false;
    } else if (displayClearStatus == false) {
        textDisplayed.textContent = textDisplayed.textContent + "3";
    }
    secondNum = Number(textDisplayed.textContent);
});

//logic for operator buttons
const buttonAdd = document.querySelector("#buttonAdd")
buttonAdd.addEventListener("click", () => {
    displayClearStatus = true;
    decimalStatus = false;
    firstNum = Number(textDisplayed.textContent);
    calcOperator = "add";
});

const buttonSubtract = document.querySelector("#buttonSubtract")
buttonSubtract.addEventListener("click", () => {
    displayClearStatus = true;
    decimalStatus = false;
    firstNum = Number(textDisplayed.textContent);
    calcOperator = "subtract";
});

const buttonMultiply = document.querySelector("#buttonMultiply")
buttonMultiply.addEventListener("click", () => {
    displayClearStatus = true;
    decimalStatus = false;
    firstNum = Number(textDisplayed.textContent);
    calcOperator = "multiply";
});

const buttonDivide = document.querySelector("#buttonDivide")
buttonDivide.addEventListener("click", () => {
    displayClearStatus = true;
    decimalStatus = false;
    firstNum = Number(textDisplayed.textContent);
    calcOperator = "divide";
});

//logic for equals button
const buttonEquals = document.querySelector("#buttonEquals")
buttonEquals.addEventListener("click", () => {
        displayClearStatus = true;
        decimalStatus = false;

        if (calcOperator == "divide" && secondNum == 0) {
            textDisplayed.textContent = "Err: Cannot divide by 0";
        } else {
        textDisplayed.textContent = operate(calcOperator,firstNum,secondNum);
        }
});

//logic for other buttons
const buttonClear = document.querySelector("#buttonClear")
buttonClear.addEventListener("click", () => {
    displayClearStatus = true;
    decimalStatus = false;
    firstNum = 0;
    secondNum = 0;
    textDisplayed.textContent = "";
});

const buttonDecimal = document.querySelector("#buttonDecimal")
buttonDecimal.addEventListener("click", () => {
    if (decimalStatus == false) {
        if (displayClearStatus == true) {
            textDisplayed.textContent = "0.";
            displayClearStatus = false;
        } else if (displayClearStatus == false) {
            textDisplayed.textContent = textDisplayed.textContent + ".";
        }
        decimalStatus = true;
    }
});

const buttonBackspace = document.querySelector("#buttonBackspace")
buttonBackspace.addEventListener("click", () => {
    let tempString = textDisplayed.textContent;
    let newString = tempString.slice(0,-1);
    textDisplayed.textContent = newString;
});

//events for keyboard presses
document.addEventListener("keydown", (event) => {
    if (event.key === "7") {
        if (displayClearStatus == true) {
            textDisplayed.textContent = "7";
            displayClearStatus = false;
        } else if (displayClearStatus == false) {
            textDisplayed.textContent = textDisplayed.textContent + "7";
        }
        secondNum = Number(textDisplayed.textContent);
    }
    if (event.key === "8") {
        if (displayClearStatus == true) {
            textDisplayed.textContent = "8";
            displayClearStatus = false;
        } else if (displayClearStatus == false) {
            textDisplayed.textContent = textDisplayed.textContent + "8";
        }
        secondNum = Number(textDisplayed.textContent);
    }
    if (event.key === "9") {
        if (displayClearStatus == true) {
            textDisplayed.textContent = "9";
            displayClearStatus = false;
        } else if (displayClearStatus == false) {
            textDisplayed.textContent = textDisplayed.textContent + "9";
        }
        secondNum = Number(textDisplayed.textContent);
    }
    if (event.key === "4") {
        if (displayClearStatus == true) {
            textDisplayed.textContent = "4";
            displayClearStatus = false;
        } else if (displayClearStatus == false) {
            textDisplayed.textContent = textDisplayed.textContent + "4";
        }
        secondNum = Number(textDisplayed.textContent);
    }
    if (event.key === "5") {
        if (displayClearStatus == true) {
            textDisplayed.textContent = "5";
            displayClearStatus = false;
        } else if (displayClearStatus == false) {
            textDisplayed.textContent = textDisplayed.textContent + "5";
        }
        secondNum = Number(textDisplayed.textContent);
    }
    if (event.key === "6") {
        if (displayClearStatus == true) {
            textDisplayed.textContent = "6";
            displayClearStatus = false;
        } else if (displayClearStatus == false) {
            textDisplayed.textContent = textDisplayed.textContent + "6";
        }
        secondNum = Number(textDisplayed.textContent);
    }
    if (event.key === "1") {
        if (displayClearStatus == true) {
            textDisplayed.textContent = "1";
            displayClearStatus = false;
        } else if (displayClearStatus == false) {
            textDisplayed.textContent = textDisplayed.textContent + "1";
        }
        secondNum = Number(textDisplayed.textContent);
    }
    if (event.key === "2") {
        if (displayClearStatus == true) {
            textDisplayed.textContent = "2";
            displayClearStatus = false;
        } else if (displayClearStatus == false) {
            textDisplayed.textContent = textDisplayed.textContent + "2";
        }
        secondNum = Number(textDisplayed.textContent);
    }
    if (event.key === "3") {
        if (displayClearStatus == true) {
            textDisplayed.textContent = "3";
            displayClearStatus = false;
        } else if (displayClearStatus == false) {
            textDisplayed.textContent = textDisplayed.textContent + "3";
        }
        secondNum = Number(textDisplayed.textContent);
    }
    if (event.key === ".") {
        if (decimalStatus == false) {
            if (displayClearStatus == true) {
                textDisplayed.textContent = "0.";
                displayClearStatus = false;
            } else if (displayClearStatus == false) {
                textDisplayed.textContent = textDisplayed.textContent + ".";
            }
            decimalStatus = true;
        }
    }
});
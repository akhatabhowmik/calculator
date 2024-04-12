// Variables
let input = '';

// Function to update the display
function updateDisplay() {
    document.getElementById('display').value = input;
}

// Function to append input to the display
function appendInput(value) {
    input += value;
    updateDisplay();
}

// Function to remove the last character from the input
function backspace() {
    input = input.slice(0, -1);
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    input = '';
    updateDisplay();
}

// Function to perform calculation
function calculate() {
    try {
        let result = eval(input);
        input = result.toString();
        updateDisplay();
    } catch (error) {
        input = 'Error';
        updateDisplay();
    }
}

// Function for modulus operation (%)
function percentage() {
    input += '*100';
    updateDisplay();
}

// Function for parentheses ()
function bracket() {
    input += '()';
    updateDisplay();
}

// Function for addition operation (+)
function add() {
    input += '+';
    updateDisplay();
}

// Function for subtraction operation (-)
function subtract() {
    input += '-';
    updateDisplay();
}

// Function for multiplication operation (*)
function multiply() {
    input += '*';
    updateDisplay();
}

// Function for division operation (/)
function divide() {
    input += '/';
    updateDisplay();
}

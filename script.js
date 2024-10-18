const modernDisplay = document.querySelector('#modern-display');
const modernButtons = document.querySelectorAll('.modern-btn');
let modernCurrentInput = '';
let modernPreviousInput = '';
let modernOperator = '';

modernButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (button.classList.contains('operator')) {
            handleModernOperator(value);
        } else if (value === 'all-clear') {
            clearModernDisplay();
        } else if (value === '=') {
            modernCalculate();
        } else {
            appendModernNumber(value);
        }
    });
});

function appendModernNumber(number) {
    if (modernCurrentInput.length <= 10) {
        modernCurrentInput += number;
        modernDisplay.value = modernCurrentInput;
    }
}

function handleModernOperator(op) {
    if (modernCurrentInput === '') return;
    modernOperator = op;
    modernPreviousInput = modernCurrentInput;
    modernCurrentInput = '';
}

function modernCalculate() {
    let result = 0;
    const prev = parseFloat(modernPreviousInput);
    const curr = parseFloat(modernCurrentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (modernOperator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    modernCurrentInput = result.toString();
    modernOperator = '';
    modernDisplay.value = modernCurrentInput;
}

function clearModernDisplay() {
    modernCurrentInput = '';
    modernPreviousInput = '';
    modernOperator = '';
    modernDisplay.value = '';
}

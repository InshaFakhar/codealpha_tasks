let input = document.getElementById('nums');
let buttons = document.querySelectorAll('.btn');
let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerText.trim();

        if (value === 'C') {
            expression = "";
            input.value = "";
        } else if (value === '=') {
            try {
                expression = expression.replace(/\^/g, '**');
                let result = eval(expression);
                input.value = result;
                expression = result.toString();
            } catch {
                input.value = "Error";
                expression = "";
            }
        } else {
            expression += value;
            input.value = expression;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            handleInput(value);
        });
    });

    document.addEventListener('keydown', (e) => {
        const key = e.key;
        if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Escape'].includes(key)) {
            handleInput(key);
        }
    });

    function handleInput(value) {
        switch (value) {
            case 'C':
            case 'Escape':
                display.value = '';
                break;
            case '=':
            case 'Enter':
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
                break;
            case 'Backspace':
                display.value = display.value.slice(0, -1);
                break;
            default:
                if (display.value === 'Error') {
                    display.value = '';
                }
                display.value += value;
        }
    }
});

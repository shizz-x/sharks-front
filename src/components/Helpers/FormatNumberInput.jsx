export function FormatNumberInput(currentInput, newChar) {
    // Проверка на ввод нечисловых символов, кроме точки
    if (newChar !== '.' && (newChar < '0' || newChar > '9')) {
        return parseFloat(currentInput) || 0;
    }

    // Проверка на множественный ввод точек
    if (newChar === '.' && currentInput.includes('.')) {
        return parseFloat(currentInput) || 0;
    }

    // Сборка новой строки
    return currentInput.toString() + newChar.toString();
}
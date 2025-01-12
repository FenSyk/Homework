function greet(name) {
    return `Hello "${name}"`;
}
console.log(greet("Алексей"));

let numbers = [5, 11, 20, 3, 8, 15];

function printGreaterThanTen(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}
printGreaterThanTen(numbers);


function calculator(num1, num2, operator) {
    if (operator === 'plus') {
        return num1 + num2;
    } else if (operator === 'minus') {
        return num1 - num2;
    } else if (operator === 'multiply') {
        return num1 * num2;
    } else if (operator === 'divide') {
        return num1 / num2;
    } else {
        return "Неизвестный оператор";
    }
}

let result = calculator(2, 3, 'minus');
console.log(result);

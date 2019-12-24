let a = +prompt("Input first value", '');
let b = +prompt("Input second value", '');
let c = +prompt("Input third value", '');
let x1;
let x2;

if (isNaN(a) || isNaN(b) || isNaN(c) ||
    a === null || b === null || c === null ||
    a === "" || b === "" || c === "" || a === 0) {
    console.log('Invalid input data');
} else {
    let D = Math.pow(b, 2) - 4 * a * c;

    if (D > 0) {
        x1 = (-b - Math.sqrt(D)) / (2 * a).toFixed(2);
        x2 = (-b + Math.sqrt(D)) / (2 * a).toFixed(2);
        alert('x1 = ' + x1);
        alert('x2 = ' + x2);
    } else if (D === 0) {
        x1 = (-b / (2 * a)).toFixed(2);
        alert('x1 = ' + x1);
    } else {
        alert('no solution');
    }

}
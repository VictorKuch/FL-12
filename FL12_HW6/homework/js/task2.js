let a = +prompt('length of side a', '');
let b = +prompt('length of side b', '');
let c = +prompt('length of side c', '');

if (isNaN(a) || isNaN(b) || isNaN(c) ||
    a === null || b === null || c === null ||
    a === " " || b === " " || c === " ") {
    alert('input values should be ONLY numbers');
} else if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length.');
} else if (!(a + b > c && b + c > a && a + c > b)) {
    alert('Triangle doesn’t exist');
} else {
    if (a === b && b === c) {
        console.log('Equilateral triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }
}
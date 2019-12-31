function makeNumber(str) {
    let Numbers = [];
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])) {
            Numbers.push(arr[i]);
        }
    }
    return Numbers.join('');
}

function countNumbers(str) {
    let object = {};

    makeNumber(str).split('').forEach(function (e) {
        if (object[e]) {
            object[e] += 1;
        } else {
            object[e] = 1;
        }
    });

    return object;
}

countNumbers('erer384jj4444666888jfd123');
function convert() {
    let arr = [];

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            arr.push(String(arguments[i]));
        } else {
            arr.push(Number(arguments[i]));
        }
    }
    return arr;
}
convert('1', 2, 3, '4');

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

executeforEach([1, 2, 3], function (el) {
    console.log(el * 2);
});

function mapArray(array, func) {
    let arr = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            arr.push(func(Number(array[i])));
        } else {
            arr.push(func(array[i]));
        }
    }
    return arr;
}

mapArray([2, '5', 8], function (el) {
    console.log(el + 3);
});

function filterArray(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

filterArray([2, 5, 8], function (el) {
    return el % 2 === 0;
});

function substitute(a) {
    let arr = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] < 30) {
            arr.push('*');
        } else {
            arr.push(a[i]);
        }
    }
    return arr;
}

substitute([58, 14, 48, 2, 31, 29]);


let past = new Date(2020, 0, 1);

function getPastDay(date, past) {
    let mili = 24 * 60 * 60 * 1000;
    return new Date(date.getTime() - past * mili).getDate();
}
getPastDay(past, 1);

function formatDate(date) {

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    function hour() {
        if (date.getHours() < 10) {
            return '0' + hours;
        } else {
            return hours;
        }
    }

    function minute() {
        if (date.getMinutes() < 10) {
            return '0' + minutes;
        } else {
            return minutes;
        }
    }
    let H = hour();
    let M = minute();


    return `${year}/${month}/${day} ${H}:${M}`;
}
formatDate(new Date('6/15/2018 09:15:00'));

function flipOver(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i];
    }
    return newStr;
}
flipOver('hey world');

function makeListFromRange(arr) {
    let newArr = [];
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        newArr.push(i);
    }
    return newArr;
}
makeListFromRange([2, 7]);

const actors = [{
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    }
];

function getArrayOfKeys(arr, keyName) {
    const newArr = [];

    executeforEach(arr, function (obj) {
        if (obj[keyName]) {
            newArr.push(obj[keyName]);
        }
    });

    return newArr;
}

getArrayOfKeys(actors, 'name');
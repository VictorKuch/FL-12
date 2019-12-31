function isLeapYear(date) {
    let newYear = new Date(date);
    newYear = newYear.getFullYear();
    if (newYear % 4 === 0) {
        return newYear + ' is a leap year';
    } else if (!newYear % 4 === 0) {
        return newYear + ' is not a leap year';
    } else {
        return 'Invalid Date';
    }

}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
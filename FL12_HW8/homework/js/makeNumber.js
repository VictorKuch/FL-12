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

makeNumber('darfe325643eefsd2');
const analyzeArray = (arrOfNumbers) => {
  let returnValue = null;

  if (arrOfNumbers.length < 1)
    return 'Please do not enter an empty array';

  if (allNumbersTrue(arrOfNumbers)) {
    returnValue = {
      average: getAverage(arrOfNumbers),
      min: getMin(arrOfNumbers),
      max: getMax(arrOfNumbers),
      length: arrOfNumbers.length
    }
  } else {
    returnValue = 'Please only enter an array with NUMBERS';
  }
  return returnValue;
}

const allNumbersTrue = (arr) => {
  let allNumbers = true;
  arr.forEach(element => {
    if (element !== parseInt(element)) allNumbers = false;
  });
  return allNumbers;
}

const getAverage = (arrOfNumbers) => {
  const sumOfArr = arrOfNumbers.reduce((acc, curr) => acc + curr, 0);
  return Math.round(sumOfArr / arrOfNumbers.length);
}

const getMin = (arrOfNumbers) => {
  let min = arrOfNumbers[0];
  for (const number of arrOfNumbers) {
    number < min
      ? min = number
      : min
  }
  return min;
}

const getMax = (arrOfNumbers) => {
  let max = arrOfNumbers[0];
  for (const number of arrOfNumbers) {
    number > max
      ? max = number
      : max
  }
  return max;
}

module.exports = analyzeArray;
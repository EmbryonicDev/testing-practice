const analyzeArray = (arrOfNumbers) => {
  return {
    average: getAverage(arrOfNumbers),
    min: getMin(arrOfNumbers),
    max: getMax(arrOfNumbers),
    length: arrOfNumbers.length
  }
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
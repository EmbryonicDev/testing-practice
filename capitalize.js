function capitalize(str) {
  const returnValue = str.toLowerCase().split(' ');
  for (let i = 0; i < returnValue.length; i += 1) {
    returnValue[i] = returnValue[i].charAt(0).toUpperCase() + returnValue[i].slice(1);
  }
  return returnValue.join(' ');
}
module.exports = capitalize

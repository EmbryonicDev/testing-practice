const alpha = 'abcdefghijklmnopqrstuvwxyz';
const alphaKeys = [];
const masterKeyObj = [];
const caesarKeyObj = [];
let caesarKeys = [];
let charCase = null;

const caesarCipher = (string, key) => {
  fillAlphaKeys();
  newAlphaObjArr(alpha, alphaKeys, masterKeyObj)
  newKeys(key);
  newAlphaObjArr(alpha, caesarKeys, caesarKeyObj);
  return translateLetters(string);
};

const fillAlphaKeys = () => {
  if (alphaKeys.length < 1) {
    for (let i = 1; i < 27; i += 1) {
      alphaKeys.push(i)
    }
    caesarKeys = alphaKeys;
  }
};

const newAlphaObj = (letter, key, keyObj) => {
  const el = {
    letter,
    key
  }
  keyObj.push(el)
};

const newAlphaObjArr = (alphaArr, keyArr, keyObj) => {
  // clear keyObj first
  while (keyObj.length > 0) keyObj.pop();

  alphaArr = alphaArr.split('');
  for (let i = 0; i < alphaArr.length; i += 1) {
    newAlphaObj(alphaArr[i], keyArr[i], keyObj)
  }
};

const newKeys = (shiftCount) => {
  const poppedArr = [];
  for (let i = 0; i < shiftCount; i += 1) {
    poppedArr.unshift(caesarKeys.pop());
    caesarKeys.unshift(poppedArr[0]);
  };
};

const storeCase = (char) => {
  char === char.toUpperCase()
    ? charCase = 'upperCase'
    : charCase = 'lowerCase'
};

const restoreCase = (char) => {
  if (charCase == 'upperCase')
    char = char.toUpperCase();
  return char
};

const translateLetters = (string) => {
  string = string.split('');
  for (let i = 0; i < string.length; i += 1) {
    if (!/^[a-zA-Z]+$/.test(string[i])) {
      string[i] = string[i];
    } else {
      storeCase(string[i]);
      string[i] = string[i].toLowerCase();

      const alphaKey = masterKeyObj
        .filter(obj => obj.letter == string[i])[0]
        .key;

      const caesarLetter = caesarKeyObj
        .filter(obj => obj.key == alphaKey)[0]
        .letter;

      string[i] = restoreCase(caesarLetter);
    }
  }
  console.log(string.join(''));
  return string.join('');
};

module.exports = caesarCipher;

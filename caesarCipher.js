let alpha = 'abcdefghijklmnopqrstuvwxyz';
const alphaKeys = [];
const masterKeyObj = [];
const caesarKeyObj = [];
let caesarKeys = [];

const fillAlphaKeys = () => {
  for (let i = 1; i < 27; i += 1) {
    alphaKeys.push(i)
  }
  caesarKeys = alphaKeys;
};

const caesarCipher = async (string, key) => {
  fillAlphaKeys();
  newAlphaObjArr(alpha, alphaKeys, masterKeyObj)
  newKeys(key);
  newAlphaObjArr(alpha, caesarKeys, caesarKeyObj);

  console.log(translateLetters(string) + ' = ' + typeof translateLetters(string));
  translateLetters(string);
};

const newAlphaObj = (letter, key, keyObj) => {
  const el = {
    letter,
    key
  }
  keyObj.push(el)
};

const newAlphaObjArr = (alphaArr, keyArr, keyObj) => {
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

const translateLetters = (string) => {
  string = string.split('');
  for (let i = 0; i < string.length; i += 1) {
    const alphaKey = masterKeyObj
      .filter(obj => obj.letter == string[i])[0]
      .key;

    const caesarLetter = caesarKeyObj
      .filter(obj => obj.key == alphaKey)[0]
      .letter;

    string[i] = caesarLetter
  }
  return string.join('');
};

module.exports = caesarCipher;

const emojiHash = {
  0: '&#128347;',
  1: '&#128336;',
  2: '&#128337;',
  3: '&#128338;',
  4: '&#128339;',
  5: '&#128340;',
  6: '&#128341;',
  7: '&#128342;',
  8: '&#128343;',
  9: '&#128344;'
};

let convertedStr = '';

function convert() {
  const str = document.getElementById('numbers').value;

  str.trim()
    .split('').forEach(char => {
      if(isNaN(char) || char === ' '){
        convertedStr += char;
      } else {
        const number = parseInt(char);
        convertedStr += emojiHash[number];
      }
  });

  document.getElementById('result').innerHTML = convertedStr;
  document.getElementById("copyBtn").style.visibility = 'visible';
}

function copy() {
  var range = document.createRange();
  range.selectNode(document.getElementById("result"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

document.getElementById("copyBtn").addEventListener("click", copy)

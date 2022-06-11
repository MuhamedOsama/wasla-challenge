let mysentence = 'I am interested to work at Wasla Browser';

let reverser = (sentence) => {
  let word = '';
  let words = [];
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == ' ') {
      words.push(word);
      word = '';
    } else {
      word += sentence[i];
    }
    if (i == sentence.length - 1) {
      words.push(word);
    }
  }
  let reversed = '';
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i];
    if (i > 0) {
      reversed += ' ';
    }
  }
  return reversed;
};

console.log(reverser(mysentence));

const Adagrams = {
drawLetters() {
  // Implement this method for wave 1
  const a = Array(9).fill('A');
  const b = Array(2).fill('B');
  const c = Array(2).fill('C');
  const d = Array(4).fill('D');
  const e = Array(12).fill('E');
  const f = Array(2).fill('F');
  const g = Array(3).fill('G');
  const h = Array(2).fill('H');
  const i = Array(9).fill('I');
  const j = ['J'];
  const k = ['K'];
  const l = Array(4).fill('L');
  const m = Array(2).fill('M');
  const n = Array(6).fill('N');
  const o = Array(8).fill('O');
  const p = Array(2).fill('P');
  const q = ['Q'];
  const r = Array(6).fill('R');
  const s = Array(4).fill('S');
  const t = Array(6).fill('T');
  const u = Array(4).fill('U');
  const v = Array(2).fill('V');
  const w = Array(2).fill('W');
  const x = ['X'];
  const y = Array(2).fill('Y');
  const z = ['Z'];

  const pool = [...a, ...b, ...c, ...d, ...e,
    ...f, ...g, ...h, ...i, ...j, ...k, ...l,
    ...m, ...n, ...o, ...p, ...q, ...r, ...s,
    ...t, ...u, ...v, ...w, ...x, ...y, ...z];

    let hand = [];
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * pool.length);
      hand.push(pool.splice(index, 1)[0]);
    }

    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    for(const letter of input) {

      const index = lettersInHand.indexOf(letter);

      if (index > -1) {
        lettersInHand.splice(index, 1);

      } else {
        return false;
      }
    }

    return true;
  },

  scoreWord(word) {

    const score_chart = {
      "A" : 1,
      "B" : 3,
      "C" : 3,
      "D" : 2,
      "E" : 1,
      "F" : 4,
      "G" : 2,
      "H" : 4,
      "I" : 1,
      "J" : 8,
      "K" : 5,
      "L" : 1,
      "M" : 3,
      "N" : 1,
      "O" : 1,
      "P" : 3,
      "Q" : 10,
      "R" : 1,
      "S" : 1,
      "T" : 1,
      "U" : 1,
      "V" : 4,
      "W" : 4,
      "X" : 8,
      "Y" : 4,
      "Z" : 10
    };

    let score = 0;
    for (const letter of word) {

      score += score_chart[letter.toUpperCase()];
    }

    if (word.length >= 7) {
      score += 8;
    }

    return score;
  },

  highestScoreFrom(words) {

    let highScore = 0;
    let bestWord = '';

    for(const word of words) {

      const wordScore = this.scoreWord(word);

      if (wordScore > highScore) {
        highScore = wordScore;
        bestWord = word;
      } else if (wordScore == highScore && bestWord.length != word.length) {

        if (word.length == 10 || (word.length < bestWord.length && bestWord.length != 10)) {
          highScore = wordScore;
          bestWord = word;
        }
      }
    }

    return {
      word: bestWord,
      score: highScore
    }

  }

};

// const drawn = ['D', 'O', 'G', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
// const word = 'DOG';
//
// const isValid = Adagrams.usesAvailableLetters(word, drawn);
// console.log(isValid);

// Do not remove this line or your tests will break!
export default Adagrams;

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let n = 0;
  let a = [];

  if (word1.length > word2.length) {
    n = word2.length;
    a = word1;
  } else {
    n = word1.length;
    a = word2;
  }

  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(word1[i]);
    arr.push(word2[i]);
  }

  if (word1.length !== word2.length) arr.push(a.slice(n));

  return arr.join("");
};

const word1 = "abc";
const word2 = "pqr";

console.log(mergeAlternately(word1, word2));

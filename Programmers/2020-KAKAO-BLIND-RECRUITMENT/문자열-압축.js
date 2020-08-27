// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
  let minLength = s.length;
  for (let compressLength = 1; compressLength <= s.length; compressLength++) {
    minLength = Math.min(
      minLength,
      getCompressedCharacters(s, compressLength).length
    );
  }
  return minLength;
}

function getCompressedCharacters(s, compressLength) {
  let preChar = s.slice(0, compressLength);
  let count = 1;
  let compressed = '';
  for (let i = compressLength; i <= s.length; i += compressLength) {
    let targetChar = s.slice(i, i + compressLength);
    if (preChar === targetChar) {
      count++;
    } else {
      compressed += count === 1 ? preChar : count + preChar;
      preChar = targetChar;
      count = 1;
    }
  }
  compressed += preChar;
  return compressed;
}

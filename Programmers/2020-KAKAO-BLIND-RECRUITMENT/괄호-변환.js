// https://programmers.co.kr/learn/courses/30/lessons/60058

function solution(p) {
  return changeCorrectParenthesis(p);
}

function changeCorrectParenthesis(w) {
  if (w.length === 0) return '';

  let u = '';
  let v = '';
  let index = 0;
  while (!isBalancedParenthesis(u)) {
    u += w.slice(index, index + 2);
    index += 2;
  }
  v = w.slice(index);
  if (isCorrectParenthesis(u)) {
    return u + changeCorrectParenthesis(v);
  } else {
    return '(' + changeCorrectParenthesis(v) + ')' + refineParenthesis(u);
  }
}

function isBalancedParenthesis(s) {
  if (s.length === 0) return false;
  let openParenthesisCount = 0;
  let closeParenthesisCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      openParenthesisCount++;
    } else {
      closeParenthesisCount++;
    }
  }

  return openParenthesisCount === closeParenthesisCount;
}

function isCorrectParenthesis(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return stack.length === 0;
}

function refineParenthesis(s) {
  let refined = s.slice(1, s.length - 1);
  refined = refined.replace(/\(/g, '-');
  refined = refined.replace(/\)/g, '(');
  refined = refined.replace(/\-/g, ')');
  return refined;
}

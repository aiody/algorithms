// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/836/

/**
 * @param {string} s
 * @return {number}
 */

/*
function calculateByOperation(a, b, o) {
    if(o === '/') {
        return Math.floor(a / b);
    } else if(o === '*') {
        return a * b;
    } else if(o === '+') {
        return a + b;
    } else if (o === '-') {
        return a - b;
    }
}
*/

var calculate = function (s) {
  /*
  const expression = s.split(' ').join('');
  const numbers = [];
  const operators = [];
  
  for(let i = 0; i < expression.length; i++) {
      if(!isNaN(expression[i])) {
          numbers.push(Number(expression[i]));
      } else if(expression[i] === '/' || expression[i] === '*') {
          const newNum = calculateByOperation(numbers.pop(), expression[i + 1], expression[i]);
          numbers.push(newNum);
          i++;
      } else {
          operators.push(expression[i]);
      }
  }
  
  while(operators.length !== 0) {
      const b = numbers.pop();
      const a = numbers.pop();
      
      const newNum = calculateByOperation(a, b, operators.pop());
      numbers.push(newNum);
  }
  
  return numbers.join('');
  */

  s = s.replace(/\s/g, ''); // remove space
  const stack = [];
  let num = 0;
  let sign = '+';
  for (let i = 0; i < s.length; i++) {
    if (/\d/.test(s[i])) {
      num = num * 10 + Number(s[i]);
    }
    if (/\D/.test(s[i]) || i === s.length - 1) {
      if (sign === '+') {
        stack.push(num);
      } else if (sign === '-') {
        stack.push(-num);
      } else if (sign === '*') {
        stack.push(stack.pop() * num);
      } else if (sign === '/') {
        stack.push(~~(stack.pop() / num)); // or Math.floor(stack.pop() / num);
      }

      sign = s[i];
      num = 0;
    }
  }
  return stack.reduce((a, b) => a + b);
};

// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  const record = {};
  for (let i = 0; i < completion.length; i++) {
    record[completion[i]] = (record[completion[i]] || 0) + 1;
  }

  for (let i = 0; i < participant.length; i++) {
    if (record[participant[i]] === undefined || record[participant[i]] === 0) {
      return participant[i];
    }
    record[participant[i]]--;
  }
}

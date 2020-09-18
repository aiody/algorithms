const nums = [3, 7, 2, 5, 1, 4, 6];

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let mid = Math.floor(arr.length * 0.5);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  }
}

function merge(splitA, splitB) {
  let i = 0;
  let j = 0;
  let merged = [];
  while (i < splitA.length && j < splitB.length) {
    if (splitA[i] < splitB[j]) {
      merged.push(splitA[i++]);
    } else {
      merged.push(splitB[j++]);
    }
  }
  merged = merged.concat(splitA[i] ? splitA.slice(i) : splitB.slice(j));
  return merged;
}

console.log(mergeSort(nums));

const nums = [
  43,
  34,
  2,
  6,
  75,
  46,
  17,
  64,
  52,
  72,
  63,
  40,
  83,
  24,
  93,
  95,
  3,
  88,
  97,
  86,
  44,
  30,
  28,
  59,
  68,
  18,
  27,
  15,
  11,
  61,
  80,
  20,
  66,
  10,
  48,
  74,
  36,
  47,
  25,
  45,
  58,
  51,
  57,
  32,
  69,
  87,
  84,
  53,
  60,
  96,
  67,
  76,
  19,
  70,
  31,
  29,
  50,
  5,
  26,
  4,
  33,
  42,
  89,
  62
];

function binarySearch(target) {
  const sortedNums = nums.sort((a, b) => a - b);

  function search(left, right) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) * 0.5);

    if (sortedNums[mid] === target) {
      return mid;
    } else if (sortedNums[mid] > target) {
      return search(left, mid - 1);
    } else if (sortedNums[mid] < target) {
      return search(mid + 1, right);
    }
  }
  console.log(search(0, sortedNums.length - 1));
}

binarySearch(18);

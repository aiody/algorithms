const nums = [7, 6, 3, 9, 4, 1, 5, 8, 2];

function insertionSort() {
  let fixedIndex = 0;
  let targetIndex;
  while (fixedIndex < nums.length) {
    targetIndex = fixedIndex;

    while (
      nums[targetIndex - 1] !== undefined &&
      nums[targetIndex] < nums[targetIndex - 1]
    ) {
      [nums[targetIndex], nums[targetIndex - 1]] = [
        nums[targetIndex - 1],
        nums[targetIndex]
      ];
      targetIndex--;
    }

    fixedIndex++;
  }
  console.log(nums);
}

insertionSort();

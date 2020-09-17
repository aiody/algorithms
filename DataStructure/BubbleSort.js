const nums = [7, 6, 3, 9, 4, 1, 5, 8, 2];

function bubbleSort() {
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  console.log(nums);
}

bubbleSort();

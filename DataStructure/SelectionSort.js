const nums = [7, 6, 3, 9, 4, 1, 5, 8, 2];

function selectionSort() {
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (min > nums[j]) {
        min = nums[j];
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }

  console.log(nums);
}

selectionSort();

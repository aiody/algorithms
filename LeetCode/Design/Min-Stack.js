// https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/562/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.storage = [];
  this.topIndex = -1;
  this.min = Infinity;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.storage[++this.topIndex] = x;
  this.min = Math.min(this.min, x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.min === this.storage[this.topIndex--]) {
    this.min = Infinity;
    for (let i = 0; i <= this.topIndex; i++) {
      this.min = Math.min(this.min, this.storage[i]);
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.storage[this.topIndex];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

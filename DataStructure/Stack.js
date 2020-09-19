class Stack {
  constructor() {
    this.maxSize = 10;
    this.storage = new Array(this.maxSize);
    this.top = -1;
  }

  push(value) {
    if (this.isFull()) return;
    this.storage[++this.top] = value;
  }

  pop() {
    if (this.isEmpty()) return;
    return this.storage[this.top--];
  }

  size() {
    return this.top + 1;
  }

  isEmpty() {
    return this.top === -1;
  }

  isFull() {
    return this.top + 1 === this.maxSize;
  }
}

let stack = new Stack();

stack.push(1);
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
console.log(stack.isFull());
stack.push(1);
console.log(stack.size());

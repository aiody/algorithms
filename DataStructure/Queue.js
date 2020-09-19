class Queue {
  constructor() {
    this.maxSize = 10;
    this.storage = [];
    this.front = -1;
    this.rear = -1;
  }

  push(value) {
    if (this.isFull()) return;
    this.storage[++this.front] = value;
  }

  pop() {
    if (this.isEmpty()) return;
    return this.storage[++this.rear];
  }

  size() {
    return this.front - this.rear;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  isFull() {
    return this.front === this.maxSize - 1;
  }
}

let queue = new Queue();

console.log(queue.isEmpty());
console.log(queue.size());
queue.push(1);
console.log(queue.isEmpty());
console.log(queue.pop());
console.log(queue.size());
console.log(queue.isEmpty());
queue.push(2);
console.log(queue.pop());
queue.push(3);
console.log(queue.pop());
queue.push(4);
console.log(queue.pop());
queue.push(5);
console.log(queue.pop());
queue.push(6);
console.log(queue.pop());
queue.push(7);
console.log(queue.pop());
queue.push(8);
console.log(queue.pop());
queue.push(9);
console.log(queue.pop());
queue.push(10);
console.log(queue.pop());
console.log(queue.isFull());

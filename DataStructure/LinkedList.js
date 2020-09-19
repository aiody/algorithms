class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.header = null;
    this.size = 0;
  }

  addToTail(value) {
    const newNode = new Node(value);
    if (!this.header) {
      this.header = newNode;
    } else {
      let target = this.header;
      while (target.next) {
        target = target.next;
      }
      target.next = newNode;
    }
    this.size++;
  }

  addToHeader(value) {
    const newNode = new Node(value);
    newNode.next = this.header;
    this.header = newNode;
    this.size++;
  }

  addAfterSpecificNode(value, targetNode) {
    const newNode = new Node(value);
    newNode.next = targetNode.next;
    targetNode.next = newNode;
    this.size++;
  }

  getSize() {
    return this.size;
  }

  findSpecificValue(value) {
    let target = this.header;
    while (target) {
      if (target.value === value) {
        return target;
      }
      target = target.next;
    }
    return null;
  }

  deleteHeader() {
    this.header = this.header.next;
    this.size--;
  }

  deleteTail() {
    let target = this.header;
    while (target.next.next) {
      target = target.next;
    }
    target.next = null;
    this.size--;
  }

  deleteSpecificValue(value) {
    let target = this.header;
    while (target.next) {
      if (target.next.value === value) {
        target.next = target.next.next;
        this.size--;
        break;
      }
    }
  }
}

const linkedList = new LinkedList();
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);
linkedList.addToHeader(0);
linkedList.addAfterSpecificNode(-1, linkedList.header.next);
console.log(linkedList.header);
console.log(linkedList.getSize());
console.log(linkedList.findSpecificValue(0));
linkedList.deleteHeader();
console.log(linkedList.header);
console.log(linkedList.getSize());
linkedList.deleteTail();
console.log(linkedList.header);
console.log(linkedList.getSize());
linkedList.deleteSpecificValue(-1);
console.log(linkedList.header);
console.log(linkedList.getSize());

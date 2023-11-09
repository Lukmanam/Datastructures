class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  // Example usage:
  const sstack = new Stack();
  sstack.push(1);
  sstack.push(2);
  sstack.push(3);
  
  console.log(sstack.pop()); // Outputs: 3
  console.log(sstack.peek()); // Outputs: 2
  console.log(sstack.size()); // Outputs: 2
  
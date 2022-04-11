// Stack

// linear data structure which follows a particular order in which the operations are performed
// LIFO (Last In First Out)

class Stack {
    constructor() {
        this.data = [];
    }

    push(val) {
        return this.data.push(val);
    }

    retrieve(){ // retrieve a value from the stack 
        return this.data.pop();
    }
}

const stack1 = new Stack();

stack1.push(1);
stack1.push(5);
stack1.push(20);
stack1.push(100);

console.log(stack1.data);

const data1 = stack1.retrieve();
console.log("data retrieved is", data1)
console.log(stack1.data);


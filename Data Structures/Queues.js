// Queue

// linear data structure which follows a particular order in which the operations are performed
// FIFO (First In First Out)

class Queue {
    constructor() {
        this.data = [];
    }

    push(val){
        return this.data.push(val);
    }

    retrieve(){
        return this.data.shift();
    }
}

const queue1 = new Queue();
queue1.push(1);
queue1.push(2);
queue1.push(3);
queue1.push(4);
console.log(queue1.data);

const data1 = queue1.retrieve();
console.log("data retrieved is", data1)
console.log(queue1.data);

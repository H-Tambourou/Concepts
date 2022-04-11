// Linked List

// a data structure that represent a sequence of nodes 
// elements are store in nodes that contain a pointer to the next node, repeating until all nodes are linked

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList { // singly linked list
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){ // adds to the tail of the list
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode; //last node links to new node
            this.tail = newNode; // new node is now the tail
        }
        this.length++;
        return this;
    }

    pop(){// removes last node of the list
        if(!this.head) return undefined;
        const current = this.head;
        const newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length ==0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){// remove from the head of the list
        if(!this.head) return undefined;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){// insert a node to the beginning of the list
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index){// retrieves a value at a given index
        if(index < 0 || index >= this.length) return null;
        const counter = 0;
        const current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){// given an index and value, will update the value of that node
        const foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){// accepts an index and value and inserts a new node
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        const newNode = new Node(val);
        const prev = this.get(index -1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){// accepts an index removes the node at the index 
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length -1) return this.pop();
        const previousNode = this.get(index -1);
        const removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
}

/*
Insertion: O(1)
Removal: O(1) or O(n) // removal vs. within the list
Searching: O(n)
Access: O(n)
*/
const list = new LinkedList();

list.push(1);
list.push(2);
list.push(4);
list.push(6);
list.push(100);

console.log(list.length);

const traverse = (head) => {
    console.log("entering traverse")
    while(head){
        console.log(head.val);
        head = head.next;
    }
    console.log("exiting traverse")
}

traverse(list.head)

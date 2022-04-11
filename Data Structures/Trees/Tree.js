// Tree

// a tree is a data structure composed of nodes 
//   - each tree has a root node 
//   - root node has zero or more child nodes 
//   - each child nodes has zero or more child nodes 

/*  
    Traversal (the process of visiting all the nodes of a tree)
    - In-Order Traversal -> visit the left branch then the current node then the right branch
    - Pre-Order Traversal -> visit the current node before its child nodes
    - Post-Order Traversal -> visit the current node after its child nodes 
*/

class TreeNode {
    constructor(key, value = key, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.children = [];
    }
  
    get isLeaf() {
      return this.children.length === 0;
    }
  
    get hasChildren() {
      return !this.isLeaf;
    }
  }
  
  class Tree {
    constructor(key, value = key) {
      this.root = new TreeNode(key, value);
    }
  
    *preOrderTraversal(node = this.root) {
      yield node;
      if (node.children.length) {
        for (let child of node.children) {
          yield* this.preOrderTraversal(child);
        }
      }
    }
  
    *postOrderTraversal(node = this.root) {
      if (node.children.length) {
        for (let child of node.children) {
          yield* this.postOrderTraversal(child);
        }
      }
      yield node;
    }
  
    insert(parentNodeKey, key, value = key) {
      for (let node of this.preOrderTraversal()) {
        if (node.key === parentNodeKey) {
          node.children.push(new TreeNode(key, value, node));
          return true;
        }
      }
      return false;
    }
  
    remove(key) {
      for (let node of this.preOrderTraversal()) {
        const filtered = node.children.filter(c => c.key !== key);
        if (filtered.length !== node.children.length) {
          node.children = filtered;
          return true;
        }
      }
      return false;
    }
  
    find(key) {
      for (let node of this.preOrderTraversal()) {
        if (node.key === key) return node;
      }
      return undefined;
    }
  }


  const tree = new Tree(1);

  tree.insert(1, 3);
  tree.insert(1, 4);
  tree.insert(4, 100)
  
  console.log("before");
  [...tree.preOrderTraversal()].map(x => console.log(x.value));
  
  console.log("after");
  [...tree.postOrderTraversal()].map(x => console.log(x.value));

  tree.remove(100);
  console.log(tree.root.value);
  tree.root.hasChildren;// true
  
  tree.find(1).isLeaf;

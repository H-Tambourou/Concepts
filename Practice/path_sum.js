const hasPathSum = function(root, targetSum) {
    let res = [];
    
    const traverse = (node, leafTot) =>{
        if(node == null ){
            return
        };
        if(node.right === null && node.left === null){
            res.push(node.val + leafTot);
        };
        traverse(node.right, node.val + leafTot);
        traverse(node.left, node.val + leafTot);
    }
    traverse(root, 0);
    console.log(res)
    
    return res.includes(targetSum)
};
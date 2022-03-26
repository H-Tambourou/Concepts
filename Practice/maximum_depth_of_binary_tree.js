const maxDepth = function(root) {
    let max = 0;
    if(!root) return 0;
    
    const traverse = function(r, depth){
        max = Math.max(max, depth)
        if(r.left){
            traverse(r.left, depth + 1)
        }
        if(r.right){
            traverse(r.right, depth + 1)
        }
        return max
    };
    
    traverse(root, 1);
    
    return max;
};
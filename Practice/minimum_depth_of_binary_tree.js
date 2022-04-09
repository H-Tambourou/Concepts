const minDepth = function(root) {
    if(!root) return 0;
    
    const min = (r, depth) => {
        if(!r) return Infinity;
        if(!r.left && !r.right){
            return depth;
        }
        return Math.min(min(r.left, depth + 1),min(r.right, depth + 1));
    };
    
    return min(root, 1);
    
};
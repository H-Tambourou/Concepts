const isSameTree = function(r1, r2) {
    if(!r1 && !r2) return true;
    if(!r1 || !r2) return false;
    
    if(r1.val == r2.val) return isSameTree(r1.left, r2.left) && isSameTree(r1.right, r2.right)
}
const isSubtree = function(root, subRoot) {
    if(!root) return false;
    return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    
};
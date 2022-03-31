const invertTree = function(root) {
    if(!root) return null;
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    [root.left, root.right] = [root.right, root.left];
    return root;
};
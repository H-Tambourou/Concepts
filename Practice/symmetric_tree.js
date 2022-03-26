const check = function(l, r) {
    if(!l && !r) return true;
    if(!l || !r) return false;
    
    return l.val == r.val && check(l.left, r.right) && check(l.right, r.left);
}
const isSymmetric = function(root) {
    return check(root.left, root.right);
};
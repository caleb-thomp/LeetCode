/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
  if (!root) return true;

  let queue = [root];
  let nullNodeFound = false;

  while (queue.length) {
    const node = queue.shift();

    if (node === null) {
      nullNodeFound = true;
    } else {
      // If we've already found a null node, 
      // and there's a non-null node at this level, 
      // then the tree isn't complete
      if (nullNodeFound) return false;

      queue.push(node.left);
      queue.push(node.right);
    }
  }

  // If we made it through the loop without returning false, 
  // the tree is complete
  return true;
};

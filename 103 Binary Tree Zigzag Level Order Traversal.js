/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

var zigzagLevelOrder = function (root) {
    let res = [];
    let stack = [root];
    let flag = true;

    while (stack.length !== 0) {
        let row = [];
        let temp = [];
        if (flag) {
            for (let i = 0; i < stack.length; i++) {
                row.push(stack[i].val);
                if (stack[i].left) {
                    temp.push(stack[i].left);
                }
                if (stack[i].right) {
                    temp.push(stack[i].right);
                }
            }
            stack = temp;
            res.push(row);
        } else {
            for (let i = stack.length - 1; i >= 0; i--) {
                row.push(stack[i].val);
                if (stack[i].right) {
                    temp.unshift(stack[i].right);
                }
                if (stack[i].left) {
                    temp.unshift(stack[i].left);
                }
            }
            stack = temp;
            res.push(row);
        }
        flag = !flag;
    }
    return res;
}

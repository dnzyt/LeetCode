/*
One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as #.

     _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #
For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where # represents a null node.

Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.

Each comma separated value in the string must be either an integer or a character '#' representing null pointer.

You may assume that the input format is always valid, for example it could never contain two consecutive commas such as "1,,3".

Example 1:
"9,3,4,#,#,1,#,#,2,#,6,#,#"
Return true

Example 2:
"1,#"
Return false

Example 3:
"9,#,#,1"
Return false
*/

/*
利用每个结点的出度和入度
例如，一个非空结点，它可以提供两个孩子(出度)，一个父节点(入度)
一个空节点只能提供一个父节点(入度)
遍历过后，结果为零说明合法
*/

var isValidSerializtion = function (preorder) {
    let arr = preorder.split(',');
    let diff = 1;
    for (let e of arr) {
        diff--;
        if (diff < 0) {
            return false;
        }
        if (e !== '#') {
            diff += 2;
        }
    }
    return diff === 0;
}

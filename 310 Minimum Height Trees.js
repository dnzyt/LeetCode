/*
For a undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels.

Format
The graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and a list of undirected edges (each edge is a pair of labels).

You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

Example 1:

Given n = 4, edges = [[1, 0], [1, 2], [1, 3]]

        0
        |
        1
       / \
      2   3
return [1]

Example 2:

Given n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]

     0  1  2
      \ | /
        3
        |
        4
        |
        5
return [3, 4]
*/

/*
从最外层节点一层一层剥掉，最后叶子节点要么剩下一个，要么剩下两个，这个就是所要求的结果
*/

var findMinHeightTrees = function (n, edges) {
    if (n === 1) {
        return [0];
    }
    let graph = [];
    for (let i = 0; i < n; i++) {
        graph.push(new Set());
    }

    for (let pair of edges) {
        graph[pair[0]].add(pair[1]);
        graph[pair[1]].add(pair[0]);
    }

    let leaves = [];
    for (let i = 0; i < n; i++) {
        if (graph[i].size === 1) {
            leaves.push(i);
        }
    }
    while (n > 2) {
        let sQueue = [];
        while (leaves.length !== 0) {
            let temp = leaves.pop();
            for (let v of graph[temp]) {
                graph[v].delete(temp);
                if (graph[v].size === 1) {
                    sQueue.push(v);
                }
            }
            n--;
        }
        leaves = sQueue;
    }
    return leaves;
}

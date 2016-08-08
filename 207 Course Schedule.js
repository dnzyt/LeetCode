/*
There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

For example:

2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

2, [[1,0],[0,1]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
*/

var canFinish = function (numCourses, prerequisites) {
    let graph = [];
    for (let i = 0; i < numCourses; i++) {
        graph.push([]);
    }
    let inDegree = new Array(numCourses).fill(0);
    for (let preq of prerequisites) {
        if (!graph[preq[1]]) {
            graph[preq[1]] = [preq[0]];
        } else {
            graph[preq[1]].push(preq[0]);
        }
        inDegree[preq[0]]++;
    }
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length !== 0) {
        let temp = queue.pop();
        for (let i of graph[temp]) {
            inDegree[i]--;
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }
    }
    for (let i of inDegree) {
        if (i !== 0) {
            return false;
        }
    }
    return true;
}

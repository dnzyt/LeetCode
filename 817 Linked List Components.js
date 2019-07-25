

var numComponents = function (head, G) {
    var ans = 0
    var s = new Set(G)
    while (head) {
        if (s.has(head.val) && (!head.next || !s.has(head.next.val))) {
            ans++;
        }
        head = head.next
    }

    return ans
}

var numComponents2 = function (head, G) {
    var s = new Set(G)
    var visited = new Set()
    var graph = {}

    var u = head.val
    while (head.next) {
        head = head.next
        var v = head.val

        if (s.has(u) && s.has(v)) {
            graph[u] = graph[u] ? graph[u].push(v) : [v]
            graph[v] = graph[v] ? graph[v].push(u) : [u]
        }

        u = v
    }
    var ans = 0
    for (var curr of s) {
        if (visited.has(curr)) continue
        ans++
        dfs(curr, graph, visited)
    }

    return ans
}

var dfs = function (curr, graph, visited) {
    if (visited.has(curr)) return
    visited.add(curr)
    if (!graph[curr]) return
    for (var i of graph[curr]) {
        dfs(i, graph, visited)
    }
}
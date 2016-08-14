/*
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:
If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:
tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Return ["JFK", "MUC", "LHR", "SFO", "SJC"].
Example 2:
tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Return ["JFK","ATL","JFK","SFO","ATL","SFO"].
Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.
 */

var findItinerary = function(tickets) {
    let mapping = {};
    for (let pair of tickets) {
        if (mapping[pair[0]]) {
            mapping[pair[0]].push(pair[1]);
        } else {
            mapping[pair[0]] = [pair[1]];
        }
    }

    for (let prop in mapping) {
        if (mapping[prop].length > 1) {
            mapping[prop].sort(function(a, b) { 
                for (let i = 0; i < a.length; i++) {
                    if (a[i] === b[i]) {
                        continue;
                    }
                    return b.charCodeAt(i) - a.charCodeAt(i);
                }
                
            });
        }
    }
    console.log(mapping);

    let res = [];
    let cur = 'JFK';
    let stack = [];
    for (let i = 0; i < tickets.length; i++) {
        while (!mapping[cur] || mapping[cur].length === 0) {
            stack.push(cur);
            cur = res.pop();
        }
        res.push(cur);
        cur = mapping[cur].pop();

    }
    res.push(cur);
    while (stack.length !== 0) {
        res.push(stack.pop());
    }
    return res;
}

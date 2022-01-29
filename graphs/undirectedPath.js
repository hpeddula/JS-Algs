import { buildGraphs } from './shortestPath';
let edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraphs(edges);
    const visited = new Set();
    return hasPath(graph, nodeA, nodeB, visited)
};

const hasPath = (graph, src, dest, visited) => {
    if (src === dest) return true;
    if (visited.has(src)) return false;
    visited.add(src);
    for (let neighbour of graph[src]) {
        if (hasPath(graph, neighbour, dest, visited) === true) return true
    }
    return false
}
const adjacencyList = (edges) => edges.reduce((acc, val) => {

    const [v1, v2] = val;

    if (v1 in acc) {
        return { ...acc, [v1]: [...acc[v1], v2], [v2]: [v1] }
    } else if (v2 in acc) {
        return { ...acc, [v2]: [...acc[v2], v1], [v1]: [v2] }
    } else {
        return {
            ...acc,
            ...{
                [v1]: [v2],
                [v2]: [v1]
            }
        }
    }
}, {})
// const buildGraphs = (edges) => {
//     const graph = {}
//     for (let edge of edges) {
//         const [a, b] = edge;
//         if (!(a in graph)) graph[a] = [];
//         if (!(b in graph)) graph[b] = [];
//         graph[a].push(b)
//         graph[b].push(a)
//     }
//     return graph;
// }
console.log(adjacencyList(edges))
console.log(buildGraphs(edges))

console.log(undirectedPath(edges, 'k', 'o'))
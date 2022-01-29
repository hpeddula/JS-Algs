const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];
let data = {
    w: [{ node: 'x', count: 0 }, { node: 'v', count: 0 }],
    x: [{ node: 'w', count: 0 }, { node: 'y', count: 0 }],
    y: [{ node: 'x', count: 0 }, { node: 'z', count: 0 }],
    z: [{ node: 'y', count: 0 }, { node: 'v', count: 0 }],
    v: [{ node: 'z', count: 0 }, { node: 'w', count: 0 }]
}
const shortestPath = (edges, nodeA, nodeB) => {
    const visited = new Set();
    const graph = buildGraphs(edges);
    const queue = [[nodeA, 0]]
    while (queue.length > 0) {
        let [node, distance] = queue.shift();
        if (node === nodeB) return distance
        for (let neighbour of graph[node]) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour)
                queue.push([neighbour, distance + 1])
            }
        }
    }
    return -1
};
// const breadthFirstSearch = (graph,src,dst,visited) => {
//     const queue = [src];
//     while (queue.length > 0) {
//         const current = queue.shift();
//         console.log('Current',current)
//         if(current?.node === dst) return current?.count;
//         if(visited.has(current)) return false;
//         visited.add(current)
//         for (let neighbour of current) {
//             queue.push({...neighbour,count:neighbour.count +1})
//         }
//         // for(let neighbour in graph[current.node]) {
//         //     console.log(neighbour)
//         //     for(let v of neighbour) {
//         //         queue.push({...v,count:v.count +1})
//         //     }
//         // }
//     }
//     return 0

// }
const adjacencyList = (edges) => edges.reduce((acc, val) => {

    const [v1, v2] = val;
    console.log('V1 and V2', v1, v2, acc)
    // console.log(v2 in acc)
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

export const buildGraphs = (edges) => {
    const graph = {}
    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph;
}
console.log(shortestPath(edges, 'w', 'z'))
// console.log(buildGraphs(edges))
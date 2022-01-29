//Topological Sort is a sort where it is possible only on a directed acyclic graph
//It is a linear ordering of vertices such that for every directed edge (U,V,U --> V) U comes before V  in the ordering
const topological = {
    0: [2, 3],
    1: [],
    2: [2, 3],
    3: [1],
    4: [2, 1],
    5: [0, 2],

}

const prerequisites = [[2, 0], [1, 0],[3, 1], [3, 2]]
const pre =[[1,0]]

// const depthFirsTRevise = (graph, startNode) => {
//     const visited = new Set();
//     const stack = [startNode];
//     // const parentStack = [startNode];
//     while (stack.length > 0) {
//         const current = stack.pop();
//         if (!visited.has(current)) {
//             visited.add(current)
//             console.log('Current', current);
//             for (let neighbour of graph[current]) {
//                 stack.push(neighbour)
//             }
//         }
//     }
//     console.log(stack)
// }
const dfs = (startNode) => {
    const visited = new Set();
    const graph = buildGraphs();
    console.log(graph)
    const stack = [startNode];
    while (stack.length) {
        const current = stack.pop();
        if (!visited.has(+current)) {
            visited.add(+current)
            console.log('Current', current)
            for (let neighbour of graph[current]) {
                stack.push(neighbour)
            }
        }
    }
}
const bfs = (startNode) => {
    const visited = new Set();
    const graph = buildGraphs();
    const queue = [startNode];
    while (queue.length) {
        const current = queue.shift();
        if (!visited.has(+current)) {
            visited.add(+current)
            console.log('Current', current)
            for (let neighbour of graph[current]) {
                queue.push(neighbour)
            }
        }
    }
}

// topologicalSort(topological)


const buildGraphs = () => {
    const graph = {}
    for (let edge of prerequisites) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        // graph[a].push(b)
        graph[b].push(a)
    }
    return graph;
}

console.log(bfs(0))
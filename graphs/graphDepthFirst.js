const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    f: [],
    e: []
}

const graph1 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };

/**Iterative Approach of Depth First Search */

const depthFirstSearchIterative = (graph,startNode) => {
    const stack= [startNode];
    while(stack.length > 0 ) {
        const current = stack.pop();
        console.log('Current',current)
        for (const iterator of graph[current]) {
            stack.push(iterator)
        }
    }
}

depthFirstSearchIterative(graph1,'f')

// /** Recursive Approach */
// const depthFirstRecursive = (graph,startNode) => {
//     console.log('Current',startNode)
//     for (const iterator of graph[startNode]){
//         depthFirstRecursive(graph,iterator)
//     }
// }

// depthFirstRecursive(graph,'a')
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    f: [],
    e: []
}

/**Breasth First Iterative Approach */
/**It uses the queue ds and array can be use as a queue
 * use shift to get first element of array
 */

const breadthFirstTraversalIterative = (graphSource, startNode) => {
    const queue = [startNode];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log('Current', current)
        for (let neighbour of graphSource[current]) {
            queue.push(neighbour)
        }
    }
}

breadthFirstTraversalIterative(graph, 'a')


/**Recursive Approach */
// const breadthFirstTraversalRecursive = (graphSource, startNode) => {
//     const queue = [startNode]
//     console.log('Current', startNode)
//     while(queue.length> 0){
//         breadthFirstTraversalRecursive(graphSource, neighbour)
//     }
//     // for (const neighbour of graphSource[startNode]) {
//     //     queue.push(neighbour)
//     //     breadthFirstTraversalRecursive(graphSource, neighbour)
//     // }
// }

// breadthFirstTraversalRecursive(graph,'a')
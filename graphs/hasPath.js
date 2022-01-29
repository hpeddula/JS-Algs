const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };

/**DFS */
const hasPath = (graph,src,dst) => {
    if(src === dst)  return true;
    for (const neighbour of graph[src]) {
        if(hasPath(graph,neighbour,dst) === true) return true;
    }
    return false
}
// console.log(hasPath(graph,'f','j'))

const hasPathBFS =  (graph,src,dst) => {
    const queue = [src];
    while(queue.length > 0) {
        const current = queue.shift();
        if(current === dst) return true;
        for (const iterator of graph[current]) {
            queue.push(iterator)
        }
    }
    return false
}
console.log(hasPathBFS(graph,'f','j'))

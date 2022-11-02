const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    f: [],
    e: []
}

const graphDFSAdj = {
    1:[2,3],
    2:[1,5,6],
    3:[1,4,7],
    4:[3,8],
    5:[2],
    6:[2],
    7:[3,8],
    8:[4,7]
}
const graphBFS = (node,graph) => {
    const visited = {}
    const queue = [node]
    visited[node] = 1;
    const bfs = []
    while(queue.length) {
        const current = queue.shift()
        bfs.push(current)
        for(let neighbour of graph[current]) {
            if(!visited[neighbour]) {
                visited[neighbour] =1;
                queue.push(neighbour)
            }
        }
    }
    console.log(bfs)
}

// graphBFS('a',graph)

const graphDFS = (node,graph) => {
    const visited = {}
    const stack = [node]
    visited[node] = 1;
    const dfs = []
    while(stack.length) {
        const current = stack.pop()
        dfs.push(current)
        for(let neighbour of graph[current]) {
            if(!visited[neighbour]) {
                visited[neighbour] =1;
                stack.push(neighbour)
            }
        }
    }
    console.log(dfs)
}
const graphDFSRecursive = (node,visited) => {
    visited[node] = 1;
    console.log(node)
    for(let val of graphDFSAdj[node]) {
        if(!visited[val]) graphDFSRecursive(val,visited)
    }
}
graphDFS(3,graphDFSAdj)
graphDFSRecursive(3,{})
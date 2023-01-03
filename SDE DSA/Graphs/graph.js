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
// graphDFS(3,graphDFSAdj)
// graphDFSRecursive(3,{})


const hasPathDFS = (graph,src,dst) => {
    const visited = {}
    const stack = [src]
    visited[src] =1
    while(stack.length) {
        const current = stack.pop()
        if(current === dst) return true
        for(let neighbour of graph[current]) {
            if(!visited[neighbour]) {
                stack.push(neighbour)
                visited[neighbour] =1
            }
        }
    }
    return false
}

const hasPathBFS = (graph,src,dst) => {
    const visited = {}
    const queue = [src]
    visited[src] =1
    while(stack.length) {
        const current = queue.shift()
        if(current === dst) return true
        for(let neighbour of graph[current]) {
            if(!visited[neighbour]) {
                queue.push(neighbour)
                visited[neighbour] =1
            }
        }
    }
    return false
}

// console.log(hasPathDFS(graph,'a','f'))


const connectedComponentCount = (graph) => {
    let count =0;
    const visited = new Set()
    for(let node in graph) {
        if(exploreWithoutStack(graph,node,visited)) {
            count +=1
        }
    }
    return count
}

const exploreWithoutStack = (graph,node,visited) => {
    if(visited.has(+node)) return false
    visited.add(+node)
    for(let neighbour of graph[node]) {
        exploreWithoutStack(graph,neighbour,visited)
    }
    return true
}

// console.log(connectedComponentCount({
//     0:[8,1,5],
//     1:[0],
//     5:[0,8],
//     8:[0,5],
//     2:[3,4],
//     3:[2,4],
//     4:[3,2]
// }))


const largestCount = (graph) => {
    const visited = new Set()
    let max =0;
    for(let node in graph) {
        max = Math.max(max,explore(graph,node,visited))
    }
    return max
}

const explore = (graph,node,visited) => {
    if(visited.has(+node)) return 0
    visited.add(+node)
    let count = 1
    for(let neighbour of graph[node]) {
        count += explore(graph,neighbour,visited)
    }
    return count
}

// console.log(largestCount({
//         0:[8,1,5],
//         1:[0],
//         5:[0,8],
//         8:[0,5],
//         2:[3,4],
//         3:[2,4],
//         4:[3,2]
//     }))


const shortesPath = (edges,nodeA,nodeB) => {
    const graph = buildGraph(edges)
    const queue =[[nodeA,0]]
    const visited = new Set([nodeA])
    while(queue.length) {
        const [node, distance] = queue.shift();

        if(node === nodeB)  return distance
        for(let neighbour of graph[node]) {
            if(!visited.has(neighbour)) {
                visited.add(neighbour)
                queue.push([neighbour,distance +1])
            }
        }
    }
}


//island count 

const getIslandCount = (grid) => {
    let visitedIsland = new Set();
    let count  =0
    for(let r=0;r<grid.length;r++) {
        for(let c =0;c<grid[r].length;c++) {
            if(exploreGrid(grid,r,c,visitedIsland)) {
                count +=1
            }
        }
    }
    return count
}

const exploreGrid = (grid,r,c,visitedIsland) => {
    const rowInbounds = (r<=0 && r<grid.length)
    const colInbounds = (c<=0 && c<grid[0].length)

    if(!rowInbounds || !colInbounds) return false;
    if(grid[r][c] === 'W') return false;
    const position = r + ',' + c
    if(visitedIsland.has(position)) return false
    visitedIsland.add(position)
    exploreGrid(grid,r-1,c,visitedIsland)
    exploreGrid(grid,r+1,c,visitedIsland)
    exploreGrid(grid,r,c-1,visitedIsland)
    exploreGrid(grid,r,c+1,visitedIsland)

    return true
}

const getIslandMinCount = (grid) => {
    let visitedIsland = new Set();
    let count  =0
    for(let r=0;r<grid.length;r++) {
        for(let c =0;c<grid[r].length;c++) {
           count = Math.min(count,exploreGridMinCount(grid,r,c,visitedIsland))
        }
    }
    return count
}

const exploreGridMinCount = (grid,r,c,visitedIsland) => {
    const rowInbounds = (r<=0 && r<grid.length)
    const colInbounds = (c<=0 && c<grid[0].length)

    if(!rowInbounds || !colInbounds) return 0;
    if(grid[r][c] === 'W') return ;
    const position = r + ',' + c
    if(visitedIsland.has(position)) return 0
    visitedIsland.add(position)
    let size =1
    size +=exploreGridMinCount(grid,r-1,c,visitedIsland)
    size +=exploreGridMinCount(grid,r+1,c,visitedIsland)
    size += exploreGridMinCount(grid,r,c-1,visitedIsland)
    size +=exploreGridMinCount(grid,r,c+1,visitedIsland)

    return size
}


const canFinish = (numCourses, prerequisites) => {
    const visited = new Set()
    const graph = buildGraphs(prerequisites)
    const [firstVal] = Object.values(graph)
    console.log(firstVal)
    const stack =[firstVal]
    visited.add(firstVal)
    const dfs = []
    while(stack.length) {
        const current = stack.pop();
        dfs.push(current)
        for(let neighbour of graph[current]) {
            console.log(neighbour)
            if(!visited.has(neighbour)) {
                visited.add(neighbour)
                stack.push(neighbour)
            } else return false
        }
    }
    // console.log(visited)
    return true
    // console.log(dfs)
};


const buildGraphs = (edges) => {
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

// console.log(buildGraphs([[1,0]]))
console.log(canFinish(2,[[1,0]]))
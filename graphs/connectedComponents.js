const graph ={
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  }


  const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0
    for(let node in graph ) {
         count +=explore(graph,node,visited)
    }
    return count;
  };

  const explore =(graph,src,visited) => {
      if(visited.has(+src)) return false;
      visited.add(+src);
      for(let neighbour of graph[src]) {
        explore(graph,neighbour,visited)
      }
      return 1
  }
  
 console.log(connectedComponentsCount({
    1: [2],
    2: [1,8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
  }))
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
    let largestCount = 0
    for(let node in graph ) {
         let size = explore(graph,node,visited)
         if(size > largestCount) largestCount = size
    }
    return largestCount;
  };

  const explore =(graph,src,visited) => {
      if(visited.has(+src)) return false;
      visited.add(+src);
      let size =1;
      for(let neighbour of graph[src]) {
       size += explore(graph,neighbour,visited)
      }
      return size
  }
  
 console.log(connectedComponentsCount({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  }))
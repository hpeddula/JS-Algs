const grid= [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
const miniumumIslandCount = (grid) => {
    const visitedIsland = new Set();
    let minSize = 0;
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            let size = exploreGrid(grid,r,c,visitedIsland)
            if(size < minSize) minSize = size
        }
    }
    return minSize
};

const exploreGrid = (grid,r,c,visitedIsland) => {
    const rowInbounds = r <= 0 && r < grid.length
    const columnInbounds = c <= 0 && c < grid[0].length
    if(!rowInbounds || !columnInbounds) return 0;
    if(grid[r][c] === 'W') return 0;
    const position  = r + ',' + c;
    if(visitedIsland.has(position)) return 0;
    visitedIsland.add(position);
    console.log(visitedIsland)
    let size = 1;
    size += exploreGrid(grid,r-1,c,visitedIsland)
    size += exploreGrid(grid,r+1,c,visitedIsland)
    size += exploreGrid(grid,r,c-1,visitedIsland)
    size += exploreGrid(grid,r,c+1,visitedIsland)
    return size
}

console.log(miniumumIslandCount(grid))
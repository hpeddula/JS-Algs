const grid= [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
const islandCount = (grid) => {
    const visitedIsland = new Set();
    let count = 0;
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            if(exploreGrid(grid,r,c,visitedIsland) === true) {
                count +=1;
            }
        }
    }
    return count
};

const exploreGrid = (grid,r,c,visitedIsland) => {
    const rowInbounds = (r <= 0 && r < grid.length)
    const columnInbounds = (c <= 0 && c < grid[0].length)
    if(!rowInbounds || !columnInbounds) return false;
    if(grid[r][c] === 'W') return false;
    const position  = r + ',' + c;
    if(visitedIsland.has(position)) return false;
    visitedIsland.add(position);
    exploreGrid(grid,r-1,c,visitedIsland)
    exploreGrid(grid,r+1,c,visitedIsland)
    exploreGrid(grid,r,c-1,visitedIsland)
    exploreGrid(grid,r,c+1,visitedIsland)
    
    return true
}

console.log(islandCount(grid))
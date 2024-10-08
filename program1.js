// const getTotalIsles = function (grid) {


//   // write your code here

// };

// module.exports = getTotalIsles;
const getTotalIsles = function(grid) {
    if (!grid || grid.length === 0) return 0;

    let count = 0;

    // Helper function to perform DFS
    const dfs = (i, j) => {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
            return;
        }
        grid[i][j] = 'W';
        dfs(i - 1, j); // up
        dfs(i + 1, j); // down
        dfs(i, j - 1); // left
        dfs(i, j + 1); // right
    };

    // Traverse every cell in the grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 'L') {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
};

module.exports = getTotalIsles;

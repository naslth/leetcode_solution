/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }

    const m = grid.length;
    const n = grid[0].length;

    let islandCount = 0;

    // Helper function to perform DFS
    const dfs = (row, col) => {
        if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0'; // Mark the current cell as visited

        // Explore adjacent cells
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    };

    // Iterate through the grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                islandCount++;
                dfs(i, j); // Start DFS from the current land cell
            }
        }
    }

    return islandCount;
};


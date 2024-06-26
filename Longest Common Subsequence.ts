function lcs(X: string, Y: string): number {
    let m = X.length;
    let k = Y.length;
    let L: number[][] = Array(m + 1).fill([]).map(() => Array(k + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= k; j++) {
            if (X[i - 1] === Y[j - 1]) {
                L[i][j] = L[i - 1][j - 1] + 1;
            } else {
                L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
            }
        }
    }
    return L[m][k];
}

console.log(lcs("AGGTAB", "GXTXAYB")); // Output: 4

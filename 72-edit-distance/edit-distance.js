/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    
    const dp = Array(n + 1).fill(0);
    for (let j = 0; j <= n; j++) {
        dp[j] = j;
    }
    
    for (let i = 1; i <= m; i++) {
        let prev = i - 1; 
        dp[0] = i; 
        
        for (let j = 1; j <= n; j++) {
            const temp = dp[j]; 
            if (word1[i - 1] === word2[j - 1]) {
                dp[j] = prev;
            } else {
                dp[j] = Math.min(prev, dp[j], dp[j - 1]) + 1;
            }
            prev = temp; 
        }
    }
    
    return dp[n];
};
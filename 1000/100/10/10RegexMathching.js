const isMatch = function(s, p) {
  // Create a 2D array to store the intermediate results of matching
  const dp = Array(s.length + 1).fill().map(() => Array(p.length + 1).fill(false));
  
  // Empty pattern can match empty string
  dp[0][0] = true;
  
  // Initialize first row of dp
  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] == '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }
  
  // Fill the rest of dp
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == '*') {
        dp[i][j] = dp[i][j - 2];
        if (p[j - 2] == s[i - 1] || p[j - 2] == '.') {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      }
    }
  }
  
  return dp[s.length][p.length];
};

var isMatch2 = function(s, p) {
    let regex = new RegExp(`^${p}$`);
    return s.match(regex) ? true : false;
};


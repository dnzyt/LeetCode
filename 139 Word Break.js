/*
Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

For example, given
s = "leetcode",
dict = ["leet", "code"].

Return true because "leetcode" can be segmented as "leet code".
 */

/*
这道题开始用了递归算法，超时
后来才知道要用DP
维护一个一位数组，dp[i]表示在s中从0到i能否成功segmented，如果能则置为true
遍历i之前的所有dp, dp[i] = dp[j] && wordDict.has(s.substring(j + 1, i)),若有一个j使表达式为true，那么dp[i]为true，否则为false

 */

var wordBreak = function(s, wordDict) {
    let dp = [];
    dp[0] = false;
    for (let i = 1; i <= s.length; i++) {
        if(wordDict.has(s.substring(0, i))) {
            dp[i - 1] = true;
        } else {
            dp[i - 1] = false;
            for (let j = 0; j < i - 1; j++) {
                if (dp[j] && wordDict.has(s.substring(j + 1, i))) {
                    dp[i - 1] = true;
                    break;
                }
            }
        }
    }
    
    return dp[s.length - 1];
}
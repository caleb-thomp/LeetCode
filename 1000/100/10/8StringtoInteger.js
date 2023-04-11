var myAtoi = function(s) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    let i = 0;
    let sign = 1;
    let result = 0;
    
    // Step 1: Ignore leading whitespace
    while (s[i] === ' ') {
        i++;
    }
    
    // Step 2: Check for sign character
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '+' ? 1 : -1;
        i++;
    }
    
    // Step 3: Read digits until non-digit character or end of input
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        // Step 4: Convert digits to integer
        result = result * 10 + (s[i] - '0');
        i++;
        
        // Step 5: Clamp integer to 32-bit signed integer range
        if (result > INT_MAX) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
    }
    
    // Step 4 (part 2): Change sign if necessary
    return result * sign;
};

var myAtoi2 = function(str) {
    return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};

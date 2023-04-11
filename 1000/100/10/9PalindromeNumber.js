var isPalindrome = function(x) {
    if (x < 0) return false; // negative numbers are not palindromic
    let reversed = 0, remainder = 0, original = x;
    while (x !== 0) {
        remainder = x % 10; // get the last digit
        x = Math.floor(x / 10); // remove the last digit
        reversed = reversed * 10 + remainder; // add the last digit to the reversed number
    }
    return reversed === original; // compare the reversed number with the original
};


var isPalindrome2 = function(x) {
    if (x < 0) return false;
    
   return x.toString().split('').reverse().join('') === x.toString(); 
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // are s and t anagrams
    // sorts strings in alphabetical order 
    // compare if they are the same
    // fi they are not return false 
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
   if(sortedS === sortedT){
    return true;
   }
    return false
};
// beats 49.92% of javascript submissions

/**
 * @param {string[]} strs
 * @return {string}
 */
// const strings = document.getElementById('strings');

// let strs = ["flower","flow","flight"];

var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        // strings.innerHTML = "";
        return "";
    }
    if(strs.length === 1){
        // strings.innerHTML = strs[0];
        return strs[0];
    }
    strs.sort((a,b) => a.length - b.length);
    let prefix = strs[0];
    for(let i = 0 ; i < prefix.length ; i++){
        for(let j = 1 ; j < strs.length ; j++){
            if(prefix[i] !== strs[j][i]){
                // strings.innerHTML = prefix.slice(0,i);
                return prefix.slice(0,i);
            }
        }
    }
    return prefix;
    
}
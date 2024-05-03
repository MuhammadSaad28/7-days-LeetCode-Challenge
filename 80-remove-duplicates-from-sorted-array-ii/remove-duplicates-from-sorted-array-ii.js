/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0; 
    
    for (let i = 0; i < nums.length; i++) {
        if (i < 2 || nums[i] > nums[count - 2]) {
            nums[count++] = nums[i]; 
        }
    }
    
    return count; 
};

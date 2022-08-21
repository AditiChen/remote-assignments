function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for ( let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i != j) {
                let answer = `[${i}, ${j}]`
                return answer;
            }
        }
    }
}
    /*
    For example:
    twoSum([2, 7, 11, 15], 9); Should returns:
    [0, 1] Because:
    */
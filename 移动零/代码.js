/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let countzero = 0;
    let newarr = []
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i] === 0)
        {
            countzero++;
        }else{
            newarr.push(nums[i])
        }
    }
    for(let i = 0;i<countzero;i++)
    {
        newarr.push(0)
    }
    newarr.forEach((item,index)=>{
        nums[index] = item
    })
};


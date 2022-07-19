题目描述转到leetcode博客：https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/
/*源码如下*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
      var array=[];
      var length=nums.length;
      for(var i=1;i<=length;i++)
      {
          if(!nums.includes(i))
          array.push(i);
      }
      return array;
};

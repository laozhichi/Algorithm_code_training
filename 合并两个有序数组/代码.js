/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
     for (let i = nums1.length; i > m; i--) {
         nums1.pop()
     }
     for (let index = 0; index < n; index++) {
        nums1.push(nums2[index])
    }
     return nums1.sort((a,b) => a-b)
};

/*
pop : 删除数组中的最后一个 元素 并返回  影响原数组 

var arr=[1,3,5,7]

console.log(arr.pop())   //  输出 7

console.log(arr)    //  [1,3,5]
*/


/*push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
注意： 新元素将添加在数组的末尾。
注意： 此方法改变数组的长度。
提示： 在数组起始位置添加元素请使用 unshift() 方法。*/

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


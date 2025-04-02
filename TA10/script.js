function getSum(nums) {
    let sum = nums.reduce((acc, num) => acc + num, 0);
    return sum;
}

const numbers = [1,2,3,4,5]

console.log(getSum(numbers)); 
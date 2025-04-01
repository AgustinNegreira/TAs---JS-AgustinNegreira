function getSum(nums) {
    let sum = nums.reduce((acc, num) => acc + num, 0);
    return sum;
}

const numbers = [1,56,2,4,7,9,345,341,1416,73572,3,5,6,32523]

console.log(getSum(numbers));
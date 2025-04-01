function getOdds(nums) {
    const odds = nums.filter(num => num % 2 !== 0);
    return odds;
}

const numbers = [1,56,2,4,7,9,345,341,1416,73572,3,5,6,32523]

console.log(getOdds(numbers));
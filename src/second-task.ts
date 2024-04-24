function foo(nums: number[]) {
    const allDivisors: number[][] = []

    const findDivisors = (num: number) => {
        const divisors = [num]
        for (let i = 2; i < Math.round(num / 2) + 1; i++) {
            if (num % i === 0) divisors.push(i)
        }
        return divisors
    }

    nums.forEach((num) => {
        const divisors = findDivisors(num)
        allDivisors.push(divisors)
    })

    let commonDivisors = allDivisors.length ? allDivisors[0] : []

    allDivisors.forEach((divisors) => {
        const filteredDivisors = divisors.filter((divisor) =>
            commonDivisors.find((num) => divisor === num)
        )
        commonDivisors = filteredDivisors
    })

    return commonDivisors
}

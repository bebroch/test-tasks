function foo(start: number, end: number) {
    const isSimpleNum = (num: number) => {
        for (let i = 2; i < Math.round(num / 2) + 1; i++) {
            if (num % i === 0) return false
        }
        return true
    }

    const simpleNums: number[] = []

    for (let i = start; i < end; i++) {
        if (isSimpleNum(i)) simpleNums.push(i)
    }

    return simpleNums
}

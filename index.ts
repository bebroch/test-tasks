function foo(num: number) {
    const table: number[][] = []

    for (let i = 0; i < num; i++) {
        const numsForLine: number[] = []
        for (let j = 0; j < num; j++) {
            numsForLine.push((i + 1) * (j + 1))
        }
        table.push(numsForLine)
    }

    const createTableInText = () => {
        let text = "  "
        table[0].forEach((num) => (text += `${num}\t`))
        text += "\n"
        table.forEach((nums) => {
            text += `${nums[0]} `
            nums.forEach((num) => (text += `${num}\t`))
            text += "\n"
        })

        return text
    }

    return createTableInText()
}

console.log(foo(5))

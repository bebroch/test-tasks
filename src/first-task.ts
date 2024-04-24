function foo(num: number) {
    if (num % 100 > 9 && num % 100 < 20) return `${num} компьютеров`

    switch (num % 10) {
        case 0:
            return `${num} компьютеров`
        case 1:
            return `${num} компьютер`
        case 2:
        case 3:
        case 4:
            return `${num} компьютера`
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return `${num} компьютеров`
        default:
            return null
    }
}

const checkError = (firstString: string | null, lastString: string | null) => {
    if (firstString !== lastString) throw new Error(`string ${firstString} not equal ${lastString}`)
}

checkError(foo(1), "1 компьютер")
checkError(foo(2), "2 компьютера")
checkError(foo(3), "3 компьютера")
checkError(foo(4), "4 компьютера")
checkError(foo(5), "5 компьютеров")
checkError(foo(6), "6 компьютеров")
checkError(foo(7), "7 компьютеров")
checkError(foo(8), "8 компьютеров")
checkError(foo(9), "9 компьютеров")
checkError(foo(10), "10 компьютеров")
checkError(foo(20), "20 компьютеров")
checkError(foo(21), "21 компьютер")
checkError(foo(22), "22 компьютера")
checkError(foo(25), "25 компьютеров")
checkError(foo(41), "41 компьютер")
checkError(foo(1048), "1048 компьютеров")

// foo(1000)

/*
1 компьютер
2 компьютера
5 компьютеров
10 компьютеров

20 компьютеров
21 компьютер
22 компьютера
25 компьютеров
41 компьютер


*/

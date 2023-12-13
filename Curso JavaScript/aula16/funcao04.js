function fatorial(n) {
    let fat = 1
    let c = n
    while (c > 1) {
        fat *= c
        c--
    }
    return fat
}

res = fatorial(5)

console.log(res)


// 5! = 5 x 4 x 3 x 2 x 1
let num = [9, 1, 2, 3, 4, 11]

num[3] = 5

num.push(6)

console.log(`O nosso vetor é o ${num} e tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor aqui é ${num[0]}`)
console.log(`O sort() mostra o array por ordem: ${num.sort()}`)
console.log(`O terceiro valor do vetor aqui é ${num[2]}`)

let pos = 0
while (pos < num.length) {
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
    pos++
}

for (let pos=0; pos<num.length; pos++) {
    console.log(num[pos])
}

for (let pos in num) {
    console.log(`Os Arrays são: ${num[pos]}`)
}
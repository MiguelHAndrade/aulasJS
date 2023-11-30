var idade = 22

if (idade < 18) {
    console.log('Menor de idade')
} else {
    console.log('Maior de idade')
}

console.log('///////////////////////////')

if (idade >= 18) {
    console.log('Pode tirar carta de Carro')
} else {
    if (idade >= 16 && idade < 18) {
        console.log('Pode tirar carta de Mota')
    } else {
        console.log('Não pode tirar a carta')
    }
}

console.log('///////////////////////////')

console.log(`Você tem ${idade} anos.`)

if (idade < 16 || idade > 80) {
    console.log('Não pode tirar a carta.')
} else if (idade < 18) {
    console.log('Pode tirar a carta de Mota.')
} else if (idade > 23) {
    console.log('Pode tirar a Qualquer carta.')
} else {
    console.log('Pode tirar a carta de Carro')
}
let list = []

function add() {
    let number = document.getElementById('inpnr')
    let res = document.getElementById('tab')

    if (number.value.length == 0) {
        window.alert('Valor inválido, porfavor adicione um valor!')
    } else {
        let nr = Number(number.value)
        let n = nr**2
        if (nr > 0 && nr <= 100) {
            list.push(nr)
            let item = document.createElement('option')
            item.text = `Valor ${nr} adicionado.`
            item.value = `tab${nr}`
            res.appendChild(item)
        } else {
            window.alert('Valor inválido, Porfavor insira um valor de 1 a 100!')
        }
    }
    // console.log(number.length)
}

console.log(list)

function show() {
    let r = document.getElementById('show')
    let txt = document.getElementById('txtP')

    if(!txt) {
        txt = document.createElement('p')
        txt.id = 'txtP'
        r.appendChild(txt)
    }

    let soma = 0
    let c = 0
    while (c < list.length) {
        soma += list[c]
        c++
    }

    let maiorNr = Math.max(...list)

    media = soma/list.length

    txt.innerHTML = `Ao todo temos ${list.length} números <br>
    O maior valor informado foi ${maiorNr} <br>
    A soma de todos os valores dá ${soma} <br>
    A média de todos os valores dá ${media}`

    console.log(txt)
}
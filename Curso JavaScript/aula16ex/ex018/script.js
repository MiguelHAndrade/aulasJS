let list = []
let txt = document.getElementById('txtP')

function add() {
    let number = document.getElementById('inpnr')
    let res = document.getElementById('tab')

    if (number.value.length == 0) {
        window.alert('Valor inválido, porfavor adicione um valor!')
    } else {
        let nr = Number(number.value)
        if (!inList(nr, list)) {
            if (nr > 0 && nr <= 100) {
                list.push(nr)
                let item = document.createElement('option')
                item.text = `Valor ${nr} adicionado.`
                item.value = `tab${nr}`
                res.appendChild(item)
                number.value = ''
                number.focus()
                txt.innerHTML = ''
            } else {
                window.alert('Valor inválido, Porfavor insira um valor de 1 a 100!')
            }      
        } else {
            window.alert('Número inserido já foi adicionado, por favor adicione outro número diferente.')
        } 
    }
}

console.log(list)

function inList(n, l) {
    return l.indexOf(n) !== -1
}

function show() {
    let r = document.getElementById('show')



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

    let menorNr = Math.min(...list)

    media = soma/list.length

    // txt.innerHTML = `Ao todo temos <strong>${list.length}</strong> números. <br>
    // <br>
    // O maior valor informado foi <strong>${maiorNr}</strong>. <br>
    // <br>
    // O menor valor informado foi <strong>${menorNr}</strong>. <br>
    // <br>
    // A soma de todos os valores dá <strong>${soma}</strong>. <br>
    // <br>
    // A média de todos os valores dá <strong>${media}</strong>.` 
    
    txt.innerHTML = ''
    txt.innerHTML += `Ao todo temos <strong>${list.length}</strong> números. <br><br>`
    txt.innerHTML += `O maior valor informado foi <strong>${maiorNr}</strong>. <br><br>`
    txt.innerHTML += `O menor valor informado foi <strong>${menorNr}</strong>. <br><br>`
    txt.innerHTML += `A soma de todos os valores dá <strong>${soma}</strong>. <br><br>`
    txt.innerHTML += `A média de todos os valores dá <strong>${media}</strong>. <br>`
    

    if (soma == 0) {
        window.alert('ERRO!')
        txt.innerHTML = ''
    }
   
}
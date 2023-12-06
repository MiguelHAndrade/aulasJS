function result() {
    let dadosinicio = document.getElementById('txtinic')
    let dadosfim = document.getElementById('txtfim')
    let dadospasso = document.getElementById('txtpass')
    let res = document.getElementById('res')
    // let resinicio = dadosinicio.value
    // let resfim = dadosfim.value
    // let respasso = dadospasso.value
    // let seq = []

    // while (resinicio <= resfim) {
    //     seq.push(resinicio)
    //     resinicio++
    //     res.innerHTML = `Contando ${seq}`
    // }

    // res.innerHTML = `Valor de inicio = ${resinicio} + Valor fim = ${resfim} + valor passo = ${respasso}`

    if (dadosinicio.value.length == 0 || dadosfim.value.length == 0 || dadospasso.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = `Contando: </br>`
        let inicio = Number(dadosinicio.value)
        let fim = Number(dadosfim.value)
        let passo = Number(dadospasso.value)
        let cont = inicio

        if (passo <= 0) {
            window.alert('Passo inválido! Considerando Passo: 1')
            passo = 1
        }
        if (inicio < fim) {
            while (cont <= fim) {
                res.innerHTML += `${cont} \u{1F449} `
                cont += passo
            }
        } else {
            while (cont >= fim) {
                res.innerHTML += `${cont} \u{1F449} `
                cont -= passo
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}

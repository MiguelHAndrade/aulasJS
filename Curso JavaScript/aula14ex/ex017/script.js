function mostra() {
    let number = document.getElementById('txtnr')
    let res = document.getElementById('tabuada')
    let resD = document.getElementById('divisao')
    // let resTst = document.getElementById('test')

    if (number.value.length == 0){
        window.alert('Por favor coloque um Numero!')
    } else {
        let nr = Number(number.value)
        let cont = 1
        res.innerHTML = ''
        resD.innerHTML = ''
        while (cont <= 100) {
            let item = document.createElement('option')
            let itm = document.createElement('option')
            item.text = `${nr} x ${cont} = ${nr*cont}`
            itm.text = `${nr} : ${cont} = ${nr/cont}`
            item.value = `tab${cont}`
            itm.value = `tabdiv${cont}`
            res.appendChild(item)
            resD.appendChild(itm)
            cont++
        }

        // tab1 = `${nr} x 1 = ${nr*1}</br>`
        // tab2 = `${nr} x 2 = ${nr*2}</br>`
        // tab3 = `${nr} x 3 = ${nr*3}</br>`
        // tab4 = `${nr} x 4 = ${nr*4}</br>`
        // tab5 = `${nr} x 5 = ${nr*5}</br>`
        // tab6 = `${nr} x 6 = ${nr*6}</br>`
        // tab7 = `${nr} x 7 = ${nr*7}</br>`
        // tab8 = `${nr} x 8 = ${nr*8}</br>`
        // tab9 = `${nr} x 9 = ${nr*9}</br>`
        // tab10 = `${nr} x 10 = ${nr*10}</br>`
        // r = tab1 + tab2 + tab3 + tab4 + tab5 + tab6 + tab7 + tab8 + tab9 + tab10
        // // res.innerHTML = r
        // resTst.innerHTML = r
    }
}
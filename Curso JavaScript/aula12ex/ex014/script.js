function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    var msg2 = document.getElementById('msg2')
    // var hora = B

    msg.innerHTML = `Agora são ${hora} horas, ${min} minutos e ${seg} seg.`

    if (hora >= 8 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#FFC166'
    } else if (hora >= 12 && hora < 20) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#EF6326'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#2C4C51'
    }
}

function refresh() {
    document.location.reload()
}
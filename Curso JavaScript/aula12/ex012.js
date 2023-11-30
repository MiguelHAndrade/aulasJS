var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos.`)

if (hora < 7) {
    console.log(`Boa Madrugada!`)
} else if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora < 20) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa Noite`)
}
function hora_actual() {
    let datos = new Date()
    let horas = datos.getHours()
    let minutos = datos.getMinutes()
    let segundos = datos.getSeconds()

    srt_horas = new String(horas)
    if(srt_horas.length == 1) {
        horas = "0" + horas
    }
    srt_minutos = new String(minutos)
    if(srt_minutos.length == 1) {
        minutos = "0" + minutos
    }
    srt_segundos = new String(segundos)
    if(srt_segundos.length == 1) {
        segundos = "0" + segundos
    }

    let tiempoPantalla = horas + ":" + minutos + ":" + segundos

    document.querySelector("#reloj").textContent = tiempoPantalla

    setTimeout(hora_actual, 1000)
}

hora_actual()
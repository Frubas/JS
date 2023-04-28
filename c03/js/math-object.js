function obliczKap() {
    let k = document.getElementById("wysKapitalu").value
    let r = document.getElementById("proc").value
    let ok = document.getElementById("okres").value

    let r2 = r / 100

    let ko = 1 + r2


    let w = k * Math.pow(ko, ok)
    console.log(w)

    let msg = "<h2>Kwota otrzymana po " + ok + " latach wyniesie:</h2>" + "<h2>" + w.toFixed(2) + "zł<h2>"

    document.getElementById("wynik").innerHTML = msg
}

function obliczKapit() {
    let k = document.getElementById("wysKapital").value
    let r = document.getElementById("pro").value
    let ok = document.getElementById("okre").value
    let ke = document.getElementById("kapi").value

    let r2 = r / 100

    let ko = 1 + (r2 / ke)

    let kl = ok * ke


    let w = k * Math.pow(ko, kl)
    console.log(w)

    let msg = "<h2>Kwota otrzymana po " + ok + " latach z urzyciem kapitualizacji " + ke + " razy w roku wyniesie:</h2>" + "<h2>" + w.toFixed(2) + "zł<h2>"

    document.getElementById("wynik2").innerHTML = msg
}

function dodawanie(){
    let ilosc_liczb_dod = getElementById("dodawanie_ilosc").value
    let msg
    for(o = ilosc_liczb_dod, o-- {
        msg += '<input type="numbe" name="liczba"><br>'
    }
    document.getElementById("dodawanie_wpisywanie_liczb").innerHtml = msg
}
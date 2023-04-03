
var x = 0;
function calculate() {

    var manat = Number(document.getElementById('mebleg').value)
    var vaxt = Number(document.getElementById('muddet').value)
    var elave = Number(document.getElementById('faiz').value)
    var result = (((manat * elave) / 100) + manat)

    document.getElementById("result-h3").innerHTML = result

}
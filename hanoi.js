/*eslint-env browser*/
var button = document.getElementById("buttonId");
function hanoiTower(x, A, B, C) {
    if (x > 0 ) {
        hanoiTower(x - 1, A, C, B);
        document.getElementById('list').innerHTML += '<li class="list-group-item">Krążek nr ' + x + ' z <b>' + A + '</b> na <b>' + C + '</b></li>';
        hanoiTower(x - 1, B, A, C);
    }
}
button.onclick = function() {
    document.getElementById("list").innerHTML = "";
    var n = parseInt(document.getElementById('number-input').value, 10);
    document.getElementById('list').innerHTML += '<button type="button" class="btn btn-primary" id="num"> Liczba klocków <span class="badge badge-light">' + n + '</span>'
    hanoiTower(n,"A","B","C");
};


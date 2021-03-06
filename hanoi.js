/*eslint-env browser*/
var button = document.getElementById("buttonId");
var list = "";
async function hanoiTower(x, A, B, C) {
    if (x > 0) {
        hanoiTower(x - 1, A, C, B);
        list += '<li class="list-group-item">Krążek nr ' + x + ' z <b>' + A + '</b> na <b>' + C + '</b></li>';
        hanoiTower(x - 1, B, A, C);
    }
}

button.addEventListener('click',()=>{
    list = "";
    document.getElementById('list').innerHTML = "";
    var n = parseInt(document.getElementById('number-input').value, 10);
    var k = Math.pow(2,n)-1;
    document.getElementById('list').innerHTML += '<button type="button" class="btn btn-primary" id="num"> Liczba kroków <span class="badge badge-light">' + k + '</span>';
    hanoiTower(n,"A","B","C").then(()=>{
        document.getElementById('list').innerHTML += list;
    })
})

/*eslint-env browser*/
var button = document.getElementById("buttonId");
var asd="";
async function hanoiTower(x, A, B, C) {
    if (x > 0 ) {
        hanoiTower(x - 1, A, C, B);
        asd+='<li class="list-group-item">Krążek nr ' + x + ' z <b>' + A + '</b> na <b>' + C + '</b></li>';
        hanoiTower(x - 1, B, A, C);
    }
}


//button.onclick = function() {
//    document.getElementById('list').textContent = "";
//    console.log(document.getElementById('list').textContent);
//    var n = parseInt(document.getElementById('number-input').value, 10);
//    var k = Math.pow(2,n)-1;
//    document.getElementById('list').innerHTML += '<button type="button" class="btn btn-primary" id="num"> Liczba kroków <span class="badge badge-light">' + k + '</span>'
//    hanoiTower(n,"A","B","C");
//};


button.addEventListener('click',()=>{
    asd="";
    document.getElementById('list').innerHTML = "";
    console.log(document.getElementById('list').textContent);
    var n = parseInt(document.getElementById('number-input').value, 10);
    var k = Math.pow(2,n)-1;
    document.getElementById('list').innerHTML += '<button type="button" class="btn btn-primary" id="num"> Liczba kroków <span class="badge badge-light">' + k + '</span>';
    hanoiTower(n,"A","B","C").then(()=>{
        document.getElementById('list').innerHTML+=asd;
    console.log("zakonczono");
                                       })

})

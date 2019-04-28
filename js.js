
function createTable() {
    document.getElementById('divResultado').innerHTML = "";
    var qtdParcelas = parseFloat(document.getElementById('idParcela').value);
    var valor = parseFloat(document.getElementById('idValor').value);

    var tbl = document.createElement("table");

    for (var i = 0; i <= qtdParcelas; i++) {

        if (i == 0) {
            var row = document.createElement("tr");
            var cell1 = document.createElement("td");

            var cellText1 = document.createTextNode('Parcela');
            cell1.appendChild(cellText1);

            var cell2 = document.createElement("td");
            var cellText2 = document.createTextNode('Valor');
            cell2.appendChild(cellText2);

            row.appendChild(cell1);
            row.appendChild(cell2);

        } else {
            var row = document.createElement("tr");
            var cell1 = document.createElement("td");

            var cellText1 = document.createTextNode(i + 'ª');
            cell1.appendChild(cellText1);

            var cell2 = document.createElement("td");
            var cellText2 = document.createTextNode("R$ " + (valorFinal.toFixed(2)));
            cell2.appendChild(cellText2);

            row.appendChild(cell1);
            row.appendChild(cell2);
        }


        tbl.appendChild(row);
    }
    tbl.setAttribute("border", "1'")
    document.getElementById('divResultado').appendChild(tbl);
}
var result, op, resul, val=0, valorFinal;
function calc(valor){
    var dis = document.getElementById('divDisplay').value;
    if(valor=="c"){
        document.getElementById('divDisplay').innerHTML = '';
        val = 0;
        result = 0;
    }else if(valor == "*"){
        if(val==0){
            val=1;
        }
        result = dis * val;
    }else if(valor == "+"){
        result = parseFloat(dis) + parseFloat(val);
    }else if(valor == "-"){
        result = val - dis;
    }else if(valor == "/"){
        if(val==0){
            val=1;
        }
        result = val / dis;
    }else{
        if(valor!='%'){
            if(op == "*"){
                if(val==0){
                    val=1;
                }
                result = dis * val;
            }else if(op == "+"){
                result = parseFloat(dis) + parseFloat(val);
            }else if(op == "-"){
                result = val - dis;
            }else if(op == "/"){
                if(val==0){
                    val=1;
                }
                result = val / dis;
            }
        }else if(valor == "%"){
            porc = (dis/100);
            result = porc;
            if(op == "*"){
                result = val*porc;
            }else if(op == "+"){
                result = parseFloat(porc*val)+parseFloat(val);
            }else if(op == "-"){
                result = val - (porc*val);
            }else if(op == "/"){
                result = val/porc;
            }
        }
        if(valor == "="){
            document.getElementById('divDisplay').innerHTML = result;
        }else{
            document.getElementById('divDisplay').innerHTML = dis;
        }
    }
    op = valor;
    val = dis;
    
} 
function rolar(objID) {
    this.location = "#" + objID;
}
function calcPar(){
    valor = document.getElementById('idValor').value;
    parcela = document.getElementById('idParcela').value;
    if (parcela > 5) {
        val = valor/parcela;
        valorFinal = (val*(10/100))+parseFloat(val);
    }else{
        valorFinal = valor/parcela;
    }
    document.getElementById('idDisplay').innerHTML = valorFinal;
}
function display(valor){
    if(val==document.getElementById('divDisplay').value){
        document.getElementById('divDisplay').innerHTML = ''
    }
    var dist = document.getElementById('divDisplay').value;
    resul = dist + valor
    document.getElementById('divDisplay').innerHTML = resul;

}
function gerarMega(){
    valores = [];
    for (var i = 0; i < 6; i++) {
        valores[i] = Math.floor(Math.random() * 99 + 1);
    }
    document.getElementById('divNumeros').innerHTML = valores;
}


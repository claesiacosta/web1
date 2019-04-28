/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    var cont = 0;
    var visor = $("#divVisor").val();
    
    $(".tamBtnNum").click(function () {

        var operador;
        var posOperador;
        var valor = $(this).val();
        
        visor += $("#divVisor").val();
        $("#divVisor").val(valor);

        

        cont += 1;
        if (valor == '+' || valor == '-' || valor == '*' || valor == '/' || valor == '%') {
            operador = valor;
            n1 = parseFloat($("#divVisor").val().slice(0, visor.length - cont));
            posOperador = visor.length;
        }

        var resp = 0;

        if (valor == '=') {
            var n2 = parseFloat($("#divVisor").val().slice(posOperador, visor.length - cont));
            operador = visor[posOperador - 1];

            if (operador == '+') {
                resp = (n1 + n2);
            } else if (operador == '-') {
                resp = (n1 - n2);
            } else if (operador == '*') {
                resp = (n1 * n2);
            } else if (operador == '/') {
                resp = (n1 / n2);
            } else if (operador == '%') {
                resp = (n1 % n2);
            }

            visor += $("#divVisor").val();
            $("#divVisor").val(visor);
        }

    });
});

$(document).ready(function(){
    $('.icon').html('<img src="img.gif">');

    $('#sectioncalculator, #sectionparcelas, #sectionmega').hide();
    var atual;
    $("#cal").click(function(){
        $(atual).fadeOut();
        $("#sectioncalculator").fadeIn();
        atual = "#sectioncalculator";
    });
    $("#sim").click(function(){
        $(atual).fadeOut();
        $("#sectionparcelas").fadeIn();
        atual = "#sectionparcelas";
    });
    $("#mega").click(function(){
        $(atual).fadeOut();
        $("#sectionmega").fadeIn();
        atual = "#sectionmega";
    });

    $("input[name=btn]").click(function(){
        if($("#display").val() == "Error"){
                $("#display").val("");
        }
        $("#display").val($("#display").val() + $(this).val());
    });

    $("input[name=ce]").click(function(){
        $("#display").val("");
    });

    $("input[name=result]").click(function(){
        try {
            $("#display").val(eval($("#display").val())); 
        } catch (e) {
            if (e instanceof SyntaxError) {
                $("#display").val("Error");
            }
        }
    })

    $("input[name=mega]").click(function(){
        $('div[name=mega]').slideUp(10);
        valores = [];
        for (var i = 0; i < 6; i++) {
            valores[i] = Math.floor(Math.random() * 99 + 1);
        }
        $.each(valores, function( index, value ) {
            $("input[name = numero"+(index+1)+"]").val(value)
        });
        $('div[name=mega]').slideDown(500);
    });

    $("input[name = calcular]").click(function(){
        $('#result_parc').slideUp(10);
        $('#table').slideUp(600);
        if ($("input[name = parcelas]").val() > 5) {
            val = $("input[name = valor]").val()/$("input[name = parcelas]").val();
            $("#result_parc").val(((val*(10/100))+parseFloat(val)).toFixed(2));
        }else{
            $("#result_parc").val(($("input[name = valor]").val()/$("input[name = parcelas]").val()).toFixed(2));
        }
        $('#result_parc').slideDown(500);
    });

    $("input[name = gerar]").click(function(){
        $('#table').slideToggle(1000);
        var parcelas = $("input[name = parcelas]").val(); 
        var valor =$("#result_parc").val(); 
        var table = '';
        var x = 1;
        while (x <= parcelas) {
            table += '<tr><td>' + x + '</td>';
            table += '<td>' + valor+ '</td></tr>';
            x++;
        }
        $('#table tbody').html(table);
    });
});

         
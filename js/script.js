$(document).ready(function(){
    let soma = 0;

    $('#div-quantidade').text(soma);

    $('#span-valor-total').text(soma.toFixed(2));
    $('#span-valor-total').mask("#.##0,00", {reverse: true});
    $('#span-valor-total').trigger('input');
});

$("input:checkbox").on('click', function(){
    calcularQuantidadeSelecionada($(this));
    calcularValorSelecionado($(this));
});

function calcularQuantidadeSelecionada(element)
{
    let quantidade = $('#div-quantidade').text();

    if($(element).prop('checked'))
        quantidade++;
    else
        quantidade--;

    $('#div-quantidade').text(quantidade);
}

function calcularValorSelecionado(element)
{
    let valorTotal = $('#span-valor-total').text();

    valorTotal = substituirVirgulaPorPonto(valorTotal);
    valorTotal = valorTotal.trim();
    valorTotal = valorTotal != '' ? valorTotal : 0;
    
    let valorSelecionado = $(element).closest('tr').find('td:eq(1)').text();

    valorSelecionado = substituirVirgulaPorPonto(valorSelecionado);
    valorSelecionado = valorSelecionado != '' ? valorSelecionado : 0;

    let resultadoValor = 0;

    if($(element).prop('checked'))
        resultadoValor = parseFloat(valorTotal) + parseFloat(valorSelecionado);
    else
        resultadoValor = parseFloat(valorTotal) - parseFloat(valorSelecionado);

    $('#span-valor-total').text(resultadoValor.toFixed(2));
    $('#span-valor-total').mask("#.##0,00", {reverse: true});
    $('#span-valor-total').trigger('input');
}

function substituirVirgulaPorPonto(valor)
{
    if(valor.indexOf(',') > 0)
    {
        valor = valor.replace('.', '');
        valor = valor.replace(',', '.');
    }
    
    return valor;
}

$("button").click(function(){
    let tr = $(this).parent().parent();
    $(tr).remove();
});
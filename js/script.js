$(document).ready(function(){
    let soma = 0;

    $('#div-quantidade').text(soma);

    inserirValorTotal(soma);
});

function inserirValorTotal(valor)
{
    $('#span-valor-total').text(valor.toFixed(2));
    $('#span-valor-total').mask("#.##0,00", {reverse: true});
    $('#span-valor-total').trigger('input');
}

$("input").click(function(){
    calcularQuantidadeSelecionada($(this));
    calcularValorSelecionado($(this));
});

function calcularQuantidadeSelecionada(element)
{
    let quantidade = $('#div-quantidade').text();

    if($(element).is(':checked'))
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

    if($(element).is(':checked'))
        resultadoValor = parseFloat(valorTotal) + parseFloat(valorSelecionado);
    else
        resultadoValor = parseFloat(valorTotal) - parseFloat(valorSelecionado);

    inserirValorTotal(resultadoValor);
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
    let linha = $(this).parent().parent();

    let inputCheckbox = linha.find('td:first').find('input:first');

    if($(inputCheckbox).is(':checked'))
        $(inputCheckbox).click();

    $(linha).remove();
});
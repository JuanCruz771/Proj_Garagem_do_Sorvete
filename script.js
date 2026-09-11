const quantidade = document.getElementById("input_quantidade");
const unidade = document.getElementById("input_tipo");
const valor = document.getElementById("input_valor");
const valorUnitario = document.getElementById("valor_unitario");

quantidade.addEventListener("input", calcular_valor_unitario);
unidade.addEventListener("change", calcular_valor_unitario);
valor.addEventListener("input", calcular_valor_unitario);

function calcular_valor_unitario() {

    const quantidadeValor = Number(quantidade.value);
    const valorProduto = Number(valor.value);

    if (quantidadeValor <= 0 || valorProduto <= 0) {
        valorUnitario.textContent = "R$ 0,00";
        return;
    }

    const resultado =  quantidadeValor / valorProduto ;

    valorUnitario.textContent = `R$ ${resultado.toFixed(2)}`;

}
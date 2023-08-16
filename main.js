let resultado = document.querySelector("#resultado");
const valores = document.querySelectorAll(".numero");
const operacoes = document.querySelectorAll(".operacoes");
const apagar = document.querySelector("#btn-apagar");
const operacao = document.querySelector("[data-operacao]");
let primeiroValor = '';
let segundoValor = '';
let tipoOperacao = "";
let controleValor = true;
let controleTipo = true;


valores.forEach(valor => {
    valor.onclick = () => {
        resultado.value += valor.classList[1];
        if (controleValor) {
            primeiroValor += valor.classList[1];
        } else {
            segundoValor += valor.classList[1];
            controleTipo = false;
        }
    }
});

operacoes.forEach(operacao => {
    operacao.onclick = () => {
        if (controleTipo) {
            tipoOperacao = operacao.value;
            resultado.value = primeiroValor + tipoOperacao;
            controleValor = false;
        }
    }
});

operacao.onclick = () => {
    if (tipoOperacao == "" || segundoValor == "" || primeiroValor == "") {
        resultado.value = primeiroValor == '' ? '' : primeiroValor;
        zerar();
        return;
    }
    switch (tipoOperacao) {
        case "+":
            primeiroValor = soma(primeiroValor, segundoValor);
            zerar();
            break;
        case "-":
            primeiroValor = subtracao(primeiroValor, segundoValor);
            zerar();
            break;
        case '/':
            primeiroValor = divisao(primeiroValor, segundoValor);
            if (primeiroValor == "Resultado indefinido") {
                primeiroValor = 0;
            }
            zerar();
            break;
        case 'x':
            primeiroValor = multiplicacao(primeiroValor, segundoValor);
            zerar();
            break;
        default:
            break;
    }
}

apagar.onclick = () => {
    resultado.value = '';
    primeiroValor = '';
    zerar();

}

function zerar() {
    tipoOperacao = '';
    segundoValor = '';
    controleValor = true;
    controleTipo = true;
}

function soma(primeiroValor, segundoValor) {
    return resultado.value = parseFloat(primeiroValor) + parseFloat(segundoValor);
}

function subtracao(primeiroValor, segundoValor) {
    return resultado.value = parseFloat(primeiroValor) - parseFloat(segundoValor);
}

function divisao(primeiroValor, segundoValor) {
    return resultado.value = segundoValor == "0" ? "Resultado indefinido" :
        parseFloat(primeiroValor) / parseFloat(segundoValor);
}

function multiplicacao(primeiroValor, segundoValor) {
    return resultado.value = parseFloat(primeiroValor) * parseFloat(segundoValor);
}

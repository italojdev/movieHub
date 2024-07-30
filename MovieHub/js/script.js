function cor() {
    var senha = document.getElementById('senha').value;

    var maiuscula = document.getElementById('maiuscula');
    var simbolo = document.getElementById('simbolo');
    var numero = document.getElementById('numero');

    var hasUpperCase = /[A-Z]/.test(senha);
    var hasNumber = /[0-9]/.test(senha);
    var hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

    maiuscula.className = hasUpperCase ? 'validacao validado' : 'validacao';
    simbolo.className = hasSymbol ? 'validacao validado' : 'validacao';
    numero.className = hasNumber ? 'validacao validado' : 'validacao';
}
function validarForm() {
    var senha = document.getElementById('senha').value;
    var senhaConfirm = document.getElementById('senhaConfirm').value;

    if (senha !== senhaConfirm) {
        document.getElementById('erroSenha').innerHTML = 'As senhas não coincidem.';
        return false;
    } else {

        document.getElementById('erroSenha').innerHTML = '';
    }


    if (!validarSenha(senha)) {
        document.getElementById('erroSenha').innerHTML = 'A senha deve ter pelo menos 6 caracteres, incluindo pelo menos um caractere especial (!@#$%^&*(),.?":{}|<>).';
        return false;
    } else {

        document.getElementById('erroSenha').innerHTML = '';
    }


    var dataNascimento = document.getElementById('dataNascimento').value;
    var hoje = new Date();
    var dataNascimentoFormatada = new Date(dataNascimento);
    var idade = hoje.getFullYear() - dataNascimentoFormatada.getFullYear();
    var mes = hoje.getMonth() - dataNascimentoFormatada.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimentoFormatada.getDate())) {
        idade--;
    }


    if (idade < 18) {
        alert('Você precisa ter pelo menos 18 anos para se cadastrar.');
        return false;
    }

    document.getElementById('erroIdade').innerHTML = '';
    alert('Formulário enviado com sucesso!');

    var formCadastro = document.getElementById('formCadastro');
    formCadastro.style.display = 'none';


    var formAvaliacao = document.getElementById('formAvaliacao');
    formAvaliacao.style.display = 'block';

    var titulosecundario = document.querySelector('.tituloSecundario')
    titulosecundario.style.display = 'none'

    return false;

}

function selecionarEstado() {
    var estado = document.getElementById('estado').value;
    var cidadeSelect = document.getElementById('cidade');
    cidadeSelect.innerHTML = '';

    if (estado === 'SP') {
        addOption(cidadeSelect, 'São Paulo', 'sao_paulo');
        addOption(cidadeSelect, 'Campinas', 'campinas');
        addOption(cidadeSelect, 'Santos', 'santos');
    } else if (estado === 'RJ') {
        addOption(cidadeSelect, 'Rio de Janeiro', 'rio_de_janeiro');
        addOption(cidadeSelect, 'Niterói', 'niteroi');
        addOption(cidadeSelect, 'Duque de Caxias', 'duque_de_caxias');
    } else if (estado === 'MG') {
        addOption(cidadeSelect, 'Belo Horizonte', 'belo_horizonte');
        addOption(cidadeSelect, 'Uberlândia', 'uberlandia');
        addOption(cidadeSelect, 'Juiz de Fora', 'juiz_de_fora');
    } else if (estado === 'ES') {
        addOption(cidadeSelect, 'Vitória', 'vitoria');
        addOption(cidadeSelect, 'Vila Velha', 'vila_velha');
        addOption(cidadeSelect, 'Cariacica', 'cariacica');
    } else {
        addOption(cidadeSelect, 'Selecione um estado primeiro', '');
    }

    cidadeSelect.disabled = false;
}


function addOption(select, text, value) {
    var option = document.createElement('option');
    option.text = text;
    option.value = value;
    select.add(option);
}

var texto = document.getElementById("texto")
var contador = document.getElementById("contador")

texto.addEventListener('input', function () {
    var contadortexto = texto.value.length

    contador.innerHTML = (`${contadortexto}`)
    if (contadortexto > 50) {
        texto.value = texto.value.substring(0, 100);
        contador.texto = 100;

        contador.innerHTML = "Limite de caracteres atingido";
        return
    }
})

function toggleModoNegativo() {
    document.body.classList.toggle('modo-negativo');
}

let fonteSize = 1;
function aumentarFonte() {
    fonteSize = Math.min(fonteSize + 0.2, 2);
    document.body.style.fontSize = `${fonteSize}em`;
}

function diminuirFonte() {
    fonteSize = Math.max(fonteSize - 0.5, 1); 
    document.body.style.fontSize = `${fonteSize}em`;
}



var inputEntrada = document.querySelector('.input-entrada');
var btnCripto = document.querySelector('#btn-cripto');
var btnDescripto = document.querySelector('#btn-descripto');
var areaResultado = document.querySelector('#area-resultado');
var resultadoVazio = document.querySelector('.area-resultado-vazio');
var areaResultadoOK = document.querySelector('.area-resultado-ok');
var btnCopy = document.querySelector('.btn-copiar');

areaResultadoOK.style.display = 'none';
resultadoVazio.style.display = 'flex';

function criptografar(){
    var input = inputEntrada.value;

    var cripto = input.replace('e','enter').replace('i','imes').replace('a', 'ai').replace('o', 'ober').replace('u', 'ufat')
    areaResultado.textContent = cripto;
    areaResultadoOK.style.display = 'flex';
    resultadoVazio.style.display = 'none';
}

function descriptografar(){
    var input = inputEntrada.value;

    var descripto = input.replace('enter', 'e').replace('imes', 'i').replace('ai', 'a').replace('ober', 'o').replace('ufat', 'u')
    areaResultado.textContent = descripto;
    areaResultadoOK.style.display = 'flex';
    resultadoVazio.style.display = 'none';
}

function copy(){
    var copyText = document.querySelector('#area-resultado');
    copyText.select();
    document.execCommand('copy');
}

btnCripto.addEventListener('click', criptografar);
btnDescripto.addEventListener('click', descriptografar);
btnCopy.addEventListener('click', copy);
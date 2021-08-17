const nome = 'Calculadora em JS'

function soma(fristNumber,seccondNumber){
    return fristNumber + seccondNumber;
};
function sub(fristNumber,seccondNumber){
    return fristNumber - seccondNumber;

};
function multi(fristNumber,seccondNumber){
    return fristNumber * seccondNumber;
};
function div(fristNumber,seccondNumber){
    return fristNumber / seccondNumber;
};

module.exports = {
    soma,
    sub,
    multi,
    div,
    nome
}
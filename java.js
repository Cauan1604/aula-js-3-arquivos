/*declarando variáveis*/
let altura;
let peso;
let imc;
/*criando uma função para calculo do IMC*/
/*comentario de bloco*/
//comentario de linha
function calcImc(){
    let altura = (document.getElementById("al").value)/100;//divisão por 100 para converter em metros.
    let peso = document.getElementById("ps").value;

    //converter para numero
    altura = parseFloat(altura);
    /*
    tipos de dados:
    int = numeros inteiro
    float = de ponto flutuente, exemplo o preço da gasolina 6.27
    string = texto
    boolean = verdadeiro ou falso
    */
   peso = parseFloat(peso);
   

   let imc = peso / (altura*peso)
   window.alert("seu IMC é: " + imc)
}
function alternartemas_escuro(){
    const corpo = document.body; //corpo html
    corpo.classList.toggle("escuro")
    corpo.classList.toggle("claro")}
function alternartemas_claro(){
        const corpo = document.body; //corpo html
        corpo.classList.toggle("escuro")
        corpo.classList.toggle("claro")}
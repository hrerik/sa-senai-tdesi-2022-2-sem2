

///SLIDERS
$('.single-item').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
});


//FIM SLIDERS

/////ADIÇÃO DE TEXTO
var botao_login = document.querySelector(".area-login__entrar")
mensagem_login = "Login"; ///Texto do LOGIN"
botao_login.textContent = mensagem_login;

var botao_cadastro = document.querySelector('.area-login__cadastrar');
mensagem_cadastro = "Cadastre-se"; ///Texto do CADASTRO"
botao_cadastro.textContent = mensagem_cadastro;

/////FIM ADIÇÃO DE TEXTO



////COMEÇO DAS FUNÇÕES 
function login() {
    window.location.href = "LINKDOSITE.NGROK"
}
function cadastrar() {
    window.location.href = "LINKDOSITE.NGROK" //TE DIRECIONA PARA A PÁGINA DE CADASTRO QUANDO CLICADA NO BOTÃO 
}
        ////FIM DAS FUNÇÕES

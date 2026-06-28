//Exercício  1 – Quando a página for carregada, exiba uma mensagem de boas-vindas ao usuário.
function alerta() {
    window.alert("Bem-vindo ao portal da Seleção dos Estados Unidos!");
}

//Exercício  2 – Interação com o título da seleção. Utilize o título principal da página (<h1>) que contém o nome da seleção.
function mudar_cor() {
    window.document.getElementById("titulo-selecao").style.color = "blue";
}

function reseta_cor() {
    window.document.getElementById("titulo-selecao").style.color = "white";
}

function incentivo() {
    window.alert("Seleção dos Estados Unidos: Go USMNT! 🇺🇸");
}

//Exercício   3 – Utilize o parágrafo (<p>) que apresenta uma curiosidade sobre a seleção. Ao dar um duplo clique no parágrafo, substitua o texto por uma nova curiosidade sobre a mesma seleção.
function mudar_curiosidade() {
    window.document.getElementById("curiosidade-selecao").innerText = "A seleção dos Estados Unidos participou da primeira Copa do Mundo em 1930 e terminou na terceira colocação, seu melhor resultado histórico!";
}

//Ao clicar na imagem da seleção, a imagem exibida deve ser substituída por outra imagem relacionada à mesma seleção (por exemplo, outro uniforme, escudo, torcida ou comemoração). Além disto, ao passar o mouse em cima da imagem ela aumenta de tamanho e quando o mouse sair da imagem ela volta ao tamanho normal. Você poderá utilizar alguns dos eventos abaixo para resolver os desafios, como seus reforços: 

//onclick = Quando o elemento é clicado.
//ondblclick = Quando o elemento recebe um clique duplo.
//onmouseover = Quando o ponteiro do mouse passa sobre o elemento.
//onmouseout = Quando o ponteiro do mouse sai do elemento.
//onmousedown = Quando o botão do mouse é pressionado sobre o elemento.
//onmouseup =  Quando o botão do mouse é solto sobre o elemento.

// URL da nova imagem que será exibida ao clicar (ex: outro uniforme ou escudo)
const novaImagemUrl = "https://s2.glbimg.com/GtHPvlIV3Ef6yQu8GVxYLgkRCoM=/0x0:1024x682/690x460/s.glbimg.com/es/ge/f/original/2016/06/09/88o6167-1.jpg";

function mudarImagem(elemento) {
    elemento.src = novaImagemUrl;
}

function aumentarImagem(elemento) {
    elemento.style.transition = "transform 0.3s ease";
    elemento.style.transform = "scale(1.2)";
}

function restaurarImagem(elemento) {
    elemento.style.transform = "scale(1)";
}
//Exercício  1 – Quando a página for carregada, exiba uma mensagem de boas-vindas ao usuário.
function alerta() {
    window.alert("Bem-vindo ao portal da Seleção dos Estados Unidos!");
}

//Exercício  2 – Interação com o título da seleção. Utilize o título principal da página (<h1>) que contém o nome da seleção.
function mudar_cor() {
    window.document.getElementById("titulo-selecao").style.color = "blue";
}

function reseta_cor() {
    window.document.getElementById("titulo-selecao").style.color = "black";
}

function incentivo() {
    window.alert("Seleção dos Estados Unidos: Go USMNT! 🇺🇸");
}

//Exercício   3 – Utilize o parágrafo (<p>) que apresenta uma curiosidade sobre a seleção. Ao dar um duplo clique no parágrafo, substitua o texto por uma nova curiosidade sobre a mesma seleção.
function mudar_curiosidade() {
    window.document.getElementById("curiosidade-selecao").innerText = "Nova Curiosidade: A seleção dos Estados Unidos participou da primeira Copa do Mundo em 1930 e terminou na terceira colocação, seu melhor resultado histórico!";
}
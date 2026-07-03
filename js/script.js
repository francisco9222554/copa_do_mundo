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

//
function mudar_cor1(){
    document.getElementById("escocia").style.color="#23c145"
}

function mudar_cor2(){
    document.getElementById("brasil").style.color="#23c145"
}

function mudar_cor3(){
    document.getElementById("marrocos").style.color="#23c145"
}

function mudar_cor4(){
    document.getElementById("haiti").style.color="#ff0000"
}

function retornar_cor1(){
    document.getElementById("escocia").style.color="#ffffff"
}

function retornar_cor2(){
    document.getElementById("brasil").style.color="#ffffff"
}

function retornar_cor3(){
    document.getElementById("marrocos").style.color="#ffffff"
}

function retornar_cor4(){
    document.getElementById("haiti").style.color="#ffffff"
}
/*
function mostrarResultado(){
    const params= new URLSearchParams(window.location.search);
    const nome= params.get("nome");
    const email= params.get("email");
    const senha= params.get("senha");
    const pais= params.get("pais");
    const data_nascimento= params.get("data_nascimento")

    const resultadoDiv= document.getElementById("exibir_resultado");
    resultadoDiv.inderHTML=`<p> nome: $(name)</p><p> email: $(email)</p><p> senha: ${senha}</p>`
}
*/
function getInputs(){
    return {
        nome: document.getElementById('nome'),
        email: document.getElementById('email'),
        senha: document.getElementById('senha'),
        pais: document.getElementById('pais'),
        data_nascimento: document.getElementById('data_nascimento')
    };
}

function getValores({nome, email, senha, pais, data_nascimento}){
    return {
        nome: nome.value.trim(),
        email: email.value.trim(),
        senha: senha.value.trim(),
        pais: pais.value.trim(),
        data_nascimento: data_nascimento.value.trim()
    };
}

async function cadastrar(){
    const inputs = getInputs();
    const dados = getValores(inputs);
    

    await fetch('/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });

    window.location.href = './../pages/resultado.html';
}

function calcularIdade(dataNascimento) {
    const anoHoje = new Date().getFullYear();
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const idade = anoHoje - anoNascimento;
    
    return idade;
}

async function mostrarResultado(){
    const resultadoDiv = document.getElementById('resultado');
    const resposta = await fetch('/api/usuarios');
    const usuarios = await resposta.json();

    if (usuarios.length === 0) {
        resultadoDiv.innerHTML = '<p>Nenhum usuário cadastrado ainda.</p>';
        return;
    }

    let html = '<table><thead><tr><th>ID</th><th>Nome</th><th>Email</th><th>Senha</th><th>País</th><th>Data de Nascimento</th><th>Idade</th></tr></thead><tbody>';
    for (const usuario of usuarios) {
        const idade = calcularIdade(usuario.data_nascimento);
        html += `<tr><td>${usuario.id}</td><td>${usuario.nome}</td><td>${usuario.email}</td><td>${usuario.senha}</td><td>${usuario.pais}</td><td>${usuario.data_nascimento}</td><td>${idade}</td></tr>`;
    }
    html += '</tbody></table>';

    resultadoDiv.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    const btnEnviar = document.getElementById('btnEnviar');
    if (btnEnviar) {
        btnEnviar.addEventListener('click', function(event) {
            event.preventDefault();
            cadastrar();
        });
    }

    if (document.getElementById('resultado')) {
        mostrarResultado();
    }
});
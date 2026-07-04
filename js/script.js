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

//resultado
function getInput() {
    return {
        nome: document.getElementById("nome"),
        data_nascimento: document.getElementById("data_nascimento"),
        email: document.getElementById("email"),
        pais: document.getElementById("select_pais"),
        jogador_favorito: document.getElementById("select_jogador")
    }
}

function getValores({ nome, data_nascimento, email, pais, jogador_favorito }) {
    return {
        nome: nome.value.trim(),
        data_nascimento: data_nascimento.value.trim(),
        email: email.value.trim(),
        pais: pais.value.trim(),
        jogador_favorito: jogador_favorito.value.trim()
    };
}

document.addEventListener('DOMContentLoaded',function(){
    const botaoEnviar = document.getElementById("enviar")
    if(!botaoEnviar){
        return;
    }

botaoEnviar.addEventListener('click',function(event){
    event.preventDefault ();
    const Inputs = getInput();
    const dados = getValores(Inputs);

    console.log("Inputs:", Inputs)
    console.log("dados:", dados)
    
   window.location.href = `./resultado.html?nome=${encodeURIComponent(dados.nome)}&data_nascimento=${encodeURIComponent(dados.data_nascimento)}&email=${encodeURIComponent(dados.email)}&pais=${encodeURIComponent(dados.pais)}&jogador_favorito=${encodeURIComponent(dados.jogador_favorito)}`;
    });
});

function mostrarResultado() {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome");
    const data_nascimento = params.get("data_nascimento");
    const email = params.get("email");
    const pais = params.get("pais");
    const jogador_favorito = params.get("jogador_favorito");

    const hoje = new Date();
    const nascimento = new Date(data_nascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    let categoria = "";
    if (idade <= 16) {
        categoria = "Torcedor Mirim";
    } else if (idade <= 30) {
        categoria = "Torcedor Novato";
    } else {
        categoria = "Torcedor Experiente";
    }

    const resultadoDiv = document.getElementById("exibir_resultado");
    resultadoDiv.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Data de Nascimento:</strong> ${data_nascimento}</p>
        <p><strong>Idade:</strong> ${idade} anos</p>
        <p><strong>Categoria:</strong> ${categoria}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Jogador Favorito:</strong> ${jogador_favorito}</p>
    `;
}

//Cadastro
function campoSelecionado() {
    document.getElementById("nome").style.backgroundColor = "#fff9c4";
    document.getElementById("nome").style.color = "#222";
}

function campoNormal() {
    document.getElementById("nome").style.backgroundColor = "";
    document.getElementById("nome").style.fontWeight = "";
    document.getElementById("nome").style.color = "";
}

function digitandoNome() {
    document.getElementById("nome").style.fontWeight = "bold";
}

function paisAlterado() {
    document.getElementById("select_pais").style.backgroundColor = "#d4edda";
    document.getElementById("select_pais").style.color = "#222";
}

//Tema escuro
function alternarTema() {
    document.body.classList.toggle("dark-mode");
    const botao = document.getElementById("tema");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "escuro");
        if (botao) {
            botao.innerText = "☀️ Tema Claro";
        }
    } else {
        localStorage.setItem("tema", "claro");
        if (botao) {
            botao.innerText = "🌙 Tema Escuro";
        }
    }
}

function carregarTema() {
    const tema = localStorage.getItem("tema");
    const botao = document.getElementById("tema");

    if (tema === "escuro") {
        document.body.classList.add("dark-mode");
        if (botao) {
            botao.innerText = "☀️ Tema Claro";
        }
    } else {
        document.body.classList.remove("dark-mode");
        if (botao) {
            botao.innerText = "🌙 Tema Escuro";
        }
    }
}

// Integração com o banco de dados.
function getInputs(){
    return {
        nome: document.getElementById('nome'),
        data_nascimento: document.getElementById('data_nascimento'),
        email: document.getElementById('email'),
        pais: document.getElementById('select_pais'),
        select_jogador: document.getElementById('select_jogador')
    };
}

function getValores({nome, data_nascimento, email, pais, select_jogador}){
    return {
        nome: nome.value.trim(),
        data_nascimento: data_nascimento.value.trim(),
        email: email.value.trim(),
        pais: pais.value.trim(),
        jogador_favorito: select_jogador.value.trim()
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

    window.location.href = '../pages/resultado.html';
}

function calcularIdade(dataNascimento) {
    const anoHoje = new Date().getFullYear();
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const idade = anoHoje - anoNascimento;

    return idade;
}

async function mostrarResultado(){
    const resultadoDiv = document.getElementById('exibir_resultado');
    
    const resposta = await fetch('/api/usuarios');
    const usuarios = await resposta.json();

    if (usuarios.length === 0) {
        resultadoDiv.innerHTML = '<p>Nenhum usuario cadastrado ainda.</p>';
        return;
    }

    let html = '<table><thead><tr><th>ID</th><th>Nome</th><th>Email</th><th>País</th><th>Data de Nascimento</th><th>Idade</th><th>Jogador Favorito</th></tr></thead><tbody>';
    
    for (const usuario of usuarios) {
        const idade = calcularIdade(usuario.data_nascimento);

        html += `<tr><td>${usuario.id}</td><td>${usuario.nome}</td><td>${usuario.email}</td><td>${usuario.pais}</td><td>${usuario.data_nascimento}</td><td>${idade}</td><td>${usuario.jogador_favorito}</td></tr>`;
    }
    html += '</tbody></table>';

    resultadoDiv.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    const btnEnviar = document.getElementById('enviar');
    if (btnEnviar) {
        btnEnviar.addEventListener('click', function(event) {
            event.preventDefault();
            cadastrar();
        });
    }

    if (document.getElementById('exibir_resultado')) {
        mostrarResultado();
    }
});
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const nomes = []; 


const amigoInput = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');


function adicionarAmigo() {
    const nome = amigoInput.value.trim();

    if (!nome) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (nomes.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    nomes.push(nome);
    amigoInput.value = ""; 
    atualizarLista();
}


function atualizarLista() {
    listaAmigos.innerHTML = nomes.map(nome => <li>${nome}</li>).join("");
}


function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Adicione nomes antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];
    resultado.innerHTML = <li>Amigo secreto: ${nomeSorteado}</li>;
}


amigoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        adicionarAmigo();
    }
});
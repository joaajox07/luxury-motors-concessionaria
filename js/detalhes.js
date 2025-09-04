const { carrosData } = require("../detalhes");

function verificarImagem(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => resolve('../assets/images/carro-padrao.jpg'); // Imagem padrão caso não carregue
        img.src = src;
    });
}

async function carregarDetalhes() {
    const urlParams = new URLSearchParams(window.location.search);
    const carroId = urlParams.get('id');
    const carro = carrosData[carroId];

    if (!carro) {
        window.location.href = 'index.html';
        return;
    }

    // Verifica se a imagem principal existe
    const imagemPrincipal = await verificarImagem(carro.imagem);

    document.getElementById('detalhes-container').innerHTML = `
        <div class="carro-galeria">
            <img src="${imagemPrincipal}" alt="${carro.marca} ${carro.modelo}" class="imagem-principal">
        </div>
        <div class="carro-info">
            <h1>${carro.marca} ${carro.modelo}</h1>
            <div class="preco">
                ${carro.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </div>
            
            <div class="especificacoes">
                <div class="spec-item">
                    <span class="label">Potência</span>
                    <span class="valor">${carro.potencia}</span>
                </div>
                <div class="spec-item">
                    <span class="label">0-100 km/h</span>
                    <span class="valor">${carro.aceleracao}</span>
                </div>
                <div class="spec-item">
                    <span class="label">Velocidade Máxima</span>
                    <span class="valor">${carro.velocidadeMaxima}</span>
                </div>
                <div class="spec-item">
                    <span class="label">Motor</span>
                    <span class="valor">${carro.motor}</span>
                </div>
                <div class="spec-item">
                    <span class="label">Câmbio</span>
                    <span class="valor">${carro.cambio}</span>
                </div>
            </div>

            <div class="cores-disponiveis">
                <h3>Cores Disponíveis</h3>
                <ul>
                    ${carro.cores.map(cor => `<li>${cor}</li>`).join('')}
                </ul>
            </div>

            <div class="caracteristicas">
                <h3>Características</h3>
                <ul>
                    ${carro.caracteristicas.map(carac => `<li>${carac}</li>`).join('')}
                </ul>
            </div>

            <div class="acoes">
                <button class="btn-agendar" onclick="window.location.href='index.html#contato'">
                    Agendar Test Drive
                </button>
                <button class="btn-contato" onclick="window.location.href='index.html#contato'">
                    Solicitar Contato
                </button>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', carregarDetalhes); 
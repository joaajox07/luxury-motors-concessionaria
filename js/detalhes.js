const carrosData = {
    'ferrari-488-gtb': {
        marca: 'Ferrari',
        modelo: '488 GTB',
        ano: 2024,
        preco: 3500000.0,
        imagem: 'ferrari 488 gtb.jpg',
        imagensAdicionais: [
            'istockphoto-1271277148-612x612.jpg',
            '150203488-ferrari-488-gtb-2015-1024x683.jpg',
            'motor-ferrari-488-gtb-2015-1024x683.jpg'
        ],
        potencia: '670 cv',
        velocidadeMaxima: '330 km/h',
        aceleracao: '0-100 km/h em 3.0s',
        motor: 'V8 3.9L Biturbo',
        cambio: 'Automático de 7 velocidades',
        cores: ['Rosso Corsa', 'Nero', 'Giallo Modena'],
        caracteristicas: [
            'Sistema de freios carbono-cerâmicos',
            'Controle de tração F1-Trac',
            'Sistema de suspensão adaptativa',
            'Interior em couro Alcantara',
            'Sistema de escape esportivo'
        ]
    },
    'mercedes-amg-gt': {
        marca: 'Mercedes',
        modelo: 'AMG GT',
        ano: 2024,
        preco: 2800000.0,
        imagem: 'Mercedes-AMG GT.jpg',
        imagensAdicionais: [
            'mercedes-amg-coupe-2015-1024x683.jpg',
            'mercedes-amg-track-2015-1024x683.jpg',
            ''
        ],
        potencia: '585 cv',
        velocidadeMaxima: '318 km/h',
        aceleracao: '0-100 km/h em 3.2s',
        motor: 'V8 4.0L Biturbo',
        cambio: 'Automático de 9 velocidades',
        cores: ['Prata Iridium', 'Preto Obsidiana', 'Branco Diamante'],
        caracteristicas: [
            'Sistema AIRMATIC de suspensão',
            'Head-up Display',
            'Sistema de som Burmester',
            'Pacote Night AMG',
            'Bancos AMG Performance'
        ]
    },
    'bmw-m8-competition': {
        marca: 'BMW',
        modelo: 'M8 Competition',
        ano: 2024,
        preco: 1200000.0,
        imagem: 'bmw m8 competition.jpg',
        imagensAdicionais: [
            'bmw-interior.jpg',
            'bmw-traseira.jpg',
            'bmw-motor.jpg'
        ],
        potencia: '625 cv',
        velocidadeMaxima: '305 km/h',
        aceleracao: '0-100 km/h em 3.2s',
        motor: 'V8 4.4L Biturbo',
        cambio: 'Automático de 8 velocidades',
        cores: ['Azul Marina Bay', 'Preto Safira', 'Branco Alpino'],
        caracteristicas: [
            'Sistema M xDrive',
            'Freios M Compound',
            'Sistema de som Bowers & Wilkins',
            'Teto em fibra de carbono',
            'Pacote Competition'
        ]
    }
};

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
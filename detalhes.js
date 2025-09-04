class CarroDetalhes {
    constructor() {
        this.carros = {
            'ferrari': {
                marca: 'Ferrari',
                modelo: '488 GTB',
                ano: 2024,
                preco: 3500000.0,
                imagem: 'ferrari 488 gtb.jpg',
                potencia: '670 cv',
                velocidadeMaxima: '330 km/h',
                aceleracao: '0-100 km/h em 3.0s',
                transmissao: 'Automática de 7 velocidades',
                combustivel: 'Gasolina',
                descricao: 'O Ferrari 488 GTB é a definição de superesportivo. Com seu motor V8 biturbo, oferece performance extraordinária e design icônico.',
                cores: ['Vermelho', 'Preto', 'Amarelo'],
                opcionais: ['Freios carbono-cerâmicos', 'Sistema de som premium', 'Pacote esportivo']
            },
            'mercedes-amg-gt': {
                marca: 'Mercedes',
                modelo: 'AMG GT',
                ano: 2024,
                preco: 2800000.0,
                imagem: 'Mercedes-AMG GT.jpg',
                potencia: '585 cv',
                velocidadeMaxima: '318 km/h',
                aceleracao: '0-100 km/h em 3.2s',
                transmissao: 'Automática de 9 velocidades',
                combustivel: 'Gasolina',
                descricao: 'O Mercedes-AMG GT combina luxo e performance em um pacote deslumbrante. Design elegante e tecnologia de ponta.',
                cores: ['Prata', 'Preto', 'Branco'],
                opcionais: ['Teto panorâmico', 'Head-up display', 'Pacote night']
            },
            'bmw-m8-competition': {
                marca: 'BMW',
                modelo: 'M8 Competition',
                ano: 2024,
                preco: 1200000.0,
                imagem: 'BMW M8 Competition.jpg',
                potencia: '625 cv',
                velocidadeMaxima: '305 km/h',
                aceleracao: '0-100 km/h em 3.2s',
                transmissao: 'Automática de 8 velocidades',
                combustivel: 'Gasolina',
                descricao: 'O BMW M8 Competition é o ápice do luxo esportivo. Performance excepcional com o conforto característico da BMW.',
                cores: ['Azul', 'Preto', 'Branco'],
                opcionais: ['Sistema de som Bowers & Wilkins', 'Pacote M Driver', 'Freios carbono-cerâmicos']
            }
        };

        this.inicializar();
    }

    formatarPreco(preco) {
        return preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    carregarDetalhes() {
        const urlParams = new URLSearchParams(window.location.search);
        const carroId = urlParams.get('id');
        const carro = this.carros[carroId];

        if (!carro) {
            window.location.href = 'index.html';
            return;
        }

        const container = document.getElementById('detalhes-container');
        container.innerHTML = `
            <div class="carro-imagem">
                <img src="${carro.imagem}" alt="${carro.marca} ${carro.modelo}">
            </div>
            <div class="carro-info">
                <h1>${carro.marca} ${carro.modelo}</h1>
                <p class="preco">${this.formatarPreco(carro.preco)}</p>
                <p>${carro.descricao}</p>
                
                <div class="especificacoes">
                    <div class="especificacao-item">
                        <strong>Potência:</strong> ${carro.potencia}
                    </div>
                    <div class="especificacao-item">
                        <strong>Velocidade Máxima:</strong> ${carro.velocidadeMaxima}
                    </div>
                    <div class="especificacao-item">
                        <strong>Aceleração:</strong> ${carro.aceleracao}
                    </div>
                    <div class="especificacao-item">
                        <strong>Transmissão:</strong> ${carro.transmissao}
                    </div>
                </div>

                <div>
                    <h3>Cores disponíveis:</h3>
                    <ul>
                        ${carro.cores.map(cor => `<li>${cor}</li>`).join('')}
                    </ul>
                </div>

                <div>
                    <h3>Opcionais:</h3>
                    <ul>
                        ${carro.opcionais.map(opcional => `<li>${opcional}</li>`).join('')}
                    </ul>
                </div>

                <button class="botao-contato" onclick="window.location.href='index.html#contato'">
                    Solicitar Contato
                </button>
            </div>
        `;
    }

    inicializar() {
        document.addEventListener('DOMContentLoaded', () => this.carregarDetalhes());
    }
}

new CarroDetalhes();
export const carrosData = {
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

const controleAjuste = document.querySelectorAll('[data-controle]');

const estatisticas = document.querySelectorAll('[data-estatisticas]');

const imgRobo = document.querySelector('#robotron')

const alterarCor = document.querySelector('#alteraCor');

const peças = {

    "braços": {

        "força": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    
    "blindagem": {

        "força": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    
    "nucleos": {

        "força": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -5
    },
    
    "pernas": {

        "força": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },

    
    "foguetes": {

        "força": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    },
}



controleAjuste.forEach( (element) => {

    element.addEventListener("click", (event) => {

        manipulaDados(event.target.dataset.controle, event.target.parentNode, event.target.dataset.peça);
    })
})

function manipulaDados(operacao, controle, estatistica) {

    const controleContador = controle.querySelector("[data-contador]");

    if (operacao === "+" && Number(controleContador.value) >= 0) {//verifica o tipo de operaçao do botao clicado pelo usuario
        //muda a quantidade de elementos do robo de acordo com a personalizaçao do usuario.
        controleContador.value = Number(controleContador.value) + 1;
        atualizaEstatisticas(estatistica, operacao);

    } else if (operacao === "-" && Number(controleContador.value) >= 1) {//verifica o tipo de operaçao do botao clicado pelo usuario
        //muda a quantidade de elementos do robo de acordo com a personalizaçao do usuario.
        controleContador.value = Number(controleContador.value) - 1;
        atualizaEstatisticas(estatistica, operacao);
    }
}

function atualizaEstatisticas (peça, operacao) {

    estatisticas.forEach( (element) => {
        if (operacao === "+") {//verifica o tipo de operaçao do botao clicado pelo usuario
            //muda as caracteristicas de poder do robo de acordo com o poder adicionado ou tirado.
            element.textContent = Number(element.textContent) + peças[peça][element.dataset.estatisticas];

        } else if (operacao === "-") {//verifica o tipo de operaçao do botao clicado pelo usuario
            //muda as caracteristicas de poder do robo de acordo com o poder adicionado ou tirado.
            element.textContent = Number(element.textContent) - peças[peça][element.dataset.estatisticas];
        }
        
    })
}

let corAzul = true;
alterarCor.addEventListener("click", () => {
    
    if (corAzul) {

        imgRobo.setAttribute('src', 'img/robotron-amarelo/roboCompleto.png');
        corAzul = false;

    } else if(!corAzul) {

        imgRobo.setAttribute('src', 'img/robotron.png');
        corAzul = true;
    }
    
})


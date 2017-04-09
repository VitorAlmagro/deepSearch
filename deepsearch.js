/* 

Lógica

    procedimento Busca(G: Grafo)
        Para Cada vértice v de G:
        Marque v como não visitado
        Para Cada vértice v de G:
        Se v não foi visitado:
        Busca-Prof(v)

    procedimento Busca-Prof(v: vértice)
        Marque v como visitado
        Para Cada vértice w adjacente a v:
        Se w não foi visitado:
        Busca-Prof(w)

*/

// Função que vai mapear um elemento e retornar um objeto
var fabrica = (elemento, linha) => {

    // Array que armazena todos os vertices adjacentes
    let seLigaCom  = [];

    // colocando no seLigaCom todos os elementos adjacentes ao vertice
    linha.forEach(function(element, index){

        if (element == 1) {

            seLigaCom.push(index);
        }

    });

    return {
        elemento: elemento,
        seLigaCom: seLigaCom,
        visitado: false
    }

};

// Definindo os elementos do grafo
var elementos = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

           /* A  B  C  D  E  F  G */
var linhaA = [0, 1, 1, 0, 1, 0, 0];
var linhaB = [1, 0, 0, 1, 0, 1, 0];
var linhaC = [1, 0, 0, 0, 0, 0, 1];
var linhaD = [0, 1, 0, 0, 0, 0, 0];
var linhaE = [1, 0, 0, 0, 0, 1, 0];
var linhaF = [0, 1, 0, 0, 1, 0, 0];
var linhaG = [0, 0, 1, 0, 0, 0, 0];

var linha1 = fabrica(elementos[0], linhaA);
var linha2 = fabrica(elementos[1], linhaB);
var linha3 = fabrica(elementos[2], linhaC);
var linha4 = fabrica(elementos[3], linhaD);
var linha5 = fabrica(elementos[4], linhaE);
var linha6 = fabrica(elementos[5], linhaF);
var linha7 = fabrica(elementos[6], linhaG);

var grafo = [];

var achou;

var searchElement;


grafo.push(linha1, linha2, linha3, linha4, linha5, linha6, linha7);


var busca = (grafo, elementoBuscado) => {

    achou = false;

    let tamanho = grafo.length;

    let aux = 0;

    searchElement = elementoBuscado;

    while(aux < tamanho) {

        // armazenando a linha da interação no vertice
        let vertice = grafo[aux];

        console.log("verificando se " + vertice.elemento + " foi visitado [ " + vertice.visitado + " ]");

        if (!vertice.visitado) {

            console.log("Verificando se " + vertice.elemento + " é igual a " + searchElement);

            // se o elemento a ser buscado é o mesmo da linha, fim
            if (vertice.elemento == searchElement) {

                achou = true;

                console.log('******** É O ELEMENTO ********');
            
                break;
            }

            // chamando a busca recursiva
            buscaProfundidade(vertice);

            if (achou) break;
            
        }

        aux++;
    }

    if (!achou) {

        console.log('O ELEMENTO NÃO EXISTE');
    }

};

var buscaProfundidade = (vertice) => {

    // marcando que esse vertice já foi visitado
    vertice.visitado = true;

    // definindo uma variavel local com os vertices adjacentes ao da interação
    let seLigacom = vertice.seLigaCom;

    let tamanho = seLigacom.length;

    let aux = 0;

    while(aux < tamanho) {

        // definindo uma variavel local como sendo o vertice de adjacencia da interação
        let linhaAux = grafo[seLigacom[aux]];

        aux++;

        console.log("verificando se " + linhaAux.elemento + " foi visitado [ " + linhaAux.visitado + " ]");

        // se o vertice ainda não foi visitado
        if (!linhaAux.visitado) {

            console.log("Verificando se " + linhaAux.elemento + " é igual a " + searchElement);

            // se o elemento a ser buscado é o mesmo da linha, fim
            if (linhaAux.elemento == searchElement) {

                achou = true;

                console.log('******** É O ELEMENTO ********');

                break;

            } else {
                
                // executando a recursividade
                buscaProfundidade(linhaAux);

                if (achou) break;
            
            }
        }
        
    }

};


busca(grafo, 'C');
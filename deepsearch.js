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

var imprimir = (x, y) => {
    console.log("Verificando se " + x + " é igual a " + y);
};

var imprimir2 = (x) => {
    console.log("verificando se " + x + " foi visitado");
};

var fabrica = (elemento, linha) => {

    let seLigaCom  = [];

    let indexAux;

    // buscando o indice do elemento no array elementos    
    elementos.find(function(valor, index) {

        if (valor == elemento) {
            indexAux = index;
        }

    });

    // colocando no array proximo todos os elementos que possui 1 na matriz
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

grafo.push(linha1, linha2, linha3, linha4, linha5, linha6, linha7);

var searchElement;

 var busca = (grafo, elementoBuscado) => {

    achou = false;

    let tamanho = grafo.length;

    let aux = 0;

    searchElement = elementoBuscado;

    while(aux < tamanho) {

        // pegando linha por linha do grafo
        let vertice = grafo[aux];

        imprimir2(vertice.elemento);
        if (!vertice.visitado) {

            imprimir(vertice.elemento, searchElement);

            // se o elemento a ser buscado é o mesmo da linha
            if (vertice.elemento == searchElement) {

                achou = true;

                console.log('É O ELEMENTO');
            
                break;
            }

            // chamando a busca recursiva
            buscaProfundidade(vertice);

            if (achou) {

                break;
            }
        }

        aux++;
    }

    if (!achou) {
        console.log('elemento não existe');
    }

 };

 var buscaProfundidade = (vertice) => {

    vertice.visitado = true;

    let seLigacom = vertice.seLigaCom;

    let tamanho = seLigacom.length;

    let aux = 0;

    while(aux < tamanho) {

        let linhaAux = grafo[seLigacom[aux]];

        aux++;

        imprimir2(linhaAux.elemento);
        if (!linhaAux.visitado) {

            imprimir(linhaAux.elemento, searchElement);

            // se o elemento a ser buscado é o mesmo da linha
            if (linhaAux.elemento == searchElement) {

                achou = true;

                console.log('É O ELEMENTO');

                break;

            } else {
                
                // executando a recursividade
                buscaProfundidade(linhaAux);

                if (achou) {

                    break;
                }

            }
        }
        
    }

 };


 busca(grafo, 'G');

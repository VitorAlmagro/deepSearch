var factory = (elemento, linha) => {

    let seLigaCom  = [];

    let indexAux;

    // buscando o indice do elemento no array elementos    
    elementos.find(function(valor, index) {

        if (valor == elemento) {
            indexAux = index;
        }

    });

    //console.log(linha)

    // colocando no array proximo todos os elementos que possui 1 na matriz
    linha.forEach(function(element, index){

        if (element == 1) {
            seLigaCom.push(index);
        }

    });

    //console.log(proximo);

    return {
        elemento: elemento,
        seLigaCom: seLigaCom,
        visitado: false,
        filhosVisitados: false
    }
};


var search = (elementoBusca, matriz) => {

    let linhaInicial = matriz[0];

    let aux = true;

    while(aux) {

        linhaInicial.visitado = true;

        if (linhaInicial.elemento == elementoBusca) {
            console.log('É O ELEMENTO');
        } else {

            let auxLoop = 0;

            while(auxLoop < linhaInicial.seLigaCom.length) {

                if (!matriz[auxLoop].visitado) {
                    
                    console.log(matriz[auxLoop]);

                    let auxLoop2 = 0;

                    while(auxLoop2 < matriz[auxLoop].seLigaCom.length) {

                        if (!matriz[auxLoop].seLigaCom[auxLoop2].visitado) {
                            console.log(matriz[auxLoop].seLigaCom[auxLoop2]);
                        }
                        

                        auxLoop2++;
                    }
                    

                }
                

                auxLoop++;
            }

        }


        aux = false;
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

var linha1 = factory(elementos[0], linhaA);
var linha2 = factory(elementos[1], linhaB);
var linha3 = factory(elementos[2], linhaC);
var linha4 = factory(elementos[3], linhaD);
var linha5 = factory(elementos[4], linhaE);
var linha6 = factory(elementos[5], linhaF);
var linha7 = factory(elementos[6], linhaG);

var matriz = [];

matriz.push(linha1, linha2, linha3, linha4, linha5, linha6, linha7);

search('B', matriz);
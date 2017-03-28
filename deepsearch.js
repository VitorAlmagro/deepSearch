var elementos = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

           /* A  B  C  D  E  F  G */
var linhaA = [0, 1, 1, 0, 1, 0, 0];
var linhaB = [1, 0, 0, 1, 0, 1, 0];
var linhaC = [1, 0, 0, 0, 0, 0, 1];
var linhaD = [0, 1, 0, 0, 0, 0, 0];
var linhaE = [1, 0, 0, 0, 0, 1, 0];
var linhaF = [0, 1, 0, 0, 1, 0, 0];
var linhaG = [0, 0, 1, 0, 0, 0, 0];

 var linha1 = factory('A', linhaA);
 var linha2 = factory('B', linhaB);
 var linha3 = factory('C', linhaC);
 var linha4 = factory('D', linhaD);
 var linha5 = factory('E', linhaE);
 var linha6 = factory('F', linhaF);
 var linha7 = factory('G', linhaG);

var factory = (elemento, linha) => {

    let anterior = [];
    let proximo  = [];

    let indexAux;

    // buscando o indice do elemento no array elementos    
    elementos.find(function(valor, index) {

        if (valor == elemento) {
            indexAux = index;
        }

    });

    console.log(linha)

    // colocando no array proximo todos os elementos que possui 1 na matriz
    linha.forEach(function(element, index){

        if (element == 1) {
             // Se o indice dessa iteração é menor que o indiceAux, significa que o elemento é o anterior
            if (index < indexAux) {
                anterior.push(index);
            } else {
                 proximo.push(index);
            }

        }

    });

    //console.log(proximo);

    return {
        elemento: elemento,
        anterior: anterior,
        proximo: proximo,
        visiado: false
    }
};

console.log(linha2);

var matriz = [];

matriz.push(linha1, linha2, linha3, linha4, linha5, linha6, linha7);

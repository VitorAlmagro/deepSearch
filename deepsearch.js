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

var factory = (element, line) => {

    let adjacentVertex = [];

    line.forEach(function(element, index){

        if (element == 1) {

            adjacentVertex.push(index);

        }
    });

    return {
        element: element,
        adjacentVertex: adjacentVertex,
        visited: false
    }

};

var elements = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

           /* A  B  C  D  E  F  G */
var lineA = [0, 1, 1, 0, 1, 0, 0];
var lineB = [1, 0, 0, 1, 0, 1, 0];
var lineC = [1, 0, 0, 0, 0, 0, 1];
var lineD = [0, 1, 0, 0, 0, 0, 0];
var lineE = [1, 0, 0, 0, 0, 1, 0];
var lineF = [0, 1, 0, 0, 1, 0, 0];
var lineG = [0, 0, 1, 0, 0, 0, 0];

var line1 = factory(elements[0], lineA);
var line2 = factory(elements[1], lineB);
var line3 = factory(elements[2], lineC);
var line4 = factory(elements[3], lineD);
var line5 = factory(elements[4], lineE);
var line6 = factory(elements[5], lineF);
var line7 = factory(elements[6], lineG);

var graph = [];

var found;

var _searchElement;

graph.push(line1, line2, line3, line4, line5, line6, line7);


var search = (graph, searchElement) => {

    _searchElement = searchElement;

    found = false;

    let numberOfLines = graph.length;

    let counter = 0;

    while(counter < numberOfLines) {

        let vertex = graph[counter];

        console.log("verificando se " + vertex.element + " foi visitado [ " + vertex.visited + " ]");

        if (!vertex.visited) {

            console.log("Verificando se " + vertex.element + " é igual a " + _searchElement);

            if (vertex.element == _searchElement) {

                found = true;

                console.log('******** É O ELEMENTO ********');

                break;

            }

            deepSearch(vertex);

            if (found) break;

        }
        counter++;
    }


    if (!found) {

        console.log('O ELEMENTO NÃO EXISTE');

    }

};


var deepSearch = (vertex) => {

    vertex.visited = true;

    let adjacentVertex = vertex.adjacentVertex;

    let size = adjacentVertex.length;

    let counter = 0;

    while(counter < size) {

        let vertex = graph[adjacentVertex[counter]];

        counter++;

        console.log("verificando se " + vertex.element + " foi visitado [ " + vertex.visited + " ]");

        if (!vertex.visited) {

            console.log("Verificando se " + vertex.element + " é igual a " + _searchElement);

            if (vertex.element == _searchElement) {

                found = true;

                console.log('******** É O ELEMENTO ********');

                break;
            } 

            deepSearch(vertex);

            if (found) break;
        }
    }

};

search(graph, 'C');
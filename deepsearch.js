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

    let indexOfAdjacentVertex = [];

    line.forEach(function(element, index){

        if (element == 1) indexOfAdjacentVertex.push(index);

    });

    return {
        element: element,
        indexOfAdjacentVertex: indexOfAdjacentVertex,
        visited: false
    }

};

var graph = [];

var searchElement;

          /* A  B  C  D  E  F  G */
var lineA = [0, 1, 1, 0, 1, 0, 0];
var lineB = [1, 0, 0, 1, 0, 1, 0];
var lineC = [1, 0, 0, 0, 0, 0, 1];
var lineD = [0, 1, 0, 0, 0, 0, 0];
var lineE = [1, 0, 0, 0, 0, 1, 0];
var lineF = [0, 1, 0, 0, 1, 0, 0];
var lineG = [0, 0, 1, 0, 0, 0, 0];

var vertexA = factory('A', lineA);
var vertexB = factory('B', lineB);
var vertexC = factory('C', lineC);
var vertexD = factory('D', lineD);
var vertexE = factory('E', lineE);
var vertexF = factory('F', lineF);
var vertexG = factory('G', lineG);

graph.push(vertexA, vertexB, vertexC, vertexD, vertexE, vertexF, vertexG);

var search = (graph, _searchElement) => {

    let _found = false;

    searchElement = _searchElement;

    graph.forEach(function(element) {
        element.visited = false;
    });

    for (let vertex of graph) {
        
        _found = checkVertex(vertex) || deepSearch(vertex);

        if (_found) break;

    }

    return _found;
};


var deepSearch = (vertex) => {

    if (vertex.visited) return false;

    let _found = false;

    vertex.visited = true;

    let indexOfAdjacentVertex = vertex.indexOfAdjacentVertex;

    for(let index of indexOfAdjacentVertex) {

        let vertex = graph[index];

        _found = checkVertex(vertex) || deepSearch(vertex);

        if (_found) break;
    }

    return _found;

};


var checkVertex = (vertex) => {

    let _found = false;

    console.log("==> Verificando se " + vertex.element + " foi visitado [ " + vertex.visited + " ]");

    if (!vertex.visited)
        console.log(" ==> Verificando se " + vertex.element + " é igual a " + searchElement + " [ " + (vertex.element == searchElement) + " ]");

    return (!vertex.visited) && (vertex.element == searchElement);
};


if (search(graph, 'D')) {
    console.log('******** ELEMENTO ENCONTRADO ********');
} else {
    console.log('******** O ELEMENTO NÃO EXISTE ********');
}
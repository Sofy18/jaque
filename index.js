var _ = require('lodash');
var array = [3, 2, 5, 9, 1, 3];
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Examen');
});

/*
    Escribir una función que reciba un arreglo de números y obtenga el subarreglo más
    grande en el que cada elemento del subarreglo sea mayor que el anterior. Por ejemplo si
    el arreglo es [3,2,5,9,1,3] tiene regresar [2,5,9]
*/
function maxSubArray(array) {
  var index1 = 0;
  var index2 = 0;
  var diffAux = 0;
  var diff = 0;
  var i = 0;
  var previous = 0;
  var subArray;

  _.forEach(array, function (value) {
    if (value < previous) {
      index1 = i;
    } else {
      index2 = i;
    }
    previous = value;
    i++;
  });
};

/*
  Escribir una función que reciba 2 enteros no negativos n y m y obtenga el resultado de n+(n+1)+(n+2)+...+m.
*/
function sumOne(n, m) {
  var arrayMax = [];
  for (i = n; i<=m; i++) {
    arrayMax.push(i);
  }
  return arrayMax;
};

/* Dado un arreglo de números desordenado y un entero k, escribe una función que
encuentre el k-ésimo elemento más grande.*/

/*Escribe una función que reciba un arreglo de números y quite los elementos duplicados*/
function keepOutDcuplicated(n, m) {
  // var set = new Set( array.map( JSON.stringify))
  // var arrSinDuplicaciones = Array.from( set ).map( JSON.parse );
};




/* Dada una cadena de paréntesis y corchetes escribe una función que regresa si la
  cadena está bien balanceada, es decir, por cada paréntesis o corchete que abre hay uno
  al mismo nivel que que cierra. Por ejemplo si recibe ‘([])’ tiene que regresar true y si
  recibe ‘([)]’ tiene que regresar false.
*/
function pushPop(cadena) {
  var pila1 = [];
  var pila2 = [];
  var aux = "";

  _.forEach(cadena, function (value) {
   if (value === '(' || value === '[') {
    pila1.push(value);
   } else if (value === ')' || value === ']') {
    pila2.push(value);
   }
  });

  for (i = 0; i< pila1.length; i++) {
    aux = pila2.pop();

    if (pila1[i] === "[") {
      if (aux !== "]") {
        return false;
      }
    } else if (pila1[i] === "(") {
      if (aux !== ")") {
        return false;
      } 
    } else {
      return false;
    }
  }
  return true;
};

/*
  Tienes un conjunto de clases que tienen una hora de inicio y una de final, hay que
  acomodarlas en el menor número de salones sin que se traslapan, una clase de 11:00 a
  14:00 no puede estar en el mismo salón que una de 12:00 a 15:00. Escribe una función
  que encuentre ese número de salones, por ejemplo si tienes clases de 11:00 a 14:00,
  12:00 a 15:00 y 14:30 a 16:00 el menor número de salones es 2.
*/


server.listen(port, hostname, () => {
  console.log("Uno", maxSubArray(array));
  console.log("Dos", sumOne(2,7));
  console.log("Cinco", pushPop("([)]".split("")));
  console.log("Cinco", pushPop("([])".split("")));

});



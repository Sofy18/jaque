var _ = require('lodash');
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
  var diff = 1;
  var indexAux1 = 0;
  var indexAux2 = 0;
  var i = 0;
  var previous = 0;

  _.forEach(array, function (value) {
    if (value > previous) {
      index2 = i + 1;
      diffAux = index2 - index1;
      if (diffAux >= diff) {
        diff = diffAux; 
        indexAux1 = index1;
        indexAux2 = index2;
      }
    } else {
      index1 = i;
    }
    i++;
    previous = value;
  });
  return _.slice(array, indexAux1, indexAux2);
};

/*
  Escribir una función que reciba 2 enteros no negativos n y m y obtenga el resultado de n+(n+1)+(n+2)+...+m.
*/
function sumOne(n, m) {
  var arrayMax = [];
  for (i = n; i <= m; i++) {
    arrayMax.push(i);
  }
  return arrayMax;
};

/* Dado un arreglo de números desordenado y un entero k, escribe una función que
encuentre el k-ésimo elemento más grande.*/
function sortArrayPosition(array, k) {
  for (var i = 0; i < array.length ; i++) {
    for(var j = 0 ; j < array.length - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      var temp = array[j];
      array[j] = array[j+1];
      array[j + 1] = temp;
    }
   }
  }
  for (i = array.length; i>=0; i--) {
    if (array[i] === k) {
      return i;
    }
  }
  return -1;
};

/*Escribe una función que reciba un arreglo de números y quite los elementos duplicados*/
function keepOutDcuplicated(array) {
  var set = new Set(array);
  return Array.from(set);
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

  for (i = 0; i < pila1.length; i++) {
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
  console.log("Uno", maxSubArray([3, 2, 5, 9, 1, 3, 4, 5, 6, 7, 8, 9, 10,1,2,3]));
  console.log("Uno", maxSubArray([3, 1, 7, 1, 2, 1]));
  console.log("Uno", maxSubArray([3, 1, 3, 7, 1, 2, 1]));
  console.log("Dos", sumOne(2, 7));
  console.log("Tres", sortArrayPosition([4,3,2,6,8,3,4,5,6,7,2,3,4,5], 7));
  console.log("Tres", sortArrayPosition([2,3,1], 2));
  console.log("Cuatro", keepOutDcuplicated([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3]));
  console.log("Cinco", pushPop("([)]".split("")));
  console.log("Cinco", pushPop("([])".split("")));
});



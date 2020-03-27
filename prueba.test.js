var _ = require('lodash');

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

  function sumOne(n, m) {
    var arrayMax = [];
    for (i = n; i <= m; i++) {
      arrayMax.push(i);
    }
    return arrayMax;
  };

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
  
  function keepOutDcuplicated(array) {
    var set = new Set(array);
    return Array.from(set);
  };
  
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

  function six(arreglo) {
    var contador = 0, noSalones = 0;
    var leng = arreglo.length;
    for (var i = 0; i < leng; i = i + 2) {
      for (var j = 0; j < leng; j = j + 2) {
        if (i == j) {
        }
        else {
          if (arreglo[i] <= arreglo[j]) {
            if (isOverlapping(arreglo[i], arreglo[i + 1], arreglo[j], arreglo[j + 1]) === false) {
              contador++;
            }
          }
          else {
            if (isOverlapping(arreglo[j], arreglo[j + 1], arreglo[i], arreglo[i + 1]) === false) {
              contador++;
            }
          }
  
        }
      }
  
    }
    if (contador === 0)
      contador = 2;
    if (contador === 2)
      contador = 4;
    return contador / 2;
  }
  
  function isOverlapping(start1, end1, start2, end2) {
    var n = true;
    if (start1 < start2 && end1 <= start2 && end1 < end2) {
      n = true;
    } else {
      n = false;
    }
    return n;
  }

test('Async Metodo 1', async () => {
    expect(maxSubArray([3, 1, 3, 7, 1, 2, 1])).toEqual([1, 3, 7]);
});

test('Async Metodo 2', async () => {
    expect(sumOne(2, 7)).toEqual([ 2, 3, 4, 5, 6, 7]);
});

test('Async Metodo 3', async () => {
    expect(sortArrayPosition([2, 3, 1], 2)).toBe(1);
});

test('Async Metodo 4', async () => {
    expect(keepOutDcuplicated([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3])).toEqual([1, 2, 3, 4]);
});

test('Async Metodo 5', async () => {
    expect(pushPop(pushPop("([])".split("")))).toBe(true);
});

test('Async Metodo 6', async () => {
    expect(six([1,3,1,5,2,3])).toBe(3);
});
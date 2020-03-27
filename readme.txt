Se incluyo la librería de lodash y nodemon para la prueba, se genero un servidor para poder probarlo desde NodeJs

1. Se van creando variables temporales de los indices, donde cada que la diferencia entre el indice 1 y el indice 2 es mayor
a la diferencia entre la distancia de los dos elementos anteriormente almacenados, entonces se reemplazan los nuevos indices,
de esta forma obteniendo la distancia más larga entre los números en el arreglo.

2. Se incrementa la variable en + 1, dando de tope del ciclo a la variable m, e iniciando el ciclo en la variable n.

3. Se implementa el método burbuja para ordenar el arreglo, y se busca la mayor posición del número de la variable k, una vez que el
arreglo se ha ordenado, regresa -1 en caso de no encontrar el número mandado en el método.

4. Se utiliza la herramienta de conjuntos en java SET, sabiendo que no se pueden repetir elementos dentro de un conjuinto, se regresa
del conunto a arreglo para no alterar la salida.

5. Se implementan dos pilas, una donde se le dan los paréntesis de inicio, y la otra tendra los finales, ejemplo pila1 = {, (
pila2 = ], }, se válida el inicio de la primera pila contra el final de la segunda, si los corchetes coinciden en uno del mismo
tipo, continuara el algoritmo, hasta llegar al último elemento de la pila, de lo contrario, regresara falso, con la primera falla
en que los paréntesis no coincidan de abertura y cierre.

6. El método recibe (Hora inicio, Hora Fin ...... etc) de tal forma en la que se compara la hora inicial contra la final, obteniendo
todas las combinaciones posibles de traslapes, El resultado se divide entre dos debido a las duplicación que se generan, 
es decir las coincidencias que se dan al comparar los horarios 2 veces, esto dado a qué el algoritmo está creado para todos 
los posibles casos y es igual a con b que b con a

7. Se implementa las pruebas unitarias en Jest, dandole npm test, se configura en el package.json de esta forma, para reconocer 
dicho comando, se agregan capturas de pantalla de la consola con todos los ejericios, y de las pruebas unitarias pasadas con éxito,
mismos ejemplos que se utilizaron para probar los métodos a la hora de realizarlos.
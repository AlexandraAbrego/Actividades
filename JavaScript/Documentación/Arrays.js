/*
    Arrays: Métodos 
*/

// Creación de un Array Original: 
Array = [2,4,6,8,10]


//MAP : Retorna los elementos del Array modificando sus valores en función
//de una especificación dada

//Ejemplo: Retornar el Array Original con los valores divididos a la mitad.
Array_Map = Array.map( element =>  element/2 )

//FILTER: Crea un nuevo arreglo que muestra aquellos valores que 
//cumplen con una condición establecida.

//Ejemplo: Mostrar los elementos del Array que sean mayores que 5
Array_Filter = Array.filter( element => element>5)

//ForEach: Itera el arreglo, retorna cada posición del arreglo junto con 
//el índice de cada elemento.

//Ejemplo: Mostrar cada elemento del Array y su índice individualmente
Array_forEach= Array.forEach((element,i)=>{console.log("Elemento: "+element+" índice: "+ i)})

//Find: Recorre el arreglo y regresa el primer valor que coincida con una condición
//establecida

//Ejemplo: Mostrar el primer elemento del Arreglo que sea mayor que 2
Array_find = Array.find(element=> element>2)

//Sort: Ordena todos los arreglos dado un orden específico.

//Ejemplo: Mostrar los elementos ordenados en forma Z-A
Array_sort = Array.find((a,b)=>a>b?1:-1)

//Some: Retornará True o False dependiendo de si por lo menos uno de los elementos
//del array original cumple con una condición establecida. 

//Ejemplo: Mostrar en pantalla si existe un elemento en el arreglo original mayor
// que 20

Array_some = Array.some(element=>element>20)

//Every: Retornará True o False dependiendo de si TODOS los elementos del arreglo
//cumplen con una condición específica

//Ejemplo: Determinar si todos los elementos del arreglo son valores positivos
Array_every = Array.every(element=>element>0)

//Concat: Unifica dos arreglos sin modificar ninguno de los dos .

//Ejemplo: Unifica el Array original con un array que incluya los valores 3,5,7,9
Array2=[3,5,7,9]
Array_concat = Array.concat(Array2)

//Includes: Determina con un valor booleando si dentro del arreglo original existe
//un valor específico

//Ejemplo: Determine si en el arreglo original existe el valor 50
Array_includes = Array.includes()


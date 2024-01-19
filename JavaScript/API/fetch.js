/*El método fetch solicitará en primer lugar el link de
la API con la cual se está trabajando, directamente la 
respuesta de este método será la información obtenida,
en este caso (y de manera común) se transporta a información
de tipo JSON y más tarde vemos un proceso para dividirla
en diversas variables, esto en función de qué es lo 
que se necesite obtener.
*/

//Método fetch
fetch("https://jsonplaceholder.typicode.com/users")
//Cambio a JSON
.then(response=>response.json())
.then(data=>{
   

    if(document.getElementById("ejemplo0") != null){
            objetivo=document.getElementById("ejemplo0").innerHTML=data[0].name
            console.log(data[0])
    }
})


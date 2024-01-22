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
    for(var i=0; i<5;i++){
       var  name="n_"+i
    

    if(document.getElementById(name) != null){
            objetivo=document.getElementById(name).innerHTML=data[i].name
            console.log(data[i].name)
    }
    }
})


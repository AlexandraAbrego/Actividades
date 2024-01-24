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
       var  user="u_"+i
       var email ="e_"+i
       var phone ="p_"+i
       var website="w_"+i
    

    if(document.getElementById(name) != null  && 
       document.getElementById(user) != null  &&
       document.getElementById(email) != null &&
       document.getElementById(phone) != null &&
       document.getElementById(website) != null ){
           
            objetivo=document.getElementById(name).innerHTML=data[i].name
            objetivo=document.getElementById(user).innerHTML=data[i].username
            objetivo=document.getElementById(email).innerHTML=data[i].email
            objetivo=document.getElementById(phone).innerHTML=data[i].phone
            objetivo=document.getElementById(website).innerHTML=data[i].website

        
    }
    }
})




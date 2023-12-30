
define(['knockout',"ojs/ojformlayout"],
 function(ko) {
    function AboutViewModel() {

    this.ArrayOriginal = [1,5,2,5,6,7,3,4,9,11,15,8]  
    //Mostrar los elementos del array divididos a la mitad
     this.map=this.ArrayOriginal.map(element=>element/2)
    //Mostrar los elementos del array mayores a 5
     this.filter=this.ArrayOriginal.filter(element=>element>5)
    //Mostrar a modo de lista cada elemento del arreglo con su índice
     this.foreach=this.ArrayOriginal.forEach((element,i)=>`elemento: ${element} índice: ${i}`  )
    //Mostrar el primer elemento menor a 5
     this.find= this.ArrayOriginal.find(element=>element<5)
    //Reordenar los elementos del arreglo de forma ascendente
     this.sort= this.ArrayOriginal.sort((a,b)=>a>b?1:-1)
    //Mostrar si dentro del arreglo existe un valor menor que 0
     this.some=this.ArrayOriginal.some(element=>element<0)
    //Mostrar si todos los valores del arreglo son positivos
     this.every=this.ArrayOriginal.every(element=>element>0)
    //Mostrar si en el arreglo existe el valor 16
     this.includes=this.ArrayOriginal.includes(element=>element==16)
    //Unir  el arreglo original con un arreglo de valores [a,b,c,d]
     arrayB= ["a","b","c","d"]
     this.concat=this.ArrayOriginal.concat(arrayB)
    //Unir el arreglo usando el símbolo #
     this.join=this.ArrayOriginal.join("#")
    //Mostrar la reducción del arreglo
     this.reduce=this.ArrayOriginal.reduce((a,b)=>a+b)
    //Mostrar el índice del valor 3 en el arreglo
     this.indexof=this.ArrayOriginal.indexOf(3)
    //Mostrar el índice del valor que sea mayor que 5 y menor que 8 en el arreglo
     this.findindex=this.ArrayOriginal.findIndex(element=>element>5 && element<8)
    //Rellenar de la posición 0 a 2 con el símbolo #
     this.fill=this.ArrayOriginal.fill()
     this.push=""
     this.pop=""
     this.shift=""
     this.unshift=""
     this.slice=""
     this.reverse=""
     this.lastindexof=""
     this.flat=""
     this.isarray=""
     this.from=""





      
      this.connected = () => {
        document.title = "Documentación";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    
    return AboutViewModel;
  }
);

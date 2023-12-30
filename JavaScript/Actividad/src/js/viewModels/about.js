
define(['knockout',"ojs/ojformlayout"],
 function(ko) {
    function AboutViewModel() {
     this.map=""
     this.filter=""
     this.foreach=""
     this.find=""
     this.sort=""
     this.some=""
     this.every=""
     this.includes=""
     this.concat=""
     this.join=""
     this.reduce=""
     this.indexof=""
     this.findindex=""
     this.fill=""
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

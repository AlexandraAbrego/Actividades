
define(["knockout","ojs/ojinputtext","ojs/ojformlayout"],
 function(ko) {
    function DashboardViewModel() {
      this.Array= [13,12,5,2,6,4,76,34,78,5,7,3,9,1]
      this.map=""
      this.filter=""
      this.find_=""
      this.sort=""
      this.some=""
      this.every=""
      this.concat=""
      this.includes=""
      this.join=""
      this.reduce=""
      this.indexOf=""
      this.fill=""
      this.push=""
      this.pop=""
      this.shift=""
      this.unshift=""
     
      this.connected = () => {
        document.title = "Actividad";
        // Implement further logic if needed
      };
    }

    
    return DashboardViewModel;
  }
);


define(["knockout","ojs/ojinputtext","ojs/ojformlayout"],
 function(ko) {
    function DashboardViewModel() {
      this.inputValue=ko.observable("hello world")
      this.Array= [1,2,3,4,5,6,7,8,9,10]
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

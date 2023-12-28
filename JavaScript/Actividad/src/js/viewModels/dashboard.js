/**
 * @license
 * Copyright (c) 2014, 2023, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
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
     
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);

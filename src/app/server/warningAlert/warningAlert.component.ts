import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warningAlert',
  templateUrl: './warningAlert.component.html',
  styleUrls: ['./warningAlert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() {
    var keyword: string;
   }

  ngOnInit() {
    let successCheck: boolean = null;
    let number: number = 6;
    function check(){
      if(number > 5){
        successCheck = true;
        alert("Success message")
      } else {
        successCheck = false;
        alert("Warning message")
      }
    }
    check();


  }

}

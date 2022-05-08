import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cardType = true;
  show = true ;
  names =  ["Ahmed", "Omar", "Mohammad"];
  data =" angular framework"
  firstName= ""
  cars = [ "Honda", "Lexus", "Corolla"];
  myCar = "Honda"
  constructor() { }

  ngOnInit(): void {
  }

}

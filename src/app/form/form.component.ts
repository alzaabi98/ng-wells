import { Component, OnInit } from '@angular/core';
//import { User } from '../models/Well' ;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  submitted = false;
  countries = ['eg', 'om']
  //user = new User('Abdulaziz', 'alzaabi98@gmial.com','male', 'om')
  constructor() { }

  ngOnInit(): void {
  }
  edit() {
    this.submitted = true
  }

}

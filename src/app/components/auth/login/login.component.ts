import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email : null,
    password : null
  }
  constructor() { }

  ngOnInit(): void {
  }
  performLogin() {
    console.log(this.form)
  }

}

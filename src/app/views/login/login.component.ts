import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/models/new-user';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new User()
  newUserModel = new NewUser()

  preencherLogin () {
    console.log(this.userModel)
  }

  preencherCadastro () {
    console.log(this.newUserModel)
  }

}

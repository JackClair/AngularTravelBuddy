import { Component, OnInit } from '@angular/core';
import { CreateUser } from 'src/app/CreateUser';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore: Object is possibly 'null'.
  userDO!: CreateUser = new CreateUser();
  constructor(private postRequest : LoginService) { 
  }
  loginUser()
  {
    this.userDO = this.postRequest.fetchUser(this.userDO);
    //Creating local storage for the user details to use in booking etc...
    localStorage.setItem('currentUser', JSON.stringify(this.userDO));
  }
  ngOnInit(): void {
  }

}

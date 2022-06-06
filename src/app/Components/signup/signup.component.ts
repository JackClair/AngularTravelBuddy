import { Component, OnInit } from '@angular/core';
import { CreateUserService } from 'src/app/service/create-user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // The inputs that has to taken from form hsa to be declared here
  Genders: string[] = ['Male', 'Female'];
  createUser = {
  firstName: "",
  lastName!: "",
  birthdayDate : "",
  gender!:  "",
  
  phoneNumber!: "",
  loginDO !: {
    email!: "",
    password!: "",
    confirmPassword!: ""
  },
  country!: ""
  }

  constructor(private postRequest : CreateUserService) { 

  }

  ngOnInit(): void {
  }

  getUserFormData()
  {
    
    if (this.validateForm())
    {
    this.postRequest.sendUserData(this.createUser);
    }
  }

  validateForm()
  {
    if (this.createUser.firstName == "" || this.createUser.lastName == "" || this.createUser.birthdayDate == "" || this.createUser.
    phoneNumber == "" || this.createUser.loginDO.email == "" || this.createUser.loginDO.password == "" || this.createUser.
    loginDO.confirmPassword == "" || this.createUser.country == "")
    {
      alert("Please fill in all the fields");
      return false;
    }
    else if (this.createUser.loginDO.password != this.createUser.loginDO.confirmPassword)
    {
      alert("Passwords do not match");
      return false;
    }
    else if (this.createUser.phoneNumber.length != 10)
    {
      alert("Please enter a valid phone number");
      return false;
    }
    else if (this.createUser.country == "")
    {
      alert("Please enter a valid country");
      return false;
    }
    else if(this.createUser.loginDO.email.indexOf('@') == -1)
    {
      alert("Please enter a valid email address");
      return false;
    }
    else if(this.createUser.loginDO.email.indexOf('.') == -1)
    {
      alert("Please enter a valid email address");
      return false;
    }
    else if (this.createUser.loginDO.password.length < 8)
    {
      alert("Password must be at least 8 characters long");
      return false;
    }
    else if (this.createUser.loginDO.password.indexOf(' ') != -1)
    {
      alert("Password must not contain spaces");
      return false;
    }
    else if (this.createUser.loginDO.password.indexOf('!') != -1)
    {
      alert("Password must not contain !");
      return false;
    }
    return true;
  }
}


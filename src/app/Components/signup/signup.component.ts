import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // The inputs that has to taken from form hsa to be declared here
  firstName!: string;
  lastName!: string;
  birthdayDate!: string;
  gender!:  string;
  Genders: string[] = ['Male', 'Female'];
  emailAddress!: string;
  phoneNumber!: Number;
  password!: string;
  confirmpassword!: string;
  country!: string;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    const createUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthdayDate: this.birthdayDate,
      gender: this.gender,
      emailAddress : this.emailAddress,
      phoneNumber : this.phoneNumber,
      password : this.password,
      country : this.country
    }
  }

}

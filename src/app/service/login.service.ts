import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUser } from '../CreateUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user : CreateUser = new CreateUser();
  private baseUrl:string = "http://localhost:8080";
  constructor(private http:HttpClient) {
  }

  fetchUser(userData: CreateUser) : CreateUser
  {
    console.log("Login service");
      this.http.post<CreateUser>(`${this.baseUrl}/login`, userData).subscribe((data: any) => {
      this.user = data;
      });
      console.log(this.user);
      return this.user;
    }
}

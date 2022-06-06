import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  private baseUrl:string = "http://localhost:8080";
  constructor(private http:HttpClient) {

  }
  sendUserData(userData : any){
    this.http.post(`${this.baseUrl}/createUser`,userData).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    );
    }
}

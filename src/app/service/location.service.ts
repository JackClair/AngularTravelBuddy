import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private baseUrl:string = "http://localhost:8080";
  constructor(private http:HttpClient) {
  }

  fetchLocation()
  {

      return this.http.get<Location[]>(`${this.baseUrl}/getLocations`);  
  }
}

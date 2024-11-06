import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl="http://localhost:3000"

  constructor(private http:HttpClient) { }

  addUserAPI(user:userModel){
    return this.http.post(`${this.baseUrl}/users`,user)
  }

  getUserAPI(){
    return this.http.get(`${this.baseUrl}/users`)
  }
}
